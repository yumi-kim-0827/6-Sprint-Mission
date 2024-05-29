import ic_facebook from '../../assets/images/icon/ic_facebook.svg';
import ic_twitter from '../../assets/images/icon/ic_twitter.svg';
import ic_youtube from '../../assets/images/icon/ic_youtube.svg';
import ic_instagram from '../../assets/images/icon/ic_instagram.svg';

import styles from '@/styles/Nav/Footer.module.css';

import Link from 'next/link';
import Image from 'next/image';

function Footer() {
	return (
		<footer className={styles.bottom_container}>
			<article className={styles.bottom_content}>
				<section className={styles.bottom_copyright}>©codeit - 2024</section>

				<section className={styles.bottom_middle}>
					<Link href='/pages/privacy' className={styles.privacy}>
						Privacy Policy
					</Link>

					<Link href='/pages/faq' className={styles.faq}>
						FAQ
					</Link>
				</section>

				<section className={styles.bottom_social}>
					<Link className={styles.facebook} href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
						<Image src={ic_facebook} alt='페이스북' width={25} height={25} />
					</Link>

					<Link className={styles.twitter} href='https://x.com/' target='_blank' rel='noreferrer'>
						<Image src={ic_twitter} alt='트위터' width={25} height={25} />
					</Link>

					<Link className={styles.youtube} href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
						<Image src={ic_youtube} alt='유튜브' width={25} height={25} />
					</Link>

					<Link className={styles.instagram} href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
						<Image src={ic_instagram} alt='인스타그램' width={25} height={25} />
					</Link>
				</section>
			</article>
		</footer>
	);
}

export default Footer;
