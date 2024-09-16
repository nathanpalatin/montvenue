'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'

export function Balance() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 1200)
	}, [])

	if (loading) {
		return <Skeleton className="w-[180px] h-8 rounded-full bg-zinc-600 " />
	}

	return (
		<div className="flex gap-3">
			<h1 className="text-xl text-zinc-600 font-light">/</h1>
			<h1 className="text-xl font-semibold">R$ 21.495,10</h1>
		</div>
	)
}
