import React from 'react'
import './Output.css'

export default function Output({ data }) {
	console.log(data)
	return (
		<div>
			{data?.map(el => {
				return (
					<div className='card'>
						<img className='imgg' src={el.picture.medium} />
						<div>
							<div className='name'>
								<div> First name: {el.name.first}</div>
								<div className='lastName'> Lst name: {el.name.last}</div>
								<div> Title: {el.name.title}</div>
							</div>
							<h3>Gender: {el.gender}</h3>
							<h5>Email: {el.email}</h5>
							<h4>Phone: {el.phone}</h4>
						</div>
					</div>
				)
			})}
		</div>
	)
}
