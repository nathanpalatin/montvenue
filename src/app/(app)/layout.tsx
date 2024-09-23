import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | Montvenue - Finanças para a vida'
}
export default function AppLayout({
	children,
	sheet
}: Readonly<{
	children: React.ReactNode
	sheet: React.ReactNode
}>) {
	if (!isAuthenticated()) {
		redirect('/auth/sign-in')
	}

	return (
		<div>
			<div className="px-10 pt-6">
				<Header />
			</div>
			<>
				{children}
				{sheet}
			</>
			<Toaster />
		</div>
	)
}
