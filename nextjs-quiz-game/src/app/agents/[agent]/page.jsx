import Layout from '@/components/layout/layout'
import styles from "./page.module.scss"


function Agent({props}) {

	const agent = useParams()

	return (
		<Layout>
			{props.agent}
		</Layout>
	)
}

export default Agent
