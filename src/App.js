import { useEffect, useState } from 'react'
import './App.css'
import Output from './components/Output/Output'
import Search from './components/Search/Search'
import { API } from './config'

function App() {
	const [count, setCount] = useState()
	const [data, setData] = useState()

	const getRandomUser = async e => {
		e.preventDefault()
		const request = await fetch(API + count)
		const response = await request.json()
		setData(response.results)
	}

	return (
		<div>
			<Search count={count} setCount={setCount} getRandomUser={getRandomUser} />
			<Output data={data} />
		</div>
	)
}

export default App
