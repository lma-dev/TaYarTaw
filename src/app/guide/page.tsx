import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="relative min-h-screen bg-[oklch(0.95_0.005_250)] px-4 py-10">
      <div className="mx-auto w-full max-w-[600px] animate-fade-in">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            ပင်မစာမျက်နှာ
          </Link>
        </div>

        {/* Header */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-700 px-8 py-10 text-center text-white mb-8">
          <p className="text-4xl mb-3">🙏</p>
          <h1 className="text-xl font-bold mb-1">
            Online တရားပွဲ ဝင်ရောက်နည်း လမ်းညွှန်
          </h1>
        </div>

        {/* Step 1 */}
        <div className="mb-6">
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white text-sm font-bold">
                1
              </span>
              <h2 className="text-sm font-semibold">
                ဖိတ်ကြားလွှာ Website ဖွင့်နည်း
              </h2>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                Messenger, Line, Viber စသည်တို့မှ ရရှိထားသော Website Link ကို
                နှိပ်ပါ။ ဖုန်း (သို့) ကွန်ပျူတာ ဘယ်မှာ ဖွင့်ဖွင့် အဆင်ပြေပါတယ်။
              </p>
              <div className="rounded-xl bg-emerald-50 border-2 border-dashed border-emerald-200 p-5 text-center">
                <p className="text-3xl mb-2">📱</p>
                <p className="text-sm font-semibold text-emerald-800">
                  Link ကို နှိပ်လိုက်ရုံပါ
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Chrome, Safari ကဲ့သို့ Browser မှာ အလိုအလျှောက် ပွင့်လာပါမယ်
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 border-l-4 border-blue-400 px-4 py-3">
                <p className="text-xs text-blue-800">
                  <strong>Link ပွင့်မလာရင်:</strong> Link ကို copy လုပ်ပြီး
                  Chrome browser မှာ paste လုပ်ကာ ဖွင့်ပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-6">
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white text-sm font-bold">
                2
              </span>
              <h2 className="text-sm font-semibold">
                ရက်စွဲနှင့် အချိန် စစ်ဆေးပါ
              </h2>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                Website ထဲဝင်ရောက်လျှင် တရားပွဲ ကျင်းပမည့် ရက်စွဲနှင့် အချိန်ကို
                တွေ့ရပါမယ်။
              </p>
              <div className="flex justify-center gap-3">
                <div className="rounded-xl bg-muted px-5 py-3 text-center">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    ဂျပန် (JST)
                  </p>
                  <p className="text-2xl font-bold">10:30</p>
                </div>
                <div className="rounded-xl bg-muted px-5 py-3 text-center">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    မြန်မာ (MMT)
                  </p>
                  <p className="text-2xl font-bold">08:00</p>
                </div>
              </div>
              <div className="rounded-lg bg-blue-50 border-l-4 border-blue-400 px-4 py-3">
                <p className="text-xs text-blue-800">
                  <strong>သတိပြုရန်:</strong> ဂျပန်မှာ ရှိသူများ JST အချိန်ကို
                  ကြည့်ပါ။ မြန်မာမှာ ရှိသူများ MMT အချိန်ကို ကြည့်ပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-6">
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white text-sm font-bold">
                3
              </span>
              <h2 className="text-sm font-semibold">Meeting ထဲ ဝင်ရောက်ပါ</h2>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                အချိန်ရောက်လျှင် Meeting Link ခလုတ်ကို နှိပ်ပါ။
              </p>

              {/* Link 1 explanation */}
              <div className="rounded-xl bg-muted p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    1
                  </span>
                  <p className="text-sm font-semibold">
                    Meeting Link ၁ ကို အရင်နှိပ်ပါ
                  </p>
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  ပထမဆုံး ဤ Link မှ ဝင်ရောက်ပါ။ ဓမ္မမိတ်ဆွေ အားလုံး Link ၁ ကို
                  အရင် ဝင်ရပါမယ်။
                </p>
              </div>

              <div className="rounded-xl bg-muted p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/20 text-foreground text-xs font-bold">
                    2
                  </span>
                  <p className="text-sm font-semibold">
                    Link ၁ ပြီးဆုံးလျှင် Link ၂ ကို ဆက်ဝင်ပါ
                  </p>
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  Meeting Link တစ်ခုသည် ၁ နာရီသာ သုံးနိုင်ပါတယ်။ Link ၁
                  အချိန်ကုန်ဆုံးလျှင် Link ၂ ကို နှိပ်ပြီး ဆက်လက်ဝင်ရောက်ပါ။
                </p>
              </div>

              <p className="text-sm text-muted-foreground font-medium">
                ခလုတ်နှိပ်ပြီးနောက် -
              </p>
              <ol className="space-y-2 pl-5 list-decimal text-sm text-muted-foreground">
                <li>Google Meet app (သို့) browser မှာ Meeting ပွင့်လာပါမယ်</li>
                <li>
                  <strong>&quot;Join now&quot;</strong> (သို့){" "}
                  <strong>&quot;ယခုပါဝင်ရန်&quot;</strong> ခလုတ်ကို နှိပ်ပါ
                </li>
                <li>
                  Microphone ကို <strong>ပိတ်ထားပါ</strong> (Mute)
                </li>
                <li>
                  Camera ကို <strong>ဖွင့်ထားပါ</strong>
                </li>
              </ol>

              <div className="rounded-lg bg-amber-50 border-l-4 border-amber-400 px-4 py-3">
                <p className="text-xs text-amber-800">
                  <strong>အရေးကြီး:</strong> Link ၁ ကို အရင်ဝင်ပါ။ Link ၁
                  အချိန်ကုန်ဆုံးသွားလျှင် Link ၂ ကို ဆက်ဝင်ပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-6">
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white text-sm font-bold">
                4
              </span>
              <h2 className="text-sm font-semibold">
                Meeting ထဲရောက်ပြီးနောက်
              </h2>
            </div>
            <div className="px-5 py-4">
              <div className="rounded-xl bg-emerald-50 border-2 border-dashed border-emerald-200 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔇</span>
                  <div>
                    <p className="text-sm font-semibold">
                      Microphone ပိတ်ထားပါ
                    </p>
                    <p className="text-xs text-muted-foreground">
                      အသံ မဝင်ရောက်စေရန်
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📹</span>
                  <div>
                    <p className="text-sm font-semibold">Camera ဖွင့်ထားပါ</p>
                    <p className="text-xs text-muted-foreground">
                      တရားပွဲတွင် ပါဝင်နေကြောင်း ပြသရန်
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📶</span>
                  <div>
                    <p className="text-sm font-semibold">WiFi သုံးပါ</p>
                    <p className="text-xs text-muted-foreground">
                      Mobile data ထက် WiFi ပိုကောင်းပါတယ်
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="mb-6">
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white text-sm font-bold">
                5
              </span>
              <h2 className="text-sm font-semibold">
                အကြံပြုချက် ပေးပို့ခြင်း
              </h2>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                တရားပွဲ ပြီးဆုံးပြီးနောက် ပင်မစာမျက်နှာရှိ{" "}
                <strong>&quot;အကြံပြုချက် ပေးပို့ရန်&quot;</strong> ခလုတ်ကို
                နှိပ်ပါ။
              </p>
              <ol className="space-y-2 pl-5 list-decimal text-sm text-muted-foreground">
                <li>ခလုတ်ကို နှိပ်ပါ — Google Form ပွင့်လာပါမယ်</li>
                <li>မေးခွန်းများကို ဖြေပါ</li>
                <li>
                  <strong>&quot;Submit&quot;</strong> ခလုတ်နှိပ်ပြီး ပေးပို့ပါ
                </li>
              </ol>
              <div className="rounded-lg bg-emerald-50 border-l-4 border-emerald-400 px-4 py-3">
                <p className="text-xs text-emerald-800">
                  <strong>သင့်အကြံပြုချက်သည်</strong> နောင်တရားပွဲများ
                  ပိုမိုကောင်းမွန်စေရန် များစွာ အထောက်အကူပြုပါတယ်။ 🙏
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-6">
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white text-sm font-bold">
                ?
              </span>
              <h2 className="text-sm font-semibold">ပြဿနာ ဖြေရှင်းခြင်း</h2>
            </div>
            <div className="px-5 py-4 divide-y divide-border">
              <div className="py-3 first:pt-0">
                <p className="text-sm font-semibold mb-1">
                  Meeting ဝင်လို့ မရပါ
                </p>
                <p className="text-xs text-muted-foreground">
                  Link ၂ ကို ပြောင်းနှိပ်ပါ။ နှစ်ခုလုံးမရရင် Internet
                  ချိတ်ဆက်မှုကို စစ်ဆေးပါ။
                </p>
              </div>
              <div className="py-3">
                <p className="text-sm font-semibold mb-1">အသံ မကြားရပါ</p>
                <p className="text-xs text-muted-foreground">
                  ဖုန်း/ကွန်ပျူတာ volume ကို တိုးပါ။ Speaker icon ကို စစ်ဆေးပါ။
                </p>
              </div>
              <div className="py-3">
                <p className="text-sm font-semibold mb-1">
                  ရုပ်ထွက် ပြတ်တောက်နေပါတယ်
                </p>
                <p className="text-xs text-muted-foreground">
                  Camera ပိတ်ပါ။ WiFi နဲ့ ချိတ်ဆက်ပါ။ မလိုအပ်သော app များ
                  ပိတ်ပါ။
                </p>
              </div>
              <div className="py-3">
                <p className="text-sm font-semibold mb-1">
                  Google Meet app မရှိပါ
                </p>
                <p className="text-xs text-muted-foreground">
                  App Store / Play Store မှ &quot;Google Meet&quot; ကို download
                  ရယူပါ။ App မသုံးပဲ browser မှာလည်း ဝင်နိုင်ပါတယ်။
                </p>
              </div>
              <div className="py-3 last:pb-0">
                <p className="text-sm font-semibold mb-1">
                  Feedback Form ပွင့်မလာပါ
                </p>
                <p className="text-xs text-muted-foreground">
                  Browser ကို refresh လုပ်ပြီး ထပ်ကြိုးစားပါ။ Chrome browser ကို
                  အသုံးပြုပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-sm text-muted-foreground">🙏 သာဓု သာဓု သာဓု 🙏</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            ဓမ္မမိတ်ဆွေများ အကုန်လုံး ကိုယ်စိတ်နှလုံး ကျန်းမာချမ်းသာကြပါစေ။
          </p>
        </div>
      </div>
    </main>
  );
}
