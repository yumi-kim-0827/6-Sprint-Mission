import Image from 'next/image';
import image_badge from '@/public/images/img_badge.svg';
import ic_heart from '@/public/images/ic_heart.png';
import mockimg from '@/public/images/mockimg.png';

export default function BestArticleComponent() {
  return (
    <div className='min-w-[384px] h-[169px] px-6 pb-6 bg-cool-gray50 rounded-lg'>
      <Image src={image_badge} alt='베스트 뱃지' />
      <div className='flex mt-4 mb-4 h-[72px]'>
        <div className='text-xl w-[256px] text-cool-gray800'>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </div>
        <Image src={mockimg} alt='메롱'></Image>
      </div>
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
    </div>
  );
}
