'use client'

import { useState } from 'react'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function SidebarToggle() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<>
			<div
				className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-zinc-200 overflow-hidden`}
			>
				<div className="flex flex-col mt-10 min-h-screen p-4 text-white">
					<Image
						alt="logo sidebar"
						width={140}
						className="self-center"
						height={70}
						src={require('@/assets/logo-sidebar.png')}
					/>
					<nav>
						<ul>
							<li>
								<a href="#">Inicial</a>
							</li>
							<li>
								<a href="#">Análises e recomendações</a>
							</li>
							<li>
								<a href="#">Minhas finanças</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<button
				onClick={toggleSidebar}
				className={`fixed top-6 ${
					isSidebarOpen ? 'left-60 rotate-180' : '-left-4'
				} z-50 p-2 bg-muted-foreground transition-all duration-300 text-white rounded-full`}
			>
				<ChevronRight />
			</button>
		</>
	)
}
