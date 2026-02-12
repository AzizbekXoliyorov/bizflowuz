import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Bell,
  Search,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const stats = [
  { label: "Jami daromad", value: "124.5M", change: "+12.5%", up: true, icon: DollarSign },
  { label: "Buyurtmalar", value: "1,284", change: "+8.2%", up: true, icon: ShoppingCart },
  { label: "Mijozlar", value: "3,421", change: "+15.3%", up: true, icon: Users },
  { label: "Mahsulotlar", value: "892", change: "-2.1%", up: false, icon: Package },
];

const recentOrders = [
  { id: "#BF-1284", customer: "Anvar Karimov", amount: "2,450,000", status: "Tugallandi" },
  { id: "#BF-1283", customer: "Dilnoza Rahimova", amount: "890,000", status: "Jarayonda" },
  { id: "#BF-1282", customer: "Jasur Toshev", amount: "5,200,000", status: "Tugallandi" },
  { id: "#BF-1281", customer: "Nilufar Saidova", amount: "1,100,000", status: "Kutilmoqda" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Buyurtmalar" },
  { icon: Users, label: "Mijozlar" },
  { icon: Package, label: "Ombor" },
  { icon: DollarSign, label: "Moliya" },
  { icon: TrendingUp, label: "Analitika" },
  { icon: Settings, label: "Sozlamalar" },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Dashboard</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Kuchli va <span className="text-gradient">intuitiv boshqaruv</span>
          </h2>
          <p className="text-muted-foreground">
            Barcha ko'rsatkichlaringiz bir qarashda. Real vaqtda yangilanib turadigan dashboard.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-border shadow-card-hover overflow-hidden bg-card">
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-56 border-r border-border bg-muted/30 p-4">
              <div className="flex items-center gap-2 mb-8 px-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
                <span className="font-display font-bold text-sm">BizFlow</span>
              </div>
              <div className="flex flex-col gap-1">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg">Dashboard</h3>
                  <p className="text-xs text-muted-foreground">Xush kelibsiz, Admin</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground">
                    <Search className="h-3.5 w-3.5" />
                    <span>Qidirish...</span>
                  </div>
                  <div className="relative">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.up ? "text-accent" : "text-destructive"}`}>
                        {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {stat.change}
                      </span>
                    </div>
                    <div className="font-display text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder + Recent orders */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Chart */}
                <div className="lg:col-span-3 p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-semibold text-sm">Daromad statistikasi</span>
                    <span className="text-xs text-muted-foreground">So'nggi 7 kun</span>
                  </div>
                  <div className="h-40 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md bg-gradient-primary opacity-80 hover:opacity-100 transition-opacity"
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground">
                          {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent orders */}
                <div className="lg:col-span-2 p-4 rounded-xl border border-border bg-card">
                  <span className="font-display font-semibold text-sm">So'nggi buyurtmalar</span>
                  <div className="mt-3 space-y-3">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">{order.customer}</div>
                          <div className="text-xs text-muted-foreground">{order.id}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{order.amount}</div>
                          <div className={`text-xs ${
                            order.status === "Tugallandi" ? "text-accent" : order.status === "Jarayonda" ? "text-primary" : "text-muted-foreground"
                          }`}>
                            {order.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
