'use client'

import Link from 'next/link';
import agents from '@/mobx/agents';
import { fetchAllAgents } from '@/services/agents';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useLanguage } from '@/context/language';

const Agents = () => {

	const { selectedLanguage } = useLanguage()

	useEffect(() => {
		fetchAllAgents(selectedLanguage).then(data => {
			agents.setAgents(data);
		}).catch((error) => {
			console.log('Fetch agents error: ' + error);
		});
	}, [])

	return (
		<>
			{agents?.data?.map(agent => 
				{ return(
						<Link key={agent.uuid} href={`agents/${agent?.displayName?.toLocaleLowerCase()}`}>
							<h2>{agent.displayName}</h2>
						</Link>
					)
				})
			}
		</>
	)
}

export default observer(Agents);
