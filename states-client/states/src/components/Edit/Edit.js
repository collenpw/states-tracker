import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Edit = ({state, id, setShowEdit}) => {

    const initialFormData = {
        name: state.name,
        date: state.date
    }

    const [formData, setFormData] = useState(initialFormData)

    const _handleEdit = async(e) => {
        e.preventDefault()
        setShowEdit(false)
        try{
            const res = await fetch (`http://localhost:8000/states/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',

                }
            })
            if(res.status === 200) {
                console.log('Edit complete');
            } else{
                console.log('Edit failed');
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    const _handleChange = (e) => {
        setFormData((prevState) => {
            return {...prevState, [e.target.id]: e.target.value}
        })
    }

    return (
        <Form onSubmit={_handleEdit}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						autoFocus
						type='text'
						value={formData.name}
						onChange={_handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='date'>
					<Form.Label>Date</Form.Label>
					<Form.Control
						autoFocus
						type='text'
						value={formData.date}
						onChange={_handleChange}
					/>
				</Form.Group>
				<Button variant='outline-primary' type='submit'>
					Edit state
				</Button>
			</Form>
    );
};

export default Edit;