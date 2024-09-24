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

export default function Home() {
	return (
		<div className="space-y-4 py-4 px-10">
			<div className="flex items-center justify-start gap-4 mb-10">
				<BalanceBadge />
				<IncomingBadge />
			</div>
			<h1 className="font-bold">Histórico de transações</h1>
			<div className="w-8/12">
				<TableTransactions />
			</div>

			<Drawer>
				<DrawerTrigger asChild>
					<Button className="bg-zinc-800 flex gap-2 rounded">
						<Trash size={16} /> Excluir histórico
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
