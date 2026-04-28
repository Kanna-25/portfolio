// フロントからAPI呼び出す

// APIのベースURL
const API_BASE = "http://localhost:3001/api";

// プロフィール情報を取得
export const getProfile = async () => {
  const res = await fetch(`${API_BASE}/profile`);
  return res.json();
};

// 実績情報を取得
export const getWorks = async () => {
  const res = await fetch(`${API_BASE}/works`);
  return res.json();
};

// 実績情報を更新
export const updateWork = async (id: number, data: any) => {
  const res = await fetch(`${API_BASE}/admin/works/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

//実績情報を削除
export const deleteWork = async (id: number) => {
  const res = await fetch(`${API_BASE}/admin/works/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// スキル情報を取得
export const getSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  return res.json();
};
