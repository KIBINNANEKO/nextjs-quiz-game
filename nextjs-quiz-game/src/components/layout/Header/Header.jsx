import Image from "next/image";
import Link from "next/link";
import styles from './header.module.scss'

import LanguageToggle from "./components/LanguageToggle/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function Header() {

	return (
		<header className={styles.header}>
			<Link href='/agents'>
				<Image width='56' height='56' src='/logo.svg' alt="logo" />
			</Link>
			<nav className={styles.block_links}>
				<Link className={styles.link} href='/agents'>Agents</Link>
				<a className={styles.link} target="_blank" href="https://github.com/KIBINNANEKO/nextjs-valorant-docs">GitHub</a>
				<a className={styles.link} target="_blank" href="https://dash.valorant-api.com/">API</a>
			</nav>
			<div className={styles.settings_block}>
				<LanguageToggle/>
				<ThemeToggle/>
			</div>
		</header>
	)
};

export default Header;
