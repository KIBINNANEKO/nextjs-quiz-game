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
		<>
			{displayName + ': ' + description}
		</>
	);
};