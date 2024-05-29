import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import img_logo from '@/public/images/img_logo.png';
import text_logo from '@/public/images/text_logo.png';
import ic_profile from '@/public/images/ic_profile.png';

export default function Navigation() {
  // const router = useRouter();
  return (
    <nav className='flex justify-center items-center h-[70px] border-b border-solid border-[#DFDFDF]'>
      <div className='flex w-[1200px] justify-between px-4'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='pr-4'>
              <Image className='md:hidden lg:hidden' src={text_logo} width={81} alt='판다마켓로고' />
              <Image className='sm:hidden md:block' src={img_logo} width={153} alt='판다마켓로고' />
            </div>
          </Link>
          <div className='flex justify-around font-bold sm:w-[135px]gap-2 md:w-[218px]'>
            <Link href='/boards'>
              <button className='block h-[70px] sm:w-[73px] md:w-[109px] lg:w-[109px] text-[#4B5563]'>
                자유게시판
              </button>
            </Link>
            <Link href='/'>
              <button className='block h-[70px] sm:w-[58px] md:w-[109px] lg:w-[109px] text-[#4B5563]'>중고마켓</button>
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src={ic_profile} width={40} alt='판다마켓로고' />
          </Link>
        </div>
      </div>
    </nav>
  );
}
