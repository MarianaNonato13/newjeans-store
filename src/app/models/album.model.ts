export interface Album {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity?: number; // usado no carrinho
}
