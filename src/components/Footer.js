import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa';
import main from "../images/carousel-bg-2.jpg";
import { LanguageContext } from './LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  // Translations
  const translations = {
    en: {
      companyName: "VIVA TRACK",
      description: "Safety GPS Tracker offer real time GPS Vehicle Tracking Solution. Our GPS Tracking Software enables you to track accurate location of your Fleet & Vehicles.",
      ourOffice: "Our Office Address",
      likeUs: "Like Us",
      copyright: "Copyright 2024 © VIVATRACK"
    },
    de: {
      companyName: "VIVA TRACK",
      description: "Sicherheits-GPS-Tracker bieten Echtzeit-GPS-Fahrzeugverfolgungslösungen. Unsere GPS-Tracking-Software ermöglicht es Ihnen, den genauen Standort Ihrer Flotte und Fahrzeuge zu verfolgen.",
      ourOffice: "Unsere Büroadresse",
      likeUs: "Folgen Sie uns",
      copyright: "Copyright 2024 © VIVATRACK"
    }
  };

  const t = translations[language];

  return (
    <>
      <footer className="bg-gray-500 text-[#f1f1f1]" aria-label="Website footer">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-x-10 border-b border-white">
          <div className='VIVA flex flex-col gap-4 '>
            <h2 className='text-3xl text-[#102335]' aria-label="Company Name">{t.companyName}</h2>
            <p>{t.description}</p>
          </div>

          <div className='VIVA flex flex-col gap-4 '>
            <h2 className='text-2xl border-b border-white pb-2'>{t.ourOffice}</h2>
            <div className='addresses flex flex-col gap-3'>
              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-secondary w-5 h-5" />
                <p className="text-[#ccd5df] text-md" aria-label="Office Address">1208 MAIN ST, DEER LODGE, MONTANA, 59722</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-secondary w-5 h-5" />
                <p className="text-[#ccd5df] text-md" aria-label="Email Address">info@tracktech-gps.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhone className="text-secondary w-5 h-5" />
                <p className="text-[#ccd5df] text-md" aria-label="Phone Number">412-3763150</p>
              </div>
            </div>
          </div>

          <div className='VIVA flex flex-col gap-4 '>
            <h2 className='text-2xl border-b border-white pb-2'>{t.likeUs}</h2>
            <div className='image'>
              <img src={main} alt="Viva Track office building" className="w-9/12" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="socialMedia container py-4 flex justify-between items-center" aria-label="Social Media Links">
          <p>{t.copyright}</p>
          <div className="links flex gap-3">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit Facebook page" 
              className="facebook flex justify-center items-center rounded-full w-10 h-10 p-2 text-[#ccd5df] text-lg border-[1px] border-[#ccd5df] border-solid md:hover:text-main md:hover:bg-primary md:hover:border-primary transform-all duration-500"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit Twitter profile" 
              className="twitter flex justify-center items-center rounded-full w-10 h-10 p-2 text-[#ccd5df] text-lg border-[1px] border-[#ccd5df] border-solid md:hover:text-main md:hover:bg-primary md:hover:border-primary transform-all duration-500"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit Instagram profile" 
              className="instagram flex justify-center items-center rounded-full w-10 h-10 p-2 text-[#ccd5df] text-lg border-[1px] border-[#ccd5df] border-solid md:hover:text-main md:hover:bg-primary md:hover:border-primary transform-all duration-500"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit YouTube channel" 
              className="youtube flex justify-center items-center rounded-full w-10 h-10 p-2 text-[#ccd5df] text-lg border-[1px] border-[#ccd5df] border-solid md:hover:text-main md:hover:bg-primary md:hover:border-primary transform-all duration-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;