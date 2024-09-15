import { Slash } from 'lucide-react'

import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
	return (
		<div className="mx-auto flex max-w-[1200px] items-center justify-between">
			<div className="flex items-center gap-3">
				<Slash className="size-3 -rotate-[24deg] text-border" />
			</div>

			<div className="flex items-center gap-4">
				<ThemeSwitcher />
				<Separator orientation="vertical" className="h-5" />
				<ProfileButton />
			</div>
		</div>
	)
}
