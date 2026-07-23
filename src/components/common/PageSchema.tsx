import React from 'react';
import Script from 'next/script';

interface PageSchemaProps {
  schemaData?: Record<string, any> | null;
}

export const PageSchema = ({ schemaData }: PageSchemaProps) => {
  if (!schemaData) return null;

  return (
    <Script
      id={`page-schema-${Math.random().toString(36).substring(2, 9)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
