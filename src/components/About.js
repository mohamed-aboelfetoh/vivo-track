import React, { useContext } from 'react';
import about from '../images/aerial-view-business-team.jpg';
import { LanguageContext } from './LanguageContext';

const About = () => {
  const { language } = useContext(LanguageContext);

  // Translations
  const translations = {
    en: {
      about: "About Us",
      description1: "VIVA TRACK offers pioneering and user-friendly GPS tracking software and fleet management solutions since early 2014. What sets this company apart from the competition is the excellent customer support, the vast functionality of their GPS software, and the fact that we offer tailored solutions based on customer needs.",
      description2: "With VIVA TRACK, you have a trusted partner by your side, investing in a powerful tool that can transform your business.",
      uniqueTeam: "Unique Team",
      teamDescription: "Every person in our team is dedicated and focused on offering high-quality services.",
      multifunctional: "Multifunctional",
      multifunctionalDescription: "We build our pioneering software to become an all-in-one tool that will help your business."
    },
    de: {
      about: "Über Uns",
      description1: "VIVA TRACK bietet seit Anfang 2014 wegweisende und benutzerfreundliche GPS-Tracking-Software und Flottenmanagement-Lösungen an. Was dieses Unternehmen von der Konkurrenz unterscheidet, ist der ausgezeichnete Kundenservice, die umfangreiche Funktionalität der GPS-Software und die Tatsache, dass wir maßgeschneiderte Lösungen basierend auf Kundenbedürfnissen anbieten.",
      description2: "Mit VIVA TRACK haben Sie einen vertrauenswürdigen Partner an Ihrer Seite, der in ein leistungsstarkes Werkzeug investiert, das Ihr Unternehmen transformieren kann.",
      uniqueTeam: "Einzigartiges Team",
      teamDescription: "Jede Person in unserem Team ist engagiert und konzentriert darauf, hochwertige Dienstleistungen anzubieten.",
      multifunctional: "Multifunktional",
      multifunctionalDescription: "Wir entwickeln unsere wegweisende Software zu einem All-in-One-Tool, das Ihrem Unternehmen helfen wird."
    }
  };

  const t = translations[language];

  return (
    <main className='container'>
      <section className='container about flex flex-col md:flex-row-reverse gap-16 justify-center py-10'>
        <div className='image w-full md:w-1/2 flex items-center'>
          <img src={about} alt='Business team working together' loading="lazy" />
        </div>
        <div className='content w-full md:w-1/2 flex flex-col justify-center gap-6'>
          <div className='textContainer'>
            <h2 className='text-4xl mb-6 text-gray-700'>{t.about}</h2>
            <p className='text-md font-semibold text-gray-500 mb-6'>
              {t.description1}
            </p>
            <p className='text-md font-semibold text-gray-500'>
              {t.description2}
            </p>
          </div>
          <div className='textContainer flex flex-col gap-2 md:flex-row md:justify-between'>
            <div>
              <h3 className='text-4xl mb-4 text-gray-700'>{t.uniqueTeam}</h3>
              <p className='text-md font-semibold text-gray-500 mb-6'>
                {t.teamDescription}
              </p>
            </div>
            <div>
              <h3 className='text-4xl mb-4 text-gray-700'>{t.multifunctional}</h3>
              <p className='text-md font-semibold text-gray-500'>
                {t.multifunctionalDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;