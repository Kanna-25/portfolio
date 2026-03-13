// 作品追加ページ
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddWorkPage() {
  // データの箱（State）をここで作る
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  // 保存ボタンを押した時の動き
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // バックエンドAPIにデータを送る
      const response = await fetch("http://localhost:3001/api/admin/works", {
        // 新規作成なのでPOST使用
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          url: url,
        }),
      });

      // レスポンスの判定
      if (response.ok) {
        alert("保存に成功しました！");
        // 成功したら入力欄を空にする
        setTitle("");
        setDescription("");
        setUrl("");
      } else {
        // HTTP 400 や 500 系エラーの場合
        alert("サーバーへの保存に失敗しました");
      }
    } catch (error) {
      // サーバーが起動していない、あるいはネットワークエラーの場合
      alert("バックエンド(3001)に接続できません");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-sm w-full max-w-2xl p-10 md:p-16 shadow-xl rounded-3xl border border-white/50">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.2em] text-slate-800 relative after:content-[''] after:block after:w-12 after:h-px after:bg-[#f0d9c1] after:mx-auto after:mt-4">
            作品追加
          </h1>
        </div>

        {/* handleSubmitをここで使う */}
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="group">
            <label className="block text-xs font-semibold text-slate-800 mb-2 ml-1 tracking-widest uppercase">
              タイトル
            </label>
            <input
              placeholder="プロジェクト名を入力"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-2 py-3 border-b border-slate-200 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors text-lg"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-semibold text-slate-800 mb-2 ml-1 tracking-widest uppercase">
              説明
            </label>
            <textarea
              placeholder="作品の詳細や使用技術について"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-2 py-3 border-b border-slate-200 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors resize-none leading-relaxed"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-semibold text-slate-800 mb-2 ml-1 tracking-widest uppercase">
              URL
            </label>
            <input
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-2 py-3 border-b border-slate-200 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-6 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              保存する
            </button>
          </div>
        </form>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition tracking-widest"
          >
            ← TOPへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
