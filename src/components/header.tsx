import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'
import { Balance } from './balance'
import Link from 'next/link'

export async function Header() {
	return (
		<div className="mx-auto flex items-center justify-between">
			<div className="flex items-center gap-3">
				<Link href="/create-organization">
					<h1 className="text-2xl font-semibold text-zinc-600">montvenue</h1>
				</Link>
				<Balance />
			</div>

			<div className="flex items-center gap-4">
				<ThemeSwitcher />
				<Separator orientation="vertical" className="h-8 bg-muted-foreground" />
				<ProfileButton />
			</div>
		</div>
	)
}
