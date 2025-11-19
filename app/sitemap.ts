import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // CRITICAL: The baseUrl MUST match EXACTLY with your Google Search Console verified property URL
  // 
  // How to check your verified property:
  // 1. Go to Google Search Console: https://search.google.com/search-console
  // 2. Look at the top-left corner - it shows your property URL
  // 3. Check if it's:
  //    - https://aamirenterprises.com (no www) ✓ Use this
  //    - https://www.aamirenterprises.com (with www) ✗ Change baseUrl below
  //
  // If your property shows www, change the baseUrl to: 'https://www.aamirenterprises.com'
  // The domain MUST match exactly - Google rejects sitemaps with mismatched domains
  
  const baseUrl = 'https://aamirenterprises.com'; 
  // If your property is verified with www, use: 'https://www.aamirenterprises.com'
  
  const currentDate = new Date();
  
  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];
}
