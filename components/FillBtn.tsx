import Link from 'next/link';
import { FillBtnProps } from '../types';

const FillBtn = ({
  text,
  url,
  type,
  className,
  handleSubmit,
}: FillBtnProps) => {
  return url ? (
    <Link style={{ width: '100%' }} href={`${url}`}>
      <button
        className={`hero-btn w-full ${className}`}
        type={type ?? 'button'}
        onClick={handleSubmit}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className='hero-btn w-full'
      type={type ?? 'button'}
      onClick={handleSubmit}
    >
      {text}
    </button>
  );
};

export default FillBtn;
