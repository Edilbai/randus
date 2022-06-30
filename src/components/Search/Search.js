import React from 'react'

export default function Search({ count, setCount, getRandomUser }) {
	return (
		<div>
			<input
				type='text'
				placeholder='enter the count'
				value={count}
				onChange={e => {
					setCount(e.target.value)
				}}
			/>
			<button onClick={getRandomUser}>Search Random Users</button>
		</div>
	)
}
