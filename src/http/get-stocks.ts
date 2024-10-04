export const getStocks = async () => {
	const res = await fetch(`https://serpapi.com/searches/1ce2c8f19c6e3410/66ff74fd9062f8b4fd679d0e.json`)

	const data = await res.json()

	return data
}
