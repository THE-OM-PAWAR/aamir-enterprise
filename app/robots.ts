import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: Make sure this matches EXACTLY with your sitemap URL
  // Use same pattern as sitemap.ts (with or without www)
  const baseUrl = 'https://aamirenterprises.com'; // Change to https://www.aamirenterprises.com if your property has www
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
