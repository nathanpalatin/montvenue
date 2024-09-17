import { auth } from '@/auth/auth'

export default async function Home() {
	const session = await auth()

	return (
		<div className="space-y-4 py-4 px-10">
			<h1>{session.user.name}</h1>
		</div>
	)
}
