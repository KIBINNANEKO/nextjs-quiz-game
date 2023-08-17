'use client'

export const fetchAllAgents = async (language) => {
	try {
		const response = await fetch(`https://valorant-api.com/v1/agents?language=${language}&isPlayableCharacter=true`);
		const agents = await response.json();
		return agents.data;
	} catch (error) {
		console.log('Fetch agents error: ' + error);
	}
};

export const fetchAgentById = async (id, language) => {
	try {
		const response = await fetch(`https://valorant-api.com/v1/agents/${id}?language=${language}`);
		const agent = await response.json();
		return agent;
	} catch (error) {
		console.log('Fetch agent by id error: ' + error);
	}
};