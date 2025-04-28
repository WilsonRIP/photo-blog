export interface Photo {
    id: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }
  
  export interface Album {
    id: string;
    title: string;
    description?: string;
    photos: Photo[];
  }