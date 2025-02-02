export interface Product {
    id: string;
    name: string;
    images: string[];
    isNew: boolean;
    specs: Record<string, string>;
    price: string;
    description: string;
}