import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      {/* ログイン画面や作品追加と同じ質感のカード */}
      <div className="bg-white/90 backdrop-blur-sm w-full max-w-xl p-12 md:p-20 shadow-xl rounded-3xl border border-white/50 text-center">
        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.2em] text-slate-800 mb-12">
          Welcome Home<span className="text-[#f0d9c1]">.</span>
          <span className="block text-sm mt-4 font-normal tracking-widest text-slate-400">
            マイページへようこそ！
          </span>
        </h1>

        <div className="flex flex-col gap-6 items-center">
          {/* 設定ボタン */}
          <Link
            href="/admin/dashboard"
            className="w-full max-w-xs bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-8 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.05]"
          >
            設定へ進む →
          </Link>

          {/* TOPへ戻る（サブボタン）：細いラインのスタイル */}
          <Link
            href="/"
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition tracking-widest uppercase mt-4"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
