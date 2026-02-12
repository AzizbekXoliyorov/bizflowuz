import {
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  Wallet,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Buyurtmalar boshqaruvi",
    desc: "Barcha buyurtmalarni kuzatib boring, statuslarni yangilang va jarayonni avtomatlashtiring.",
  },
  {
    icon: Users,
    title: "CRM – Mijozlar",
    desc: "Mijozlar bazasini boshqaring, aloqalarni saqlang va munosabatlarni kuchlashtiring.",
  },
  {
    icon: Package,
    title: "Ombor nazorati",
    desc: "Mahsulotlarni real vaqtda kuzating, kam qolgan tovarlar haqida xabar oling.",
  },
  {
    icon: Wallet,
    title: "Moliyaviy hisobot",
    desc: "Daromad, xarajat va foyda haqida aniq ma'lumotlar bilan biznesingizni boshqaring.",
  },
  {
    icon: BarChart3,
    title: "Analitika",
    desc: "Chuqur tahlillar va vizual diagrammalar bilan qaror qabul qiling.",
  },
  {
    icon: Zap,
    title: "Avtomatlashtirish",
    desc: "Takroriy jarayonlarni avtomatlashtiring va vaqtingizni tejang.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-surface relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Imkoniyatlar</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Biznesingiz uchun <span className="text-gradient">barcha vositalar</span>
          </h2>
          <p className="text-muted-foreground">
            BizFlow bilan barcha biznes jarayonlaringizni bitta joydan boshqaring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
