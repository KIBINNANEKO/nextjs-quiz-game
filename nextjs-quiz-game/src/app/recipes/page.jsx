import Layout from '@/components/layout/layout'
import Link from 'next/link'

function Recipes() {
	const recipe = 'milk'
	return (
		<Layout title="Page about some Project">
			<Link href={`recipes/${recipe}`}>Рецепт {recipe}</Link>
		</Layout>
	)
}

export default Recipes
