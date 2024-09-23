import { Skeleton } from '@/components/ui/skeleton'
import { BadgeDollarSignIcon } from 'lucide-react'

export default function Loading() {
	return (
		<Skeleton className="space-y-2 bg-zinc-900 rounded-xl px-10 py-4">
			<BadgeDollarSignIcon />
			<Skeleton className="w-40 h-14 bg-zinc-400 rounded" />
			<h1 className="text-xl text-zinc-500 font-semibold">Balance</h1>
		</Skeleton>
	)
}
