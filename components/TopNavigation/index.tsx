import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { MOBILE_SIZE } from '@/constants/windowSize';
import { useRouter } from 'next/router';
import cn from 'classnames';

const TopNavigation = () => {
  const { pathname } = useRouter();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_SIZE);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={style.header}>
      <div className={style.left_header}>
        <Link href="/">
          <Image
            src={
              isMobile ? '/images/panda-logo-sm.png' : '/images/panda-logo.png'
            }
            alt="판다마켓 로고"
            width={isMobile ? 81 : 153}
            height={isMobile ? 40 : 51}
          />
        </Link>
        <nav>
          <ul className={style.nav}>
            <Link href="/boards">
              <li
                className={cn(style.nav_item, {
                  [style.active]: pathname === '/boards',
                })}
              >
                자유게시판
              </li>
            </Link>
            <Link href="/items">
              <li
                className={cn(style.nav_item, {
                  [style.active]: pathname === '/items',
                })}
              >
                중고마켓
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className={style.profile}>
        <Image
          src="/images/profile.png"
          alt="유저 프로필"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default TopNavigation;
