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

// スキル情報を取得
export const getSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  return res.json();
};
