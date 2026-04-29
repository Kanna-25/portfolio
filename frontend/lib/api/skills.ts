// APIのベースURL
const API_BASE = "http://localhost:3001/api";

// スキル情報を取得
export const getSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  return res.json();
};
