import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import buttonStyles from '@/styles/common/Button.module.css';
import styles from '@/styles/common/ButtonLink.module.css';

interface ButtonLinkProps extends LinkProps, AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ className = '', href }) => {
	return <Link href={href} className={`${buttonStyles.button} ${styles.buttonLink} ${className}`} />;
};

export default ButtonLink;
