import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {isMobile} from 'react-device-detect';


const CenteredModal = ({modalContent,onHide,show}) => {
    let size = isMobile?'sm':'lg';
    return (
        <Modal
            show={show}
            size={size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>{modalContent.title}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{modalContent.fullDescription}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        
    );
}

export default CenteredModal;
