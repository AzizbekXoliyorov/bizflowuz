import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="BizFlow" className="h-8 w-8 object-contain" />
              <span className="font-display text-lg font-bold">
                Biz<span className="text-gradient">Flow</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O'zbekistondagi kichik va o'rta bizneslar uchun zamonaviy Mini ERP yechimi.
            </p>
          </div>

          {[
            {
              title: "Mahsulot",
              links: ["Imkoniyatlar", "Narxlar", "Integratsiya", "API"],
            },
            {
              title: "Kompaniya",
              links: ["Biz haqimizda", "Yangiliklar", "Karyera", "Hamkorlik"],
            },
            {
              title: "Qo'llab-quvvatlash",
              links: ["Yordam markazi", "Bog'lanish", "Maxfiylik siyosati", "Foydalanish shartlari"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 BizFlow. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Telegram</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
