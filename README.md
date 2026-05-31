# Portfolio

管理画面付きポートフォリオサイトです。  
実績・スキルの公開に加え、管理画面からコンテンツのCRUD操作が可能です。

---

## 🚀 システム構成

フロントエンド・バックエンド・DBを分離したフルスタック構成です。  
それぞれクラウド環境にデプロイしています。

- **Frontend**: Next.js（Vercel）
- **Backend**: Express.js（Render）
- **Database**: Supabase（PostgreSQL）
- **ORM**: Prisma
- **Authentication**: Firebase Authentication

---

## 🌐 公開URL

- Frontend: https://portfolio-ten-lyart-csbky1pmm3.vercel.app
- Backend API: https://portfolio-backend-auct.onrender.com/api

---

## 🛠 技術スタック

| 分類     | 技術                    |
| -------- | ----------------------- |
| Frontend | Next.js (App Router)    |
|          | TypeScript              |
|          | Tailwind CSS            |
| Backend  | Express.js              |
|          | TypeScript              |
| Database | Supabase (PostgreSQL)   |
| ORM      | Prisma                  |
| Auth     | Firebase Authentication |
| Infra    | Vercel / Render         |

---

## イメージ

### トップページ

![トップ画面](./docs/top.png)

### お問い合わせフォーム

![お問合せ画面](./docs/contact.png)

### 管理画面

![管理画面](./docs/admin.png)

### スキル管理画面

![スキル管理画面](./docs/skills.png)

---

## 🎯 主な機能

### 公開ページ

- プロフィール表示
- 実績一覧表示
- スキル一覧
- お問い合わせフォーム

### 管理画面（認証必須）

- 実績の作成 / 編集 / 削除（CRUD）
- スキルの追加 / 削除
- プロフィール編集
- コンタクトの表示 / 削除
- ログインユーザーのみアクセス可能（認可制御）

### 🔒 認証・認可

- Firebase Authentication を利用
- 未ログイン時は管理画面へアクセス不可
- Route Groups を利用して認証ページを分離

---

## 📁 ディレクトリ構成

```text
.
|- frontend/
|  |- src/app/
|  |- lib/
|  `- public/
|
|- backend/
|  |- src/
|  |  |- controllers/
|  |  |- routes/
|  |  `- index.ts
|  `- prisma/
|
|- docker-compose.yml
|- Dockerfile
|- .gitignore
`- README.md
```

## ⚙️ セットアップ手順

### 1. リポジトリをクローン

```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. データベースの起動

```bash
docker-compose up -d
```

### 3. バックエンドの起動

```bash
cd backend

npm install

npx prisma db push

npm run dev
```

### 4. フロントエンドの起動

```bash
cd frontend

npm install

npm run dev
```

### 5. アクセス

```bash
http://localhost:3000
```

---

## 💡 工夫した点

- frontend / backend を分離した構成を採用
- API通信を lib/api に集約し責務分離
- Prisma による型安全なDB操作
- Supabase移行によるクラウドDB化
- Render + Vercel による本番デプロイ構成

---

## 📝ドキュメント

- [Frontend README ](./frontend/README.md)
- [Backend README](./backend/README.md)
- [API設計書](./docs/API.md)
- [アーキテクチャ図](./docs/architecture.png)
