import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import { LanguageContext } from './LanguageContext'; // Import LanguageContext

import first from "../images/first.jpg";
import second from "../images/second.jpg";
import third from "../images/third.jpg";
import fourth from "../images/forth.jpg";
import fifth from "../images/fifth.jpg";
import sixth from "../images/six.jpg";
import seventh from "../images/seven.jpg";
import eighth from "../images/eight.jpg";

export default function PhoneFrameSection() {
  const { language } = useContext(LanguageContext); // Use LanguageContext

  // Translations
  const translations = {
    en: {
      appScreens: "APP Screens",
      enhanceExperience: "Enhance Customer user experience!",
      connectedWithGoogle: "Connected with Google Crashlytics so that Bugs are Identified instantly and resolved within moments through our professional App Developers.",
      tryBeforeOrder: "Try before you order our VIVA TRACK White Label App Development service with professional QA Assistance to boost up your GPS Tracking and Fleet Management Telematics Business."
    },
    de: {
      appScreens: "APP-Bildschirme",
      enhanceExperience: "Verbessern Sie das Benutzererlebnis der Kunden!",
      connectedWithGoogle: "Verbunden mit Google Crashlytics, sodass Fehler sofort identifiziert und innerhalb von Sekunden von unseren professionellen App-Entwicklern behoben werden.",
      tryBeforeOrder: "Probieren Sie es aus, bevor Sie unseren VIVA TRACK White Label App-Entwicklungsservice mit professioneller QA-Unterstützung bestellen, um Ihr GPS-Tracking- und Flottenmanagement-Telematikgeschäft zu fördern."
    }
  };

  const t = translations[language]; // Load translations based on language

  const images = [first, second, third, fourth, fifth, sixth, seventh, eighth];

  return (
    <section aria-labelledby="section-title" className="flex justify-evenly items-center min-h-screen bg-gray-100 py-10 flex-col md:flex-row gap-10">
      {/* Text Section */}
      <div className='w-full md:w-1/2 text-2xl text-[#446084]'>
        <p className='container'>
          <span id="section-title" className='text-3xl text-[#1b2d44] font-bold block' aria-label="App Screens Title">
            {t.appScreens}
          </span>
          {t.enhanceExperience}
          {t.connectedWithGoogle}
          {t.tryBeforeOrder}
        </p>
      </div>

      {/* Phone Frame */}
      <div className="relative">
        <div className="w-[300px] h-[600px] bg-gray-800 rounded-[3rem] p-4 shadow-xl relative overflow-hidden">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" aria-hidden="true"></div>

          {/* Phone Screen */}
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Swiper Container */}
            <Swiper
              modules={[Zoom]}
              zoom
              spaceBetween={10} // المسافة بين الصور
              slidesPerView={1} // عرض صورة واحدة فقط
              className="h-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} role="listitem">
                  <div className="swiper-zoom-container">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy" // تحميل الصور بشكل كسول
                      aria-describedby={`image-${index + 1}-desc`}
                    />
                    <div id={`image-${index + 1}-desc`} className="sr-only">
                      Image {index + 1} of {images.length}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Phone Frame Details */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l-lg" aria-hidden="true"></div>
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r-lg" aria-hidden="true"></div>
        <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r-lg" aria-hidden="true"></div>
      </div>
    </section>
  );
}