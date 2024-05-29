import AricleComponent from './article-component';
import SelectBox from './select-box';

export default function Articles() {
  return (
    <div>
      <div className='flex justify-between gap-2 mb-6'>
        <input type='text' className='w-[293px] h-[42px] bg-cool-gray100 rounded-xl md:w-[560px] lg:w-[1054px]' />
        <SelectBox />
      </div>
      <div className='flex flex-col gap-6'>
        <AricleComponent />
        <AricleComponent />
        <AricleComponent />
        <AricleComponent />
        <AricleComponent />
      </div>
    </div>
  );
}
