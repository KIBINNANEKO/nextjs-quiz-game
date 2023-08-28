import { useLanguage } from "@/context/language";
import styles from './dropdown.module.scss';

function DropdownList() {

	const { choiceLanguage} = useLanguage()

	const languages = 
		[{ form: 'de-DE', language: 'Deutsch' }, 
		{ form: 'en-US', language: 'English' },
		{ form: 'fr-FR', language: 'Français'}, 
		{ form: 'pl-PL', language: 'Polski'  }, 
		{ form: 'ru-RU', language: 'Русский' }];

	return (
		<div className={styles.dropdown + ' dropdown'} theme="dropdown">
			{languages.map(language => {
				return(
					<div 
						className="dropdown-item"
						onClick={() => choiceLanguage(language.form)} 
						key={language.form}>
						{language.language}
					</div>
				)
			})}
		</div>
	)
};

export default DropdownList;
