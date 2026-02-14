import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import {
  UserCircle, Bell, Shield, Palette, Globe, CreditCard, ArrowLeft,
  Camera, Mail, Phone, Building, MapPin, Save,
} from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/dashboard" className="p-2 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-2">
            <img src={logo} alt="BizFlow" className="h-8 w-8 object-contain" />
            <span className="font-display text-lg font-bold">
              Biz<span className="text-gradient">Flow</span>
            </span>
          </div>
          <div className="ml-auto">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
              <Save className="h-4 w-4" />
              Saqlash
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Sozlamalar</h1>
          <p className="text-muted-foreground mt-1">Hisobingiz va biznes sozlamalarini boshqaring.</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-muted p-1 rounded-xl h-auto flex flex-wrap gap-1">
            <TabsTrigger value="profile" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <UserCircle className="h-4 w-4" /> Profil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Bell className="h-4 w-4" /> Bildirishnomalar
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Shield className="h-4 w-4" /> Xavfsizlik
            </TabsTrigger>
            <TabsTrigger value="appearance" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Palette className="h-4 w-4" /> Ko'rinish
            </TabsTrigger>
            <TabsTrigger value="billing" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <CreditCard className="h-4 w-4" /> To'lov
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            {/* Avatar section */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-display font-semibold mb-4">Profil rasmi</h3>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                    A
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
                    <Camera className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                <div>
                  <p className="font-medium">Admin Karimov</p>
                  <p className="text-sm text-muted-foreground">admin@bizflow.uz</p>
                  <Button variant="outline" size="sm" className="mt-2">Rasmni o'zgartirish</Button>
                </div>
              </div>
            </div>

            {/* Personal info */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
              <h3 className="font-display font-semibold">Shaxsiy ma'lumotlar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Ism</Label>
                  <Input defaultValue="Admin" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Familiya</Label>
                  <Input defaultValue="Karimov" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> Email</Label>
                  <Input defaultValue="admin@bizflow.uz" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> Telefon</Label>
                  <Input defaultValue="+998 90 123 45 67" className="h-11" />
                </div>
              </div>
            </div>

            {/* Company info */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
              <h3 className="font-display font-semibold">Kompaniya ma'lumotlari</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Building className="h-3.5 w-3.5" /> Kompaniya nomi</Label>
                  <Input defaultValue="BizFlow LLC" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Globe className="h-3.5 w-3.5" /> Veb-sayt</Label>
                  <Input defaultValue="bizflow.uz" className="h-11" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Manzil</Label>
                  <Input defaultValue="Toshkent sh., Yunusobod tumani" className="h-11" />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-6">
              <h3 className="font-display font-semibold">Bildirishnoma sozlamalari</h3>
              {[
                { title: "Email bildirishnomalar", desc: "Yangi buyurtmalar haqida email xabarlar", defaultChecked: true },
                { title: "SMS bildirishnomalar", desc: "Muhim yangilanishlar haqida SMS", defaultChecked: false },
                { title: "Push bildirishnomalar", desc: "Brauzer orqali bildirishnomalar", defaultChecked: true },
                { title: "Haftalik hisobot", desc: "Har hafta moliyaviy hisobot", defaultChecked: true },
                { title: "Marketing xabarlari", desc: "Yangiliklar va maxsus takliflar", defaultChecked: false },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.defaultChecked} />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
              <h3 className="font-display font-semibold">Parolni o'zgartirish</h3>
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label>Joriy parol</Label>
                  <Input type="password" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Yangi parol</Label>
                  <Input type="password" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Yangi parolni tasdiqlash</Label>
                  <Input type="password" className="h-11" />
                </div>
                <Button className="bg-gradient-primary text-primary-foreground">Parolni yangilash</Button>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-display font-semibold">Ikki bosqichli autentifikatsiya</h3>
              <p className="text-sm text-muted-foreground">Hisobingiz xavfsizligini oshiring.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">2FA yoqish</span>
                <Switch />
              </div>
            </div>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
              <h3 className="font-display font-semibold">Ko'rinish sozlamalari</h3>
              <div>
                <Label className="mb-3 block">Tema</Label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Yorug'", value: "light", preview: "bg-background border-2 border-border" },
                    { label: "Qorong'u", value: "dark", preview: "bg-foreground" },
                    { label: "Tizim", value: "system", preview: "bg-gradient-to-r from-background to-foreground" },
                  ].map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setTheme(t.value)}
                      className={`p-4 rounded-xl border transition-colors text-center ${
                        theme === t.value ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className={`w-full h-16 rounded-lg mb-2 ${t.preview}`} />
                      <span className="text-sm font-medium">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium">Ixcham rejim</p>
                  <p className="text-xs text-muted-foreground">Elementlar orasidagi masofani kamaytirish</p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">Joriy tarif</h3>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Pro</span>
              </div>
              <p className="text-3xl font-display font-bold">
                99,000 <span className="text-base font-normal text-muted-foreground">so'm / oy</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">Keyingi to'lov: 1-mart, 2026</p>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm">Tarifni o'zgartirish</Button>
                <Button variant="ghost" size="sm" className="text-destructive">Bekor qilish</Button>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-display font-semibold">To'lov usuli</h3>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/30">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Muddati: 12/27</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">O'zgartirish</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
