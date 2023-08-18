'use client'

import { useTheme } from "@/context/theme";
import styles from './theme-toggle.module.scss';
import Image from "next/image";

function ThemeToggle() {

	const { selectedTheme, choiceTheme } = useTheme();	

	return (
		<div>
			{selectedTheme === 'dark' ?
				<Image
					className={styles.icon}
					width='35'
					height='35'
					src='/dark.png'
					alt="logo"
					onClick={() => choiceTheme('light')}
				/>
				:
				<Image
					className={styles.icon}
					width='35'
					height='35'
					src='/light.png'
					alt="logo"
					onClick={() => choiceTheme('dark')}
				/>
			}
		</div>
	);
};

export default ThemeToggle;
