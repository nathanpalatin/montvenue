import Link from 'next/link'

import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

import { SearchHeader } from './search-header'
import { ProfileButton } from './profile-button'
import { NotificationsBadge } from './notifications-badge'

export function Header() {
	return (
		<div className="mx-auto flex items-center justify-between">
			<div className="flex items-center gap-4">
				<Link href="/create-organization">
					<h1 className="text-2xl font-semibold text-zinc-600">Dashboard</h1>
				</Link>
				<SearchHeader />
			</div>

			<div className="flex items-center gap-3">
				<ThemeSwitcher />
				<NotificationsBadge />
				<Separator orientation="vertical" className="h-9 bg-muted-foreground" />
				<ProfileButton />
			</div>
		</div>
	)
}
