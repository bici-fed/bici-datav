import React from "react";
import styles from './style.module.less';
import CustomIcon from "../../config/iconConfig";
var CheckboxGroup = function (props) {
    var value = props.value, disabled = props.disabled, onChange = props.onChange;
    var handleChange = function (e, item) {
        item.checked = e.currentTarget.checked;
        onChange && onChange(value);
    };
    return (<div className={styles.checkboxGroup}>
            {(value || []).map(function (item, index) {
            return (<label key={index} style={{ width: 100 / value.length + "%" }} className={item.checked ? "".concat(styles.buttonWrapper, " ").concat(styles.buttonWrapperChecked) : "".concat(styles.buttonWrapper)}>
                        <span className={styles.checkboxButton}>
                            <input type="checkbox" className={styles.checkboxButtonInput} onClick={function (e) { return handleChange(e, item); }} value={item.value}/>
                        </span>
                        <span><CustomIcon type={item.icon}/></span>
                    </label>);
        })}
        </div>);
};
export default CheckboxGroup;
//# sourceMappingURL=index.js.map