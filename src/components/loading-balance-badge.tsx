import { BadgeDollarSignIcon } from 'lucide-react'
import { Skeleton } from './ui/skeleton'

export function LoadingBalanceBadge() {
	return (
		<Skeleton className="space-y-2 bg-zinc-900 rounded-xl px-10 py-4">
			<BadgeDollarSignIcon />
			<Skeleton className="w-72 h-9 bg-zinc-400 rounded" />
			<h1 className="text-xl text-zinc-500 font-semibold">Saldo na conta</h1>
		</Skeleton>
	)
}
