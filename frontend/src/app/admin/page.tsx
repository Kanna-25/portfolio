import Link from "next/link";

export default function AdminHome() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>管理画面へようこそ！</h1>

      <Link href="/admin/dashboard">管理画面へ</Link>

      <p>ここはログインした人だけが見れるページにする予定の場所です。</p>
    </div>
  );
}
