export var KeyType;
(function (KeyType) {
    KeyType[KeyType["Any"] = -1] = "Any";
    KeyType[KeyType["CtrlOrAlt"] = 0] = "CtrlOrAlt";
    KeyType[KeyType["Ctrl"] = 1] = "Ctrl";
    KeyType[KeyType["Shift"] = 2] = "Shift";
    KeyType[KeyType["Alt"] = 3] = "Alt";
})(KeyType || (KeyType = {}));
export var KeydownType;
(function (KeydownType) {
    KeydownType[KeydownType["None"] = -1] = "None";
    KeydownType[KeydownType["Document"] = 0] = "Document";
    KeydownType[KeydownType["Canvas"] = 1] = "Canvas";
})(KeydownType || (KeydownType = {}));
export var DefalutOptions = {
    cacheLen: 30,
    refresh: 30,
    font: {
        color: '#222222',
        fontFamily: '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
        fontSize: 12,
        lineHeight: 1.5,
        textAlign: 'center',
        textBaseline: 'middle',
    },
    color: '#222222',
    activeColor: '#1890ff',
    hoverColor: '#fa541c',
    anchorRadius: 4,
    anchorFillStyle: '#fff',
    dockStrokeStyle: '#fa541c',
    dockFillStyle: '#fa541c',
    dragColor: '#1890ff',
    rotateCursor: '/assets/img/rotate.cur',
    hoverCursor: 'pointer',
    minScale: 0.25,
    maxScale: 5,
    anchorSize: 5,
    autoExpandDistance: 200,
    keydown: KeydownType.Document,
    viewPadding: 0,
    autoAnchor: true,
    gridSize: 10,
    gridColor: '#f3f3f3',
    ruleColor: '#888888',
};
//# sourceMappingURL=options.js.map