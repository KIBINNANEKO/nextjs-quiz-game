'use client'

import DropdownList from '@/app/agents/components/DropdownList'
import Image from 'next/image'
import styles from './language-toggle.module.scss'
import { useEffect, useRef, useState } from 'react';

function LanguageToggle() {

	const languageRef = useRef();
	const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

	function handleDropdown() {
		setIsVisibleDropdown(prev => !prev);
	};

	useEffect(() => {
		const langIconElement = languageRef.current;

		const handleClickOutside = (e) => {
			if (isVisibleDropdown && !e.target.classList.contains('dropdown') && !e.target.classList.contains('dropdown-item')) {
				setIsVisibleDropdown(prev => !prev);
			}
		};

		langIconElement.addEventListener("click", handleDropdown);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			langIconElement.removeEventListener("click", handleDropdown);
			document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [isVisibleDropdown]);

	return (
		<div className={styles.language}>
			<Image
				ref={languageRef}
				className={styles.icon + ' toggle'}  // Add the class name here
				width='28'
				height='28'
				src='/language.svg'
				alt="logo"
			/>
			{
				isVisibleDropdown ?
					<DropdownList />
					:
					null
			}
		</div>
	)
}

export default LanguageToggle
