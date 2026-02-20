import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight,
  Package, Bell, Search, LayoutDashboard, Settings, LogOut, BarChart3,
  Zap, ChevronDown, Plus, Filter, Download, Menu, X, FileText, Wallet,
  Calendar, Clock, UserCircle, Shield, Eye, Edit, Trash2, RefreshCw,
  CheckCircle, AlertTriangle, ArrowRight, Mail, Phone, MapPin,
  Boxes, Truck, BarChart, PieChart as PieChartIcon, Activity, Target,
  Repeat, GitBranch, PlayCircle, PauseCircle, FileBarChart, Printer,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area,
} from "recharts";

// ─── DATA ───────────────────────────────────────────────────

const revenueData = [
  { name: "Yan", revenue: 45000000, expenses: 32000000 },
  { name: "Fev", revenue: 52000000, expenses: 28000000 },
  { name: "Mar", revenue: 48000000, expenses: 35000000 },
  { name: "Apr", revenue: 61000000, expenses: 30000000 },
  { name: "May", revenue: 55000000, expenses: 33000000 },
  { name: "Iyn", revenue: 67000000, expenses: 29000000 },
  { name: "Iyl", revenue: 72000000, expenses: 38000000 },
];

const pieData = [
  { name: "Buyurtmalar", value: 35, color: "hsl(268, 100%, 61%)" },
  { name: "CRM", value: 25, color: "hsl(172, 70%, 50%)" },
  { name: "Ombor", value: 20, color: "hsl(280, 80%, 50%)" },
  { name: "Moliya", value: 20, color: "hsl(200, 70%, 50%)" },
];

const stats = [
  { label: "Jami daromad", value: "324.5M", change: "+12.5%", up: true, icon: DollarSign, color: "bg-primary/10 text-primary" },
  { label: "Buyurtmalar", value: "2,847", change: "+8.2%", up: true, icon: ShoppingCart, color: "bg-accent/10 text-accent" },
  { label: "Mijozlar", value: "5,129", change: "+15.3%", up: true, icon: Users, color: "bg-primary/10 text-primary" },
  { label: "Mahsulotlar", value: "1,892", change: "+3.1%", up: true, icon: Package, color: "bg-accent/10 text-accent" },
];

const recentOrders = [
  { id: "#BF-2847", customer: "Anvar Karimov", amount: "4,250,000 so'm", status: "Tugallandi", date: "12.02.2026" },
  { id: "#BF-2846", customer: "Dilnoza Rahimova", amount: "1,890,000 so'm", status: "Jarayonda", date: "12.02.2026" },
  { id: "#BF-2845", customer: "Jasur Toshev", amount: "7,500,000 so'm", status: "Tugallandi", date: "11.02.2026" },
  { id: "#BF-2844", customer: "Nilufar Saidova", amount: "2,100,000 so'm", status: "Kutilmoqda", date: "11.02.2026" },
  { id: "#BF-2843", customer: "Bobur Alimov", amount: "3,800,000 so'm", status: "Tugallandi", date: "10.02.2026" },
];

const allOrders = [
  ...recentOrders,
  { id: "#BF-2842", customer: "Shaxlo Mirzayeva", amount: "1,450,000 so'm", status: "Bekor qilingan", date: "09.02.2026" },
  { id: "#BF-2841", customer: "Rustam Qodirov", amount: "6,200,000 so'm", status: "Tugallandi", date: "09.02.2026" },
  { id: "#BF-2840", customer: "Madina Karimova", amount: "980,000 so'm", status: "Jarayonda", date: "08.02.2026" },
];

const customers = [
  { id: "1", name: "Anvar Karimov", email: "anvar@mail.uz", phone: "+998 90 123 4567", orders: 24, total: "48.5M", city: "Toshkent" },
  { id: "2", name: "Dilnoza Rahimova", email: "dilnoza@mail.uz", phone: "+998 91 234 5678", orders: 18, total: "32.1M", city: "Samarqand" },
  { id: "3", name: "Jasur Toshev", email: "jasur@mail.uz", phone: "+998 93 345 6789", orders: 42, total: "95.2M", city: "Toshkent" },
  { id: "4", name: "Nilufar Saidova", email: "nilufar@mail.uz", phone: "+998 94 456 7890", orders: 15, total: "22.8M", city: "Buxoro" },
  { id: "5", name: "Bobur Alimov", email: "bobur@mail.uz", phone: "+998 95 567 8901", orders: 31, total: "67.3M", city: "Toshkent" },
  { id: "6", name: "Shaxlo Mirzayeva", email: "shaxlo@mail.uz", phone: "+998 97 678 9012", orders: 9, total: "14.6M", city: "Namangan" },
];

