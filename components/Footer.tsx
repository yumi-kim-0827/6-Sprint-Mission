import React from 'react'
import styles from '../styles/main.module.css'

import icon_facebook from '@/public/assets/icon_facebook.png'
import icon_twitter from '@/public/assets/icon_twitter.png'
import icon_youtube from '@/public/assets/icon_youtube.png'
import icon_insta from '@/public/assets/icon_insta.png'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer>
      <div className={styles.nav}>
        <p className={styles.year}>©codeit - 2024</p>
        <div className={styles.nav2}>
          <div className={styles.sub_nav}>
            <p className={styles.p}>
              <a href="./privacy.html">Privacy Policy</a>
            </p>
            <p className={styles.p}>
              <a href="./faq.html">FAQ</a>
            </p>
          </div>
          <div className={styles.icons}>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <Image
                  src={icon_facebook}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </div>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
              <div className={styles.icon}>
                <Image
                  src={icon_twitter}
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <Image
                  src={icon_youtube}
                  alt="youtube"
                  width={20}
                  height={20}
                />
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <Image src={icon_insta} alt="insta" width={20} height={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
