// APIのベースURL
const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

// プロフィール情報を取得
// lib/api.ts のイメージ
export async function getProfile() {
  const res = await fetch(`${API_BASE}/profile`, {
    cache: "no-store",
  });
  return res.json();
}
