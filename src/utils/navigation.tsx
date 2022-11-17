import { AiOutlineDropbox, AiOutlineShop, AiOutlineQuestionCircle } from 'react-icons/ai';

export const navigation = {
  pages: [
    {
      name: 'Products',
      href: '',
      icon: <AiOutlineDropbox className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
    {
      name: 'Stores',
      href: 'stores',
      icon: <AiOutlineShop className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
    {
      name: 'About',
      href: 'about',
      icon: <AiOutlineQuestionCircle className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
  ],
};
