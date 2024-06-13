import React from 'react';

export default function Dropdown({ name, options, setState }) {

    return (
        <select
            className="form-select form-select-lg"
            name={name}
            id={name}
            onChange={setState ? (e) => setState(e.target.value) : null}
        >
            {options.map((item, i) => (
                <option key={i} value={item.val}>
                    {item.write}
                </option>
            ))}
        </select>
    );
}