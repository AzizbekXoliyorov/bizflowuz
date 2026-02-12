import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Imkoniyatlar", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Narxlar", href: "#pricing" },
  { label: "Bog'lanish", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="BizFlow" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-bold text-foreground">
            Biz<span className="text-gradient">Flow</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Kirish
          </Button>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow">
            Boshlash
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="bg-gradient-primary text-primary-foreground mt-2">
              Boshlash
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
