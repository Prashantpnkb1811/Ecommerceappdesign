import { Palette } from "lucide-react";

interface FooterProps {
  onCustomize: () => void;
}

export function Footer({ onCustomize }: FooterProps) {
  return (
    <footer className="sticky bottom-0 bg-gradient-to-r from-[#f7983b] via-[#f7b43b] to-[#fa6927] text-white py-4 px-4 shadow-lg z-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <p className="text-sm opacity-90">
            Create your custom 3D print design
          </p>
        </div>
        
        <button
          onClick={onCustomize}
          className="flex items-center gap-2 px-6 py-3 bg-white text-[#f7983b] rounded-lg font-semibold hover:bg-[#f7d1be] transition-all shadow-md hover:shadow-xl transform hover:scale-105"
        >
          <Palette className="w-5 h-5" />
          Customize Design
        </button>
      </div>
    </footer>
  );
}
