'use client'

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
	const [selectedLanguage, setLanguage] = useState("en-US");

	return (
		<LanguageContext.Provider
			value={{
				selectedLanguage,
				choiceLanguage: (language) => setLanguage(language),
			}}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);