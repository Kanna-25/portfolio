"use client";

import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "@/lib/api";

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("削除してもいいですか？")) return;

    await deleteContact(id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] p-8">
      <h1 className="text-2xl mb-8">お問い合わせ管理</h1>

      <div className="space-y-4">
        {contacts.map((c) => (
          <div
            key={c.id}
            className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
          >
            <div>
              <p className="font-bold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.email}</p>
              <p className="mt-2 text-gray-700">{c.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(c.createdAt).toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => handleDelete(c.id)}
              className="text-orange-500 hover:opacity-70"
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
