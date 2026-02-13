import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Standard",
    price: "49,000",
    period: "so'm / oy",
    desc: "Kichik bizneslar uchun boshlang'ich reja",
    features: [
      "500 tagacha buyurtma",
      "200 tagacha mijoz",
      "Asosiy hisobotlar",
      "3 foydalanuvchi",
      "Email qo'llab-quvvatlash",
    ],
    cta: "Obuna bo'lish",
    popular: false,
  },
  {
    name: "Pro",
    price: "149,000",
    period: "so'm / oy",
    desc: "O'sib borayotgan bizneslar uchun",
    features: [
      "Cheksiz buyurtmalar",
      "Cheksiz mijozlar",
      "Kengaytirilgan analitika",
      "10 foydalanuvchi",
      "CRM va avtomatlashtirish",
      "Prioritet qo'llab-quvvatlash",
      "API integratsiya",
    ],
    cta: "Obuna bo'lish",
    popular: true,
  },
  {
    name: "Premium",
    price: "349,000",
    period: "so'm / oy",
    desc: "Katta tashkilotlar uchun",
    features: [
      "Barcha Pro imkoniyatlari",
      "Cheksiz foydalanuvchilar",
      "Maxsus integratsiyalar",
      "Shaxsiy menejer",
      "SLA kafolati",
      "On-premise joylashuv",
      "24/7 telefon qo'llab-quvvatlash",
    ],
    cta: "Obuna bo'lish",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-surface relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Narxlar</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Biznesingizga <span className="text-gradient">mos reja</span>
          </h2>
          <p className="text-muted-foreground">
            14 kunlik bepul sinov. Kredit karta talab qilinmaydi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary shadow-glow scale-[1.02]"
                  : "border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  Mashhur
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/register">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
