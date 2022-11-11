import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Logo = memo(() => {
  return (
    <Link to=''>
      <span>Dream Space Logo</span>
      {/* <span className='sr-only'>Dream Space Logo</span>*/}
      {/* TODO: Add Logo Here
                        <img
                          className='h-8 w-auto'
                          src=''
                          alt=''
                      />*/}
    </Link>
  );
});

Logo.displayName = 'Logo';
