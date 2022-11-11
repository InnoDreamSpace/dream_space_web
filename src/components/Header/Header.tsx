import { ReactElement, useState } from 'react';
import { MobileDialog } from './MobileDialog';
import { Layout } from './Layout';

export type HeaderProps = {
  className?: string;
  pages?: {
    name: string;
    href: string;
    icon: ReactElement;
  }[];
};

export const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileDialog {...props} open={open} setOpen={setOpen} />
      <Layout {...props} open={open} setOpen={setOpen} />
    </>
  );
};
