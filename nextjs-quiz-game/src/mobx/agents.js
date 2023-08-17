'use client'

import { makeAutoObservable } from "mobx";

class Agents{
	data = [];

	constructor(){
		makeAutoObservable(this);
	}

	setAgents(agents){
		this.data = agents;
	}
}

export default new Agents();