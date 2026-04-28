# 🔗 API設計

## 実績（Works）

### 1. 一覧取得

- **GET** `/works`

**Response**

```json
[
  {
    "id": 1,
    "title": "ポートフォリオサイト",
    "description": "概要説明"
  }
]
```

### 2. 新規作成（管理者）

- **POST** `/admin/works`

**Request**

```json
{
  "title": "タイトル",
  "description": "説明"
}
```

**Response**

```json
{
  "id": 1,
  "title": "タイトル"
}
```

### 3.更新

- **PATCH** `/admin/works/:id`

### 4. 削除

- **DELETE** `admin/works/:id`

---

## お問い合わせ（contacts）

### 1. お問い合わせ送信（ユーザー）

- **POST** `/contacts`

**Request**

```json
{
  "name": "山田太郎",
  "email": "test@example.com",
  "message": "お問い合わせ内容"
}
```

**Response**

```json
{
  "id": 1,
  "name": "山田太郎",
  "email": "test@example.com",
  "message": "お問い合わせ内容",
  "createdAt": "2026-04-28T00:00:00Z"
}
```

### 2. 一覧取得（管理者）

- **GET** `/admin/contacts`

**Response**

```json
[
  {
    "id": 1,
    "name": "山田太郎",
    "email": "test@example.com",
    "message": "お問い合わせ内容",
    "createdAt": "2026-04-28T00:00:00Z"
  }
]
```

### 3. 詳細取得（管理者）

- **GET** `/admin/contacts/:id`

### 4. 削除（管理者）

- **DELETE** `admin/contacts/:id`
