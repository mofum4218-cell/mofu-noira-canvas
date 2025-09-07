// src/components/Seo.tsx
import Head from "next/head";
import org from "@/config/org/org.json";

type SeoProps = {
  title?: string;
  description?: string;
  url?: string;
};

const Seo: React.FC<SeoProps> = ({ title, description, url }) => {
  const fullTitle = title || org.seo?.title;
  const fullDesc = description || org.seo?.description;
  const fullUrl = url || org.og?.url;

  return (
    <Head>
      {/* 基本 SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta name="keywords" content={org.seo?.keywords?.join(", ")} />
      <meta name="author" content={org.seo?.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={org.seo?.themeColor} />

      {/* Favicon & canonical */}
      <link rel="icon" href={org.favicon} />
      <link rel="canonical" href={fullUrl} />

      {/* OGP */}
      <meta property="og:type" content={org.og?.type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={org.og?.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={org.og?.image} />
    </Head>
  );
};

export default Seo;

