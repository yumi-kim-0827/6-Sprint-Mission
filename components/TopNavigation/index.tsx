import Link from 'next/link';
import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import useIsMobile from '@/hooks/useIsMobile';

const TopNavigation = () => {
  const { pathname } = useRouter();
  const isMobile = useIsMobile();

  return (
    <header className={style.header}>
      <div className={style.left_header}>
        <Link href="/">
          <Image
            src={
              isMobile ? '/images/panda-logo-sm.png' : '/images/panda-logo.png'
            }
            alt="판다마켓 로고"
            width={isMobile ? '81' : '153'}
            height={isMobile ? '40' : '51'}
            priority
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
          width="40"
          height="40"
          priority
        />
      </div>
    </header>
  );
};

export default TopNavigation;
