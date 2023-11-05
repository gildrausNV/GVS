import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import { useParams } from "react-router";
import ProductDetails from "./ProductDetails";
import powerSupplySystem from "../products/Power-supply-systems.jpg";
import powerSupplyModule from "../products/power-supply-modules.jpg";
import mobileRectifiers from "../products/mobile-rectifiers.jpg";
import switchingSystems from "../products/switching-systems.jpg";
import lawfulInterception from "../products/lawful-interception.png";
import softSwitches from "../products/soft-switches.jpg";

const ProductInfo = ({ t }) => {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: "Mobile Rectifier I1400T60P",
        image: mobileRectifiers,
        description:
          "Mobile rectifiers I1400T60P are used for supplying power to telephone exchanges and other telecom devices in the case of the primary power supply system fatal failure. Maintenance service may install mobile rectifier to power telecom equipment until the failed power supply system is repaired.",
        features: [
          "1400 W output power - 60 V, 20 A",
          "Fulfills relevant international standards and recommendations: ITU-T, ETSI, ISO, IEC ...",
          "Power factor corrected > 0.98",
          "Low psophometric noise < 1 mV",
          "High efficiency",
          "High reliability",
          "Does not require preventive maintenance",
          "High-frequency switchmode power conversion",
          "Small volume and weight",
          "Self-standing device",
          "Parallel operation of several units by direct output connection",
        ],
        applications: [
          "Emergency power supply of telecom equipment",
          "Accu-batteries maintenance",
          "Emergency power supply of computer and other professional electronic equipment",
          "Temporary power supply of telecom equipment before installation of uninterruptable power supply system",
          "Powering telecom and other electronic equipment at fairs, demonstrations, conferences, and other",
        ],
        benefits: [
          "Extremely robust, resistant to harsh working conditions, especially to damaging input disturbances",
          "Based on rectifier units I1400T from S3000 system - verified solutions, simplified maintenance",
          "Large LED display with switch for output current or output voltage",
          "Fully plug-in installation",
          "Extended input voltage range available on request",
          "Natural convection cooled",
          "Simple adjustment using front panel potentiometer",
        ],
      },
    {
      id: 2,
      name: "Uninterruptable Power Supply System S3000",
      image: powerSupplySystem,
      description:
        "Uninterruptable power supply system S3000 is designed to provide high-quality power to telephone exchanges and other telecom devices, where low disturbances, low noise, and short response time are mandatory. S3000 system is designed for 24 hours autonomous operation, enabling the application in remote locations without crew. May operate with or without batteries, with or without a diesel generator or other auxiliary power source.",
      features: [
        "Sixth generation power supply system since 1988",
        "Large capacity: up to 3000 А / 170 kW",
        "4 output voltage options: 48 V, 60 V, 24 V, 110 V",
        "Modular, up to 120 rectifier units 1400 W each",
        "Redundancy N+1, N+2 or N+P",
        "Built-in battery overdischarge protection",
        "Fulfills relevant international standards and recommendations: ITU-T, ETSI, ISO, IEC ...",
        "Power factor corrected > 0.98",
        "2 battery ports",
        "Low psophometric noise < 1 mV",
        "Temperature compensated output voltage",
        "High efficiency",
        "High reliability",
        "Does not require preventive maintenance",
      ],
      applications: [
        "Uninterruptable power supply of telecom equipment",
        "Accu-batteries maintenance",
        "Uninterruptable power supply of computer and other professional electronic equipment",
        "Replacement of old uninterruptable power supply systems",
      ],
      benefits: [
        "Same rectifier units for small and large capacity - simplified maintenance",
        "Extremely robust, resistant to harsh working conditions",
        "2 large LED displays + alphanumeric LCD",
        "Fully 'plug-in' rectifier units replacement",
        "Extended input voltage range available on request",
        "Natural convection cooled",
        "User-friendly, built-in 16-keys keyboard",
        "Mains voltage measurement option available",
        "LED display on each rectifier unit",
        "Integrates with SRCE TC-011 telephone exchange",
      ],
    },

    {
      id: 3,
      name: "Lawful Interception System TNC",
      image: lawfulInterception,
      description:
        "Lawful interception system or a system for authorized electronic monitoring enables interception of communications in the network, leaving the interception subject and his correspondents, network operators, service providers, and access providers unaware that the interception is taking place.",
      features: [
        "Full monitoring - call contents and interception-related information IRI",
        "Statistical monitoring - interception-related info only",
        "Complies with relevant international standards and recommendations ITU-T, ETSI, ISO, IEC ...",
        "Parallel operation up to 8 independent services or agencies authorized to perform lawful interception",
        "Standard, generally available input/output units and data formats",
        "Electrical characteristics per ITU-T Q and G series",
        "High reliability and immunity to external influences",
        "Built-in self-check and diagnostic functions",
        "Modular internal construction enables easy expansion or reconfiguring",
      ],
      applications: [
        "Lawful interception in the fixed public switched telephone network",
        "Lawful interception in the mobile telephone network",
        "Lawful interception in special / private / closed network",
        "Law Enforcement Monitoring Facility LEMF as defined in ETSI recommendations",
      ],
      benefits: [
        "Supports proprietary architectures and specifications not compatible with ETSI standards",
        "Technically unlimited number of targets",
        "High level of data protection, both collected and processed data, and high level of system protection",
        "Simultaneous independent interception of the same communication by several services or agencies",
        "Advanced processing of interception results through integration of third-party tools",
        "Fully software programmable interfaces",
        "Advanced and user-friendly Graphic User Interface simplifies operator work",
      ],
    },
    {
      id: 4,
      name: "Switching System SRCE TC 011",
      image: switchingSystems,
      description:
        "The SRCE TC 011 system is a digital public telephone switching system of high capacity, designed primarily for higher levels in the network hierarchy, but which can be used at all levels of a public switching network, including the lowest - local exchanges in decentralized networks. SRCE TC 011 is a completely digital switching system with stored program control, designed for implementing networks with remote switching units of both small and large capacities. To users, SRCE TC 011 provides a lot of services of the highest quality, it lowers network congestion due to its extraordinary technical capabilities, to operators, it provides a clear insight into the state of the network and the system itself, and increases the profits by lowering both the investment and maintenance costs.",
      features: [
        "High capacity 120,000 subscribers / 32,000 trunks",
        "Standard remote switching units 100 to 8,000 subscribers, optionally up to 60,000",
        "High traffic capacity",
        "Subscriber traffic up to 1 Erlang",
        "Complies to international standards and recommendations: ITU-T, ETSI, ISO, IEC, and others",
        "Both analog and digital subscribers",
        "Modern trunk signaling systems ITU-T SS7, R2, and many classic ones, for connections with analog systems",
        "Standard, generally available input-output units and data formats",
        "High reliability and resistance to outer influences",
        "Integrated auto-diagnostic functions",
        "Modular internal construction enables easy expansion or re-configuration",
      ],
      applications: [
        "Switching node in public network",
        "Node in special / private / closed networks",
        "Private Branch Exchange of large capacity",
        "Painless replacement of older generations switching systems",
      ],
      advantages: [
        "Completely programmatically adjustable interfaces",
        "Extremely low power consumption",
        "Plenty of functions for surveillance and maintenance of other network elements",
        "Direct ('by-pass') connections of remote switching units",
        "Simple and user-friendly work of operators is provided by advanced Graphic User Interface",
        "Ability to support 'obsolete' networks (i.e. party line boxes) which simplifies replacement of older generation switching systems",
      ],
    },
  ]);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filteredProduct = products.find((p) => p.id == productId);
    setProduct(filteredProduct);
  }, [productId]);

  return (
    <div className="product-info">
      <h1>{t('Product Information')}</h1>
      {product && 
        <ProductDetails product={product} t={t}/>
      }
    </div>
  );
};

export default ProductInfo;
