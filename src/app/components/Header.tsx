import { ShoppingCart, Menu } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onMenuClick: () => void;
}

export function Header({ cartCount, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#f7d1be] shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-[#f7d1be]/30 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-[#f7983b]" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#f7983b] to-[#fa6927] rounded-lg flex items-center justify-center">
              <span className="text-white"><img src=""></img></span>
            </div>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#f7983b] to-[#fa6927] bg-clip-text text-transparent">
              PrintHub
            </h1>
          </div>
        </div>
        
        <button className="relative p-2 hover:bg-[#f7d1be]/30 rounded-lg transition-colors">
          <ShoppingCart className="w-6 h-6 text-[#f7983b]" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#fa6927] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
