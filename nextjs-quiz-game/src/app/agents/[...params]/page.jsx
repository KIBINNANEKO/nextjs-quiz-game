import Image from "next/image";
import styles from './page.module.scss';

const getData = async (uuid, language) => {
	const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}?language=${language}`);
	const data = await response.json();

	return data;
};

export default async function Page({ params }) {

	const uuid = params.params[0]
	const language = params.params[1]
	
	let data = await getData(uuid, language);

	let { 
		displayName, 
		description, 
		displayIcon, 
		fullPortrait, 
		background, 
		abilities,
		role: {
			displayName: displayNameRole,
			description: descriptionRole,
			displayIcon: displayIconRole
		},
	} = await data.data;

	
	return (
		<div className={styles.page}>
			<div className={styles.block_1}>
				<div className={styles.present_agent}>
					<div>
						<Image src={displayIcon} alt={displayName} width={120} height={120} className={styles.agent_icon} />
					</div>
					<div className={styles.agent_name}><h1>{displayName}</h1></div>
				</div>
				<div className={styles.present_role}>
					<div className={styles.role_icon}>
						<Image src={displayIconRole} alt={displayNameRole} width={35} height={35} />
					</div>
					<div className={styles.role_name}><h3>Role: {displayNameRole}</h3></div>
				</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.abilities_block}>
					<h4 className={styles.abilities_title}>SPECIAL ABILITIES</h4>
					<div className={styles.abilities_items}>
						{abilities.map(item => (
							<div className={styles.ability_item}>
								<div className={styles.ability_icon}>
									<Image src={item.displayIcon} alt={item.displayName} width={100} height={100} />
								</div>
								<div className={styles.abilities_text}>
									<h5 className={styles.ability_name}>{item.displayName}</h5>
									<p className={styles.ability_description}>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.block_2}> 
				
			</div>
		</div>
	);
};