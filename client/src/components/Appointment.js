import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../screens/bookingpage.css'

function Appointment({ appointment }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='appointment-wrapper'>
            <div className='appointment-box'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={appointment.imageurls[0]} alt="appointment design" />
                    </div>
                    <div className='col-md-7'>
                        <p>{appointment.currentbookings}</p>
                    </div>
                    <div style={{ float: 'right' }}>
                        <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{appointment.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{appointment.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Book
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Appointment
