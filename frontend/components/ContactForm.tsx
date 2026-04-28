"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("http://localhost:3001/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      setDone(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#f7f1e3] px-4 py-3 rounded-md focus:outline-none text-slate-700 placeholder:text-slate-400";

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-5 mt-8">
          <input
            type="text"
            placeholder="お名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />

          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />

          <textarea
            placeholder="お問い合わせ内容"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className={inputClass}
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 border border-black rounded-full hover:bg-white transition"
          >
            {loading ? "送信中..." : "送信する"}
          </button>

          {done && (
            <p className="text-orange-400 text-sm mt-2">送信しました！</p>
          )}
        </form>
      </div>
    </div>
  );
}
