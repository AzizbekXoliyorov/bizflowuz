import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  { title: "Senior Frontend Developer", department: "Texnologiya", location: "Toshkent", type: "To'liq vaqt", desc: "React, TypeScript va zamonaviy frontend texnologiyalari bilan ishlash." },
  { title: "Backend Developer", department: "Texnologiya", location: "Toshkent / Remote", type: "To'liq vaqt", desc: "Node.js, PostgreSQL va cloud xizmatlari bilan ishlash." },
  { title: "UI/UX Designer", department: "Dizayn", location: "Toshkent", type: "To'liq vaqt", desc: "Foydalanuvchi tajribasini loyihalash va prototip yaratish." },
  { title: "Sotuvlar menejeri", department: "Sotuvlar", location: "Toshkent", type: "To'liq vaqt", desc: "B2B sotuvlar va mijozlar bilan ishlash." },
  { title: "Mijozlarga xizmat ko'rsatish", department: "Qo'llab-quvvatlash", location: "Remote", type: "Yarim vaqt", desc: "Mijozlarga texnik va umumiy yordam berish." },
];

const Careers = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Karyera</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">
            Bizning jamoaga <span className="text-gradient">qo'shiling</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BizFlow — innovatsion texnologiya kompaniyasi. Biz iste'dodli mutaxassislarni qidirmoqdamiz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{job.department}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.desc}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{job.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Ariza berish</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
