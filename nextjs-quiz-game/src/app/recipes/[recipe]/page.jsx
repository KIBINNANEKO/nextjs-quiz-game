import Layout from '@/components/layout/layout'
import styles from "./page.module.scss"

function Recipe({params}) {

	return (
		<Layout>
			{params.recipe}
		</Layout>
	)
}

export default Recipe
