export default function ContactPageSchema() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Aamir POP works - Aamir POP work Bhopal',
    'description': 'Contact Aamir POP works for Aamir POP work Bhopal. POP ceiling and false ceiling work in Bhopal, Madhya Pradesh. Get free quotes for POP work, false ceiling installation, gypsum ceiling services.',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Aamir POP works',
      'alternateName': 'Aamir POP work Bhopal',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sonia Gandhi colony, House no 1, Gali no 1, Ashoka Garden',
        'addressLocality': 'Bhopal',
        'addressRegion': 'Madhya Pradesh',
        'postalCode': '453331',
        'addressCountry': 'IN'
      },
      'telephone': '+919399857669',
      'email': 'aamirbhai12245@gmail.com',
      'openingHours': [
        'Mo-Sa 09:00-19:00'
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
  );
}
