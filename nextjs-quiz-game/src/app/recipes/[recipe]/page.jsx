import Layout from '@/components/layout/layout'

function Recipe({params}) {

	return (
		<Layout>
			{params.recipe}
		</Layout>
	)
}

export default Recipe
