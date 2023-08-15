export interface CategoryTypes {
  _id: string;
  name: string;
  image: {
    url: string;
  };
};

export interface ProviderTypes {
  children: React.ReactNode;
}

export interface LayoutType {
  children: React.ReactNode;
}

export interface User {
  role: number;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
}
