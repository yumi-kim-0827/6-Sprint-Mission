import leftArrow from '@/assets/images/items/arrow_left.svg';
import rightArrow from '@/assets/images/items/arrow_right.svg';

import styles from '@/styles/Items/ProductFooter.module.css';
import Image from 'next/image';

import Link from 'next/link';

function ProductFooter() {
	return (
		<>
			<footer className={styles.footer_container}>
				<Link className={`${styles.footer_btn} ${styles.footer_prev_btn}`} href={''}>
					<Image src={leftArrow} alt='왼쪽으로' />
				</Link>

				<Link className={`${styles.footer_btn} ${styles.page_btn}`} href={''}>
					1
				</Link>

				<Link className={`${styles.footer_btn} ${styles.page_btn}`} href={''}>
					2
				</Link>

				<Link className={`${styles.footer_btn} ${styles.page_btn}`} href={''}>
					3
				</Link>

				<Link className={`${styles.footer_btn} ${styles.page_btn}`} href={''}>
					4
				</Link>

				<Link className={`${styles.footer_btn} ${styles.page_btn}`} href={''}>
					5
				</Link>

				<Link className={`${styles.footer_btn} ${styles.footer_next_btn}`} href={''}>
					<Image src={rightArrow} alt='오른쪽으로' />
				</Link>
			</footer>
		</>
	);
}

export default ProductFooter;
