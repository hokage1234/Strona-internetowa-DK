import { TranslationStructure } from './types';

// Link placeholders as requested / Placeholdery linków zgodnie z prośbą
export const LINKS = {
  FORUM: "WPISZ_PRZEKIEROWANIE",
  SHOP: "WPISZ_PRZEKIEROWANIE",
  DONATE: "WPISZ_PRZEKIEROWANIE",
  CONTACT: "mailto:contact@deekay.com" // Example / Przykład
};

export const CONTENT: Record<'PL' | 'EN', TranslationStructure> = {
  PL: {
    nav: {
      about: "O MARCE",
      shop: "SKLEP",
      newsletter: "NEWSLETTER",
      contact: "KONTAKT"
    },
    hero: {
      forumButton: "FORUM SPOŁECZNOŚĆ"
    },
    sections: {
      about: {
        title: "O MARCE",
        content: "DEEKAY to więcej niż marka osobista. To manifest minimalizmu i nowoczesnego luksusu. Tworzymy przestrzeń dla kreatywnych umysłów, ceniących jakość ponad ilość. Nasza filozofia opiera się na prostocie, która nie potrzebuje ozdobników, by robić wrażenie."
      },
      shop: {
        title: "ZASOBY & SKLEP",
        content: "Ekskluzywne materiały, produkty cyfrowe i limitowane kolekcje. Wszystko zaprojektowane z myślą o estetyce i funkcjonalności.",
        mainCta: "ZOBACZ WSZYSTKIE PRODUKTY",
        products: [
          { id: 1, name: "E-BOOK: SZTUKA MINIMALIZMU", price: "49 PLN", linkLabel: "ZOBACZ" },
          { id: 2, name: "PRESETY: MONOCHROME", price: "79 PLN", linkLabel: "ZOBACZ" },
          { id: 3, name: "KONSULTACJA 1:1", price: "299 PLN", linkLabel: "ZOBACZ" }
        ]
      },
      newsletter: {
        title: "NEWSLETTER",
        content: "Dołącz do zamkniętego kręgu. Otrzymuj informacje o nowościach i dostęp do treści premium.",
        placeholder: "Twój adres email",
        button: "ZAPISZ SIĘ"
      },
      donate: {
        title: "Podoba Ci się moja praca?",
        button: "☕ POSTAW KAWĘ"
      },
      contact: {
        title: "KONTAKT",
        emailLabel: "Napisz do nas"
      }
    },
    footer: {
      rights: "WSZELKIE PRAWA ZASTRZEŻONE"
    }
  },
  EN: {
    nav: {
      about: "ABOUT",
      shop: "SHOP",
      newsletter: "NEWSLETTER",
      contact: "CONTACT"
    },
    hero: {
      forumButton: "COMMUNITY FORUM"
    },
    sections: {
      about: {
        title: "ABOUT",
        content: "DEEKAY is more than a personal brand. It is a manifesto of minimalism and modern luxury. We create a space for creative minds who value quality over quantity. Our philosophy is based on simplicity that needs no embellishments to impress."
      },
      shop: {
        title: "RESOURCES & SHOP",
        content: "Exclusive materials, digital products, and limited collections. Everything designed with aesthetics and functionality in mind.",
        mainCta: "VIEW ALL PRODUCTS",
        products: [
          { id: 1, name: "E-BOOK: ART OF MINIMALISM", price: "$12", linkLabel: "VIEW" },
          { id: 2, name: "PRESETS: MONOCHROME", price: "$20", linkLabel: "VIEW" },
          { id: 3, name: "CONSULTATION 1:1", price: "$75", linkLabel: "VIEW" }
        ]
      },
      newsletter: {
        title: "NEWSLETTER",
        content: "Join the inner circle. Receive updates on new releases and access to premium content.",
        placeholder: "Your email address",
        button: "SUBSCRIBE"
      },
      donate: {
        title: "Do you like my work?",
        button: "☕ BUY ME A COFFEE"
      },
      contact: {
        title: "CONTACT",
        emailLabel: "Write to us"
      }
    },
    footer: {
      rights: "ALL RIGHTS RESERVED"
    }
  }
};