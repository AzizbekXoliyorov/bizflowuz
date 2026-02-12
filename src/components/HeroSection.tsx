import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-surface" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              Biznesingizni avtomatlashtiring
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Barcha jarayonlar{" "}
            <span className="text-gradient">bir platformada</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            BizFlow — buyurtmalar, mijozlar, moliya va omborni boshqaruvchi zamonaviy Mini ERP tizimi. O'zbekistondagi kichik va o'rta bizneslar uchun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow px-8 text-base" asChild>
              <Link to="/register">
                Bepul boshlash
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              <Play className="mr-2 h-4 w-4" />
              Demo ko'rish
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Foydalanuvchilar" },
              { value: "99.9%", label: "Ishonchlilk" },
              { value: "24/7", label: "Qo'llab-quvvatlash" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
