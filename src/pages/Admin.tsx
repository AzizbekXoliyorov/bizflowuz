import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  LayoutDashboard, Users, Package, FileText, Shield, DollarSign,
  ArrowUpRight, ShoppingCart, TrendingUp, ArrowLeft, Menu, X,
  Search, Bell, Eye, Edit, Trash2, UserPlus, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const adminStats = [
  { label: "Jami foydalanuvchilar", value: "5,129", change: "+15.3%", icon: Users, color: "bg-primary/10 text-primary" },
  { label: "Jami buyurtmalar", value: "12,847", change: "+8.2%", icon: ShoppingCart, color: "bg-accent/10 text-accent" },
  { label: "Jami daromad", value: "1.2B so'm", change: "+22.1%", icon: DollarSign, color: "bg-primary/10 text-primary" },
  { label: "Faol mahsulotlar", value: "1,892", change: "+3.1%", icon: Package, color: "bg-accent/10 text-accent" },
];

const recentUsers = [
  { id: "1", name: "Anvar Karimov", email: "anvar@mail.uz", role: "user", status: "Faol", date: "12.02.2026" },
  { id: "2", name: "Dilnoza Rahimova", email: "dilnoza@mail.uz", role: "moderator", status: "Faol", date: "11.02.2026" },
  { id: "3", name: "Jasur Toshev", email: "jasur@mail.uz", role: "user", status: "Nofaol", date: "10.02.2026" },
  { id: "4", name: "Nilufar Saidova", email: "nilufar@mail.uz", role: "user", status: "Faol", date: "09.02.2026" },
  { id: "5", name: "Bobur Alimov", email: "bobur@mail.uz", role: "admin", status: "Faol", date: "08.02.2026" },
];

const systemLogs = [
  { action: "Yangi foydalanuvchi ro'yxatdan o'tdi", user: "Anvar Karimov", time: "2 daqiqa oldin" },
  { action: "Buyurtma #BF-2847 tugallandi", user: "Tizim", time: "15 daqiqa oldin" },
  { action: "Mahsulot narxi yangilandi", user: "Admin", time: "1 soat oldin" },
  { action: "Yangi to'lov qabul qilindi", user: "Tizim", time: "2 soat oldin" },
  { action: "Foydalanuvchi roli o'zgartirildi", user: "Admin", time: "3 soat oldin" },
  { action: "Tizim yangilandi v2.1.0", user: "Tizim", time: "5 soat oldin" },
];

const topProducts = [
  { name: "Samsung Galaxy S24", sold: 342, revenue: "1.2B", stock: 58 },
  { name: "MacBook Pro M3", sold: 128, revenue: "960M", stock: 23 },
  { name: "AirPods Pro", sold: 567, revenue: "450M", stock: 120 },
  { name: "iPad Air", sold: 234, revenue: "720M", stock: 45 },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Umumiy ko'rinish", active: true },
  { icon: Users, label: "Foydalanuvchilar" },
  { icon: Package, label: "Mahsulotlar" },
  { icon: ShoppingCart, label: "Buyurtmalar" },
  { icon: DollarSign, label: "Daromadlar" },
  { icon: Shield, label: "Rollar" },
  { icon: FileText, label: "Tizim loglari" },
];

