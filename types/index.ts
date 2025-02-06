export interface Watch {
    id: string;
    name: string;
    collection: string;
    price: number;
    imageUrl: string;
    diameter: string;
    movement: string;
    material: string;
  }
  
  export interface FilterState {
    collections: string[];
    materials: string[];
    movements: string[];
    diameters: string[];
    priceRange: [number, number];
  }