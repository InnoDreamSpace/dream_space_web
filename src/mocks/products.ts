import { ProductType } from '../typings/products';

export const products = [
  {
    id: '1',
    title: 'Vintage chair',
    shopId: 'shop_1',
    shopName: 'Shop #1',
    image:
      'https://images.unsplash.com/photo-1629822097366-0ed4b086f080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    cost: 10000,
    favorite: false,
  },
  {
    id: '2',
    title: 'Green couch sofa',
    shopId: 'shop_1',
    shopName: 'Shop #1',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    cost: 18000,
    favorite: true,
  },
  {
    id: '3',
    title: 'Common bed',
    shopId: 'shop_2',
    shopName: 'Shop #2',
    image:
      'https://images.unsplash.com/photo-1643241044264-0084069c5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2lnbmVyJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    cost: 16000,
    favorite: false,
  },
  {
    id: '4',
    title: 'Vintage Corona typewriter upcycled desk lamp',
    shopId: 'shop_2',
    shopName: 'Shop #2',
    image:
      'https://images.unsplash.com/photo-1622132405224-ebd8eb332b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80',
    cost: 8000,
    favorite: true,
  },
  {
    id: '5',
    title: 'Coffee table',
    shopId: 'shop_1',
    shopName: 'Shop #1',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    cost: 12000,
    favorite: false,
  },

  {
    id: '6',
    title: 'Working table',
    shopId: 'shop_3',
    shopName: 'Shop #3',
    image:
      'https://images.unsplash.com/photo-1609798310302-2cd56312db02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    cost: 24000,
    favorite: false,
  },
  {
    id: '7',
    title: 'Common chair',
    shopId: 'shop_3',
    shopName: 'Shop #3',
    image:
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    cost: 4000,
    favorite: true,
  },
  {
    id: '8',
    title: 'Lunch placee',
    shopId: 'shop_3',
    shopName: 'Shop #3',
    image:
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    cost: 16000,
    favorite: false,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productsMap: Record<any, ProductType> = {
  1: {
    id: '1',
    title: 'Vintage chair',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_1',
    shopName: 'Shop #1',
    images: [
      'https://images.unsplash.com/photo-1629822097366-0ed4b086f080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    ],
    cost: 10000,
    favorite: false,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
  2: {
    id: '2',
    title: 'Green couch sofa',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_1',
    shopName: 'Shop #1',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    cost: 18000,
    favorite: true,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
  3: {
    id: '3',
    title: 'Common bed',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_2',
    shopName: 'Shop #2',
    images: [
      'https://images.unsplash.com/photo-1643241044264-0084069c5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2lnbmVyJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    ],
    cost: 16000,
    favorite: false,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
  4: {
    id: '4',
    title: 'Vintage Corona typewriter upcycled desk lamp',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_2',
    shopName: 'Shop #2',
    images: [
      'https://images.unsplash.com/photo-1622132405224-ebd8eb332b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80',
    ],
    cost: 8000,
    favorite: true,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
  5: {
    id: '5',
    title: 'Coffee table',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_1',
    shopName: 'Shop #1',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    ],
    cost: 12000,
    favorite: false,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },

  6: {
    id: '6',
    title: 'Working table',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_3',
    shopName: 'Shop #3',
    images: [
      'https://images.unsplash.com/photo-1609798310302-2cd56312db02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    ],
    cost: 24000,
    favorite: false,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
  7: {
    id: '7',
    title: 'Common chair',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_3',
    shopName: 'Shop #3',
    images: [
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    ],
    cost: 4000,
    favorite: true,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
  8: {
    id: '8',
    title: 'Lunch placee',
    description:
      'Magna enim cillum aute occaecat. Commodo nisi amet nostrud exercitation voluptate officia quis incididunt ea est exercitation tempor. Sit pariatur occaecat commodo voluptate reprehenderit.',
    shopId: 'shop_3',
    shopName: 'Shop #3',
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    ],
    cost: 16000,
    favorite: false,
    sizes: {
      weight: '60kg',
      height: '1m',
      width: '1.2m',
    },
  },
};
