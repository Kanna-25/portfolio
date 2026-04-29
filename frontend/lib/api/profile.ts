// APIのベースURL
const API_BASE = "http://localhost:3001/api";

// プロフィール情報を取得
export const getProfile = async () => {
  const res = await fetch(`${API_BASE}/profile`);
  return res.json();
};
