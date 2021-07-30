import { useState } from "react";

import { Modal, Button, ListGroup } from "react-bootstrap";

import Edit from "../Edit/Edit";

const State = ({state, i, getStates}) => {

    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)


    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleShowEdit = () => {
        setShowEdit(true);
        setShow(false);
    }
    const handleCloseEdit = () => setShowEdit(false);

    const handleDelete = async() => {
        setShow(false)
        console.log('hi delete');
        if (window.confirm('Are you sure you want to delete?')) {
            try{
                const res = await fetch (`http://localhost:8000/states/${state.id}`, {method: 'DELETE'})
                if(res.status === 204) {
                    getStates()
                }
                

            }
            catch(err) {
                console.log(err);
            }
        
        }
    }

    let visitText = '';

    if (state.date) {
        visitText=`You visited ${state.name} in ${state.date}`
    }

    return (
        <>
        <Modal show={show} onHide={handleClose} size="sm">
            <Modal.Header closeButton>
                <Modal.Title>{state.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {visitText}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleShowEdit}>Edit </Button>
                <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit} size="sm">
            <Modal.Header closeButton>
            <Modal.Title>{state.name}</Modal.Title>
            </Modal.Header>
                    <Edit setShowEdit={setShowEdit} id={state.id} state={state}></Edit>
            
            <Modal.Footer>
          
            </Modal.Footer>
        </Modal>

        <ListGroup.Item onClick={handleShow}>{state.name}</ListGroup.Item>           
        </>
    );
};

export default State;