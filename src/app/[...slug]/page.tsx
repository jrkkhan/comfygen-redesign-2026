import { fetchAPI } from "@/lib/api";
import { Metadata } from 'next';
import { DynamicPageSchema } from '@/components/common/DynamicPageSchema';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { SolutionPageTemplate } from '@/components/templates/SolutionPageTemplate';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function parseSlug(slug: string[] | string) {
  if (slug.length > 2) {
    return null;
  }

  if (slug.length === 2) {
    return {
      category: slug[0],
      pageSlug: slug[1],
      combinedUrl: typeof slug === "string" ? slug : slug.join("/"),
    };
  }

  return {
    category: "pages",
    pageSlug: slug[0] || "",
    combinedUrl: typeof slug === "string" ? slug : slug.join("/"),
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const parsed = parseSlug(slug);
  if (!parsed) {
    const pageSlug = slug?.[0] || "Comfygen";
    return {
      title: `${pageSlug.replace(/-/g, ' ').toUpperCase()} | Comfygen`,
      description: `Leading ${pageSlug.replace(/-/g, ' ')} services by Comfygen.`,
    };
  }
  const { category, pageSlug, combinedUrl } = parsed;
  try {
    const seo = await fetchAPI('/getPageDataBySlug', {
      category: category,
      slug: pageSlug,
      meta: "meta"
    });

    if (seo) {
      return {
        title: seo.metaTitle || seo.title || `${pageSlug.replace(/-/g, ' ').toUpperCase()} | Comfygen`,
        description: seo.metaDescription || seo.description || `Leading ${pageSlug.replace(/-/g, ' ')} services by Comfygen.`,
        keywords: seo.keywords,
        alternates: {
          canonical: seo.canonicalURL || `https://www.comfygen.com/${combinedUrl}`,
        },
        robots: {
          index: true,
          follow: true,
        },
        openGraph: {
          title: seo.metaTitle || seo.title,
          description: seo.metaDescription || seo.description,
          url: `https://www.comfygen.com/${combinedUrl}`,
          siteName: 'Comfygen',
          type: 'website',
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: `${pageSlug.replace(/-/g, ' ').toUpperCase()} | Comfygen`,
    description: `Leading ${pageSlug.replace(/-/g, ' ')} services by Comfygen.`,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) {
    return notFound();
  }
  const { category, pageSlug, combinedUrl } = parsed;
  const data = await fetchAPI('/getPageDataBySlug', {
    category: category,
    slug: pageSlug
  });

  if (!data) {
    return notFound();
  }

  const url = `https://www.comfygen.com/${combinedUrl}`;

  const seoData = data.attributes?.Seo || data.Seo || data.attributes?.seo || data.seo;
  const title = seoData?.metaTitle || seoData?.title || `${pageSlug.replace(/-/g, ' ').toUpperCase()} | Comfygen`;
  const description = seoData?.metaDescription || seoData?.description || `Leading ${pageSlug.replace(/-/g, ' ')} services by Comfygen.`;

  return (
    <>
      <DynamicPageSchema
        title={title}
        description={description}
        url={url}
        type="Service"
        customSchema={seoData?.structuredData}
      />
      {category === "pages" && <ServicePageTemplate slug={pageSlug} data={data} />}
      {category === "solutions" && <SolutionPageTemplate slug={pageSlug} solutionData={data} />}
      {category === "industries" && <IndustryPageTemplate slug={pageSlug} industryData={data} />}
    </>
  );
}
