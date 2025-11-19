import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Make sure this matches EXACTLY with your verified property in Google Search Console
  // Check if your property is verified as:
  // - https://aamirenterprises.com (no www)
  // - https://www.aamirenterprises.com (with www)
  // The URLs must match exactly, including www or no www
  
  const baseUrl = 'https://aamirenterprises.com'; // Change to https://www.aamirenterprises.com if your property has www
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
