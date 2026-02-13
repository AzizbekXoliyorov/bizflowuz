import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Handshake, TrendingUp, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: TrendingUp, title: "Daromad ulushi", desc: "Har bir tavsiya qilingan mijoz uchun doimiy komissiya oling." },
  { icon: Globe, title: "Marketing qo'llab-quvvatlash", desc: "Birgalikdagi marketing materiallari va kampaniyalar." },
  { icon: Users, title: "Texnik trening", desc: "Jamoangiz uchun bepul trening va sertifikatsiya dasturi." },
  { icon: Handshake, title: "Shaxsiy menejer", desc: "Har bir hamkorga biriktirilgan shaxsiy menejer." },
];

const partnerTypes = [
  { title: "Reseller hamkor", desc: "BizFlow mahsulotlarini o'z mijozlaringizga soting va komissiya oling." },
  { title: "Texnologik hamkor", desc: "O'z mahsulotingizni BizFlow bilan integratsiya qiling." },
  { title: "Konsalting hamkor", desc: "Mijozlaringizga BizFlow ni joriy etishda yordam bering." },
];

const Partnerships = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Hamkorlik</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Birgalikda <span className="text-gradient">o'sish</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BizFlow hamkorlik dasturi orqali birgalikda o'sish va daromad olish imkoniyatiga ega bo'ling.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((b) => (
              <div key={b.title} className="p-5 rounded-2xl border border-border bg-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">Hamkorlik turlari</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {partnerTypes.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-display font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
              <Link to="/contact">Hamkor bo'lish <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partnerships;
