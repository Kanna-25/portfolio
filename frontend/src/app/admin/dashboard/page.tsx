import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>管理画面</h1>

      <ul>
        <li>
          <Link href="/admin/works/new">Add Work</Link>
        </li>
      </ul>
    </div>
  );
}
