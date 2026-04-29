// APIのベースURL
const API_BASE = "http://localhost:3001/api";

//　問い合わせフォーム
export const createContact = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// 問い合わせを一覧取得（管理者）
export const getContacts = async () => {
  const res = await fetch(`${API_BASE}/admin/contacts`);
  return res.json();
};

// 問い合わせを詳細取得（管理者）
export const getContactById = async (id: number) => {
  const res = await fetch(`${API_BASE}/admin/contacts/${id}`);
  return res.json();
};

// 問い合わせを削除（管理者）
export const deleteContact = async (id: number) => {
  const res = await fetch(`${API_BASE}/admin/contacts/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
