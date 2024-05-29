import Image from 'next/image';
import ic_heart from '@/public/images/ic_heart.png';

export default function ArticleProfile() {
  return (
    <div className='flex justify-between text-cool-gray400'>
      <div className='flex items-center gap-2'>
        <span>푸바오</span>
        <div className='flex items-center gap-1'>
          <Image src={ic_heart} alt='좋아요 하트' width={16}></Image>
          <span>10</span>
        </div>
      </div>
      <div>2024. 04. 16</div>
    </div>
  );
}
