## 🔗 API設計

### 実績（Works）

#### 1. 一覧取得

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

#### 2. 新規作成（管理者）

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

#### 3.更新

- **PUT** `/admin/works/:id`

#### 4. 削除

- **DELETE** `admin/works/:id`
