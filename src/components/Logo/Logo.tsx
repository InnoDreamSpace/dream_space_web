import { memo } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';

export const Logo = memo(() => {
  return (
    <Link to=''>
      <span className='sr-only'>Dream Space Logo</span>
      <img className='h-8 w-auto' src={logoImage} alt='Dream Space' />
    </Link>
  );
});

Logo.displayName = 'Logo';
