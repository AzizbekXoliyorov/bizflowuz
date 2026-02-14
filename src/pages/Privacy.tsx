import PageLayout from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Maxfiylik siyosati</h1>
          <p className="text-muted-foreground">Oxirgi yangilangan: 2026-yil 14-fevral</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
          <h2 className="font-display text-xl font-bold mt-8 mb-3">1. Umumiy qoidalar</h2>
          <p className="text-muted-foreground leading-relaxed">
            BizFlow ("Biz", "Bizning") foydalanuvchilarning shaxsiy ma'lumotlarini himoya qilishga sodiqmiz. Ushbu maxfiylik siyosati qanday ma'lumotlarni yig'ishimiz, qanday ishlatishimiz va himoya qilishimizni tushuntiradi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">2. Yig'iladigan ma'lumotlar</h2>
          <p className="text-muted-foreground leading-relaxed">Biz quyidagi ma'lumotlarni yig'amiz:</p>
          <ul className="text-muted-foreground space-y-1 list-disc pl-5">
            <li>Ism, familiya va kompaniya nomi</li>
            <li>Email manzili va telefon raqami</li>
            <li>To'lov ma'lumotlari (xavfsiz to'lov provayderlari orqali)</li>
            <li>Platformadan foydalanish statistikasi</li>
            <li>Qurilma va brauzer ma'lumotlari</li>
          </ul>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">3. Ma'lumotlardan foydalanish</h2>
          <p className="text-muted-foreground leading-relaxed">Yig'ilgan ma'lumotlar quyidagi maqsadlarda ishlatiladi:</p>
          <ul className="text-muted-foreground space-y-1 list-disc pl-5">
            <li>Xizmatlarni taqdim etish va yaxshilash</li>
            <li>Foydalanuvchi hisobini boshqarish</li>
            <li>Texnik qo'llab-quvvatlash ko'rsatish</li>
            <li>Marketing va axborot xabarlari yuborish (rozilik asosida)</li>
          </ul>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">4. Ma'lumotlarni himoya qilish</h2>
          <p className="text-muted-foreground leading-relaxed">
            Biz ma'lumotlaringizni SSL/TLS shifrlash, xavfsiz serverlar va muntazam xavfsizlik tekshiruvlari orqali himoya qilamiz. Ma'lumotlaringiz uchinchi shaxslarga sizning roziligingiz yoki qonun talabisiz berilmaydi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">5. Cookie fayllar</h2>
          <p className="text-muted-foreground leading-relaxed">
            Biz cookie fayllardan xizmat sifatini yaxshilash uchun foydalanamiz. Siz brauzer sozlamalari orqali cookie fayllarni boshqarishingiz mumkin.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">6. Bog'lanish</h2>
          <p className="text-muted-foreground leading-relaxed">
            Maxfiylik siyosati bo'yicha savollaringiz bo'lsa, privacy@bizflow.uz ga murojaat qiling.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
