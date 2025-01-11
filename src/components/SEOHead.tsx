import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Online Puja Booking | Expert Pandits for Traditional Rituals</title>
      <meta name="description" content="Book authentic puja services online with experienced pandits. Traditional rituals, genuine samagri, and complete satisfaction guaranteed. Available across India." />
      <meta name="keywords" content="online puja booking, pandit services, hindu rituals, traditional puja, satyanarayan puja, ganesh puja, graha shanti puja" />
      <meta property="og:title" content="Online Puja Booking | Expert Pandits for Traditional Rituals" />
      <meta property="og:description" content="Book authentic puja services online with experienced pandits. Traditional rituals, genuine samagri, and complete satisfaction guaranteed." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://yourwebsite.com" />
    </Helmet>
  );
};

export default SEOHead; 