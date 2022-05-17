import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Button, Menu, Popover, Tag, Space, Tooltip } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import CustomIcon from '../config/iconConfig';
import styles from './index.module.less';
import { replacer } from '../utils/serializing';
var headTools = [
    {
        key: 'cut',
        name: '剪切',
        icon: 'iconjianqie',
        title: 'Ctrl+X',
    },
    {
        key: 'copy',
        name: '复制',
        icon: 'iconfuzhi',
        title: 'Ctrl+C',
    },
    {
        key: 'paste',
        name: '粘贴',
        icon: 'iconniantie',
        title: 'Ctrl+V',
    },
    null,
    {
        key: 'undo',
        name: '撤销',
        icon: 'iconchexiao',
        title: 'Ctrl+Z',
    },
    {
        key: 'redo',
        name: '恢复',
        icon: 'iconhuifu',
        title: 'Ctrl+Y',
    },
    null,
    {
        key: 'bottom',
        name: '置于底层',
        icon: 'iconzhiyudiceng',
        title: 'Ctrl+Alt+[',
    },
    {
        key: 'down',
        name: '后置一层',
        icon: 'iconhouzhiyiceng',
        title: 'Ctrl+[',
    },
    {
        key: 'up',
        name: '前置一层',
        icon: 'iconqianzhiyiceng',
        title: 'Ctrl+]',
    },
    {
        key: 'top',
        name: '置于顶层',
        icon: 'iconzhiyudingceng',
        title: 'Ctrl+Alt+]',
    },
    null,
    {
        key: 'combo',
        name: '编组',
        icon: 'iconbianzu1',
        title: 'Ctrl+G',
    },
    {
        key: 'unCombo',
        name: '解组',
        icon: 'iconjiechubianzu1',
        title: 'Ctrl+U',
    },
];
var ButtonGroup = Button.Group;
var Header = React.forwardRef(function (props, ref) {
    var canvas = props.canvas, scaleVal = props.scaleVal, history = props.history, rootRef = props.rootRef, isSave = props.isSave, setIsSave = props.setIsSave, onScaleCanvas = props.onScaleCanvas;
    var _a = useState(1), scaleNumber = _a[0], setScaleNumber = _a[1]; // 缩放的基数
    var _b = useState(false), scaleVisible = _b[0], setScaleVisible = _b[1]; // 缩放Popover的可见
    var _c = useFullscreen(rootRef), isFullscreen = _c[0], toggleFull = _c[1].toggleFull;
    useEffect(function () {
        if (scaleVal && scaleNumber === undefined) {
            setScaleNumber(Math.round(scaleVal * 10) / 10);
        }
        if (scaleVal &&
            scaleNumber &&
            Math.round(scaleVal * 10) / 10 !== scaleNumber) {
            setScaleNumber(Math.round(scaleVal * 10) / 10);
            setIsSave(false);
        }
    }, [scaleVal]);
    // 对父组件暴露保存数据的接口
    useImperativeHandle(ref, function () { return ({
        save: function () {
            handleSave();
        },
    }); }, [isSave]);
    // 设置每五分钟保存一次数据
    useEffect(function () {
        var timer = setTimeout(function () {
            handleSave();
        }, 1000 * 60 * (props.autoSaveInterval || 5));
        return function () {
            clearTimeout(timer);
        };
    }, [isSave]);
    var handleSave = function () {
        if (!isSave) {
            setIsSave(true);
            // FileSaver.saveAs(
            //   new Blob([JSON.stringify(canvas.data)], {
            //     type: 'text/plain;charset=utf-8',
            //   }),
            //   `le5le.topology.json`
            // );JSON.stringify(option,replacer)
            var saveData = new Blob([JSON.stringify(canvas.data, replacer)], {
                type: 'text/plain;charset=utf-8',
            });
            // const screenshot = base64ToFile(canvas.toImage());
            // canvas.saveAsImage();
            saveData.text().then(function (r) {
                var json = JSON.parse(r);
                // json.screenshot = screenshot;
                props.onEditorSaveCb && props.onEditorSaveCb(json);
            });
        }
        else {
            // message.warn('数据已经保存！');
        }
    };
    // 处理退出按钮
    var handleExitEditor = function () {
        props.onPoweroff && props.onPoweroff();
        closeStream();
    };
    var closeStream = function () {
        // 推出之后关闭视频流
        var videoNodes = [];
        var getVideoNodes = function (nodes) {
            (nodes || []).map(function (n) {
                if (n.name === 'combine') {
                    getVideoNodes(n.children);
                }
                else if (n.name === 'QTLiveVideo' || n.name === 'liveVideo') {
                    videoNodes.push(n);
                }
            });
        };
        getVideoNodes(canvas.data.pens);
        // 发送关闭流事件
        canvas.dispatch('deleteNode', videoNodes);
    };
    var handleHeaderClick = function (key) {
        var pens = canvas.activeLayer.pens;
        switch (key) {
            case 'cut':
                canvas.cut();
                break;
            case 'copy':
                canvas.copy();
                break;
            case 'paste':
                canvas.paste();
                break;
            case 'undo':
                canvas.undo();
                break;
            case 'redo':
                canvas.redo();
                break;
            case 'combo':
                canvas.combine(pens);
                break;
            case 'unCombo':
                pens
                    .filter(function (pen) { return pen.name === 'combine'; })
                    .forEach(function (pen) { return canvas.uncombine(pen); });
                break;
            case 'bottom':
                pens.forEach(function (pen) { return canvas.bottom(pen); });
                canvas.updateProps(true);
                break;
            case 'top':
                pens.forEach(function (pen) { return canvas.top(pen); });
                canvas.updateProps(true);
                break;
            case 'up':
                pens.forEach(function (pen) { return canvas.up(pen); });
                canvas.updateProps(true);
                break;
            case 'down':
                pens.forEach(function (pen) { return canvas.down(pen); });
                canvas.updateProps(true);
                break;
            default:
                break;
        }
        setIsSave(false);
    };
    /**
     * 放大画布
     */
    var scaleZoomOut = function () {
        if (scaleNumber < 3) {
            setScaleNumber(scaleNumber + 0.1);
            canvas.scaleTo(scaleNumber + 0.1);
            onScaleCanvas && onScaleCanvas(scaleNumber + 0.1);
            props.setIsSave(false);
        }
    };
    /**
     * 缩小画布
     */
    var scaleZoomIn = function () {
        if (scaleNumber > 0.3) {
            setScaleNumber(scaleNumber - 0.1);
            canvas.scaleTo(scaleNumber - 0.1);
            onScaleCanvas && onScaleCanvas(scaleNumber - 0.1);
            props.setIsSave(false);
        }
    };
    /**
     * 点击选择缩放菜单后隐藏
     */
    var handleScalePopClick = function (visible) {
        setScaleVisible(visible);
    };
    /**
     * 处理选择缩放菜单数据
     */
    var handleSelectScaleMenu = function (data) {
        setScaleNumber(parseInt(data.key) / 100);
        canvas.scaleTo(parseInt(data.key) / 100);
        onScaleCanvas && onScaleCanvas(parseInt(data.key) / 100);
        setScaleVisible(false);
        props.setIsSave(false);
    };
    var handleLocked = function () {
        canvas.lock(0);
    };
    /**
     * 预览
     */
    var handlePreview = function () {
        if (!isSave) {
            handleSave();
        }
        closeStream();
        if (props.onPreview && typeof props.onPreview == 'function') {
            props.onPreview({});
        }
        else {
            var reader_1 = new FileReader();
            var result = new Blob([JSON.stringify(canvas.data)], {
                type: 'text/plain;charset=utf-8',
            });
            reader_1.readAsText(result, 'text/plain;charset=utf-8');
            reader_1.onload = function (e) {
                history.push({
                    pathname: '/preview',
                    state: { data: JSON.parse(reader_1.result) },
                });
            };
        }
    };
    /**
     * 点击额外配置
     */
    var handleExtraSetting = function () {
        var onExtraSetting = props.onExtraSetting;
        onExtraSetting && onExtraSetting();
        setIsSave(false);
    };
    /**
     * 缩放比例菜单
     */
    var scaleMenu = (<Menu onClick={function (data) { return handleSelectScaleMenu(data); }} style={{ border: 0 }}>
        <Menu.Item key="50">50%</Menu.Item>
        <Menu.Item key="100">100%</Menu.Item>
        <Menu.Item key="150">150%</Menu.Item>
        <Menu.Item key="200">200%</Menu.Item>
        {/* <Menu.Divider />
      <Menu.Item key="adaptive">适应屏幕</Menu.Item> */}
      </Menu>);
    return (<div className={styles.toolsHeader}>
        <a className={styles.toolItem} onClick={handleExitEditor}>
          <CustomIcon type="icontuichu"/>
          <span>退出</span>
        </a>
          <span className={styles.toolSplit}></span>
        {/* <a className={styles.toolItem}>
        <CustomIcon type="icon-lianxian_icon" />
        <span>连线</span>
      </a> */}
        {headTools.map(function (item, index) { return (item ? <Tooltip placement="bottom" title={item.title} key={item.key} getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
            <a className={styles.toolItem} onClick={function () { return handleHeaderClick(item.key); }}>
              <CustomIcon type={item.icon} style={{ width: 18, height: 18 }}/>
              <span>{item.name}</span>
            </a>
          </Tooltip> : <span className={styles.toolSplit} key={index}></span>); })}
        <span className={styles.toolSplit}></span>
        <a style={{
            display: 'inline-block',
            marginTop: 5,
            background: '#F0F0F0',
            borderRadius: '4px',
            height: 36,
            lineHeight: '36px',
        }}>
          <Button size="small" shape="circle" icon={<MinusOutlined style={{ color: '#666666' }}/>} onClick={function () { return scaleZoomIn(); }}/>
          <Popover content={scaleMenu} trigger="click" visible={scaleVisible} onVisibleChange={handleScalePopClick}>
            <span style={{
            margin: '0 12px',
            width: '4ch',
            // display: 'inline-block',
        }}>
              {scaleNumber && Math.round(scaleNumber * 100)}%
            </span>
          </Popover>
          <Button size="small" shape="circle" icon={<PlusOutlined style={{ color: '#666666' }}/>} onClick={function () { return scaleZoomOut(); }}/>
        </a>
        <a className={styles.toolItem} style={{ margin: '0 30px' }} onClick={toggleFull}>
          <CustomIcon type="iconquanping1"/>
          <span>{isFullscreen ? '退出全屏' : '全屏'}</span>
        </a>
        <a style={{ lineHeight: '48px', margin: '0 30px 60px' }} onClick={handleExtraSetting}>
          <CustomIcon type="iconpeizhikanban"/>
          <span style={{ marginLeft: 5 }}>配置看板</span>
        </a>

        <Tag color="#F0DCCE" visible={!isSave} style={{
            color: '#FA6400',
            height: '28px',
            padding: '3px 10px',
            marginTop: '10px',
        }}>
          修改未保存
        </Tag>

        <ButtonGroup style={{ flex: 1, flexDirection: 'row-reverse', right: 20 }}>
          <Space size="large">
            {/* <Button onClick={handleLocked}>锁定</Button> */}
            <Button onClick={handlePreview}>预览</Button>
            <Button type="primary" onClick={handleSave}>
              保存
            </Button>
          </Space>
        </ButtonGroup>
      </div>);
});
export default Header;
//# sourceMappingURL=index.js.map