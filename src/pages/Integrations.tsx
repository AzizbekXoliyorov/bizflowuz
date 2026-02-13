import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, Plug, Webhook, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const integrations = [
  { name: "Telegram Bot", category: "Xabar almashish", desc: "Buyurtma va CRM bildirishnomalarini Telegram orqali oling." },
  { name: "Click.uz", category: "To'lov", desc: "Click orqali onlayn to'lovlarni qabul qiling." },
  { name: "Payme", category: "To'lov", desc: "Payme to'lov tizimi bilan integratsiya." },
  { name: "Google Sheets", category: "Ma'lumot", desc: "Ma'lumotlarni Google Sheets bilan sinxronlang." },
  { name: "1C", category: "Buxgalteriya", desc: "1C buxgalteriya dasturi bilan integratsiya." },
  { name: "Excel Import/Export", category: "Ma'lumot", desc: "Ma'lumotlarni Excel formatida import va eksport qiling." },
  { name: "SMS xizmatlari", category: "Xabar almashish", desc: "Eskiz, PlayMobile va boshqa SMS provayderlar bilan ishlang." },
  { name: "Webhook", category: "Texnik", desc: "Har qanday tashqi tizim bilan webhook orqali bog'laning." },
];

const Integrations = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Integratsiyalar</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Sevimli vositalaringiz bilan <span className="text-gradient">bog'laning</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BizFlow O'zbekistondagi mashhur to'lov tizimlari, xabar almashish va boshqa xizmatlar bilan integratsiya qiladi.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((int) => (
              <div key={int.name} className="p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Plug className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{int.category}</span>
                </div>
                <h3 className="font-display font-semibold mb-1">{int.name}</h3>
                <p className="text-sm text-muted-foreground">{int.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">Maxsus integratsiya kerakmi?</h2>
          <p className="text-muted-foreground mb-6">Bizning jamoa sizga yordam beradi.</p>
          <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
            <Link to="/contact">Bog'lanish <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Integrations;
