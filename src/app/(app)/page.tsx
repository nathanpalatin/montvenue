import { BalanceBadge } from '@/components/balance-badge'
import { TableTransactions } from '@/components/table-transactions'

export default function Home() {
	return (
		<div className="space-y-4 py-4 px-10">
			<div className="flex items-center justify-start gap-4 mb-10">
				<BalanceBadge />
			</div>
			<h1 className="font-bold">Histórico de transações</h1>
			<div className="w-8/12">
				<TableTransactions />
			</div>
		</div>
	)
}
