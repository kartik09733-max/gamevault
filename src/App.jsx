import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import UIDVerification from "./components/common/UIDVerification";
import ProductGrid from "./components/products/ProductGrid";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/layout/Footer";
import PaymentModal from "./components/payment/PaymentModal";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17]">
      <Navbar />
      <Hero />
      <UIDVerification />
      <ProductGrid />
      <FAQ />
      <Footer />
      <PaymentModal />
    </div>
  );
}

export default App;