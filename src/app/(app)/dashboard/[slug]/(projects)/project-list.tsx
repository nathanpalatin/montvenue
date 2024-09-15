import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

dayjs.extend(relativeTime)

export async function ProjectList() {
	return (
		<div className="grid grid-cols-3 gap-4">
			<Card className="flex flex-col justify-between">
				<CardHeader>
					<CardTitle className="text-xl font-medium">Montvenue</CardTitle>
					<CardDescription className="line-clamp-2 leading-relaxed">nathanpalatin</CardDescription>
				</CardHeader>
				<CardFooter className="flex items-center gap-1.5">
					<Avatar className="size-4">
						<AvatarImage src={'https://github.com/rocketseat.png'} />
						<AvatarFallback />
					</Avatar>

					<span className="truncate text-xs text-muted-foreground">
						<span className="font-medium text-foreground">created</span> {dayjs('2024-09-15T09:46 ').fromNow()}
					</span>

					<Button size="xs" variant="outline" className="ml-auto">
						View <ArrowRight className="ml-2 size-3" />
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
