import Link from 'next/link';
import { FillBtnProps } from '../types';

const FillBtn = ({ text, url, type, className }: FillBtnProps) => {
  return url ? (
    <Link style={{ width: '100%' }} href={`${url}`}>
      <button
        className={`hero-btn w-full ${className}`}
        type={type ?? 'button'}
      >
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
