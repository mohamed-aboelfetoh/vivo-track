import React, { useContext } from "react";
import protection from "../images/fleet protection.png";
import tracking from "../images/fleet tracking.png";
import Cost from "../images/cost reduction.png";
import Solving from "../images/solving.png";
import control from "../images/Customizable control panel.jpg";
import recovery from "../images/Recovery of Vehicle Itinerary.jpg";
import Geofence from "../images/Geofence Alerts.jpg";
import suitable from "../images/Suitable for all areas.webp";
import { LanguageContext } from './LanguageContext';

function Services() {
  const { language } = useContext(LanguageContext);

  // Translations
  const translations = {
    en: {
      getToKnow: "Get To Know Our Services",
      servicesDescription: "Viva Track offers you comprehensive and advanced solutions for safe monitoring and protection of all your vehicles.",
      fleetProtection: "Fleet Protection",
      fleetProtectionDescription: "Protecting your fleet and cargo. Companies lose a lot of money every year due to theft of goods, vehicles, or trailers. Fleet management software VIVA Track GPS can play a key role in preventing theft of vehicles and goods, as well as helping with recovery.",
      fleetTracking: "Fleet Tracking",
      fleetTrackingDescription: "Track and manage any object in real-time on your computer or phone. This includes cars, buses, motorcycles, services, delivery, heavy trucks, taxis, goods, construction equipment, etc.",
      costReduction: "Cost Reduction",
      costReductionDescription: "The GPS fleet tracking system helps detect theft, recover stolen vehicles and goods, and qualify you for discounts on insurance premiums. Many providers offer price reductions for vehicles.",
      solvingInvoice: "Solving Invoice Problems",
      solvingInvoiceDescription: "Accurately record arrival and departure times at customers' locations. Fleet tracking provides data to resolve customer invoice disputes, monitor driver tasks, and distribute tasks efficiently.",
      features: "VIVA Track Features",
      customizableControl: "Customizable Control Panel",
      customizableControlDescription1: "Fleet managers can enjoy richer designs with responsive content from any access point, with the ability to customize the interface.",
      customizableControlDescription2: "VIVA Track offers customizable dashboards and over 70 reports tailored to your specific requirements.",
      recoveryItinerary: "Recovery of Vehicle Itinerary",
      recoveryItineraryDescription1: "Provides complete historical data on fleets with drivers’ and vehicles’ activities for an unlimited period of time, retrieving the itinerary of vehicles and knowing their stops.",
      recoveryItineraryDescription2: "VIVA Trackprovides information about vehicles and drivers, enabling fleet managers to retrieve vehicle itineraries, know stops, and download comprehensive reports.",
      geofenceAlerts: "Geofence Alerts",
      geofenceAlertsDescription1: "Fleet managers can create custom ribbed or circular areas to send entry or exit alerts.",
      geofenceAlertsDescription2: "VIVA Trackoffers geofence options, exclusion zones, and safety zones to alert managers when vehicles leave safety areas.",
      suitableAreas: "Suitable for All Areas",
      suitableAreasDescription1: "You can customize the VIVA Tracksoftware panel to suit your business or fleet to achieve optimal results.",
      suitableAreasDescription2: "Ideal for education, public transport, car rental, construction, industry, waste management, car insurance, and more."
    },
    de: {
      getToKnow: "Lernen Sie unsere Dienstleistungen kennen",
      servicesDescription: "Viva Track bietet Ihnen umfassende und fortschrittliche Lösungen für die sichere Überwachung und den Schutz aller Ihrer Fahrzeuge.",
      fleetProtection: "Flottenschutz",
      fleetProtectionDescription: "Schutz Ihrer Flotte und Fracht. Unternehmen verlieren jedes Jahr viel Geld durch Diebstahl von Waren, Fahrzeugen oder Anhängern. Die Flottenmanagement-Software VIVA Track GPS kann eine Schlüsselrolle bei der Verhinderung von Diebstahl von Fahrzeugen und Waren sowie bei der Wiederbeschaffung spielen.",
      fleetTracking: "Flottenverfolgung",
      fleetTrackingDescription: "Verfolgen und verwalten Sie jedes Objekt in Echtzeit auf Ihrem Computer oder Telefon. Dazu gehören Autos, Busse, Motorräder, Dienstleistungen, Lieferungen, schwere Lkw, Taxis, Güter, Baumaschinen usw.",
      costReduction: "Kostensenkung",
      costReductionDescription: "Das GPS-Flottenverfolgungssystem hilft bei der Erkennung von Diebstahl, der Wiederbeschaffung gestohlener Fahrzeuge und Waren und qualifiziert Sie für Rabatte bei Versicherungsprämien. Viele Anbieter bieten Preisnachlässe für Fahrzeuge an.",
      solvingInvoice: "Lösung von Rechnungsproblemen",
      solvingInvoiceDescription: "Erfassen Sie die Ankunfts- und Abfahrtszeiten an den Standorten der Kunden genau. Die Flottenverfolgung liefert Daten zur Beilegung von Rechnungsstreitigkeiten mit Kunden, zur Überwachung von Fahreraufgaben und zur effizienten Verteilung von Aufgaben.",
      features: "VIVA Track-Funktionen",
      customizableControl: "Anpassbares Bedienfeld",
      customizableControlDescription1: "Flottenmanager können reichhaltigere Designs mit responsiven Inhalten von jedem Zugriffspunkt aus genießen und die Benutzeroberfläche anpassen.",
      customizableControlDescription2: "VIVA Track bietet anpassbare Dashboards und über 70 Berichte, die auf Ihre spezifischen Anforderungen zugeschnitten sind.",
      recoveryItinerary: "Wiederherstellung der Fahrzeugroute",
      recoveryItineraryDescription1: "Bietet vollständige historische Daten zu Flotten mit Aktivitäten von Fahrern und Fahrzeugen für einen unbegrenzten Zeitraum, ruft die Route von Fahrzeugen ab und kennt deren Stopps.",
      recoveryItineraryDescription2: "VIVA Track bietet Informationen über Fahrzeuge und Fahrer, mit denen Flottenmanager Fahrzeugrouten abrufen, Stopps kennen und umfassende Berichte herunterladen können.",
      geofenceAlerts: "Geofence-Benachrichtigungen",
      geofenceAlertsDescription1: "Flottenmanager können benutzerdefinierte gerippte oder kreisförmige Bereiche erstellen, um Ein- oder Ausstiegsbenachrichtigungen zu senden.",
      geofenceAlertsDescription2: "VIVA Track bietet Geofence-Optionen, Ausschlusszonen und Sicherheitszonen, um Manager zu benachrichtigen, wenn Fahrzeuge Sicherheitsbereiche verlassen.",
      suitableAreas: "Geeignet für alle Bereiche",
      suitableAreasDescription1: "Sie können das VIVA Track-Software-Panel an Ihr Unternehmen oder Ihre Flotte anpassen, um optimale Ergebnisse zu erzielen.",
      suitableAreasDescription2: "Ideal für Bildung, öffentlichen Verkehr, Autovermietung, Bauwesen, Industrie, Abfallwirtschaft, Kfz-Versicherung und mehr."
    }
  };

  const t = translations[language];

  const services = [
    {
      id: 1,
      image: protection,
      title: t.fleetProtection,
      description: t.fleetProtectionDescription,
    },
    {
      id: 2,
      image: tracking,
      title: t.fleetTracking,
      description: t.fleetTrackingDescription,
    },
    {
      id: 3,
      image: Cost,
      title: t.costReduction,
      description: t.costReductionDescription,
    },
    {
      id: 4,
      image: Solving,
      title: t.solvingInvoice,
      description: t.solvingInvoiceDescription,
    },
  ];

  const features = [
    {
      title: t.customizableControl,
      image: control,
      alt: "A customizable dashboard for fleet management",
      paragraphs: [
        t.customizableControlDescription1,
        t.customizableControlDescription2,
      ],
      reverse: false,
    },
    {
      title: t.recoveryItinerary,
      image: recovery,
      alt: "Vehicle itinerary recovery system",
      paragraphs: [
        t.recoveryItineraryDescription1,
        t.recoveryItineraryDescription2,
      ],
      reverse: true,
    },
    {
      title: t.geofenceAlerts,
      image: Geofence,
      alt: "Geofence alert system",
      paragraphs: [
        t.geofenceAlertsDescription1,
        t.geofenceAlertsDescription2,
      ],
      reverse: false,
    },
    {
      title: t.suitableAreas,
      image: suitable,
      alt: "Fleet management system suitable for all business areas",
      paragraphs: [
        t.suitableAreasDescription1,
        t.suitableAreasDescription2,
      ],
      reverse: true,
    },
  ];

  return (
    <main role="main">
      {/* Services Section */}
      <section
        className="py-16 bg-[#f9f9f9]"
        aria-labelledby="services-heading"
      >
        <div className="container flex flex-col md:flex-row gap-12 md:items-center">
          <div className="content w-full md:w-1/3 flex flex-col gap-4">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-primary text-center md:text-start"
            >
              {t.getToKnow}
            </h2>
            <p className="text-lg text-textColor font-semibold text-center md:text-start">
              {t.servicesDescription}
            </p>
          </div>

          <div
            className="cards grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 gap-4"
            role="list"
          >
            {services.map((service) => (
              <div
                key={service.id}
                role="listitem"
                className="cardData border-2 border-[#abbac7] border-solid rounded-xl p-6 flex flex-col gap-6 md:hover:bg-white md:hover:shadow-lg md:hover:border-white transition-all duration-200"
              >
                <div className="cardImage w-12 h-12">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div className="content flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-lg text-textColor font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-4"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="text-center text-3xl text-primary font-bold"
        >
          {t.features}
        </h2>

        {/* Feature Items */}
        {features.map((feature, index) => (
          <div
            key={index}
            className={`imagesAndContentContainer flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-6 my-16 items-center`}
          >
            <div className="contentContainer w-full md:w-1/3 text-center px-6 md:px-0 md:mx-8">
              <h3 className="text-xl text-primary font-semibold mb-4">
                {feature.title}
              </h3>
              <div className="paragraphsContainer flex flex-col gap-12 text-primary text-sm">
                {feature.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div
              className={`imageContainer w-full md:w-2/3 ${
                feature.reverse ? "rounded-r-[100px]" : "rounded-l-[100px]"
              } h-60 md:h-80 overflow-hidden shadow-[0px_0px_15px_rgba(0,0,0,0.5)]`}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;