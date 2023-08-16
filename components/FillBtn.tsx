import Link from 'next/link';
import { FillBtnProps } from '../types';

const FillBtn = ({ text, url }: FillBtnProps) => {
  return (
    <button className='hero-btn w-full'>
      {/* <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 text-xl uppercase mt-6'> */}
      <Link href={`${url}`}>{text}</Link>
    </button>
  );
};

export default FillBtn;
