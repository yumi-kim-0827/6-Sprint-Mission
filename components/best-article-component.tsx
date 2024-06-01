import Image from 'next/image';
import image_badge from '@/public/images/img_badge.svg';
import ic_heart from '@/public/images/ic_heart.png';
import { ListProps } from '@/lib/getArticles';

export default function BestArticleComponent({ createdAt, likeCount, image, title, writer }: ListProps) {
  const date = new Date(createdAt).getDate();
  const month = new Date(createdAt).getMonth() + 1;
  const year = new Date(createdAt).getFullYear();
  const createdDate = `${year}. ${month}. ${date}`;

  return (
    <div className='h-[169px] px-6 pb-6 bg-cool-gray50 rounded-lg sm:min-w-[343px] md:min-w-[340px] lg:min-w-[384px]'>
      <Image src={image_badge} alt='베스트 뱃지' />
      <div className='flex gap-2 mt-4 mb-4 h-[72px]'>
        <div className=' text-cool-gray800 text-[18px] leading-5 sm:min-w[212px] w-[212px] lg:w-[256px] lg:text-xl'>
          {title}
        </div>
        {image && (
          <div className='flex justify-center items-center bg-white border border-solid rounded-md border-cool-gray200 w-[72px] h-[72px]'>
            <Image src={image} alt='게시글 이미지' width={48} height={45} />
          </div>
        )}
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-cool-gray600'>{writer.nickname}</span>
          <div className='flex items-center gap-1'>
            <Image src={ic_heart} alt='좋아요 하트' width={16}></Image>
            <span className='text-cool-gray500'>{likeCount}</span>
          </div>
        </div>
        <div className='text-cool-gray400'>{createdDate}</div>
      </div>
    </div>
  );
}
