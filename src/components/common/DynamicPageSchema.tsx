import React from 'react';

export interface DynamicPageSchemaProps {
  title: string;
  description: string;
  url: string;
  type?: 'WebPage' | 'Service' | 'Article';
  customSchema?: any; // To support Strapi structuredData
  serviceSchema?: any; // To support Strapi serviceScema
}

export const DynamicPageSchema = ({ title, description, url, type = 'WebPage', customSchema, serviceSchema }: DynamicPageSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {customSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: typeof customSchema === 'string' ? customSchema : JSON.stringify(customSchema) 
          }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: typeof serviceSchema === 'string' ? serviceSchema : JSON.stringify(serviceSchema) 
          }}
        />
      )}
    </>
  );
};
