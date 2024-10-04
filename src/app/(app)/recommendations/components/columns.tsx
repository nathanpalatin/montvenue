import { ColumnDef } from '@tanstack/react-table'
import { Bazin } from './type'

export const columns: ColumnDef<Bazin>[] = [
	{
		accessorKey: 'ativo',
		header: 'Ativo',
		cell: ({ row }) => <div className="capitalize">{row.getValue('ativo')}</div>
	},
	{
		accessorKey: 'cotacao',
		header: 'Cotação',
		cell: ({ row }) => <div className="capitalize">{row.getValue('cotacao')}</div>
	},

	{
		accessorKey: 'evebit',
		header: 'EV/EBIT',
		cell: ({ row }) => <div className="capitalize">{row.getValue('evebit')}</div>
	},
	{
		accessorKey: 'roic',
		header: () => <div className="text-center">ROIC</div>,
		cell: ({ row }) => <div className="capitalize">{row.getValue('roic')}</div>
	},
	{
		accessorKey: 'liqtwomeses',
		header: () => <div className="text-center">Liq.2meses</div>,
		cell: ({ row }) => <div className="capitalize">{row.getValue('liqtwomeses')}</div>
	},
	{
		accessorKey: 'setor',
		header: () => <div className="text-center">Setor</div>,
		cell: ({ row }) => <div className="capitalize">{row.getValue('setor')}</div>
	},
	{
		accessorKey: 'subsetor',
		header: () => <div className="text-center">Subsetor</div>,
		cell: ({ row }) => <div className="capitalize w-[200px]">{row.getValue('subsetor')}</div>
	},
	{
		accessorKey: 'segmento',
		header: () => <div className="text-center">Segmento</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('segmento')}</div>
	},
	{
		accessorKey: 'rankevebit',
		header: () => <div className="text-center">Rank EV/EBIT</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('rankevebit')}</div>
	},
	{
		accessorKey: 'rankroic',
		header: () => <div className="text-center">Rank ROIC</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('rankroic')}</div>
	},
	{
		accessorKey: 'magicformula',
		header: () => <div className="text-center">Magic Formula</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('magicformula')}</div>
	},
	{
		accessorKey: 'is_prov',
		header: () => <div className="text-center">Is_Prov</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('is_prov')}</div>
	},
	{
		accessorKey: 'dy',
		header: () => <div className="text-center">DY (% - 6a)</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('dy')}</div>
	},
	{
		accessorKey: 'divporano',
		header: () => <div className="text-center">Dividendo por ano</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('divporano')}</div>
	},
	{
		accessorKey: 'precojusto',
		header: () => <div className="text-center">Preço Justo (R$)</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('precojusto')}</div>
	},
	{
		accessorKey: 'precoatual',
		header: () => <div className="text-center">Preço Atual (R$)</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('precoatual')}</div>
	},
	{
		accessorKey: 'sobresubvalorizacao',
		header: () => <div className="text-center">Sobre/Subvalorização</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('sobresubvalorizacao')}</div>
	},
	{
		accessorKey: 'bazin',
		header: () => <div className="text-center">Bazin/Doug</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('bazin')}</div>
	},
	{
		accessorKey: 'rankingbazin',
		header: () => <div className="text-center">Ranking Bazin/Doug</div>,
		cell: ({ row }) => <div className="capitalize text-center">{row.getValue('rankingbazin')}</div>
	}
]
