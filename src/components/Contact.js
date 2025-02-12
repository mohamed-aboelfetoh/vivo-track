import React, { useState, useContext } from 'react';
import mission from "../images/mission.png";
import values from "../images/values.png";
import vision from "../images/vision.png";
import contact from "../images/contact background.jpg";
import trophy from "../images/trophy.png";
import transport from "../images/Transport-1.jpg";
import logo from "../images/logo icon.jpg";
import { LanguageContext } from './LanguageContext'; // Import LanguageContext

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState({ message: "", type: "" });
  const [formData, setFormData] = useState({
    fullname: '',  
    phoneNumber: '',  
    email: '',
    message: ''
  });
  const { language } = useContext(LanguageContext); // Use LanguageContext

  // Translations
  const translations = {
    en: {
      howToFindUs: "How to Find Us",
      contactDescription: "If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit TopInvest in one of our comfortable offices.",
      headquarters: "Headquarters",
      supportCentre: "Support Centre",
      contactUs: "Contact Us",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      email: "Email",
      message: "Message",
      submit: "Submit",
      successMessage: "Your message has been submitted successfully!",
      errorMessage: "Something went wrong. Please try again later.",
      validationError: "Please fill in all fields.",
      emailError: "Please enter a valid email.",
      whyChoose: "Why choose our services specifically?",
      whyChooseDescription: "Join us and be our partner in our growing business to provide smart mobility solutions around the world",
      mission: "Our Mission",
      missionDescription: "Committed to providing comprehensive road safety solutions Fleet optimization to suit your business needs",
      values: "Our Values",
      valuesDescription: "Honesty, integrity, creativity, innovation, transparency and customer satisfaction.",
      vision: "Our Vision",
      visionDescription: "Achieve safer ways through future thinking and innovative technologies.",
      customerGoal: "Satisfying our customers is our most important goal",
      customerSupport: "We offer you the perfect support team and 24/7 customer service and we will train your employees on VIVA Track software, hardware, and reports.",
      trackFleet: "Track any vehicle and control any fleet",
      trackDescription1: "VIVA Track is a pioneer in vehicle management and tracking solutions, offering cutting-edge technology since 2009. Over the years, VIVA Track has helped businesses optimize their fleet operations, saving them millions of dollars and significantly boosting their profitability. Partner with us confidently, as we are committed to delivering top-notch services tailored to meet your needs.",
      trackDescription2: "VIVA Track has been at the forefront of vehicle management and tracking solutions, revolutionizing fleet operations with state-of-the-art technology since 2009. Over the years, we’ve empowered businesses to streamline their operations, resulting in substantial savings and enhanced profitability. Join us today, and experience our commitment to providing customized services that cater to your unique needs.",
      trackDescription3: "VIVA Track is your trusted partner in delivering innovative tracking solutions that have transformed businesses since 2009. Our advanced technology has enabled companies to optimize their fleet operations, save significant costs, and improve overall efficiency. With VIVA Track, you can count on top-quality service and tailored solutions to take your business to the next level."
    },
    de: {
      howToFindUs: "So finden Sie uns",
      contactDescription: "Wenn Sie Fragen haben, füllen Sie einfach das Kontaktformular aus, und wir werden Ihnen bald antworten. Wenn Sie in der Nähe wohnen, besuchen Sie TopInvest in einem unserer komfortablen Büros.",
      headquarters: "Hauptsitz",
      supportCentre: "Support-Zentrum",
      contactUs: "Kontaktieren Sie uns",
      fullName: "Vollständiger Name",
      phoneNumber: "Telefonnummer",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Einreichen",
      successMessage: "Ihre Nachricht wurde erfolgreich übermittelt!",
      errorMessage: "Etwas ist schief gelaufen. Bitte versuchen Sie es später noch einmal.",
      validationError: "Bitte füllen Sie alle Felder aus.",
      emailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      whyChoose: "Warum unsere Dienstleistungen wählen?",
      whyChooseDescription: "Werden Sie unser Partner in unserem wachsenden Unternehmen, um weltweit intelligente Mobilitätslösungen anzubieten",
      mission: "Unsere Mission",
      missionDescription: "Verpflichtet zur Bereitstellung umfassender Lösungen für die Straßenverkehrssicherheit und zur Optimierung der Flotte, um Ihren Geschäftsanforderungen gerecht zu werden",
      values: "Unsere Werte",
      valuesDescription: "Ehrlichkeit, Integrität, Kreativität, Innovation, Transparenz und Kundenzufriedenheit.",
      vision: "Unsere Vision",
      visionDescription: "Erreichen Sie sicherere Wege durch zukunftsorientiertes Denken und innovative Technologien.",
      customerGoal: "Die Zufriedenheit unserer Kunden ist unser wichtigstes Ziel",
      customerSupport: "Wir bieten Ihnen das perfekte Support-Team und 24/7-Kundenservice und schulen Ihre Mitarbeiter in der VIVA Track-Software, Hardware und Berichten.",
      trackFleet: "Verfolgen Sie jedes Fahrzeug und kontrollieren Sie jede Flotte",
      trackDescription1: "VIVA Track ist ein Pionier in der Fahrzeugverwaltung und -verfolgung und bietet seit 2009 modernste Technologie. Im Laufe der Jahre hat VIVA Track Unternehmen dabei geholfen, ihre Flottenoperationen zu optimieren, Millionen von Dollar zu sparen und ihre Rentabilität erheblich zu steigern. Arbeiten Sie selbstbewusst mit uns zusammen, da wir uns verpflichtet haben, erstklassige Dienstleistungen anzubieten, die auf Ihre Bedürfnisse zugeschnitten sind.",
      trackDescription2: "VIVA Track steht seit 2009 an der Spitze der Fahrzeugverwaltung und -verfolgung und revolutioniert Flottenoperationen mit modernster Technologie. Im Laufe der Jahre haben wir Unternehmen dabei unterstützt, ihre Abläufe zu optimieren, was zu erheblichen Einsparungen und einer gesteigerten Rentabilität geführt hat. Schließen Sie sich uns noch heute an und erleben Sie unser Engagement für maßgeschneiderte Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.",
      trackDescription3: "VIVA Track ist Ihr vertrauenswürdiger Partner bei der Bereitstellung innovativer Tracking-Lösungen, die seit 2009 Unternehmen transformiert haben. Unsere fortschrittliche Technologie hat es Unternehmen ermöglicht, ihre Flottenoperationen zu optimieren, erhebliche Kosten zu sparen und die Gesamteffizienz zu verbessern. Mit VIVA Track können Sie sich auf erstklassigen Service und maßgeschneiderte Lösungen verlassen, um Ihr Unternehmen auf die nächste Stufe zu heben."
    }
  };

  const t = translations[language]; // Load translations based on language

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullname || !formData.phoneNumber || !formData.email || !formData.message) {
      setStatusMessage({ message: t.validationError, type: "error" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({ message: t.emailError, type: "error" });
      return;
    }

    try {
      const response = await fetch("https://mailing.viva-track.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({ message: t.successMessage, type: "success" });
        setFormData({ fullname: "", phoneNumber: "", email: "", message: "" });
      } else {
        setStatusMessage({ message: t.errorMessage, type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage({ message: t.errorMessage, type: "error" });
    }
  };

  return (
    <main>
      <section className="container mt-10 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-primary">{t.howToFindUs}</h2>
          <p className="mb-4 text-gray-700">{t.contactDescription}</p>
          <h3 className="text-xl font-bold mb-2 text-primary">{t.headquarters}</h3>
          <p className="mb-4 text-gray-700">
            420 Love Sreet 133/2 Street NewYork<br />
            Telephone: +9212359375<br />
            info@tracktech-gps.com
          </p>
          <h3 className="text-xl font-bold mb-2 text-primary">{t.supportCentre}</h3>
          <p className='text-gray-700'>
            420 Love Sreet 133/2 Street NewYork<br />
            Telephone: +9212359375<br />
            info@tracktech-gps.com
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">{t.contactUs}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                {t.fullName}
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                {t.phoneNumber}
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {t.submit}
              </button>
            </div>

            {statusMessage.message && (
              <p
                className={`mt-2 ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}
              >
                {statusMessage.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className='flex flex-col md:flex-row'>
        <div className='bg-[#f9f9f9] content py-12 px-8 w-full md:w-1/2'>
          <h2 className='text-primary text-3xl font-semibold mb-4'>{t.whyChoose}</h2>
          <p className='text-textColor text-sm mb-12'>{t.whyChooseDescription}</p>
          <div className='missonAndVisionAndValues pl-4 flex flex-col gap-12'>
            <div className='mission flex gap-4 items-center'>
              <div className='missionImage w-20'>
                <img src={mission} alt='mission' loading='lazy' className='object-cover w-full h-full' />
              </div>
              <div className='missionContent flex flex-col gap-2'>
                <h3 className='text-primary text-xl font-semibold'>{t.mission}</h3>
                <p className='text-textColor text-sm'>{t.missionDescription}</p>
              </div>
            </div>

            <div className='values flex gap-4 items-center'>
              <div className='missionImage w-20'>
                <img src={values} alt='values' loading='lazy' className='object-cover w-full h-full' />
              </div>
              <div className='missionContent flex flex-col gap-2'>
                <h3 className='text-primary text-xl font-semibold'>{t.values}</h3>
                <p className='text-textColor text-sm'>{t.valuesDescription}</p>
              </div>
            </div>

            <div className='vision flex gap-4 items-center'>
              <div className='missionImage w-20'>
                <img src={vision} alt='values' loading='lazy' className='object-cover w-full h-full' />
              </div>
              <div className='missionContent flex flex-col gap-2'>
                <h3 className='text-primary text-xl font-semibold'>{t.vision}</h3>
                <p className='text-textColor text-sm'>{t.visionDescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactimage w-full md:w-1/2  h-screen md:h-auto relative flex justify-center items-center">
          <img
            src={contact}
            alt="contact main img"
            loading="lazy"
            className="w-full h-full object-cover object-center "
          />
          <div className="bg-primary w-10/12 md:w-6/12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4 gap-4 opacity-90 rounded border-2 border-accent max-w-md">
            <img src={trophy} loading="lazy" alt="Trophy" className="w-24 h-24 object-contain" />
            <h2 className="text-white text-base md:text-xl font-semibold">
              {t.customerGoal}
            </h2>
            <hr className="border-t-2 border-white w-1/4 mx-auto my-2" />
            <p className="text-white md:text-sm lg:text-base">
              {t.customerSupport}
            </p>
          </div>
        </div>
      </section>

      <section 
        className="bg-cover bg-center flex flex-col md:flex-row items-center p-12 gap-16"
        style={{
          backgroundImage: `linear-gradient(rgba(32, 59, 84, 0.5), rgba(32, 59, 84, 0.5)), url(${transport})`
        }}
      >
        <h2 className='text-5xl text-white font-bold w-full md:w-3/12'>{t.trackFleet}</h2>
        <div className='cards grid grid-cols-1 md:grid-cols-2 gap-24 w-full md:w-8/12 items-center'>
          <p className='p-6 bg-primary rounded-lg text-sm py-8 text-white'>{t.trackDescription1}</p>
          <img src={logo} alt='logo of company' loading="lazy" className='rounded-full overflow-hidden' />
          <p className='p-6 bg-primary rounded-lg text-sm py-8 text-white'>{t.trackDescription2}</p>
          <p className='p-6 bg-primary rounded-lg text-sm py-8 text-white'>{t.trackDescription3}</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;