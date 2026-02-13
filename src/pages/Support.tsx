import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Clock, ArrowRight, BookOpen, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const channels = [
  { icon: MessageCircle, title: "Telegram", desc: "Telegram orqali tezkor yordam oling.", link: "#", cta: "Telegram" },
  { icon: Mail, title: "Email", desc: "support@bizflow.uz ga yozing.", link: "mailto:support@bizflow.uz", cta: "Email yuborish" },
  { icon: Phone, title: "Telefon", desc: "+998 71 200-00-00 raqamiga qo'ng'iroq qiling.", link: "tel:+998712000000", cta: "Qo'ng'iroq" },
];

const Support = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Qo'llab-quvvatlash</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Biz <span className="text-gradient">yordam</span> beramiz
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Savollaringiz bormi? Bizning jamoa sizga yordam berishga tayyor.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {channels.map((ch) => (
              <div key={ch.title} className="p-6 rounded-2xl border border-border bg-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ch.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{ch.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ch.desc}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={ch.link}>{ch.cta}</a>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Clock className="h-4 w-4" />
              Ish vaqti: Dushanba — Juma, 09:00 — 18:00
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/help"><BookOpen className="mr-2 h-4 w-4" />Yordam markazi</Link>
              </Button>
              <Button className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
                <Link to="/contact"><Headphones className="mr-2 h-4 w-4" />Bog'lanish</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Support;
