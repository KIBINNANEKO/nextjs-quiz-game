import RootLayout from '@/app/layout'
import Link from 'next/link'

function Recipes() {
	const agent = 'Gekko'
	return (
		<>
			<Link href={`agents/${agent}`}>{agent}</Link>
		</>
	)
}

export default Recipes
