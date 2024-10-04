import { BalanceBadge } from '@/components/balance-badge'
import { IncomingBadge } from '@/components/incoming-badge'
import { TableTransactions } from '@/components/table-transactions'
import { Button } from '@/components/ui/button'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'

import { Trash } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
	return (
		<div className="space-y-4 py-4 px-10">
			<div className="flex items-start justify-start gap-4 mb-10 w-full">
				<div className="flex gap-4 w-8/12">
					<BalanceBadge />
					<IncomingBadge />
				</div>
				<div className="w-4/12">
					<div className="border rounded-xl bg-zinc-900 border-zinc-800 h-72 shadow-lg">
						<div className="flex items-center p-2 justify-between">
							<Image
								alt=""
								width={100}
								height={80}
								priority
								className="object-cover"
								src={require('@/assets/cards/mastercard/black.png')}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-start justify-between gap-10 w-full">
				<div className="w-8/12">
					<h1 className="font-bold">Histórico de transações</h1>

					<TableTransactions />
				</div>
				<div className="w-4/12 gap-4 flex flex-col">
					<div className="border rounded-xl bg-zinc-900 border-zinc-800 h-72 shadow-lg"></div>
					<div className="border rounded-xl bg-zinc-900 border-zinc-800 h-72 shadow-lg"></div>
				</div>
			</div>
			<Drawer>
				<DrawerTrigger asChild>
					<Button className="bg-zinc-800 flex gap-2 rounded">
						<Trash size={16} /> Opções
					</Button>
				</DrawerTrigger>
				<DrawerContent className="h-[300px] backdrop-blur-sm">
					<div className="mx-auto h-2 w-[100px] rounded-full bg-zinc-500" />
					<DrawerHeader>
						<DrawerTitle className="text-center text-3xl">Você tem certeza disso?</DrawerTitle>

						<DrawerDescription className="text-center">Essa ação não poderá ser desfeita.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose className="text-muted-foreground">fechar</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
