import React from "react";



const Select = ( {name, options, selectChange}) => {
    return(
        <select name={name} onChange={selectChange}>
            {options.map(op => {
                return <option key={op.value} value={op.value}> { op.text } </option>
            })}
        </select>
    )
}

export default Select