import Link from 'next/link';
import { FillBtnProps } from '../types';

const FillBtn = ({ text, url, type }: FillBtnProps) => {
  console.log('url', url);
  {
    /* <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 text-xl uppercase mt-6'> */
  }
  return url ? (
    <Link style={{ width: '100%' }} href={`${url}`}>
      <button className='hero-btn w-full' type={type ?? 'button'}>
        {text}
      </button>
    </Link>
  ) : (
    <button className='hero-btn w-full' type={type ?? 'button'}>
      {text}
    </button>
  );
};

export default FillBtn;
