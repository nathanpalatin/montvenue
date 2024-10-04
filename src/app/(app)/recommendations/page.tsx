import { TableStocks } from '../components/tablestock'

export default function Home() {
	return (
		<div className="space-y-4 py-4 px-10">
			<h1 className="text-4xl font-semibold">Recomendações</h1>
			<div className="w-[100%] overflow overflow-y-auto">
				<TableStocks />
			</div>
		</div>
	)
}
