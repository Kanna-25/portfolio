"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSkills, addSkill, deleteSkill } from "@/lib/api";

export default function SkillsManagePage() {
  const [skills, setSkills] = useState<{ id: number; name: string }[]>([]);
  const [newSkill, setNewSkill] = useState("");

  // 1. スキル一覧の取得
  const fetchSkills = async () => {
    try {
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      console.error("スキルの取得に失敗しました", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // 2. スキルの追加 (POST)
  const handleAddSkill = async () => {
    if (!newSkill.trim()) return;

    try {
      await addSkill(newSkill);
      setNewSkill("");
      fetchSkills();
    } catch (error) {
      alert("追加に失敗しました");
    }
  };

  // 3. スキルの削除 (DELETE)
  const handleDeleteSkill = async (id: number) => {
    if (!confirm("このスキルを削除しますか？")) return;

    try {
      await deleteSkill(id); // libの関数を使用
      fetchSkills(); // リストを再取得
    } catch (error) {
      alert("削除に失敗しました");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex items-center justify-center p-6">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm w-full max-w-md">
        <h1 className="text-2xl text-slate-700 mb-8 text-center tracking-tight">
          Skills管理画面
        </h1>

        <div className="space-y-6">
          {/* 新規追加エリア */}
          <div className="flex gap-2">
            <input
              className="flex-1 border border-slate-100 bg-slate-50/50 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f0d9c1] transition"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="新しいスキル（例: Next.js）"
            />
            <button
              onClick={handleAddSkill}
              className="bg-slate-700 text-white px-5 py-3 rounded-lg hover:opacity-90 transition shadow-sm font-bold"
            >
              追加
            </button>
          </div>

          <hr className="border-slate-100" />

          {/* スキル一覧エリア */}
          <div className="space-y-3">
            <label className="block text-xs font-medium text-slate-400 ml-1 tracking-widest uppercase">
              Current Skills
            </label>
            <div className="flex flex-col gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex justify-between items-center bg-slate-50 border border-slate-100 p-3 rounded-lg"
                >
                  <span className="text-slate-700">{skill.name}</span>
                  <button
                    onClick={() => handleDeleteSkill(skill.id)}
                    className="text-slate-400 hover:text-red-500 transition px-2"
                  >
                    削除
                  </button>
                </div>
              ))}
              {skills.length === 0 && (
                <p className="text-center text-slate-400 text-sm py-4">
                  スキルが登録されていません
                </p>
              )}
            </div>
          </div>
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
