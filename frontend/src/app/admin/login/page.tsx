//  管理者ログインページ

"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Firebaseの設定ファイルのパス
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // routerを初期化

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログイン成功！");

      // ここで管理画面のトップへ飛ばす
      router.push("/admin");
    } catch (error) {
      console.error("ログインエラー:", error);
      alert(
        "ログインに失敗しました。メールアドレスやパスワードを確認してください。",
      );
    }
  };

  return (
    <div>
      <h1>ログイン</h1>

      <input
        type="email"
        value={email} // email の状態（state）を同期
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password} // password の状態（state）を同期
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}
