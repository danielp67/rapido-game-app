import React from 'react';
import {ThemeContext} from "../Context/ThemeContext";

const Modal = ({id, children}) => {

    return (

            <ThemeContext.Consumer>
                {({theme}) => (
            <div className="modal fade" id={id} aria-hidden="true"
                 data-bs-backdrop="static" data-bs-keyboard="false"
                 aria-labelledby={id} tabIndex="-1" style={{display: "none"}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${theme.className}`}>
                        {children}
                    </div>
                </div>
            </div>
                )}
            </ThemeContext.Consumer>

    )
}

export default Modal;