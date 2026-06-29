import { diamonds, passes } from "../../data/products";
import ProductCard from "./ProductCard";
import { usePlayer } from "../../context/PlayerContext";
import { usePayment } from "../../context/PaymentContext";

function ProductGrid() {
  const { player } = usePlayer();
  const { openPayment } = usePayment();

  const handleBuy = (product) => {
  
  if (!player) {
    alert("Please verify your Free Fire UID first.");
    return;
  }

  openPayment(product);
};

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-5 py-20"
    >
      {/* Diamonds */}

      <h2 className="mb-10 text-center text-4xl font-black text-white">
        💎 Diamonds
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {diamonds.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuy={() => handleBuy(product)}
          />
        ))}
      </div>

      {/* Memberships */}

      <h2 className="mb-10 mt-20 text-center text-4xl font-black text-white">
        🎫 Memberships & Passes
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {passes.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuy={() => handleBuy(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;