const warehouseItems = [
  { id: "SKU-001", name: "Samsung Galaxy S24", category: "Elektronika", stock: 58, minStock: 20, price: "12,500,000", status: "Yetarli" },
  { id: "SKU-002", name: "MacBook Pro M3", category: "Kompyuter", stock: 12, minStock: 15, price: "38,000,000", status: "Kam" },
  { id: "SKU-003", name: "AirPods Pro", category: "Aksessuar", stock: 120, minStock: 30, price: "2,800,000", status: "Yetarli" },
  { id: "SKU-004", name: "iPad Air", category: "Planshet", stock: 5, minStock: 10, price: "9,200,000", status: "Juda kam" },
  { id: "SKU-005", name: "Apple Watch Ultra", category: "Soat", stock: 34, minStock: 15, price: "15,500,000", status: "Yetarli" },
  { id: "SKU-006", name: "Sony WH-1000XM5", category: "Audio", stock: 67, minStock: 20, price: "4,200,000", status: "Yetarli" },
];

const financeData = {
  income: "324.5M",
  expenses: "198.2M",
  profit: "126.3M",
  tax: "25.3M",
  transactions: [
    { id: "TXN-001", type: "Kirim", description: "Buyurtma #BF-2847 to'lovi", amount: "+4,250,000", date: "12.02.2026" },
    { id: "TXN-002", type: "Chiqim", description: "Yetkazib beruvchiga to'lov", amount: "-12,800,000", date: "12.02.2026" },
    { id: "TXN-003", type: "Kirim", description: "Buyurtma #BF-2845 to'lovi", amount: "+7,500,000", date: "11.02.2026" },
    { id: "TXN-004", type: "Chiqim", description: "Xodimlar ish haqi", amount: "-28,500,000", date: "10.02.2026" },
    { id: "TXN-005", type: "Kirim", description: "Buyurtma #BF-2843 to'lovi", amount: "+3,800,000", date: "10.02.2026" },
    { id: "TXN-006", type: "Chiqim", description: "Ofis ijarasi", amount: "-8,000,000", date: "09.02.2026" },
  ],
};

const monthlyAnalytics = [
  { name: "Yan", visitors: 12400, conversions: 890, revenue: 45 },
  { name: "Fev", visitors: 15200, conversions: 1120, revenue: 52 },
  { name: "Mar", visitors: 13800, conversions: 950, revenue: 48 },
  { name: "Apr", visitors: 18500, conversions: 1450, revenue: 61 },
  { name: "May", visitors: 16900, conversions: 1280, revenue: 55 },
  { name: "Iyn", visitors: 21200, conversions: 1680, revenue: 67 },
  { name: "Iyl", visitors: 24800, conversions: 1920, revenue: 72 },
];

const automationRules = [
  { id: 1, name: "Kam tovar bildirishnomasi", trigger: "Tovar soni < minimal", action: "Email yuborish", status: "Faol", runs: 42 },
  { id: 2, name: "Yangi buyurtma bildirishnomasi", trigger: "Yangi buyurtma", action: "Telegram xabar", status: "Faol", runs: 284 },
  { id: 3, name: "To'lov eslatmasi", trigger: "3 kun o'tganda", action: "SMS yuborish", status: "Faol", runs: 156 },
  { id: 4, name: "Haftalik hisobot", trigger: "Har dushanba", action: "Hisobot yaratish", status: "To'xtatilgan", runs: 18 },
  { id: 5, name: "Mijoz tug'ilgan kuni", trigger: "Tug'ilgan kun", action: "Tabrik email", status: "Faol", runs: 89 },
];

