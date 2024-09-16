'use client'

import { Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export function ThemeSwitcher() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Sun className="size-5 dark:invisible dark:size-0" />
					<Moon className="invisible size-0 dark:visible dark:size-5" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="border-zinc-700">
				<DropdownMenuItem className="gap-2" onClick={() => setTheme('light')}>
					<Sun className="size-5" /> Light
				</DropdownMenuItem>
				<DropdownMenuItem className="gap-2" onClick={() => setTheme('dark')}>
					<Moon className="size-5" /> Dark
				</DropdownMenuItem>
				<DropdownMenuItem className="gap-2" onClick={() => setTheme('system')}>
					<Settings className="size-5" />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
