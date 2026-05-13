// APIのベースURL
const API_BASE = "http://localhost:3001/api";

// 取得
export const getSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`, { cache: "no-store" });
  return res.json(); // ここで json() を実行してデータを返す
};

// 追加
export const addSkill = async (name: string) => {
  const res = await fetch(`${API_BASE}/skills`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

// 削除
export const deleteSkill = async (id: number) => {
  const res = await fetch(`${API_BASE}/skills/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
