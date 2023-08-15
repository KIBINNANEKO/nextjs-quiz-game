import RootLayout from '@/app/layout'
import styles from "./page.module.scss"

function Recipe({params}) {

	return (
		<>
			{params.agent}
		</>
	)
}

export default Recipe
