import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Smartphone, Cloud, Shield, Globe, BarChart3, Zap,
  Clock, Lock, RefreshCw, Database, Bell, FileText, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Cloud, title: "Bulutli platforma", desc: "Istalgan joydan, istalgan qurilmadan kirish. Ma'lumotlar xavfsiz bulutda saqlanadi." },
  { icon: Smartphone, title: "Mobil moslashuvchan", desc: "Telefon, planshet va kompyuterda mukammal ishlaydi." },
  { icon: Shield, title: "Xavfsizlik", desc: "Ma'lumotlaringiz shifrlangan holda saqlanadi. ISO 27001 standartlariga mos." },
  { icon: Globe, title: "Ko'p tilli qo'llab-quvvatlash", desc: "O'zbek, rus va ingliz tillarida ishlash imkoniyati." },
  { icon: BarChart3, title: "Real vaqt analitika", desc: "Biznes ko'rsatkichlarini real vaqtda kuzating va qarorlar qabul qiling." },
  { icon: Zap, title: "Tezkor integratsiya", desc: "Mavjud tizimlaringiz bilan oson integratsiya qiling." },
  { icon: Clock, title: "24/7 ishlash", desc: "Tizim 99.9% vaqt ishlaydi. Texnik xizmat ko'rsatish avtomatik." },
  { icon: Lock, title: "Rollar va ruxsatlar", desc: "Har bir xodimga alohida rol va ruxsat bering." },
  { icon: RefreshCw, title: "Avtomatik yangilanish", desc: "Yangi funksiyalar avtomatik qo'shiladi. Hech narsa o'rnatish shart emas." },
  { icon: Database, title: "Ma'lumotlar zaxirasi", desc: "Kundalik avtomatik zaxira nusxalash va tiklash imkoniyati." },
  { icon: Bell, title: "Bildirishnomalar", desc: "Muhim hodisalar haqida email, SMS va push bildirishnomalar." },
  { icon: FileText, title: "Hisobotlar eksporti", desc: "PDF, Excel va CSV formatlarida hisobotlarni eksport qiling." },
];

const Features = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Imkoniyatlar</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Kuchli <span className="text-gradient">imkoniyatlar</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BizFlow platformasi biznesingizni yangi bosqichga olib chiqadigan zamonaviy vositalarni taqdim etadi.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">Tayyor boshlashga?</h2>
          <p className="text-muted-foreground mb-6">14 kunlik bepul sinov. Kredit karta talab qilinmaydi.</p>
          <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
            <Link to="/register">Bepul boshlash <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Features;
