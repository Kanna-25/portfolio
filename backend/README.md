# Backend

Express.js を使用した REST API サーバーです。  
ポートフォリオサイトのデータ管理を担います。

---

## 🚀 概要

- REST API によるデータ提供
- Prisma を用いたデータベース操作
- 管理画面用のCRUD機能を提供

---

## 🛠 技術スタック

| 技術       | 用途         |
| ---------- | ------------ |
| Express.js | APIサーバー  |
| TypeScript | 型安全な開発 |
| Prisma     | ORM          |
| MySQL      | データベース |
| Docker     | 開発環境構築 |

---

## 📁 ディレクトリ構成

```text
backend/
|- src/
|  |- controllers/
|  |  |- adminWorksController.ts
|  |  |- contactController.ts
|  |  |- profileController.ts
|  |  |- skillsController.ts
|  |  `- worksController.ts
|  |
|  |- routes/
|  |  |- adminWorksRoutes.ts
|  |  |- contactRoutes.ts
|  |  |- profileRoutes.ts
|  |  |- skillsRoutes.ts
|  |  `- worksRoutes.ts
|  |
|  `- index.ts
|
|- prisma/
|  `- schema.prisma
|
|- .env
|- package.json
`- tsconfig.json
```

---

## ⚙️ セットアップ

```bash
cd backend
npm install
npx prisma db push
npm run dev
```

---

## 🔑 環境変数

`.env`

```env
DATABASE_URL="mysql://user:password@localhost:3306/db_name"
```

---

## 🔗 APIエンドポイント

| Method | Endpoint         | 内容             |
| ------ | ---------------- | ---------------- |
| GET    | /works           | 実績一覧取得     |
| POST   | /admin/works     | 実績作成         |
| PUT    | /admin/works/:id | 実績更新         |
| DELETE | /admin/works/:id | 実績削除         |
| GET    | /profile         | プロフィール取得 |
| PUT    | /admin/profile   | プロフィール更新 |
| GET    | /skills          | スキル一覧取得   |
| POST   | /skills          | スキル追加       |
| DELETE | /skills/:id      | スキル削除       |
| POST   | /contacts        | お問い合わせ送信 |

---

## 💡 実装ポイント

- controller / routes による責務分離
- Prisma による型安全なDB操作
- REST設計に基づいたAPI構築
- 管理画面用のCRUD機能を提供

---

## 🔗 関連

フロントエンド詳細は以下参照  
→ `../frontend/README.md`