const reports = [
  { id: 1, name: "Oylik daromad hisoboti", type: "Moliya", date: "01.02.2026", status: "Tayyor" },
  { id: 2, name: "Ombor holati hisoboti", type: "Ombor", date: "01.02.2026", status: "Tayyor" },
  { id: 3, name: "Mijozlar tahlili", type: "CRM", date: "28.01.2026", status: "Tayyor" },
  { id: 4, name: "Sotuvlar bo'yicha hisobot", type: "Sotuvlar", date: "25.01.2026", status: "Tayyor" },
  { id: 5, name: "Xodimlar hisoboti", type: "HR", date: "20.01.2026", status: "Tayyor" },
  { id: 6, name: "Soliq hisoboti", type: "Moliya", date: "15.01.2026", status: "Jarayonda" },
];

const topProducts = [
  { name: "Samsung Galaxy S24", sold: 342, revenue: "1.2B" },
  { name: "MacBook Pro M3", sold: 128, revenue: "960M" },
  { name: "AirPods Pro", sold: 567, revenue: "450M" },
  { name: "iPad Air", sold: 234, revenue: "720M" },
];

// ─── TYPES ──────────────────────────────────────────────────

type ActiveTab = "dashboard" | "orders" | "customers" | "warehouse" | "finance" | "analytics" | "automation" | "reports";

const sidebarItems: { icon: any; label: string; tab: ActiveTab }[] = [
  { icon: LayoutDashboard, label: "Dashboard", tab: "dashboard" },
  { icon: ShoppingCart, label: "Buyurtmalar", tab: "orders" },
  { icon: Users, label: "Mijozlar (CRM)", tab: "customers" },
  { icon: Package, label: "Ombor", tab: "warehouse" },
  { icon: Wallet, label: "Moliya", tab: "finance" },
  { icon: BarChart3, label: "Analitika", tab: "analytics" },
  { icon: Zap, label: "Avtomatlashtirish", tab: "automation" },
  { icon: FileText, label: "Hisobotlar", tab: "reports" },
];

// ─── STATUS BADGE ───────────────────────────────────────────

