import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Mahsulot",
    children: [
      { label: "Imkoniyatlar", href: "/features" },
      { label: "Integratsiyalar", href: "/integrations" },
      { label: "API", href: "/api" },
    ],
  },
  { label: "Narxlar", href: "/pricing" },
  {
    label: "Kompaniya",
    children: [
      { label: "Biz haqimizda", href: "/about" },
      { label: "Yangiliklar", href: "/news" },
      { label: "Karyera", href: "/careers" },
      { label: "Hamkorlik", href: "/partnerships" },
    ],
  },
  {
    label: "Yordam",
    children: [
      { label: "Qo'llab-quvvatlash", href: "/support" },
      { label: "Yordam markazi", href: "/help" },
      { label: "Bog'lanish", href: "/contact" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="BizFlow" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-bold text-foreground">
            Biz<span className="text-gradient">Flow</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="min-w-[180px] rounded-xl border border-border bg-card shadow-card-hover p-1.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href!}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Kirish</Link>
          </Button>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
            <Link to="/register">Boshlash</Link>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-2 mt-2">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block text-sm font-medium text-muted-foreground py-2 px-4 hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href!}
                  className="text-sm font-medium text-muted-foreground py-2 px-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex gap-2 mt-3">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link to="/login" onClick={() => setOpen(false)}>Kirish</Link>
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-primary text-primary-foreground" asChild>
                <Link to="/register" onClick={() => setOpen(false)}>Boshlash</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
