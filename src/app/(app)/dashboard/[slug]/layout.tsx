import { Header } from '@/components/header'

export default function OrgLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<div className="space-y-4 py-4 px-10">
				<Header />
			</div>

			<main className="mx-auto w-full px-10 py-4">{children}</main>
		</div>
	)
}
