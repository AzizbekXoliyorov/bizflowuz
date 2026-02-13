import PageLayout from "@/components/PageLayout";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Maqsad", desc: "O'zbekistondagi kichik va o'rta bizneslarni raqamlashtirish va samaradorligini oshirish." },
  { icon: Eye, title: "Vizion", desc: "Markaziy Osiyoda eng ishonchli biznes avtomatlashtirish platformasi bo'lish." },
  { icon: Heart, title: "Qadriyatlar", desc: "Oddiylik, ishonchlilk, innovatsiya va mijozlarga g'amxo'rlik." },
];

const stats = [
  { value: "500+", label: "Faol foydalanuvchilar" },
  { value: "10,000+", label: "Qayta ishlangan buyurtmalar" },
  { value: "99.9%", label: "Tizim ishonchliligi" },
  { value: "24/7", label: "Qo'llab-quvvatlash" },
];

const team = [
  { name: "Aziz Karimov", role: "Asoschisi va CEO", icon: Users },
  { name: "Malika Rahimova", role: "CTO", icon: Award },
  { name: "Sardor Toshev", role: "Mahsulot direktori", icon: TrendingUp },
];

const About = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Biz haqimizda</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Biznesingizni <span className="text-gradient">raqamlashtirish</span> yo'lida
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BizFlow 2024-yilda O'zbekistondagi kichik va o'rta bizneslar uchun oddiy, arzon va samarali ERP yechimini yaratish maqsadida tashkil etilgan. Biz har bir tadbirkorga zamonaviy texnologiyalarni oson foydalanish imkonini beramiz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl border border-border bg-card">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-primary/5">
                <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-4xl font-bold">Bizning jamoa</h2>
            <p className="text-muted-foreground mt-2">Tajribali mutaxassislar jamoasi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="text-center p-6 rounded-2xl border border-border bg-card">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold text-xl">
                  {t.name[0]}
                </div>
                <h4 className="font-display font-semibold">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
