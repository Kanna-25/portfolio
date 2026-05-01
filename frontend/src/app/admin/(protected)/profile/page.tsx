"use client";

import { useEffect, useState } from "react";

export default function ProfileEditPage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  // 🔥 初期データ取得
  useEffect(() => {
    fetch("http://localhost:3001/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setBio(data.bio);
      });
  }, []);

  // 🔥 更新処理
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
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#f9fafb]">
      <div className="bg-white p-10 rounded-xl shadow w-full max-w-md">
        <h1 className="text-xl mb-6">プロフィール編集</h1>

        <input
          className="w-full border p-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
        />

        <textarea
          className="w-full border p-2 mb-4"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="自己紹介"
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          更新
        </button>
      </div>
    </main>
  );
}
