import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import ModalButton from '../Components/Buttons/ModalButton'
import '../css/modal.css'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    width: '700px',
    height: '500px',
    // borderRadius: '50px',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .9)',
    zIndex: 1000,
}

const Modal = ({ open, onClose }) => {
    if (!open) return null

    return ReactDom.createPortal(
        <div className="modal">
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <p className="modal-close-btn" onClick={onClose}>
                    X
                </p>

                <div className="modal-container">
                    <div className="modal-image-container">
                        <div>
                            <img
                                src="https://via.placeholder.com/350x500/000000.png"
                                alt="placeholder"
                                className="modal-image"
                            ></img>
                        </div>
                    </div>
                    <div className="modal-content-container">
                        <div className="modal-logo-container">
                            <Link to="domain.com">
                                <h1>Logo</h1>
                            </Link>
                        </div>
                        <div className="modal-main-container">
                            <div>
                                <p className="modal-sub-header">
                                    Tincidunt praesent semper feugiat nibh sed
                                    pulvinar.
                                </p>
                            </div>
                        </div>
                        <form className="modal-form">
                            <div className="modal-form-container">
                                <div className="modal-email">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                                        placeholder="Email Address"
                                        required
                                    ></input>
                                </div>
                            </div>
                        </form>
                        <ModalButton />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal

// import { Link } from 'react-router-dom'
// import ModalButton from './Buttons/ModalButton'
