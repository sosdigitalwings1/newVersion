export interface Product {
  id: string;
  name: string;
  images: string[];
  isNew: boolean;
  price: string;
  description: string;
  keySpecs: {
    icon: string;
    label: string;
    value: string;
  }[];
  technicalSpecs: Record<string, string>;
  details: {
    title: string;
    content: string;
  }[];
}