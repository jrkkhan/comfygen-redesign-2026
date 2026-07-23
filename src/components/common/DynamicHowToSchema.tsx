import React from 'react';
import { ProcessStep } from './ProcessSteps';

export const DynamicHowToSchema = ({ steps, name, description }: { steps: ProcessStep[], name: string, description: string }) => {
  if (!steps || steps.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.desc
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
