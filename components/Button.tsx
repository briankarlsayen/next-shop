import React from 'react';
import ComponentLoading from './ComponentLoading';
import toast from 'react-hot-toast';

function Button({ text, onClick, loading, toastMessage, size }: any) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (toastMessage) toast.success(toastMessage);
  };

  const btnSize = size === 'full' ? 'w-full' : 'w-fit';

  return (
    <button
      className={`hero-btn text-center items-center justify-center flex ${btnSize}`}
      onClick={handleClick}
      type='submit'
    >
      {loading ? <ComponentLoading /> : null}
      <span className='pl-2'>{text}</span>
    </button>
  );
}

export default Button;
