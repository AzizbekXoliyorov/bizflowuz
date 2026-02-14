import PageLayout from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Foydalanish shartlari</h1>
          <p className="text-muted-foreground">Oxirgi yangilangan: 2026-yil 14-fevral</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
          <h2 className="font-display text-xl font-bold mt-8 mb-3">1. Shartlarni qabul qilish</h2>
          <p className="text-muted-foreground leading-relaxed">
            BizFlow platformasidan foydalanish orqali siz ushbu foydalanish shartlarini to'liq qabul qilasiz. Agar shartlarga rozi bo'lmasangiz, platformadan foydalanmang.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">2. Xizmat tavsifi</h2>
          <p className="text-muted-foreground leading-relaxed">
            BizFlow — bulutli Mini ERP platformasi bo'lib, buyurtmalar, mijozlar, ombor va moliyani boshqarish xizmatlarini taqdim etadi. Xizmatlar "bor holda" taqdim etiladi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">3. Foydalanuvchi majburiyatlari</h2>
          <ul className="text-muted-foreground space-y-1 list-disc pl-5">
            <li>To'g'ri va aniq ma'lumotlar kiritish</li>
            <li>Hisob xavfsizligini ta'minlash</li>
            <li>Platformadan qonuniy maqsadlarda foydalanish</li>
            <li>Boshqa foydalanuvchilar huquqlarini hurmat qilish</li>
          </ul>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">4. To'lov shartlari</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pulli rejalar uchun to'lov har oyning boshida amalga oshiriladi. To'lov muddati o'tgan taqdirda, xizmatlar vaqtincha to'xtatilishi mumkin. Qaytarilgan to'lovlar kompaniya siyosatiga muvofiq ko'rib chiqiladi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">5. Intellektual mulk</h2>
          <p className="text-muted-foreground leading-relaxed">
            BizFlow platformasi, dizayni, kodi va kontenti BizFlow kompaniyasining intellektual mulki hisoblanadi. Ruxsatsiz nusxalash, tarqatish yoki o'zgartirish taqiqlanadi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">6. Javobgarlik cheklovi</h2>
          <p className="text-muted-foreground leading-relaxed">
            BizFlow platformasidan foydalanish natijasida yuzaga kelishi mumkin bo'lgan bevosita yoki bilvosita zararlar uchun kompaniya javobgar emas. Xizmatlar "bor holda" taqdim etiladi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">7. O'zgartirishlar</h2>
          <p className="text-muted-foreground leading-relaxed">
            Biz ushbu shartlarni istalgan vaqtda o'zgartirish huquqini saqlab qolamiz. O'zgarishlar platformada e'lon qilinadi.
          </p>

          <h2 className="font-display text-xl font-bold mt-8 mb-3">8. Bog'lanish</h2>
          <p className="text-muted-foreground leading-relaxed">
            Foydalanish shartlari bo'yicha savollar uchun legal@bizflow.uz ga murojaat qiling.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
