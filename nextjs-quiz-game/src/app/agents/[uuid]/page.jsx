export const getData = async (uuid) => {
	
	const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
	const data = await response.json();

	return data;
};

export default async function Page({params: {uuid}}) {

	let data = await getData(uuid);

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
			{displayName}
		</>
	);
};