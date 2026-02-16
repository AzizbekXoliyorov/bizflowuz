import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight,
  Package, Bell, Search, LayoutDashboard, Settings, LogOut, BarChart3,
  Zap, ChevronDown, Plus, Filter, Download, Menu, X, FileText, Wallet,
  Calendar, Clock, UserCircle, Shield,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";

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

const topProducts = [
  { name: "Samsung Galaxy S24", sold: 342, revenue: "1.2B" },
  { name: "MacBook Pro M3", sold: 128, revenue: "960M" },
  { name: "AirPods Pro", sold: 567, revenue: "450M" },
  { name: "iPad Air", sold: 234, revenue: "720M" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: ShoppingCart, label: "Buyurtmalar", href: "/dashboard" },
  { icon: Users, label: "Mijozlar (CRM)", href: "/dashboard" },
  { icon: Package, label: "Ombor", href: "/dashboard" },
  { icon: Wallet, label: "Moliya", href: "/dashboard" },
  { icon: BarChart3, label: "Analitika", href: "/dashboard" },
  { icon: Zap, label: "Avtomatlashtirish", href: "/dashboard" },
  { icon: FileText, label: "Hisobotlar", href: "/dashboard" },
  { icon: Shield, label: "Admin Panel", href: "/admin" },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
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

        <nav className="flex-1 px-3 py-2 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all min-h-[44px] ${
                item.active
                  ? "bg-primary/10 text-primary font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          ))}
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
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all"
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
                <h1 className="font-display text-lg font-bold">Dashboard</h1>
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

        {/* Dashboard content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Quick actions */}
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

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-semibold flex items-center gap-0.5 px-2 py-1 rounded-full ${
                    stat.up ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"
                  }`}>
                    {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </span>
                </div>
                <div className="font-display text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue chart */}
            <div className="lg:col-span-2 p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-semibold">Daromad va xarajatlar</h3>
                  <p className="text-xs text-muted-foreground mt-1">Oylik ko'rsatkichlar</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    Daromad
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    Xarajat
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={revenueData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `${v / 1000000}M`} />
                  <Tooltip formatter={(v: number) => `${(v / 1000000).toFixed(1)}M so'm`} contentStyle={{ borderRadius: "12px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                  <Bar dataKey="revenue" fill="hsl(268, 100%, 61%)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="expenses" fill="hsl(172, 70%, 50%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie chart */}
            <div className="p-5 rounded-2xl border border-border bg-card">
              <h3 className="font-display font-semibold mb-4">Modul bo'yicha taqsimot</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" stroke="none">
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
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

          {/* Orders + Top products */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Recent orders */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="p-5 flex items-center justify-between border-b border-border">
                <h3 className="font-display font-semibold">So'nggi buyurtmalar</h3>
                <Button variant="ghost" size="sm" className="text-primary text-xs">
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
                        <td className="p-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                            order.status === "Tugallandi"
                              ? "bg-accent/10 text-accent"
                              : order.status === "Jarayonda"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top products */}
            <div className="lg:col-span-2 p-5 rounded-2xl border border-border bg-card">
              <h3 className="font-display font-semibold mb-4">Top mahsulotlar</h3>
              <div className="space-y-4">
                {topProducts.map((product, i) => (
                  <div key={product.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {i + 1}
                    </div>
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
