import Image from 'next/image';
import mockimg from '@/public/images/mockimg.png';
import ic_heart from '@/public/images/ic_heart.png';
import ic_profile from '@/public/images/ic_profile.png';

export default function AricleComponent() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-2 font-semibold text-cool-gray800'>
        <p className='min-h-[48px]'>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</p>
        <Image src={mockimg} alt='제품' />
      </div>
      <div className='flex justify-between pb-6 border-b border-solid text-cool-gray400 border-cool-gray200'>
        <div className='flex items-center gap-2'>
          <Image src={ic_profile} alt='프로필 이미지' width={24} />
          <span className='text-cool-gray600'>푸바오</span>
          <div>2024. 04. 16</div>
        </div>
        <div className='flex items-center gap-1'>
          <Image src={ic_heart} alt='좋아요 하트' width={16}></Image>
          <span>10+</span>
        </div>
      </div>
    </div>
  );
}
