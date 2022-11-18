export type ProductsListItemType = {
  id: string;
  title: string;
  shopId: string;
  shopName: string;
  image: string;
  cost: number;
  favorite?: boolean;
};

export type ProductType = {
  id: string;
  title: string;
  description: string;
  shopId: string;
  shopName: string;
  images: string[];
  cost: number;
  favorite?: boolean;
  sizes: {
    width: string;
    height: string;
    weight: string;
  };
};
