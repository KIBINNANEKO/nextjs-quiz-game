export const getData = async (uuid) => {
	
	const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
	const data = await response.json();

	return data 
};

export default async function Page({params: {uuid}}) {

	

	let data = await getData(uuid)
	let formattedData= await data.data;

	console.log(formattedData);
	
	return (
		<>
			{formattedData.displayName}
		</>
	)
};