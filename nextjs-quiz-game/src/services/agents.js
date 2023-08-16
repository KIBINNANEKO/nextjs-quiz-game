export const fetchAllAgents = async (language) => {
	try {
		const response = await fetch(process.env.FETCH_AGENTS + '?lang=' + language);
		const agents = await response.json();
		return agents;
	} catch (error) {
		console.log('Fetch agents error: ' + error);
	}
};

export const fetchAgentById = async (id, language) => {
	try {
		const response = await fetch(process.env.FETCH_AGENTS + '/' + id + '?lang=' + language);
		const agent = await response.json();
		return agent;
	} catch (error) {
		console.log('Fetch agent by id error: ' + error);
	}
};