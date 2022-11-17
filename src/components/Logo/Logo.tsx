import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Logo = memo(() => {
  return (
    <Link to=''>
      <span className='sr-only'>Dream Space Logo</span>
      <img className='h-8 w-auto' src='/src/assets/images/Logo.png' alt='Dream Space' />
    </Link>
  );
});

Logo.displayName = 'Logo';
