# Frontend

Next.js を使用したフロントエンドアプリケーションです。  
管理画面（認証あり）と公開ページを提供します。

---

## 🚀 概要

- Vercelでデプロイされたフロントエンド
- Firebase Authentication による認証
- REST API（Express）と連携

---

## 🛠 技術スタック

| 技術          | 用途         |
| ------------- | ------------ |
| Next.js       | UI構築 / SSR |
| TypeScript    | 型安全な開発 |
| Tailwind CSS  | スタイリング |
| Firebase Auth | 認証         |

---

## 📁 ディレクトリ構成

```text
frontend/
|- src/
|  `- app/
|     |- admin/
|     |  |- (auth)/login/
|     |  `- (protected)/
|     |     |- dashboard/
|     |     |- profile/
|     |     |- skills/
|     |     `- works/
|     |
|     |- layout.tsx
|     |- page.tsx
|     |- globals.css
|     `- favicon.ico
|
|- components/
|  `- ContactForm.tsx
|
|- lib/
|  `- api/
|     |- contacts.ts
|     |- profile.ts
|     |- skills.ts
|     |- works.ts
|     `- index.ts
|
|- public/
|- .env.local
|- package.json
`- tsconfig.json
```

---

## ⚙️ セットアップ

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 環境変数

`.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx

NEXT_PUBLIC_SUPABASE_URL=xxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

---

## 🔗 主なページ

- `/` トップページ
- `/works` 実績一覧
- `/contact` お問い合わせ
- `/admin/login` ログイン
- `/admin/dashboard` 管理画面

---

## 💡 実装ポイント

- App Router の Route Groups を利用し、
  認証ページと保護ページを分離
- Firebase Authentication による認証制御
- API通信を `lib/api.ts` に集約し責務分離
- 管理画面と公開画面をディレクトリで分離

---

## 🔗 関連

バックエンド詳細は以下参照  
→ [Backend README](../backend/README.md)
