import React from 'react';

export const GlobalSchema = () => {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
          "addressLocality": "Jaipur",
          "postalCode": "302006",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
          "addressLocality": "Toronto",
          "postalCode": "M1G3S7",
          "addressCountry": "Canada"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Rhederstraße 34, 53881 Euskirchen, Germany ",
          "addressLocality": "Euskirchen",
          "postalCode": "53881",
          "addressCountry": "Germany"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://in.pinterest.com/ComfygenTechnologies/",
        "https://www.youtube.com/@Comfygen_Technologies",
        "https://www.comfygen.com/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.comfygen.com//#organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "sameAs": [
        "https://www.instagram.com/comfygen_technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.facebook.com/comfygen.technologies"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-579-977-4475",
          "contactType": "customer service",
          "areaServed": "CA",
          "availableLanguage": "en-CA"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-958-786-7258",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": "en-IN"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+49-1515-1402200",
          "contactType": "customer service",
          "areaServed": "DE",
          "availableLanguage": "en-DE"
        }
      ]
    },
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "AI-Based Mobile App and Web Development Company | Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};
