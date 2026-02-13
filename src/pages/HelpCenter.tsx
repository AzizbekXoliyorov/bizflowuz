import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, ShoppingCart, Users, DollarSign, Settings, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  { icon: BookOpen, title: "Boshlash", articles: 8, desc: "Ro'yxatdan o'tish va ilk qadamlar" },
  { icon: ShoppingCart, title: "Buyurtmalar", articles: 12, desc: "Buyurtmalarni yaratish va boshqarish" },
  { icon: Users, title: "CRM", articles: 10, desc: "Mijozlar bazasi bilan ishlash" },
  { icon: DollarSign, title: "Moliya", articles: 7, desc: "Daromad, xarajat va hisobotlar" },
  { icon: Settings, title: "Sozlamalar", articles: 6, desc: "Hisob va tizim sozlamalari" },
  { icon: Zap, title: "Integratsiyalar", articles: 9, desc: "Tashqi xizmatlar bilan bog'lanish" },
];

const faq = [
  { q: "BizFlow qanday ishlaydi?", a: "BizFlow bulutli SaaS platformasi bo'lib, buyurtmalar, mijozlar, ombor va moliyani bir joydan boshqarish imkonini beradi." },
  { q: "Bepul sinov muddati qancha?", a: "14 kunlik bepul sinov. Kredit karta talab qilinmaydi." },
  { q: "Ma'lumotlarim xavfsizmi?", a: "Ha, barcha ma'lumotlar shifrlangan holda xavfsiz bulut serverlarida saqlanadi." },
  { q: "Mobil qurilmadan foydalanish mumkinmi?", a: "Ha, BizFlow barcha qurilmalarda — telefon, planshet va kompyuterda ishlaydi." },
  { q: "Qanday to'lov usullari qabul qilinadi?", a: "Click.uz, Payme va bank o'tkazmasi orqali to'lash mumkin." },
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Yordam markazi</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Qanday <span className="text-gradient">yordam</span> bera olamiz?
          </h1>
          <div className="max-w-xl mx-auto mt-8">
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-border bg-card">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Savolingizni yozing..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Mavzular</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {categories.map((cat) => (
              <div key={cat.title} className="p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
                <p className="text-xs text-primary mt-2">{cat.articles} maqola</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-8 text-center">Ko'p so'raladigan savollar</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="p-4 rounded-2xl border border-border bg-card group">
                <summary className="font-display font-semibold cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-muted-foreground mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HelpCenter;
