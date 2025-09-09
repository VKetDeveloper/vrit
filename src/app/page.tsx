import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoBanner from './components/InfoBanner';
import LocationGrid from './components/LocationGrid';
import Footer from './components/Footer';
import Vket_RealNews from './components/vketreal_news';

export default function Home() {
  return (
    <>
      {/* Remove <Head> and use next/head */}
      <head>
        <title>VketReal in Tours - 有志開催のVketRealのポータルサイト- </title>
        <meta name="norton-safeweb-site-verification" content="1LOU0YUM25-JR4QVHMG9EG10FMX2S0K5GZFCQFH4HM-10-FCWN2BLNNOA3F4WTAZPK7AWYT0OG4KA8I1H0TSNRUQRH6IMY5Y1VL4-P3E28VVFT0WZUMY1AELPJ3WMMEE" />
        <meta name="description" content="VketReal in Toursは、有志開催のVketRealのポータルサイトです。" />
      </head>
      <Header />
      <HeroSection />
      <InfoBanner />
      <Vket_RealNews />
      <LocationGrid />
      <Footer />
    </>
  );
}
