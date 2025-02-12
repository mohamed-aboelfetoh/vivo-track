import React, { useContext } from 'react';
import main from "../images/carousel-bg-2.jpg";
import phonemain from "../images/woman-using-smartphone-technology_23-2149491868.png";
import tracking from "../images/vehicle.png";
import userFriendly from "../images/friends.png";
import reports from "../images/enhancement.png";
import gpsTracker from "../images/2a2b4ee6-dbf0-4532-a5e7-2704b0a1d33a.webp";
import home from "../images/ezgif-5-c0946c82f2.jpg"
import secure from "../images/rb_2149251019.png"
import cloud from "../images/cloud.png"
import uptime from "../images/uptime.png"
import support from "../images/customer-service.png"
import PhoneFrameSection from "../components/useScreenDrag"
import { NavLink } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

function Home() {
  const { language } = useContext(LanguageContext);

  // Translations
  const translations = {
    en: {
      headline: "GPS Vehicle Tracking for better, safer & more efficient fleet control",
      subheading: "Electronic logbooks, in-vehicle-monitoring systems and enterprise GPS telematics solutions",
      services: "Our Services",
      trackVehicles: "Track Your Vehicles",
      trackDescription: "Online GPS tracking services for your fleet of vehicles. Locate and track in real time through the web and your smartphone, from every location in the world!",
      userFriendly: "User Friendly",
      userFriendlyDescription: "We build our software in a way so it is easy to use for everyone. Great graphics and improved functionality is the key to our apps, in order to make sure you will love our services.",
      enhancedReports: "Enhanced Reports",
      enhancedReportsDescription: "Enhanced reports and graphics in order to get the most out of our software. We offer a variety of reports in various formats, so you can analyze in depth the data of your vehicles.",
      gpsTrackers: "All GPS Trackers are Supported",
      gpsTrackersDescription1: "We constantly update our GPS Tracking Software to ensure that all GPS Tracker devices are supported! Currently, more than 500 GPS Tracker devices from various manufacturers are supported through our pioneering GPS tracking application.",
      gpsTrackersDescription2: "VIVA TRACK GPS platform works closely with the biggest GPS tracker manufacturers, like Teltonika, Coban, TKSTAR, Xexun, and many more to ensure that their latest updates are implemented in our application.",
      gpsTrackersDescription3: "In the unlikely case where your existing GPS Tracker device is not in our supported list, contact us providing the protocol of the device you have and we will implement it soon!",
      onlineGps: "ONLINE GPS TRACKING SOFTWARE",
      onlineGpsDescription1: "We offer you a complete online GPS Tracking software that will help you manage your fleet of vehicles and optimize the way you used to work until now. Implementing a fleet management approach into your business vehicles will increase your employees’ productivity, and in addition, you will acquire critical and useful reports about the behavior of your vehicles.",
      onlineGpsDescription2: "Our online web-based GPS tracking software provides you with an easy-to-use monitoring dashboard, which helps you retrieve valuable insights & crucial information-driven directly through your vehicles! Real-time GPS tracking solution through our pioneer Tracking software.",
      onlineGpsDescription3: "Create now your free trial account and add your vehicles on our GPS tracking software. Our application is easy to use, with great graphics, useful reports and mobile friendly. You can access it from any location in the world and from every device that has access on the Internet! Take control of your assets and optimize the way you used to work until now!",
      whyChoose: "WHY TO CHOOSE VIVA TRACK",
      whyChooseDescription1: "We know there are many competitors out there, so we really appreciate your decision to consider VIVA TRACK as your potential GPS Tracking Software provider. Our years of experience in the industry help us in delivering true value solutions for the real-time tracking needs of your company. Our highly robust, secure and affordable solutions aim at fulfilling your bespoke hosting needs.",
      whyChooseDescription2: "Our continuous real-time GPS Tracking and monitoring services are designed exclusively to help your website attain peak performance and enable you to focus on your core business activities. In case you are still having doubts about choosing us as your software provider, there are many reasons to boost your confidence over our company!",
      whyChooseDescription3: "What we promise you is that we will always try to give you the best possible result; In the end, it’s what we do and who we are. And we do great job!",
      secureReliable: "SECURE AND RELIABLE",
      secureReliableDescription: "We take security very seriously and therefore we constantly impove our application to meet the latest security standards. Also all our services are protected by a robust enterprise-class web application firewall (WAF)",
      cloudCdn: "CLOUD & CDN INFRASTRUCTURE",
      cloudCdnDescription: "All our services are hosted in cloud servers and implement a Content Delivery Network (CDN ) to our infrastructure so we offer the best possible delivery times. Actually the best in the market!",
      uptime: "99,9% UPTIME",
      uptimeDescription: "Our expertise and our modern business model of our SaaS establish a state of the art infrastructure which allows us to offer great uptime values of 99.9% for the majority of our services. Check our status page here.",
      support: "24/7 Support",
      supportDescription: "Having trouble with our system or you feel lost at some point? There are many ways to solve your questions and have no worries, as our support department is available 24/7 to assist you"
    },
    de: {
      headline: "GPS-Fahrzeugverfolgung für eine bessere, sicherere und effizientere Flottenkontrolle",
      subheading: "Elektronische Fahrtenbücher, Fahrzeugüberwachungssysteme und Unternehmens-GPS-Telematiklösungen",
      services: "Unsere Dienstleistungen",
      trackVehicles: "Verfolgen Sie Ihre Fahrzeuge",
      trackDescription: "Online-GPS-Tracking-Dienste für Ihre Fahrzeugflotte. Lokalisieren und verfolgen Sie in Echtzeit über das Web und Ihr Smartphone, von jedem Ort der Welt aus!",
      userFriendly: "Benutzerfreundlich",
      userFriendlyDescription: "Wir entwickeln unsere Software so, dass sie für jeden einfach zu bedienen ist. Großartige Grafiken und verbesserte Funktionalität sind der Schlüssel zu unseren Apps, um sicherzustellen, dass Sie unsere Dienste lieben werden.",
      enhancedReports: "Erweiterte Berichte",
      enhancedReportsDescription: "Erweiterte Berichte und Grafiken, um das Beste aus unserer Software herauszuholen. Wir bieten eine Vielzahl von Berichten in verschiedenen Formaten, damit Sie die Daten Ihrer Fahrzeuge detailliert analysieren können.",
      gpsTrackers: "Alle GPS-Tracker werden unterstützt",
      gpsTrackersDescription1: "Wir aktualisieren unsere GPS-Tracking-Software ständig, um sicherzustellen, dass alle GPS-Tracker-Geräte unterstützt werden! Derzeit werden mehr als 500 GPS-Tracker-Geräte verschiedener Hersteller durch unsere wegweisende GPS-Tracking-Anwendung unterstützt.",
      gpsTrackersDescription2: "Die VIVA TRACK GPS-Plattform arbeitet eng mit den größten GPS-Tracker-Herstellern wie Teltonika, Coban, TKSTAR, Xexun und vielen anderen zusammen, um sicherzustellen, dass deren neueste Updates in unserer Anwendung implementiert werden.",
      gpsTrackersDescription3: "Falls Ihr vorhandenes GPS-Tracker-Gerät nicht in unserer unterstützten Liste enthalten ist, kontaktieren Sie uns und geben Sie das Protokoll des Geräts an, das Sie haben, und wir werden es bald implementieren!",
      onlineGps: "ONLINE-GPS-TRACKING-SOFTWARE",
      onlineGpsDescription1: "Wir bieten Ihnen eine vollständige Online-GPS-Tracking-Software, die Ihnen hilft, Ihre Fahrzeugflotte zu verwalten und die Art und Weise zu optimieren, wie Sie bisher gearbeitet haben. Die Implementierung eines Flottenmanagement-Ansatzes in Ihre Geschäftsfahrzeuge wird die Produktivität Ihrer Mitarbeiter steigern, und zusätzlich erhalten Sie kritische und nützliche Berichte über das Verhalten Ihrer Fahrzeuge.",
      onlineGpsDescription2: "Unsere webbasierte GPS-Tracking-Software bietet Ihnen ein einfach zu bedienendes Überwachungs-Dashboard, mit dem Sie wertvolle Erkenntnisse und entscheidende Informationen direkt über Ihre Fahrzeuge abrufen können! Echtzeit-GPS-Tracking-Lösung durch unsere wegweisende Tracking-Software.",
      onlineGpsDescription3: "Erstellen Sie jetzt Ihr kostenloses Testkonto und fügen Sie Ihre Fahrzeuge zu unserer GPS-Tracking-Software hinzu. Unsere Anwendung ist einfach zu bedienen, mit großartigen Grafiken, nützlichen Berichten und mobilfreundlich. Sie können von jedem Ort der Welt und von jedem Gerät aus darauf zugreifen, das Zugriff auf das Internet hat! Übernehmen Sie die Kontrolle über Ihre Assets und optimieren Sie die Art und Weise, wie Sie bisher gearbeitet haben!",
      whyChoose: "WARUM VIVA TRACK WÄHLEN?",
      whyChooseDescription1: "Wir wissen, dass es viele Wettbewerber gibt, und wir schätzen Ihre Entscheidung, VIVA TRACK als potenziellen GPS-Tracking-Software-Anbieter in Betracht zu ziehen. Unsere langjährige Erfahrung in der Branche hilft uns dabei, echte Mehrwertlösungen für die Echtzeit-Tracking-Anforderungen Ihres Unternehmens zu liefern. Unsere äußerst robusten, sicheren und erschwinglichen Lösungen zielen darauf ab, Ihre individuellen Hosting-Anforderungen zu erfüllen.",
      whyChooseDescription2: "Unsere kontinuierlichen Echtzeit-GPS-Tracking- und Überwachungsdienste sind ausschließlich darauf ausgelegt, Ihrer Website zu Spitzenleistungen zu verhelfen und Ihnen zu ermöglichen, sich auf Ihre Kernaktivitäten zu konzentrieren. Falls Sie immer noch Zweifel haben, uns als Softwareanbieter zu wählen, gibt es viele Gründe, Ihr Vertrauen in unser Unternehmen zu stärken!",
      whyChooseDescription3: "Was wir Ihnen versprechen, ist, dass wir immer versuchen werden, Ihnen das bestmögliche Ergebnis zu liefern; Am Ende ist es das, was wir tun und wer wir sind. Und wir machen einen großartigen Job!",
      secureReliable: "SICHER UND ZUVERLÄSSIG",
      secureReliableDescription: "Wir nehmen Sicherheit sehr ernst und verbessern unsere Anwendung ständig, um die neuesten Sicherheitsstandards zu erfüllen. Außerdem sind alle unsere Dienste durch eine robuste Enterprise-Class-Web Application Firewall (WAF) geschützt.",
      cloudCdn: "CLOUD- & CDN-INFRASTRUKTUR",
      cloudCdnDescription: "Alle unsere Dienste werden in Cloud-Servern gehostet und implementieren ein Content Delivery Network (CDN) in unserer Infrastruktur, sodass wir die bestmöglichen Lieferzeiten bieten. Tatsächlich die besten auf dem Markt!",
      uptime: "99,9 % UPTIME",
      uptimeDescription: "Unser Fachwissen und unser modernes Geschäftsmodell unseres SaaS schaffen eine state-of-the-art-Infrastruktur, die es uns ermöglicht, großartige Uptime-Werte von 99,9 % für die Mehrheit unserer Dienste zu bieten. Überprüfen Sie hier unsere Statusseite.",
      support: "24/7-Unterstützung",
      supportDescription: "Haben Sie Probleme mit unserem System oder fühlen Sie sich an einem Punkt verloren? Es gibt viele Möglichkeiten, Ihre Fragen zu lösen, und keine Sorge, unsere Support-Abteilung ist rund um die Uhr verfügbar, um Ihnen zu helfen."
    }
  };

  const t = translations[language];

  const services = [
    {
      title: t.trackVehicles,
      description: t.trackDescription,
      image: tracking,
      ariaLabel: "Vehicle tracking service"
    },
    {
      title: t.userFriendly,
      description: t.userFriendlyDescription,
      image: userFriendly,
      ariaLabel: "User friendly service"
    },
    {
      title: t.enhancedReports,
      description: t.enhancedReportsDescription,
      image: reports,
      ariaLabel: "Enhanced reporting service"
    }
  ];

  return (
    <main>
      {/* Image Section with Small Screen Image */}
      <section className="home page image relative flex flex-col items-center justify-center h-screen sm:bg-cover sm:h-screen md:h-screen"
        style={{
          backgroundImage: `url(${main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Main image section"
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary opacity-50 sm:opacity-50 md:opacity-50"></div>
        
        {/* For Small Screens, Display Phonemain Image */}
        <div className="sm:hidden absolute inset-0">
          <img src={phonemain} alt="Phone Background" className="w-full h-full object-cover" aria-label="Phone image for small screens" />
          <div className="absolute inset-0 bg-primary opacity-50"></div>
        </div>

        {/* For Medium and Larger Screens, Display Main Image */}
        <article className="flex flex-col mt-[-100px] md:mt-0 text-center items-center font-medium md:font-bold gap-6 text-white z-10 w-10/12 md:w-8/12">
          <p className="text-xl font-bold md:text-3xl z-10" aria-label="Main headline">{t.headline}</p>
          <p className="text-md w-9/12 font-semibold md:text-2xl z-10 md:w-8/12" aria-label="Subheading">{t.subheading}</p>
        </article>
      </section>

      {/* Services Section */}
      <section className="container mx-auto my-10" aria-label="Services offered">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-primary" aria-label="Services section header">{t.services}</h2>
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {services.map((service, index) => (
            <div key={index} className="group text-primary rounded-md p-6 flex flex-col justify-center items-center gap-4 border-2 border-solid" aria-label={service.ariaLabel}>
              {service.image && (
                <div className='image w-16 h-16 flex items-center justify-center'>
                  <img src={service.image} alt={service.title} className='w-full' aria-label={service.title} />
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold border-b-2 transition-all duration-300 pb-2 border-white group-hover:border-b-2 group-hover:border-primary" aria-label="Service title">{service.title}</h3>
                <p className="text-md">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GPS Tracker Section */}
      <section className="container mx-auto my-10 flex flex-col items-center justify-center md:flex-row gap-6" aria-label="GPS tracker section">
        <div className='image w-10/12 md:w-full flex items-center justify-center rounded-md overflow-hidden'>
          <img src={gpsTracker} className='object-contain' alt='GPS tracker img' aria-label="GPS tracker image" />
        </div>
        <div className="text-primary p-6 flex flex-col gap-3">
          <h2 className='font-bold text-xl'>{t.gpsTrackers}</h2>
          <p>{t.gpsTrackersDescription1}</p>
          <p>{t.gpsTrackersDescription2}</p>
          <p>{t.gpsTrackersDescription3}</p>
        </div>
      </section>

      {/* Online GPS Tracking Software Section */}
      <section className='bg-[#f6f6f6]' aria-label="GPS tracking software details">
        <div className='container flex py-10 gap-16 flex-col md:flex-row items-center'>
          <div className='content-container w-full md:w-1/2 flex flex-col gap-4'>
            <h2 className='text-[#334862] text-3xl'>{t.onlineGps}</h2>
            <p className='text-textColor text-lg'>{t.onlineGpsDescription1}</p>
            <p className='text-textColor text-lg'>{t.onlineGpsDescription2}</p>
            <p className='text-textColor text-lg'>{t.onlineGpsDescription3}</p>
            <NavLink to="/about" className='bg-[#446084] self-start px-7 py-1 text-lg font-semibold text-white'>
              Learn More
            </NavLink>
          </div>
          <div className='media-container w-full md:w-1/2 flex flex-col gap-4'>
            <div className='video w-full md:w-11/12'>
              <iframe width="100%" height="278" src="https://www.youtube.com/embed/DwMy6aSIWjI" title="How VIVA TRACK can help your business" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen aria-label="Viva Track business video"></iframe>                       
            </div>
            <div className='image w-full'>
              <img src={home} alt='Home img' aria-label="Home image" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VIVA Track Section */}
      <section>
        <div className='container py-10 flex flex-col gap-4'>
          <h2 className='text-primary text-3xl'>{t.whyChoose}</h2>
          <p className='text-textColor text-lg'>{t.whyChooseDescription1}</p>
          <p className='text-textColor text-lg'>{t.whyChooseDescription2}</p>
          <p className='text-textColor text-lg'>{t.whyChooseDescription3}</p>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-10">
          <div className="card flex flex-col bg-section gap-3 text-center p-3 items-center rounded-lg border-white  border-solid border-2 md:hover:border-secondary transition-all duration-500">
            <div className="image bg-secondary flex justify-center items-center relative rounded-md w-20">
              <img src={secure} alt="Secure and reliable" aria-label="Secure and reliable service" />
            </div>
            <h3 className="text-[#555555] text-xl font-bold">{t.secureReliable}</h3>
            <p className="text-[#446084] text-lg text-center">{t.secureReliableDescription}</p>
          </div> 

          <div className="card flex flex-col bg-section gap-3 text-center p-3 items-center rounded-lg border-white  border-solid border-2 md:hover:border-secondary transition-all duration-500">
            <div className="image bg-secondary flex justify-center items-center relative rounded-md w-20">
              <img src={cloud} alt="Cloud & CDN infrastructure" aria-label="Cloud and CDN infrastructure" />
            </div>
            <h3 className="text-[#555555] text-xl font-bold">{t.cloudCdn}</h3>
            <p className="text-[#446084] text-lg text-center">{t.cloudCdnDescription}</p>
          </div>      

          <div className="card flex flex-col bg-section gap-3 text-center p-3 items-center rounded-lg border-white  border-solid border-2 md:hover:border-secondary transition-all duration-500">
            <div className="image bg-secondary flex justify-center items-center relative rounded-md w-20">
              <img src={uptime} alt="99.9% uptime" aria-label="99.9% uptime" />
            </div>
            <h3 className="text-[#555555] text-xl font-bold">{t.uptime}</h3>
            <p className="text-[#446084] text-lg text-center">{t.uptimeDescription}</p>
          </div>  

          <div className="card flex flex-col bg-section gap-3 text-center p-3 items-center rounded-lg border-white  border-solid border-2 md:hover:border-secondary transition-all duration-500">
            <div className="image bg-secondary flex justify-center items-center relative rounded-md w-20">
              <img src={support} alt="24/7 support" aria-label="24/7 support" />
            </div>
            <h3 className="text-[#555555] text-xl font-bold">{t.support}</h3>
            <p className="text-[#446084] text-lg text-center">{t.supportDescription}</p>
          </div>  
        </div>
      </section>
      
      {/* Phone Frame Section */}
      <section>
        <PhoneFrameSection />
      </section>
    </main>
  );
}

export default Home;