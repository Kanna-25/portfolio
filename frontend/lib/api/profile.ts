// APIのベースURL
const API_BASE = "http://localhost:3001/api";

// プロフィール情報を取得
// lib/api.ts のイメージ
export async function getProfile() {
  const res = await fetch(`${API_BASE}/profile`, {
    cache: "no-store",
  });
  return res.json();
}
