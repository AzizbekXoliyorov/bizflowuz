import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, Package, DollarSign, BarChart3, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: ShoppingCart,
    title: "Buyurtmalar boshqaruvi",
    desc: "Buyurtmalarni yaratish, kuzatish va boshqarish. Avtomatik hisob-faktura va yetkazib berish nazorati.",
    features: ["Buyurtma yaratish va tahrirlash", "Status kuzatuvi", "Avtomatik hisob-faktura", "Yetkazib berish boshqaruvi"],
  },
  {
    icon: Users,
    title: "CRM — Mijozlar boshqaruvi",
    desc: "Mijozlar bazasini samarali boshqaring. Aloqa tarixi, segmentatsiya va avtomatlashtirish.",
    features: ["Mijozlar bazasi", "Aloqa tarixi", "Segmentatsiya", "Avtomatik xabarnomalar"],
  },
  {
    icon: Package,
    title: "Ombor boshqaruvi",
    desc: "Mahsulotlar, zaxira va ombor harakatlarini real vaqtda kuzating.",
    features: ["Mahsulot katalogi", "Zaxira nazorati", "Ombor harakatlari", "Kam zaxira ogohlantirishlari"],
  },
  {
    icon: DollarSign,
    title: "Moliya boshqaruvi",
    desc: "Daromad, xarajat va foydani kuzating. Moliyaviy hisobotlar va prognozlar.",
    features: ["Daromad/xarajat kuzatuvi", "Foyda tahlili", "Moliyaviy hisobotlar", "Byudjet rejalashtirish"],
  },
  {
    icon: BarChart3,
    title: "Analitika va hisobotlar",
    desc: "Biznesingiz haqida chuqur tahlillar oling. Real vaqtda dashboardlar va maxsus hisobotlar.",
    features: ["Real vaqtda dashboard", "Maxsus hisobotlar", "KPI kuzatuvi", "Eksport imkoniyati"],
  },
  {
    icon: Zap,
    title: "Avtomatlashtirish",
    desc: "Takroriy jarayonlarni avtomatlashtiring va samaradorlikni oshiring.",
    features: ["Ish oqimi avtomatlashtirish", "Trigger asosidagi amallar", "Email avtomatlashtirish", "Integratsiya webhook"],
  },
];

const Products = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Mahsulot</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Biznesingiz uchun <span className="text-gradient">yagona platforma</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            BizFlow barcha biznes jarayonlaringizni bitta platformada birlashtiradi — buyurtmalardan moliyagacha.
          </p>
          <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
            <Link to="/register">
              Bepul sinab ko'ring <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <div key={mod.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <mod.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{mod.desc}</p>
                <ul className="space-y-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
