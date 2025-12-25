import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

export function SEO({
    title = "Oranex Labs | Premium Digital Experiences",
    description = "Oranex Labs is a leading web, mobile, and AI development agency designing quiet, confident digital experiences.",
    keywords = "web development, mobile apps, AI development, digital agency, premium design, software engineering",
    image = "/og-image.jpg"
}: SEOProps) {
    const siteTitle = title.includes('|') ? title : `${title} | Oranex Labs`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
