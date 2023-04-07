import React, { useState } from 'react'

const Edit = (props) => {
	const emptytravel = { job: '', footage: '' }
	const [travel, setTravel] = useState(props.travel)

	const handleChange = (event) => {
		setTravel({
			...travel,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleUpdate(travel)
	}

	return (
		<>
			<details>
				<summary className="editJob" >Edit Travel Info</summary> <br/>
				<form onSubmit={handleSubmit} className ="editForm"> <br/>
					<label htmlFor='location'>Location: </label> <br/>
					<input
						type='text'
						name='location'
						value={travel.location}
						onChange={handleChange}
                        className='formControl'
					/>
					<br />
					<label htmlFor='type'>Type: </label>
					<input
						type='text'
						name='type'
						value={travel.type}
						onChange={handleChange}
                        className='formControl'
					/>
					<br/>
                    <label htmlFor='date'>Date: </label>
					<input
						type='text'
						name='date'
						value={travel.date}
						onChange={handleChange}
                        className='formControl'
					/>
					<br/>
                    <label htmlFor='address'>Address: </label>
					<input
						type='text'
						name='address'
						value={travel.address}
						onChange={handleChange}
                        className='formControl'
					/>
					<br/>
                    <label htmlFor='contact'>Contact: </label>
					<input
						type='text'
						name='contact'
						value={travel.contact}
						onChange={handleChange}
                        className='formControl'
					/>
					<br/>
					<input type='submit' className="editBtn"/>
                    <br/>
				</form>
			</details>
		</>
	)
}

export default Edit