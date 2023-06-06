import React, {useState} from 'react';
import {Modal, Button, Image} from "react-bootstrap";
import "./SeatmapModal.css"
const SeatmapModal = ({ show, handleClose,seatMap }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            {/*<Modal.Body  className={"bg-dark d-flex justify-content-center text-white"}>*/}
                <Image className={"bg-dark img-fluid"} style={{height:"800px", border:"1px double black"}} src={seatMap}></Image>
            {/*</Modal.Body>*/}
            <Modal.Footer className={"bg-dark text-white d-flex justify-content-center"}>
                <Button className="text-success" variant="dark" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SeatmapModal;