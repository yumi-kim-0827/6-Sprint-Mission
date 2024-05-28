import bannerTopImg from '../assets/images/home/Img_home_top.svg';
import bannerBottomImg from '../assets/images/home/Img_home_bottom.svg';
import homeImg1 from '../assets/images/home/Img_home_01.svg';
import homeImg2 from '../assets/images/home/Img_home_02.svg';
import homeImg3 from '../assets/images/home/Img_home_03.svg';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

import styles from '@/styles/Home.module.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>판다마켓</title>
				<meta name='description' content='판다마켓에 어서오세요' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header />
				<article className={styles.container}>
					{/* 상단 배너 */}
					<section className={styles.banner_top}>
						<div className={styles.banner_top_content}>
							<h1 className={styles.banner_top_text}>
								일상의 모든 물건을
								<br />
								거래해 보세요
							</h1>
							<Link href='/items' className={`${styles.banner_top_btn} ${styles.blue}`}>
								구경하러 가기
							</Link>
						</div>

						<Image className={styles.banner_top_img} src={bannerTopImg} alt='상단 배너' />
					</section>

					{/* 메인 콘텐츠 */}
					<section className={styles.container_content}>
						<div className={styles.content_item}>
							<Image className={styles.content_item_img} src={homeImg1} alt='이미지1' />

							<div className={styles.content_item_sub}>
								<h2 className={styles.content_tag}>Hot item</h2>

								<h1 className={styles.content_title}>
									인기 상품을
									<br />
									확인해보세요
								</h1>

								<p className={styles.content_description}>
									가장 HOT한 중고거래 물품을
									<br />
									판다 마켓에서 확인해 보세요
								</p>
							</div>
						</div>

						<div className={`${styles.content_item} ${styles.right_item}`}>
							<Image className={styles.content_item_img} src={homeImg2} alt='이미지2' />
							<div className={`${styles.content_item_sub} ${styles.right_item}`}>
								<h2 className={styles.content_tag}>Search</h2>

								<h1 className={styles.content_title}>
									구매를 원하는
									<br />
									상품을 검색하세요
								</h1>

								<p className={styles.content_description}>
									구매하고 싶은 물품은 검색해서
									<br />
									쉽게 찾아보세요
								</p>
							</div>
						</div>

						<div className={styles.content_item}>
							<Image className={styles.content_item_img} src={homeImg3} alt='이미지3' />

							<div className={styles.content_item_sub}>
								<h2 className={styles.content_tag}>Register</h2>

								<h1 className={styles.content_title}>
									판매를 원하는
									<br />
									상품을 등록하세요
								</h1>

								<p className={styles.content_description}>
									어떤 물건이든 판매하고 싶은 상품을
									<br />
									쉽게 등록하세요
								</p>
							</div>
						</div>
					</section>

					{/* 하단 배너 */}
					<section className={styles.banner_floor}>
						<div className={styles.banner_floor_content}>
							<h1 className={styles.banner_floor_text}>
								믿을 수 있는 <br />
								판다마켓 중고거래
							</h1>
						</div>

						<Image className={styles.banner_floor_img} src={bannerBottomImg} alt='하단 배너' />
					</section>
				</article>
				<Footer />
			</main>
		</>
	);
}
