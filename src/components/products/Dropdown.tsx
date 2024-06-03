import styles from '@/styles/Items/Dropdown.module.css';

import React, { useState } from 'react';
import iconArrow from '@/assets/images/items/ic_arrow_down.svg';
import iconSort from '@/assets/images/items/ic_sort.svg';
import Image from 'next/image';

interface Option {
	label: string;
	value: string;
}

interface DropdownProps {
	options: Option[];
	onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: Option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) {
			onChange(option.value);
		}
	};

	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown_toggle} onClick={toggleDropdown}>
				{/* <Desktop> */}
				{selectedOption?.label || '최신순'}
				<Image className={styles.arrow_icon} src={iconArrow} alt='iconArrow' />
				{/* </Desktop> */}
				{/* <Tablet>
					{selectedOption?.label || '최신순'}
					<img className='arrow-icon' src={iconArrow} alt='iconArrow' />
				</Tablet>
				<Mobile>
					<img className='arrow-icon' src={iconSort} alt='iconSort' />
				</Mobile> */}
			</div>
			{isOpen && (
				<div className={styles.dropdown_menu}>
					{options.map((option, index) => (
						<div key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
