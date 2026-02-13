import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Code, Key, Shield, Zap, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const apiFeatures = [
  { icon: Key, title: "API kalitlari", desc: "Xavfsiz API kalitlari orqali autentifikatsiya. Har bir kalitga alohida ruxsatlar bering." },
  { icon: Shield, title: "OAuth 2.0", desc: "OAuth 2.0 standartiga mos xavfsiz autentifikatsiya." },
  { icon: Zap, title: "RESTful API", desc: "REST standartlariga mos, tezkor va ishonchli API endpointlar." },
  { icon: BookOpen, title: "Batafsil hujjatlar", desc: "Har bir endpoint uchun batafsil hujjatlar va misollar." },
];

const endpoints = [
  { method: "GET", path: "/api/v1/orders", desc: "Barcha buyurtmalarni olish" },
  { method: "POST", path: "/api/v1/orders", desc: "Yangi buyurtma yaratish" },
  { method: "GET", path: "/api/v1/customers", desc: "Mijozlar ro'yxatini olish" },
  { method: "GET", path: "/api/v1/products", desc: "Mahsulotlar ro'yxati" },
  { method: "GET", path: "/api/v1/analytics", desc: "Analitika ma'lumotlari" },
  { method: "POST", path: "/api/v1/webhooks", desc: "Webhook ro'yxatdan o'tkazish" },
];

const Api = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">API</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Kuchli <span className="text-gradient">API</span> bilan integratsiya
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BizFlow API orqali o'z ilovalaringizni platformamiz bilan bog'lang va biznes jarayonlarini avtomatlashtiring.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {apiFeatures.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-6">API Endpointlar</h2>
          <div className="rounded-2xl border border-border overflow-hidden bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground">Metod</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground">Endpoint</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground">Tavsif</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((ep) => (
                  <tr key={ep.path + ep.method} className="border-b border-border last:border-0">
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                        ep.method === "GET" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                      }`}>
                        {ep.method}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-sm">{ep.path}</td>
                    <td className="p-4 text-muted-foreground">{ep.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">API hujjatlarni o'qing</h2>
          <p className="text-muted-foreground mb-6">Batafsil hujjatlar va kod misollari bilan tezda boshlang.</p>
          <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow" asChild>
            <Link to="/register">Bepul boshlash <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Api;
