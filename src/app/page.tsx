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
