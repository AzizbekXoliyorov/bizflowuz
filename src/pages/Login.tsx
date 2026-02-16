import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Xatolik", description: "Email va parolni kiriting", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      toast({ title: "Xatolik", description: error.message, variant: "destructive" });
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel - branding */}
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
          <h2 className="font-display text-2xl font-semibold text-primary-foreground/90 mb-4">
            Biznesingizni yangi bosqichga olib chiqing
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            Mini ERP tizimi orqali buyurtmalar, mijozlar, moliya va omborni boshqaring.
          </p>
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
            <h1 className="font-display text-3xl font-bold mb-2">Tizimga kirish</h1>
            <p className="text-muted-foreground">
              Hisobingizga kiring va biznesingizni boshqarishni davom ettiring.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email manzil</Label>
              <Input
                id="email"
                type="email"
                placeholder="sizning@email.uz"
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Parol</Label>
                <a href="#" className="text-xs text-primary hover:underline">
                  Parolni unutdingizmi?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
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

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-primary text-primary-foreground shadow-glow text-base"
            >
              {loading ? "Kirish..." : "Kirish"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Hisobingiz yo'qmi?{" "}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Ro'yxatdan o'tish
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
