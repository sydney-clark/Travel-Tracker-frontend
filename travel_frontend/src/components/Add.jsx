import React, { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form"

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
	const [construction, setConstruction] = useState({ ...props.Construction })
	//  create functions
	const handleChange = (event) => {
		setConstruction({
			...construction,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleCreate(construction)
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<Form.Label htmlFor='job' className='name'>Location: </Form.Label> <br />
				<input
					type='text'
					name='location'
					value={construction.job}
					onChange={handleChange}
					className='formControl'
				/>
				<br />
				<Form.Label htmlFor='job' className='name'>Type: </Form.Label> <br />
				<input
					type='text'
					name='type'
					value={construction.job}
					onChange={handleChange}
					className='formControl'
                    placeholder='hotel, atrraction, restraunt etc...'
				/>
				<br />
                <Form.Label htmlFor='job' className='name'>Date: </Form.Label> <br />
				<input
					type='text'
					name='date'
					value={construction.job}
					onChange={handleChange}
					className='formControl'
                    placeholder='xx/xx/xxxx'
				/>
				<br />
                <Form.Label htmlFor='job' className='name'>Address: </Form.Label> <br />
				<input
					type='text'
					name='address'
					value={construction.job}
					onChange={handleChange}
					className='formControl'
				/>
				<br />
                <Form.Label htmlFor='job' className='name'>Contact: </Form.Label> <br />
				<input
					type='text'
					name='contact'
					value={construction.job}
					onChange={handleChange}
					className='formControl'
                    placeholder='name, number etc..'
				/>
				<br />
				<input type='submit' className="submitBtn" />
			</form>
		</>
	)
}

export default Add