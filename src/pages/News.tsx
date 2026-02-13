import PageLayout from "@/components/PageLayout";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    date: "10.02.2026",
    title: "BizFlow 2.0 — Yangi versiya chiqdi!",
    desc: "Yangilangan dashboard, kengaytirilgan analitika va yangi integratsiyalar bilan BizFlow 2.0 versiyasi ishga tushirildi.",
    tag: "Yangilik",
  },
  {
    date: "28.01.2026",
    title: "Click.uz va Payme integratsiyalari",
    desc: "Endi BizFlow orqali to'g'ridan-to'g'ri Click.uz va Payme orqali to'lovlarni qabul qilish mumkin.",
    tag: "Integratsiya",
  },
  {
    date: "15.01.2026",
    title: "500+ foydalanuvchi — yangi bosqich!",
    desc: "BizFlow 500 dan ortiq faol foydalanuvchiga ega bo'ldi. Rahmat, bizga ishonganingiz uchun!",
    tag: "Yutuq",
  },
  {
    date: "05.01.2026",
    title: "Mobil ilova beta versiyasi",
    desc: "BizFlow mobil ilovasining beta versiyasi Android va iOS uchun sinov uchun taqdim etildi.",
    tag: "Mahsulot",
  },
  {
    date: "20.12.2025",
    title: "Telegram bot integratsiyasi",
    desc: "Buyurtma bildirishnomalarini Telegram bot orqali olish imkoniyati qo'shildi.",
    tag: "Integratsiya",
  },
];

const News = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Yangiliklar</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            So'nggi <span className="text-gradient">yangiliklar</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BizFlow haqidagi eng so'nggi yangiliklar, yangilanishlar va e'lonlar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6">
            {news.map((item) => (
              <article key={item.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{item.tag}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
