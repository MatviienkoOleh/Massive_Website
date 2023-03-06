export interface FormI {
  email: string;
  password: string;
}

export interface ShoeI {
  id: string;
  model: number;
  type: string;
  status: string;
  url: string;
  price: number;
  description: string;
}

export interface OrderPositionI {
  shoe: ShoeI,
  size: string,
  commentary: string,
}

export interface PersonalDataI {
  name: string,
  secondName: string,
  phone: string,
  address: string,
  email: string | null,
}

export interface OrderFromDBI {
  personalData: PersonalDataI,
  order: OrderPositionI[],
}

export interface CreateShoeI {
  id: string;
  model: number;
  type: string;
  status: string;
  url: File | string;
  price: number;
  description: string;
}