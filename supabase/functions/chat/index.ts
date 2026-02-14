import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `Siz BizFlow platformasining AI yordamchisisiz. BizFlow — bu O'zbekistondagi kichik va o'rta bizneslar uchun mo'ljallangan SaaS platforma bo'lib, buyurtmalarni boshqarish, mijozlar bilan ishlash (CRM), analitika, hisobotlar va jamoaviy hamkorlik imkoniyatlarini taqdim etadi.

Narxlar:
- Standard: 49,000 so'm/oy — 1 foydalanuvchi, asosiy buyurtma boshqaruvi, email qo'llab-quvvatlash
- Pro: 149,000 so'm/oy — 10 foydalanuvchi, CRM, analitika, API integratsiya, prioritet qo'llab-quvvatlash
- Premium: 349,000 so'm/oy — cheksiz foydalanuvchi, AI analitika, maxsus integratsiyalar, shaxsiy menejer

Asosiy imkoniyatlar: Buyurtma boshqaruvi, CRM, Analitika va hisobotlar, API integratsiya, Jamoaviy hamkorlik, Avtomatlashtirish.

Faqat BizFlow haqidagi savollarga javob bering. Javoblaringiz qisqa, aniq va o'zbek tilida bo'lsin. Agar savol BizFlow bilan bog'liq bo'lmasa, foydalanuvchini BizFlow haqida savol berishga yo'naltiring.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "So'rovlar limiti oshdi, keyinroq urinib ko'ring." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "To'lov talab qilinadi." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI xizmatida xatolik yuz berdi." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Noma'lum xatolik" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
