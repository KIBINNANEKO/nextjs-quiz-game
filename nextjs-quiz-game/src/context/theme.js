'use client'

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
	const [selectedTheme, setTheme] = useState("dark");

	return (
		<ThemeContext.Provider
			value={{
				selectedTheme,
				choiceTheme: (theme) => setTheme(theme),
			}}
		>
			<div className={`theme-${selectedTheme}`}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);