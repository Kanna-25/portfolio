// ログイン後の設定ページ

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getWorks, deleteWork } from "@/lib/api";

type Work = {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
};

export default function Dashboard() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    getWorks().then(setWorks);
  }, []);

  // 情報削除
  const handleDelete = async (id: number) => {
    if (!confirm("削除してもいいですか？")) return;

    const res = await deleteWork(id);
    console.log(res);

    setWorks((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] p-8">
      {/* ヘッダー部分 */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">管理画面</h1>

        <Link
          href="/admin/works/new"
          className="bg-[#f0d9c1] px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          ＋ 登録
        </Link>
      </div>

      {/* 一覧 */}
      <div className="space-y-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{work.title}</h2>
              <p className="text-sm text-gray-500">{work.description}</p>
              <p className="text-sm text-gray-500">{work.githubUrl}</p>
            </div>

            <div className="flex gap-4">
              {/* 編集 */}
              <Link href={`/admin/works/${work.id}`} className="text-gray-500">
                編集
              </Link>

              {/* 削除 */}
              <button
                onClick={() => handleDelete(work.id)}
                className="text-orange-500"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 下に押し出すためのスペース */}
      <div className="flex-1" />
      {/* 戻る */}
      <div className="text-center mt-10">
        <Link
          href="/admin"
          className="text-xs font-medium text-slate-400 hover:text-slate-600 transition tracking-widest"
        >
          ← 戻る
        </Link>
      </div>
    </main>
  );
}
