"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminHome() {
  const router = useRouter();

  //ログアウト処理
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      {/* ログイン画面や作品追加と同じ質感のカード */}
      <div className="bg-white/90 backdrop-blur-sm w-full max-w-xl p-12 md:p-20 shadow-xl rounded-3xl border border-white/50 text-center">
        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.2em] text-slate-800 mb-12">
          Welcome Home
        </h1>

        {/* profile */}
        <div className="flex flex-col gap-6 items-center">
          <Link
            href="/admin/profile"
            className="w-full max-w-xs bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-8 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.05]"
          >
            profileの管理画面へ →
          </Link>

          {/* works */}
          <div className="flex flex-col gap-6 items-center">
            <Link
              href="/admin/dashboard"
              className="w-full max-w-xs bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-8 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.05]"
            >
              worksの管理画面へ →
            </Link>

            {/* contacts */}
            <div className="flex flex-col gap-6 items-center">
              <Link
                href="/admin/contacts"
                className="w-full max-w-xs bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-8 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.05]"
              >
                contactsの管理画面へ →
              </Link>

              {/* ログアウト */}
              <div className="mt-10 text-center">
                <button
                  className="text-sm text-gray-400 hover:text-gray-600 transition"
                  onClick={handleLogout}
                >
                  ログアウト
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
