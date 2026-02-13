import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Xabar yuborildi!", description: "Tez orada siz bilan bog'lanamiz." });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Bog'lanish</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Biz bilan <span className="text-gradient">bog'laning</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Savollaringiz yoki takliflaringiz bormi? Biz doimo aloqadamiz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Xabar yuboring</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Ismingiz" required className="rounded-xl" />
                  <Input type="email" placeholder="Email" required className="rounded-xl" />
                </div>
                <Input placeholder="Mavzu" required className="rounded-xl" />
                <Textarea placeholder="Xabaringiz..." required className="rounded-xl min-h-[120px]" />
                <Button type="submit" disabled={loading} className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Send className="h-4 w-4" />
                  {loading ? "Yuborilmoqda..." : "Yuborish"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Manzil</h4>
                    <p className="text-sm text-muted-foreground">Toshkent sh., Mirzo Ulug'bek tumani, IT Park</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Email</h4>
                    <p className="text-sm text-muted-foreground">info@bizflow.uz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Telefon</h4>
                    <p className="text-sm text-muted-foreground">+998 71 200-00-00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Telegram</h4>
                    <p className="text-sm text-muted-foreground">@bizflow_uz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
