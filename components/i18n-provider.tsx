"use client"

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "navbar.home": "Home",
          "navbar.about": "About",
          "navbar.projects": "Projects",
          "navbar.contact": "Contact",
          "hero.title": "Hi, I'm Jiordi Viera",
          "hero.subtitle": "Software Developer",
          "about.title": "About Me",
          "about.description": "I'm a passionate software developer with experience in...",
          "projects.title": "My Projects",
          "contact.title": "Get in Touch",
          "contact.email": "Email",
          "contact.message": "Message",
          "contact.send": "Send"
        }
      },
      fr: {
        translation: {
          "navbar.home": "Accueil",
          "navbar.about": "À propos",
          "navbar.projects": "Projets",
          "navbar.contact": "Contact",
          "hero.title": "Salut, je suis Jiordi Viera",
          "hero.subtitle": "Développeur de logiciels",
          "about.title": "À propos de moi",
          "about.description": "Je suis un développeur de logiciels passionné avec de l'expérience en...",
          "projects.title": "Mes Projets",
          "contact.title": "Contactez-moi",
          "contact.email": "Email",
          "contact.message": "Message",
          "contact.send": "Envoyer"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}