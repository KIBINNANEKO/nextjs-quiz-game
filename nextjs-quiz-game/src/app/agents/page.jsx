import Layout from '@/components/layout/layout'
import Link from 'next/link'

function Recipes() {
	const agent = 'Gekko'
	return (
		<Layout title="Page about some Project">
			<Link href={`agents/${agent}`}>{agent}</Link>
		</Layout>
	)
}

export default Recipes
