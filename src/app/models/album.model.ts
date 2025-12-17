export interface AlbumVersion {
  name: string;
  imageUrl?: string;
  price?: number;
}

export interface Album {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  versions?: AlbumVersion[];
  hasSetOption?: boolean;
  hasRandomOption?: boolean;
  quantity?: number;
  selectedVersion?: string;
  inclusionImages?: string[];
  category?: 'album' | 'season-greetings' | 'merch' | 'lightstick'; // Added category
}
