"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfileEditPage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  // 初期データ取得
  useEffect(() => {
    fetch("http://localhost:3001/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setBio(data.bio);
      });
  }, []);

  // 更新処理
  const handleUpdate = async () => {
    await fetch("http://localhost:3001/api/admin/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, bio }),
    });

    alert("更新しました！");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm w-full max-w-md">
        <h1 className="text-2xl text-slate-700 mb-8 text-center tracking-tight">
          profile管理画面
        </h1>

        <div className="space-y-6">
          {/* 名前入力 */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1 ml-1 tracking-widest uppercase">
              Name
            </label>
            <input
              className="w-full border border-slate-100 bg-slate-50/50 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f0d9c1] transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="名前"
            />
          </div>

          {/* 自己紹介入力 */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1 ml-1 tracking-widest uppercase">
              Bio
            </label>
            <textarea
              className="w-full border border-slate-100 bg-slate-50/50 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f0d9c1] transition min-h-[120px]"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="自己紹介"
            />
          </div>

          {/* 更新ボタン */}
          <button
            onClick={handleUpdate}
            className="w-full bg-[#f0d9c1] text-slate-700 font-bold py-3 rounded-lg hover:opacity-80 transition shadow-sm mt-4"
          >
            更新する
          </button>
        </div>

        {/* 戻るボタン */}
        <div className="text-center mt-12">
          <Link
            href="/admin"
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition tracking-widest uppercase"
          >
            ← 戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
