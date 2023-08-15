export default fetchAllAgents = async () => {
	try{

		const response = await fetch(FETCH_AGENTS);
		const agents = await response.json();
		return agents;

	} catch (error){
		console.log('Fetch agents error: ' + error)
	}

};