const StatusBadge = ({ status }: { status: string }) => {
  const cls =
    status === "Tugallandi" || status === "Faol" || status === "Yetarli" || status === "Tayyor"
      ? "bg-accent/10 text-accent"
      : status === "Jarayonda"
      ? "bg-primary/10 text-primary"
      : status === "Kam" || status === "To'xtatilgan"
      ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
      : status === "Bekor qilingan" || status === "Juda kam"
      ? "bg-destructive/10 text-destructive"
      : "bg-muted text-muted-foreground";
  return <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${cls}`}>{status}</span>;
};

// ─── SECTION HEADER ─────────────────────────────────────────

const SectionHeader = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <h2 className="font-display text-xl font-bold">{title}</h2>
    <div className="flex items-center gap-2 flex-wrap">{children}</div>
  </div>
);

// ─── MAIN COMPONENT ─────────────────────────────────────────

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const tabTitles: Record<ActiveTab, string> = {
    dashboard: "Dashboard",
    orders: "Buyurtmalar",
    customers: "Mijozlar (CRM)",
    warehouse: "Ombor boshqaruvi",
    finance: "Moliya",
    analytics: "Analitika",
    automation: "Avtomatlashtirish",
    reports: "Hisobotlar",
  };

  return (
    <div className="min-h-screen bg-background flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-card border-r border-border z-50 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="p-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="BizFlow" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-bold">
              Biz<span className="text-gradient">Flow</span>
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-muted-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => { setActiveTab(item.tab); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all min-h-[44px] ${
                activeTab === item.tab
                  ? "bg-primary/10 text-primary font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </button>
          ))}

          {isAdmin && (
            <Link
              to="/admin"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all min-h-[44px]"
            >
              <Shield className="h-4.5 w-4.5" />
              Admin Panel
            </Link>
          )}
        </nav>

        <div className="p-4 border-t border-border">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <Settings className="h-4 w-4" />
            Sozlamalar
          </Link>
          <button
            onClick={async () => { await signOut(); navigate("/"); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all"
          >
            <LogOut className="h-4 w-4" />
            Chiqish
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground">
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <h1 className="font-display text-lg font-bold">{tabTitles[activeTab]}</h1>
                <p className="text-xs text-muted-foreground">Xush kelibsiz, {user?.user_metadata?.name || user?.email} 👋</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-muted text-sm text-muted-foreground w-64">
                <Search className="h-4 w-4" />
                <span>Qidirish...</span>
              </div>
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                <Calendar className="h-4 w-4" />
                Fev 2026
                <ChevronDown className="h-3 w-3" />
              </Button>
              <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
              </button>
              <ThemeToggle />
              <Link to="/settings" className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {(user?.user_metadata?.name || user?.email || "U")[0].toUpperCase()}
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          {/* ═══════ DASHBOARD ═══════ */}
          {activeTab === "dashboard" && (
            <>
              <div className="flex items-center gap-3 flex-wrap">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Plus className="h-4 w-4" />
                  Yangi buyurtma
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Eksport
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-5 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <span className={`text-xs font-semibold flex items-center gap-0.5 px-2 py-1 rounded-full ${stat.up ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"}`}>
                        {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {stat.change}
                      </span>
                    </div>
                    <div className="font-display text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-5 rounded-2xl border border-border bg-card">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display font-semibold">Daromad va xarajatlar</h3>
                      <p className="text-xs text-muted-foreground mt-1">Oylik ko'rsatkichlar</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-primary" />Daromad</div>
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-accent" />Xarajat</div>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={260}>
                    <RechartsBarChart data={revenueData} barGap={4}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `${v / 1000000}M`} />
                      <Tooltip formatter={(v: number) => `${(v / 1000000).toFixed(1)}M so'm`} contentStyle={{ borderRadius: "12px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                      <Bar dataKey="revenue" fill="hsl(268, 100%, 61%)" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="expenses" fill="hsl(172, 70%, 50%)" radius={[6, 6, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card">
                  <h3 className="font-display font-semibold mb-4">Modul bo'yicha taqsimot</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" stroke="none">
                        {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2 mt-2">
                    {pieData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                          <span className="text-muted-foreground">{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="p-5 flex items-center justify-between border-b border-border">
                    <h3 className="font-display font-semibold">So'nggi buyurtmalar</h3>
                    <Button variant="ghost" size="sm" className="text-primary text-xs" onClick={() => setActiveTab("orders")}>
                      Barchasini ko'rish
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/30">
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">ID</th>
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Mijoz</th>
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Summa</th>
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Sana</th>
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order) => (
                          <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-medium text-primary">{order.id}</td>
                            <td className="p-4">{order.customer}</td>
                            <td className="p-4 font-medium">{order.amount}</td>
                            <td className="p-4 text-muted-foreground">{order.date}</td>
                            <td className="p-4"><StatusBadge status={order.status} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="lg:col-span-2 p-5 rounded-2xl border border-border bg-card">
                  <h3 className="font-display font-semibold mb-4">Top mahsulotlar</h3>
                  <div className="space-y-4">
                    {topProducts.map((product, i) => (
                      <div key={product.name} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">{i + 1}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.sold} dona sotildi</div>
                        </div>
                        <div className="text-sm font-semibold">{product.revenue}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ═══════ BUYURTMALAR ═══════ */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              <SectionHeader title="Buyurtmalar ro'yxati">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Plus className="h-4 w-4" />
                  Yangi buyurtma
                </Button>
                <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" />Filter</Button>
                <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" />Eksport</Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { label: "Jami", value: allOrders.length, icon: ShoppingCart, color: "bg-primary/10 text-primary" },
                  { label: "Tugallangan", value: allOrders.filter(o => o.status === "Tugallandi").length, icon: CheckCircle, color: "bg-accent/10 text-accent" },
                  { label: "Jarayonda", value: allOrders.filter(o => o.status === "Jarayonda").length, icon: Clock, color: "bg-primary/10 text-primary" },
                  { label: "Kutilmoqda", value: allOrders.filter(o => o.status === "Kutilmoqda").length, icon: AlertTriangle, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display text-xl font-bold">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">ID</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Mijoz</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Summa</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Sana</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrders.map((order) => (
                        <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-primary">{order.id}</td>
                          <td className="p-4">{order.customer}</td>
                          <td className="p-4 font-medium">{order.amount}</td>
                          <td className="p-4 text-muted-foreground">{order.date}</td>
                          <td className="p-4"><StatusBadge status={order.status} /></td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Eye className="h-4 w-4 text-muted-foreground" /></button>
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ═══════ MIJOZLAR (CRM) ═══════ */}
          {activeTab === "customers" && (
            <div className="space-y-6">
              <SectionHeader title="Mijozlar bazasi">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Plus className="h-4 w-4" />
                  Yangi mijoz
                </Button>
                <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" />Eksport</Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Jami mijozlar", value: "5,129", icon: Users, color: "bg-primary/10 text-primary" },
                  { label: "Yangi (bu oy)", value: "342", icon: UserCircle, color: "bg-accent/10 text-accent" },
                  { label: "O'rtacha buyurtma", value: "2.4M", icon: ShoppingCart, color: "bg-primary/10 text-primary" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display text-xl font-bold">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[700px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Mijoz</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Telefon</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Shahar</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Buyurtmalar</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Jami summa</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((c) => (
                        <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4">
                            <div className="font-medium">{c.name}</div>
                            <div className="text-xs text-muted-foreground">{c.email}</div>
                          </td>
                          <td className="p-4 text-muted-foreground">{c.phone}</td>
                          <td className="p-4 text-muted-foreground">{c.city}</td>
                          <td className="p-4 font-medium">{c.orders}</td>
                          <td className="p-4 font-medium">{c.total} so'm</td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Eye className="h-4 w-4 text-muted-foreground" /></button>
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                              <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"><Trash2 className="h-4 w-4 text-destructive" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ═══════ OMBOR ═══════ */}
          {activeTab === "warehouse" && (
            <div className="space-y-6">
              <SectionHeader title="Ombor boshqaruvi">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Plus className="h-4 w-4" />
                  Yangi tovar
                </Button>
                <Button variant="outline" size="sm" className="gap-2"><Truck className="h-4 w-4" />Yetkazib berish</Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { label: "Jami tovarlar", value: "1,892", icon: Boxes, color: "bg-primary/10 text-primary" },
                  { label: "Kam qolgan", value: "23", icon: AlertTriangle, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
                  { label: "Jami qiymati", value: "2.8B", icon: DollarSign, color: "bg-accent/10 text-accent" },
                  { label: "Kategoriyalar", value: "18", icon: Package, color: "bg-primary/10 text-primary" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display text-xl font-bold">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[700px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">SKU</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Mahsulot</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Kategoriya</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Qoldiq</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Narx</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Holat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {warehouseItems.map((item) => (
                        <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-primary">{item.id}</td>
                          <td className="p-4 font-medium">{item.name}</td>
                          <td className="p-4 text-muted-foreground">{item.category}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.stock}</span>
                              <span className="text-xs text-muted-foreground">/ min: {item.minStock}</span>
                            </div>
                          </td>
                          <td className="p-4 font-medium">{item.price} so'm</td>
                          <td className="p-4"><StatusBadge status={item.status} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ═══════ MOLIYA ═══════ */}
          {activeTab === "finance" && (
            <div className="space-y-6">
              <SectionHeader title="Moliyaviy ko'rsatkichlar">
                <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" />Hisobot yuklab olish</Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { label: "Jami kirim", value: financeData.income, icon: ArrowUpRight, color: "bg-accent/10 text-accent" },
                  { label: "Jami chiqim", value: financeData.expenses, icon: ArrowDownRight, color: "bg-destructive/10 text-destructive" },
                  { label: "Sof foyda", value: financeData.profit, icon: DollarSign, color: "bg-primary/10 text-primary" },
                  { label: "Soliq", value: financeData.tax, icon: FileText, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display text-xl font-bold">{s.value} so'm</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <h3 className="font-display font-semibold mb-4">Daromad trendi</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `${v / 1000000}M`} />
                      <Tooltip formatter={(v: number) => `${(v / 1000000).toFixed(1)}M so'm`} contentStyle={{ borderRadius: "12px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                      <Area type="monotone" dataKey="revenue" stroke="hsl(268, 100%, 61%)" fill="hsl(268, 100%, 61%)" fillOpacity={0.15} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="p-5 border-b border-border">
                    <h3 className="font-display font-semibold">So'nggi tranzaksiyalar</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {financeData.transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.type === "Kirim" ? "bg-accent/10" : "bg-destructive/10"}`}>
                            {tx.type === "Kirim" ? <ArrowUpRight className="h-4 w-4 text-accent" /> : <ArrowDownRight className="h-4 w-4 text-destructive" />}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{tx.description}</div>
                            <div className="text-xs text-muted-foreground">{tx.date}</div>
                          </div>
                        </div>
                        <span className={`text-sm font-semibold ${tx.type === "Kirim" ? "text-accent" : "text-destructive"}`}>{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════ ANALITIKA ═══════ */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <SectionHeader title="Analitika va statistika">
                <Button variant="outline" size="sm" className="gap-2"><Calendar className="h-4 w-4" />Davr tanlash</Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Tashriflar", value: "124,800", change: "+18.2%", icon: Activity, color: "bg-primary/10 text-primary" },
                  { label: "Konversiya", value: "7.8%", change: "+2.1%", icon: Target, color: "bg-accent/10 text-accent" },
                  { label: "O'rtacha chek", value: "2.4M", change: "+5.3%", icon: DollarSign, color: "bg-primary/10 text-primary" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <span className="text-xs font-semibold text-accent flex items-center gap-0.5"><ArrowUpRight className="h-3 w-3" />{s.change}</span>
                    </div>
                    <div className="font-display text-2xl font-bold">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <h3 className="font-display font-semibold mb-4">Tashriflar va konversiya</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={monthlyAnalytics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                      <Line type="monotone" dataKey="visitors" stroke="hsl(268, 100%, 61%)" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="conversions" stroke="hsl(172, 70%, 50%)" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card">
                  <h3 className="font-display font-semibold mb-4">Daromad trendi (M so'm)</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={monthlyAnalytics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                      <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                      <Area type="monotone" dataKey="revenue" stroke="hsl(268, 100%, 61%)" fill="hsl(268, 100%, 61%)" fillOpacity={0.15} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* ═══════ AVTOMATLASHTIRISH ═══════ */}
          {activeTab === "automation" && (
            <div className="space-y-6">
              <SectionHeader title="Avtomatlashtirish qoidalari">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Plus className="h-4 w-4" />
                  Yangi qoida
                </Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Faol qoidalar", value: automationRules.filter(r => r.status === "Faol").length, icon: PlayCircle, color: "bg-accent/10 text-accent" },
                  { label: "To'xtatilgan", value: automationRules.filter(r => r.status === "To'xtatilgan").length, icon: PauseCircle, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
                  { label: "Jami ishga tushirilgan", value: automationRules.reduce((a, r) => a + r.runs, 0), icon: Repeat, color: "bg-primary/10 text-primary" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display text-xl font-bold">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {automationRules.map((rule) => (
                  <div key={rule.id} className="p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${rule.status === "Faol" ? "bg-accent/10" : "bg-muted"}`}>
                        <Zap className={`h-5 w-5 ${rule.status === "Faol" ? "text-accent" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h4 className="font-medium">{rule.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="font-medium">Trigger:</span> {rule.trigger} → <span className="font-medium">Amal:</span> {rule.action}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{rule.runs} marta ishga tushirilgan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <StatusBadge status={rule.status} />
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                      <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"><Trash2 className="h-4 w-4 text-destructive" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════ HISOBOTLAR ═══════ */}
          {activeTab === "reports" && (
            <div className="space-y-6">
              <SectionHeader title="Hisobotlar">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2">
                  <Plus className="h-4 w-4" />
                  Yangi hisobot
                </Button>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Jami hisobotlar", value: reports.length, icon: FileBarChart, color: "bg-primary/10 text-primary" },
                  { label: "Tayyor", value: reports.filter(r => r.status === "Tayyor").length, icon: CheckCircle, color: "bg-accent/10 text-accent" },
                  { label: "Jarayonda", value: reports.filter(r => r.status === "Jarayonda").length, icon: Clock, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><s.icon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display text-xl font-bold">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {reports.map((report) => (
                  <div key={report.id} className="p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileBarChart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{report.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="font-medium">Turi:</span> {report.type} · <span className="font-medium">Sana:</span> {report.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <StatusBadge status={report.status} />
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Yuklab olish
                      </Button>
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Printer className="h-4 w-4 text-muted-foreground" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