type ActiveTab = "overview" | "users" | "products" | "logs" | "roles";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  const handleSidebarClick = (label: string) => {
    const map: Record<string, ActiveTab> = {
      "Umumiy ko'rinish": "overview",
      "Foydalanuvchilar": "users",
      "Mahsulotlar": "products",
      "Tizim loglari": "logs",
      "Rollar": "roles",
    };
    setActiveTab(map[label] || "overview");
    setSidebarOpen(false);
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

        <div className="px-4 mb-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Admin Panel</span>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = (activeTab === "overview" && item.label === "Umumiy ko'rinish") ||
              (activeTab === "users" && item.label === "Foydalanuvchilar") ||
              (activeTab === "products" && item.label === "Mahsulotlar") ||
              (activeTab === "logs" && item.label === "Tizim loglari") ||
              (activeTab === "roles" && item.label === "Rollar");

            return (
              <button
                key={item.label}
                onClick={() => handleSidebarClick(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all min-h-[44px] ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4.5 w-4.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboardga qaytish
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <h1 className="font-display text-lg font-bold">Admin Panel</h1>
                <p className="text-xs text-muted-foreground">Tizimni boshqarish</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-xl hover:bg-muted transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
              </button>
              <ThemeToggle />
              <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 space-y-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {adminStats.map((stat) => (
                  <div key={stat.label} className="p-5 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold flex items-center gap-0.5 px-2 py-1 rounded-full bg-accent/10 text-accent">
                        <ArrowUpRight className="h-3 w-3" />
                        {stat.change}
                      </span>
                    </div>
                    <div className="font-display text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent users */}
                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-5 flex items-center justify-between border-b border-border">
                    <h3 className="font-display font-semibold">So'nggi foydalanuvchilar</h3>
                    <Button variant="ghost" size="sm" className="text-primary text-xs min-h-[44px]" onClick={() => setActiveTab("users")}>
                      Barchasini ko'rish
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm min-w-[500px]">
                      <thead>
                        <tr className="border-b border-border bg-muted/30">
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Ism</th>
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Rol</th>
                          <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.slice(0, 4).map((user) => (
                          <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                            <td className="p-4">
                              <div className="font-medium">{user.name}</div>
                              <div className="text-xs text-muted-foreground">{user.email}</div>
                            </td>
                            <td className="p-4">
                              <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                                user.role === "admin" ? "bg-primary/10 text-primary" :
                                user.role === "moderator" ? "bg-accent/10 text-accent" :
                                "bg-muted text-muted-foreground"
                              }`}>{user.role}</span>
                            </td>
                            <td className="p-4">
                              <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                                user.status === "Faol" ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"
                              }`}>{user.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* System logs */}
                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-5 flex items-center justify-between border-b border-border">
                    <h3 className="font-display font-semibold">Tizim loglari</h3>
                    <Button variant="ghost" size="sm" className="text-primary text-xs min-h-[44px]" onClick={() => setActiveTab("logs")}>
                      Barchasini ko'rish
                    </Button>
                  </div>
                  <div className="p-4 space-y-3">
                    {systemLogs.slice(0, 5).map((log, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{log.action}</p>
                          <p className="text-xs text-muted-foreground">{log.user} · {log.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h2 className="font-display text-xl font-bold">Foydalanuvchilarni boshqarish</h2>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2 min-h-[44px]">
                  <UserPlus className="h-4 w-4" />
                  Yangi foydalanuvchi
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Foydalanuvchi</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Rol</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Sana</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4">
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                              user.role === "admin" ? "bg-primary/10 text-primary" :
                              user.role === "moderator" ? "bg-accent/10 text-accent" :
                              "bg-muted text-muted-foreground"
                            }`}>{user.role}</span>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                              user.status === "Faol" ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"
                            }`}>{user.status}</span>
                          </td>
                          <td className="p-4 text-muted-foreground">{user.date}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                                <Edit className="h-4 w-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </button>
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

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h2 className="font-display text-xl font-bold">Mahsulotlarni boshqarish</h2>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-glow gap-2 min-h-[44px]">
                  <Package className="h-4 w-4" />
                  Yangi mahsulot
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">#</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Mahsulot</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Sotildi</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Daromad</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Omborda</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topProducts.map((product, i) => (
                        <tr key={product.name} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-primary">{i + 1}</td>
                          <td className="p-4 font-medium">{product.name}</td>
                          <td className="p-4">{product.sold} dona</td>
                          <td className="p-4 font-semibold">{product.revenue}</td>
                          <td className="p-4">
                            <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                              product.stock > 50 ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"
                            }`}>{product.stock} dona</span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
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

          {/* Logs Tab */}
          {activeTab === "logs" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold">Tizim loglari</h2>
              <div className="rounded-2xl border border-border bg-card shadow-card">
                <div className="p-4 space-y-2">
                  {systemLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{log.action}</p>
                        <p className="text-xs text-muted-foreground">{log.user} · {log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Roles Tab */}
          {activeTab === "roles" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold">Rollarni boshqarish</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { role: "Admin", desc: "To'liq tizim huquqlari", count: 2, color: "bg-primary/10 text-primary border-primary/20" },
                  { role: "Moderator", desc: "Kontentni boshqarish", count: 5, color: "bg-accent/10 text-accent border-accent/20" },
                  { role: "User", desc: "Asosiy foydalanuvchi", count: 48, color: "bg-muted text-muted-foreground border-border" },
                ].map((r) => (
                  <div key={r.role} className={`p-5 rounded-2xl border shadow-card ${r.color}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-5 w-5" />
                      <h3 className="font-display font-semibold text-lg">{r.role}</h3>
                    </div>
                    <p className="text-sm opacity-80 mb-3">{r.desc}</p>
                    <p className="text-2xl font-display font-bold">{r.count}</p>
                    <p className="text-xs opacity-70 mt-1">foydalanuvchi</p>
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

export default Admin;
