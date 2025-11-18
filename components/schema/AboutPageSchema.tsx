export default function AboutPageSchema() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Aamir POP works - Aamir POP work Bhopal',
    'description': 'Learn about Aamir POP works - Aamir POP work Bhopal. Best POP ceiling and false ceiling contractor in Bhopal, Madhya Pradesh. Our journey since 2015, founder Aamir Khan, and commitment to expert POP work and false ceiling installation.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Aamir POP works',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://aamirenterprises.com/logo.svg'
      }
    },
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Aamir POP works',
      'alternateName': 'Aamir POP work Bhopal',
      'description': 'Best POP ceiling and false ceiling contractor in Bhopal, Madhya Pradesh. Aamir POP works provides expert POP work, false ceiling installation, gypsum ceiling, and PVC panels for homes and buildings.',
      'foundingDate': '2015',
      'founder': {
        '@type': 'Person',
        'name': 'Aamir Khan',
        'jobTitle': 'Founder & CEO'
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bhopal',
        'addressRegion': 'Madhya Pradesh',
        'postalCode': '453331',
        'addressCountry': 'IN'
      },
      'telephone': '+919399857669',
      'email': 'aamirbhai12245@gmail.com',
      'url': 'https://aamirenterprises.com'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
    />
  );
}
