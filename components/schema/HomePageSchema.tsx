export default function HomePageSchema() {
  const homeSchema = {
    '@context': 'https://schema.org',
    'name': 'Aamir Enterprises S - POP Ceiling & False Ceiling Contractor Bhopal',
    'url': 'https://aamirenterprises.com',
    'logo': 'https://aamirenterprises.com/logo.svg',
    'description': 'Best POP ceiling and false ceiling contractor in Bhopal, Madhya Pradesh. Expert POP work, false ceiling installation, gypsum ceiling, and PVC panels for homes and buildings.',
    '@type': 'LocalBusiness',
    'priceRange': '$$',
    'areaServed': {
      '@type': 'City',
      'name': 'Bhopal'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '23.2599',
      'longitude': '77.4126'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sonia Gandhi colony, House no 1, Gali no 1, Ashoka Garden',
      'addressLocality': 'Bhopal',
      'addressRegion': 'Madhya Pradesh',
      'postalCode': '453331',
      'addressCountry': 'IN'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+919399857669',
      'contactType': 'customer service',
      'email': 'aamirbhai12245@gmail.com'
    },
    'sameAs': [
      'https://www.instagram.com/amkhan935',
      'https://youtube.com/@aamirbhai4956'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'POP Ceiling & False Ceiling Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'POP Ceiling Installation',
            'description': 'Professional POP ceiling work in Bhopal, Madhya Pradesh'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'False Ceiling Installation',
            'description': 'Expert false ceiling contractor services in Bhopal'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Gypsum Ceiling Work',
            'description': 'Gypsum ceiling installation and design in Bhopal'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'PVC Panel Ceiling',
            'description': 'PVC ceiling panels installation in Bhopal, MP'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
    />
  );
}
