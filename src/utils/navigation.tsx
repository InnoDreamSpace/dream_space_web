import { AiOutlineDropbox, AiOutlineQuestionCircle, AiOutlineShop } from 'react-icons/ai';

export const navigation = {
  pages: [
    {
      name: 'Home',
      href: '',
      icon: <AiOutlineDropbox className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
    {
      name: 'Products',
      href: 'products',
      icon: <AiOutlineDropbox className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
    {
      name: 'Shops',
      href: 'shops',
      icon: <AiOutlineShop className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
    {
      name: 'About',
      href: 'about',
      icon: <AiOutlineQuestionCircle className='h-6 w-6 flex-shrink-0 mr-2' aria-hidden='true' />,
    },
  ],
};
