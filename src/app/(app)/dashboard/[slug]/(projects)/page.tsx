import { Plus } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ProjectList } from './project-list'

export default async function Projects() {
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Projects</h1>

				<Button size="sm" asChild>
					<Link href={`/org/org/create-project`}>
						<Plus className="mr-2 size-4" />
						Create project
					</Link>
				</Button>
			</div>

			<ProjectList />
		</div>
	)
}
