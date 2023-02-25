import React from 'react';

const TabItem = (props) => {

    const {id, disabled} = props

    return (
        <li className="nav-item" role="presentation">
            <button className={`nav-link text-capitalize ${id === "home"? "active" : ""}`} id={`${id}-tab`} data-bs-toggle="tab"
                    data-bs-target={`#${id}-tab-pane`} type="button" role="tab" disabled={disabled}
                    aria-controls={`${id}-tab-pane`} aria-selected={id === "home"}>
                {id}
            </button>
        </li>
    )
}

export default TabItem;