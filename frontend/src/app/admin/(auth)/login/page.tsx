// ログインページ

"use client";

import { useState } from "react";
// Firebaseから「メール・パスでのログイン機能」をインポート
import { signInWithEmailAndPassword } from "firebase/auth";
// firebaseの窓口を読み込み
import { auth } from "@/lib/firebase";
// ログイン成功後にページを自動で移動させるために使用
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // 入力されたメールアドレスとパスワードをリアルタイムで保持する
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Next.js のルーターのインスタンスを作成
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (error) {
      console.error("ログインエラー:", error);
      alert("ログインに失敗しました。内容を確認してください。");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      {/* ログインカード */}
      <div className="bg-white/90 backdrop-blur-sm w-full max-w-sm p-10 shadow-xl rounded-3xl border border-white/50">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold tracking-widest text-slate-800 opacity-80">
            Sign In
          </h1>
        </div>

        <div className="space-y-8">
          {/* メアド入力 */}
          <div className="group">
            <label className="block text-xs font-semibold text-slate-500 mb-1 ml-1">
              メールアドレス
            </label>
            <input
              type="email"
              value={email}
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-3 border-b border-slate-300 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors"
            />
          </div>

          {/* パスワード入力 */}
          <div className="group">
            <label className="block text-xs font-semibold text-slate-500 mb-1 ml-1">
              パスワード
            </label>
            <input
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-3 border-b border-slate-300 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors"
            />
          </div>
        </div>

        {/* ログインボタン */}
        <div className="mt-14">
          <button
            onClick={login}
            className="w-full bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-6 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            Login
          </button>
        </div>

        {/* 戻るボタン */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition"
          >
            ← TOPへ戻る
          </button>
        </div>
      </div>
    </main>
  );
}
