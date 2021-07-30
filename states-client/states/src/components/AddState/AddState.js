import { useState } from "react";

import { useHistory } from "react-router";

import { Form, Button } from 'react-bootstrap';


const AddState = () => {

    const history = useHistory();

    const initialFormData = {
        'name': '',
        'date': null
    }

    const [formData, setFormData] = useState(initialFormData)

    const _handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // console.log(formData.date.length);
            if(formData.date) {
                setFormData((prevState) => {
                    return {...prevState, 'date': null}
                })
            }
            console.log(formData);
            const res = await fetch ('http://localhost:8000/states',{
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
					'Content-Type': 'application/json',
				},
            })
            if (res.status === 201) {
                history.push('/states')
            } else {
                const data = await res.json()
                console.log(data);
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
        <div className='w-25 p-3 center-div'>
			<h2>Add a state:</h2>
			<Form onSubmit={_handleSubmit}>
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
                        placeholder='year'
						autoFocus
						type='text'
						value={formData.date}
						onChange={_handleChange}
					/>
				</Form.Group>
				<Button variant='outline-primary' type='submit'>
					Add state
				</Button>
			</Form>
		</div>
    );
};

export default AddState;