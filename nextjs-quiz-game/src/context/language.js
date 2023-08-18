'use client'

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
	const [selectedLanguage, setLanguage] = useState("en-US");

	useEffect(() => {
		const langFromStorage = localStorage.getItem('language');

		if (langFromStorage){
			setLanguage(langFromStorage);
			console.log(langFromStorage);
		}
	}, []);

	function choiceLanguage(language){
		localStorage.setItem('language', language);
		console.log(language);
		location.reload();
	}

	return (
		<LanguageContext.Provider
			value={{
				selectedLanguage,
				choiceLanguage,
			}}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);