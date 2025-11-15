export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export interface ThreeDay {
  count: number,
  description: string,
  planType: string,
}

export interface FiveDay {
  count: number,
  descripction: string,
  planType: string,
}

export interface Collection {
  count: number,
  description: string,
  planType: string,
}