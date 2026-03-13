// ログイン後の設定ページ

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] flex justify-center p-6">
      <div>
        <h1 className="text-center text-slate-700 text-[40px] font-bold pl-[0.5em]">
          管理画面
        </h1>
        <ul>
          <li>
            <Link
              href="/admin/works/new"
              className="inline-block border border-[#f0d9c1] text-slate-600 hover:bg-[#f0d9c1] hover:text-slate-800 px-8 py-2 rounded-full text-sm font-light tracking-[0.2em] transition-all duration-300"
            >
              + 作品追加
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

// 将来的にスキル管理、プロフィール更新、画像更新削除など追加予定
// ログアウトボタンもここに置くかも
