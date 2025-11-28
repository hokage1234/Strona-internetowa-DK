export type Language = 'PL' | 'EN';

export interface Product {
  id: number;
  name: string;
  price: string;
  linkLabel: string;
}

export interface TranslationStructure {
  nav: {
    about: string;
    shop: string;
    newsletter: string;
    contact: string;
  };
  hero: {
    forumButton: string;
  };
  sections: {
    about: {
      title: string;
      content: string;
    };
    shop: {
      title: string;
      content: string;
      mainCta: string;
      products: Product[];
    };
    newsletter: {
      title: string;
      content: string;
      placeholder: string;
      button: string;
    };
    donate: {
      title: string;
      button: string;
    };
    contact: {
      title: string;
      emailLabel: string;
    };
  };
  footer: {
    rights: string;
  };
}