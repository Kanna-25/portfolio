// APIのベースURL
const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

// 実績情報を取得
export const getWorks = async () => {
  const res = await fetch(`${API_BASE}/works`, {
    cache: "no-store",
  });
  return res.json();
};

// 実績情報を更新
export const updateWork = async (id: number, data: any) => {
  const res = await fetch(`${API_BASE}/admin/works/${id}`, {
    method: "PATCH",
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
