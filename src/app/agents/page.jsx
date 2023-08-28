'use client'

import Link from 'next/link';
import agents from '@/mobx/agents';
import { fetchAllAgents } from '@/services/agents';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useLanguage } from '@/context/language';
import styles from './page.module.scss';

const Agents = () => {
	const { selectedLanguage } = useLanguage();

	useEffect(() => {
		fetchAllAgents(selectedLanguage)
		.then(data => { agents.setAgents(data) })
 		.catch(error => { console.log(error) })
	}, [selectedLanguage]);

	return (
		<div className={styles.titles}>
			{agents?.data?.map(agent => 
				{ return(
						<Link key={agent.uuid} href={`agents/${agent.uuid}/${selectedLanguage}`}>
							<h2 className={styles.title}>{agent.displayName}</h2>
						</Link>
					)
				})
			}
		</div>
	)
};

export default observer(Agents);