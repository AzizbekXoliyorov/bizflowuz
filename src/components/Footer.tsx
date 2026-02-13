import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const footerLinks = [
{
  title: "Mahsulot",
  links: [
  { label: "Imkoniyatlar", href: "/features" },
  { label: "Narxlar", href: "/pricing" },
  { label: "Integratsiyalar", href: "/integrations" },
  { label: "API", href: "/api" }]

},
{
  title: "Kompaniya",
  links: [
  { label: "Biz haqimizda", href: "/about" },
  { label: "Yangiliklar", href: "/news" },
  { label: "Karyera", href: "/careers" },
  { label: "Hamkorlik", href: "/partnerships" }]

},
{
  title: "Qo'llab-quvvatlash",
  links: [
  { label: "Yordam markazi", href: "/help" },
  { label: "Bog'lanish", href: "/contact" },
  { label: "Maxfiylik siyosati", href: "/privacy" },
  { label: "Foydalanish shartlari", href: "/terms" }]

}];


const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="BizFlow" className="h-8 w-8 object-contain" />
              <span className="font-display text-lg font-bold">
                Biz<span className="text-gradient">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O'zbekistondagi kichik va o'rta bizneslar uchun zamonaviy Mini ERP yechimi.
            </p>
          </div>

          {footerLinks.map((col) =>
          <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">

                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 BizFlow. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a className="hover:text-foreground transition-colors" href="https://t.me/bizflowuz">Telegram</a>
            <a className="hover:text-foreground transition-colors" href="https://www.instagram.com/bizflowuz?igsh=YjR2ZzU2ZWg1dHNy">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;