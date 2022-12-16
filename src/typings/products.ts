export type IProductsListItemType = {
  id: string;
  name: string;
  shopId: string;
  shopName?: string;

  shop_id: string;
  shop_name: string;
  images: string[];
  price: number;
  category: string;

  favorite?: boolean;
};

export type ProductsListItemType = Omit<Omit<IProductsListItemType, 'shop_id'>, 'shop_name'> & {
  favorite?: boolean;
  shopId: string;
  shopName?: string;
};

export type IProductType = {
  id: string;
  name: string;
  description: string;

  shopId: string;
  shopName?: string;
  shop_id: string;
  shop_name?: string;

  images: string[];
  price: number;
  category: string;

  width: number;
  height: number;
  length: number;
};

export type ProductType = Omit<Omit<IProductType, 'shop_id'>, 'shop_name'> & {
  favorite?: boolean;
  shopId: string;
  shopName?: string;
};

export type CreateProductType = Omit<ProductType, 'images'> & {
  images?: Blob[];
};
