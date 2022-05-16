import React, {useEffect, useState} from "react";
import styles from './style.module.less'
import CustomIcon from "../../config/iconConfig";

interface CheckBoxItem{
    name:string;
    value:any;
    checked:boolean;
    icon:string;
}
interface CheckboxGroupProps{
    value?: CheckBoxItem[];
    disabled?: boolean;
    onChange?: (value: object) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => {
    const { value, disabled, onChange } = props;
    const handleChange=(e,item)=>{
        item.checked=e.currentTarget.checked;
        onChange&&onChange(value)
    }
    return (
        <div className={styles.checkboxGroup}>
            {(value||[]).map((item,index)=>{
                return (
                    <label key={index} style={{width:100/value.length+"%"}}
                           className={item.checked?`${styles.buttonWrapper} ${styles.buttonWrapperChecked}`:`${styles.buttonWrapper}`}>
                        <span className={styles.checkboxButton}>
                            <input type="checkbox"
                                   className={styles.checkboxButtonInput}
                                   onClick={(e)=>handleChange(e,item)}
                                   value={item.value}/>
                        </span>
                        <span><CustomIcon type={item.icon} /></span>
                    </label>
                )
            })}
        </div>
    )
}
export default CheckboxGroup;
