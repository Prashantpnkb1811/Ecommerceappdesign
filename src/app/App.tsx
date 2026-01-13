import { useState } from "react";
import { Header } from "@/app/components/Header";
import { FilterSidebar } from "@/app/components/FilterSidebar";
import { ProductCard } from "@/app/components/ProductCard";
import { Footer } from "@/app/components/Footer";

// Mock product data
const products = [
  {
    id: "1",
    name: "Naruto Action Figure - Uzumaki Edition",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1763771444795-d62df0559ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBhbmltZSUyMGZpZ3VyZXxlbnwxfHx8fDE3NjgzMTM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Anime",
    material: "PLA",
    categoryId: "anime",
  },
  {
    id: "2",
    name: "Pikachu 3D Model - Classic Pose",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1730267252443-8479fadc1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwM2QlMjBwcmludHxlbnwxfHx8fDE3NjgzMTM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Pokemon",
    material: "Resin",
    categoryId: "pokemon",
  },
  {
    id: "3",
    name: "Dragon Ball Z Keychain Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1757051424787-72dff216e1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBrZXljaGFpbnxlbnwxfHx8fDE3NjgzMTM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4,
    category: "Keychain",
    material: "ABS",
    categoryId: "keychain",
  },
  {
    id: "4",
    name: "Cartoon Character - Custom Design",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1741177479787-f6c63266af14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY4MzEzNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Character",
    material: "PETG",
    categoryId: "character",
  },
  {
    id: "5",
    name: "One Piece Luffy Figure",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1763771444795-d62df0559ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBhbmltZSUyMGZpZ3VyZXxlbnwxfHx8fDE3NjgzMTM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Anime",
    material: "PLA",
    categoryId: "anime",
  },
  {
    id: "6",
    name: "Charizard Flying Model",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1730267252443-8479fadc1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwM2QlMjBwcmludHxlbnwxfHx8fDE3NjgzMTM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Pokemon",
    material: "Resin",
    categoryId: "pokemon",
  },
  {
    id: "7",
    name: "Anime Logo Keychain Pack",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1757051424787-72dff216e1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBrZXljaGFpbnxlbnwxfHx8fDE3NjgzMTM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4,
    category: "Keychain",
    material: "PLA",
    categoryId: "keychain",
  },
  {
    id: "8",
    name: "Chibi Style Hero Model",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1741177479787-f6c63266af14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY4MzEzNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Character",
    material: "ABS",
    categoryId: "character",
  },
  {
    id: "9",
    name: "Attack on Titan Scout Figure",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1763771444795-d62df0559ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBhbmltZSUyMGZpZ3VyZXxlbnwxfHx8fDE3NjgzMTM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Anime",
    material: "Resin",
    categoryId: "anime",
  },
  {
    id: "10",
    name: "Eevee Evolution Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1730267252443-8479fadc1e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwM2QlMjBwcmludHxlbnwxfHx8fDE3NjgzMTM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    category: "Pokemon",
    material: "PLA",
    categoryId: "pokemon",
  },
  {
    id: "11",
    name: "Pokemon Ball Keychain",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1757051424787-72dff216e1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBrZXljaGFpbnxlbnwxfHx8fDE3NjgzMTM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4,
    category: "Keychain",
    material: "ABS",
    categoryId: "keychain",
  },
  {
    id: "12",
    name: "Cute Mascot Character Model",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1741177479787-f6c63266af14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY4MzEzNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4,
    category: "Character",
    material: "PETG",
    categoryId: "character",
  },
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (id: string) => {
    setCartCount((prev) => prev + 1);
    // You can add toast notification here
  };

  const handleCustomize = () => {
    alert("Custom design feature coming soon! 🎨");
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesPrice = product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff5ed] to-[#f7d1be]/30 flex flex-col">
      <Header cartCount={cartCount} onMenuClick={() => setIsSidebarOpen(true)} />
      
      <div className="flex flex-1 relative">
        <FilterSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />
        
        <main className="flex-1 p-4 md:p-6 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-2">
                3D Printing Models
              </h2>
              <p className="text-[#666666]">
                {filteredProducts.length} products available
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#666666] text-lg">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer onCustomize={handleCustomize} />
    </div>
  );
}
