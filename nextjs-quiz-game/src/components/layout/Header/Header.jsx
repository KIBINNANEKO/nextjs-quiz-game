'use client'
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme";
import styles from './header.module.scss'
import DropdownList from "@/app/agents/components/DropdownList";
import { useEffect, useRef } from "react";

function Header() {

	const { selectedTheme, choiceTheme } = useTheme();	

	const languageRef = useRef();
	const [isVisibleDropdown, setIsVisibleDropdown] = false;

	useEffect(() => {
		const langIconElement = languageRef.current;
		langIconElement.addEventListener("hover" || "click", () => setIsVisibleDropdown(true))

		return () => {
			langIconElement.removeEventListener("hover" || "click", () => setIsVisibleDropdown(true))
		}
	}, [])

	return (
		<header className={styles.header}>
			<Link href='/agents'>
				<Image width='56' height='56' src='/logo.svg' alt="logo" />
			</Link>

			<div className={styles.block_links}>
				<Link className={styles.link} href='/agents'>Agents</Link>
				<a className={styles.link} target="_blank" href="https://github.com/KIBINNANEKO/nextjs-valorant-docs">GitHub</a>
				<a className={styles.link} target="_blank" href="https://dash.valorant-api.com/">API</a>
			</div>

			<div className={styles.settings_block}>
				<div className={styles.language} ref={languageRef}>
					<Image 
						className={styles.icon}
						width='28' 
						height='28' 
						src='/language.svg' 
						alt="logo" 
					/>
					<div>
						<DropdownList/>
					</div>
					
				</div>
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
			</div>

		</header>
	)
};

export default Header;
