export type LoginDataType = {
  email: string;
  password: string;
};

export type RegisterDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  telegramAlias?: string;
  settings?: string;
  shops: {
    id: string;
    name: string;
    logo?: string;
  }[];
  favorites?: number[];
};

export type FavoriteRequestType = {
  userId?: string;
  favorites?: number[];
  productId?: string;
};
