import React from 'react';

export interface DynamicPageSchemaProps {
  title: string;
  description: string;
  url: string;
  type?: 'WebPage' | 'Service' | 'Article';
  customSchema?: any; // To support Strapi structuredData
}

export const DynamicPageSchema = ({ title, description, url, type = 'WebPage', customSchema }: DynamicPageSchemaProps) => {
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
    </>
  );
};
