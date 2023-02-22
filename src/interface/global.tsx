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