import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowRight, Check, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Cheksiz buyurtmalar va mijozlar",
  "Real vaqtda analitika",
  "14 kunlik bepul sinov",
  "Kredit karta talab qilinmaydi",
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !password) {
      toast({ title: "Xatolik", description: "Barcha maydonlarni to'ldiring", variant: "destructive" });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Xatolik", description: "Parol kamida 6 belgidan iborat bo'lishi kerak", variant: "destructive" });
      return;
    }
    if (!agreed) {
      toast({ title: "Xatolik", description: "Shartlarga rozilik bildiring", variant: "destructive" });
      return;
    }
    setLoading(true);
    const name = `${firstName} ${lastName}`.trim();
    const { error } = await signUp(email, password, name);
    setLoading(false);
    if (error) {
      toast({ title: "Xatolik", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Muvaffaqiyat!", description: "Emailingizga tasdiqlash xabar yuborildi. Emailni tekshiring." });
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-hero relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-foreground/10 blur-3xl"
              style={{
                width: `${150 + i * 60}px`,
                height: `${150 + i * 60}px`,
                top: `${10 + i * 12}%`,
                left: `${5 + i * 15}%`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={logo} alt="BizFlow" className="h-16 w-16 object-contain brightness-0 invert" />
            <span className="font-display text-4xl font-bold text-primary-foreground">BizFlow</span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-primary-foreground/90 mb-6">
            Biznesingizni avtomatlashtiring
          </h2>
          <div className="space-y-3 text-left max-w-sm mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <button onClick={() => navigate(-1)} className="p-2 rounded-xl hover:bg-muted transition-colors">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <Link to="/" className="flex items-center gap-2 lg:hidden">
              <img src={logo} alt="BizFlow" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl font-bold">
                Biz<span className="text-gradient">Flow</span>
              </span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold mb-2">Ro'yxatdan o'tish</h1>
            <p className="text-muted-foreground">
              Bepul hisob yarating va BizFlow imkoniyatlaridan foydalaning.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Ism</Label>
                <Input id="firstName" placeholder="Ism" className="h-12" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Familiya</Label>
                <Input id="lastName" placeholder="Familiya" className="h-12" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email manzil</Label>
              <Input id="email" type="email" placeholder="sizning@email.uz" className="h-12" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Kamida 6 belgi"
                  className="h-12 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                Men{" "}
                <Link to="/terms" className="text-primary hover:underline">Foydalanish shartlari</Link>
                {" "}va{" "}
                <Link to="/privacy" className="text-primary hover:underline">Maxfiylik siyosati</Link>
                ga roziman.
              </label>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-primary text-primary-foreground shadow-glow text-base"
            >
              {loading ? "Ro'yxatdan o'tilmoqda..." : "Ro'yxatdan o'tish"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Hisobingiz bormi?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Tizimga kirish
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
