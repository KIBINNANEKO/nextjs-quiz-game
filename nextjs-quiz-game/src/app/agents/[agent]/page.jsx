import Layout from '@/components/layout/layout'
import styles from "./page.module.scss"

function Recipe({params}) {

	return (
		<Layout>
			{params.agent}
		</Layout>
	)
}

export default Recipe
