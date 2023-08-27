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
		<div className={styles.}>
			<div className={styles.}>
				<div className={styles.}>
					<div className={styles.}>
						<Image src={displayIcon} alt={displayName} width={120} height={120}/>
					</div>
					<div className={styles.}><h1>{displayName}</h1></div>
				</div>
				<div className={styles.}>
					<div className={styles.}>
						<Image src={displayIconRole} alt={displayNameRole} width={35} height={35} />
					</div>
					<div className={styles.}><h3>Role: {displayNameRole}</h3></div>
				</div>
				<div className={styles.}>{description}</div>
				<div className={styles.}>
					<h4 className={styles.}>SPECIAL ABILITIES</h4>
					<div className={styles.}>
						{abilities.map(item => (
							<div className={styles.}>
								<div className={styles.}>
									<Image src={item.displayIcon} alt={item.displayName} width={100} height={100} />
								</div>
								<div className={styles.}>
									<h5 className={styles.}>{item.displayName}</h5>
									<p className={styles.}>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	);
};