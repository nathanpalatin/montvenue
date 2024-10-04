'use client'
import { useState } from 'react'

import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { columns } from '../recommendations/components/columns'
import { Bazin } from '../recommendations/components/type'

const data: Bazin[] = [
	{
		ativo: 'B3SA3',
		cotacao: 11.6,
		evebit: 11.19,
		roic: 0.1783,
		liqtwomeses: 462157000.0,
		setor: 'Financeiro',
		subsetor: 'Serviços Financeiros Diversos',
		segmento: 'Agricultura',
		rankevebit: 142,
		rankroic: 127,
		magicformula: 269,
		is_prov: 'TRUE',
		dy: '6,29',
		divporano: '1,77',
		precojusto: '25,34001',
		precoatual: '24,82',
		sobresubvalorizacao: '-2,01268391690014',
		situacao: 'SUBVALORIZADO',
		bazin: '0,0248615804154993',
		rankingbazin: 1
	},
	{
		ativo: 'AGRO3',
		cotacao: 24.83,
		evebit: 17.77,
		roic: 0.0593,
		liqtwomeses: 462157000.0,
		setor: 'Financeiro',
		subsetor: 'Agropecuária',
		segmento: 'Agricultura',
		rankevebit: 142,
		rankroic: 127,
		magicformula: 269,
		is_prov: 'TRUE',
		dy: '6,29',
		divporano: '1,77',
		precojusto: '25,34001',
		precoatual: '24,82',
		sobresubvalorizacao: '-2,01268391690014',
		situacao: 'SUBVALORIZADO',
		bazin: '0,0248615804154993',
		rankingbazin: 1
	},
	{
		ativo: 'TRIS3',
		cotacao: 11.6,
		evebit: 11.19,
		roic: 0.1783,
		liqtwomeses: 462157000.0,
		setor: 'Financeiro',
		subsetor: 'Construção civil',
		segmento: 'Agricultura',
		rankevebit: 142,
		rankroic: 127,
		magicformula: 269,
		is_prov: 'TRUE',
		dy: '6,29',
		divporano: '1,77',
		precojusto: '25,34001',
		precoatual: '24,82',
		sobresubvalorizacao: '-2,01268391690014',
		situacao: 'SUBVALORIZADO',
		bazin: '0,0248615804154993',
		rankingbazin: 1
	}
]

export function TableStocks() {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection
		}
	})

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<Input
					placeholder="Pesquisar..."
					value={(table.getColumn('ativo')?.getFilterValue() as string) ?? ''}
					onChange={event => table.getColumn('ativo')?.setFilterValue(event.target.value)}
					className="max-w-sm rounded border-muted-foreground"
				/>
			</div>
			<div className="rounded border border-muted-foreground">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									Sem resultados.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredRowModel().rows.length} resultado(s)
				</div>
				<div className="space-x-2">
					<Button
						className="rounded"
						variant="outline"
						size="xs"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Anterior
					</Button>
					<Button
						variant="outline"
						className="rounded"
						size="xs"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Próximo
					</Button>
				</div>
			</div>
		</div>
	)
}
