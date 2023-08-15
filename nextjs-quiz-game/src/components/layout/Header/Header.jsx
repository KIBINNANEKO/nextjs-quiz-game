'use client'

import { useTheme } from "@/context/theme";

function Header() {

	const { selectedTheme, choiceTheme } = useTheme();	

	return (
		<header>
			<div>{selectedTheme}</div>
			<button onClick={() => choiceTheme('light')}>light</button>
			<button onClick={() => choiceTheme('dark')}>dark</button>
		</header>
	)
};

export default Header;
