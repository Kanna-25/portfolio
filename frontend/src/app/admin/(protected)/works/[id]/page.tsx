"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { updateWork } from "@/lib/api";
import Link from "next/link";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();

  const id = Number(params.id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setUrl] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/works`)
      .then((res) => res.json())
      .then((data) => {
        const target = data.find((w: any) => w.id === id);
        if (target) {
          setTitle(target.title);
          setDescription(target.description);
          setUrl(target.githubUrl);
        }
      });
  }, [id]);

  const handleUpdate = async () => {
    await updateWork(id, { title, description, githubUrl });
    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-sm w-full max-w-2xl p-10 md:p-16 shadow-xl rounded-3xl border border-white/50">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.2em] text-slate-800 relative after:content-[''] after:block after:w-12 after:h-px after:bg-[#f0d9c1] after:mx-auto after:mt-4">
            works編集
          </h1>
        </div>
        <form className="space-y-10">
          {/* タイトル */}
          <div className="group">
            <label className="block text-xs font-semibold text-slate-800 mb-2 ml-1 tracking-widest uppercase">
              タイトル：
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="プロジェクト名を入力"
              className="w-full px-2 py-3 border-b border-slate-200 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors text-lg"
            />
          </div>

          {/* 説明 */}
          <div className="group">
            <label className="block text-xs font-semibold text-slate-800 mb-2 ml-1 tracking-widest uppercase">
              説明：
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="作品の詳細や使用技術について"
              className="w-full px-2 py-3 border-b border-slate-200 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* URL */}
          <div className="group">
            <label className="block text-xs font-semibold text-slate-800 mb-2 ml-1 tracking-widest uppercase">
              URL：
            </label>
            <input
              value={githubUrl}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-2 py-3 border-b border-slate-200 bg-transparent text-slate-800 focus:outline-none focus:border-[#f0d9c1] transition-colors"
            />
          </div>

          {/* 更新ボタン */}
          <div className="pt-6">
            <button
              type="button"
              onClick={handleUpdate}
              className="w-full bg-[#f0d9c1] hover:bg-[#e6c4a3] text-slate-700 tracking-[0.2em] font-bold py-4 px-6 rounded-lg shadow-md shadow-[#f0d9c1]/30 transition duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              更新する
            </button>
          </div>
        </form>

        {/* 戻る */}
        <div className="text-center mt-10">
          <Link
            href="/admin/dashboard"
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition tracking-widest"
          >
            ← 戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
