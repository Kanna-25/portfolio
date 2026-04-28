// ポートフォリオのトップページ

import { getProfile, getWorks, getSkills } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
  const profile = await getProfile();
  const works = await fetch("http://localhost:3001/api/works", {
    // 最新情報を常に表示するために、キャッシュを無効化（no-store）
    cache: "no-store",
  }).then((res) => res.json());
  const skills = await getSkills();

  // 共通のボタンスタイル
  const btnClass =
    "px-[18px] py-[8px] border border-[#333] rounded-full text-[#333] text-[14px] no-underline transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none";

  // 画像の影スタイル
  const shadowLeft =
    "relative w-1/2 z-0 shadow-[20px_20px_0_0_rgba(0,0,0,0.15)]";
  const shadowRight =
    "relative w-1/2 z-0 shadow-[-20px_20px_0_0_rgba(0,0,0,0.15)]";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fffaf5] to-[#f0d9c1] scroll-smooth">
      {/* ヘッダーエリア */}
      <header className="flex justify-between items-start p-5 pr-8">
        <div>
          <h1 className="text-slate-700 text-4xl md:text-5xl font-bold pl-2 m-0 leading-tight tracking-tighter">
            Portfolio
          </h1>
          <h2 className="text-lg md:text-xl pl-4 mt-1 font-medium text-slate-700">
            {profile?.name || "Kanna Nishimura"}
          </h2>
        </div>
        <Link href="/admin/login" className={`${btnClass} mt-5`}>
          Sign In
        </Link>
      </header>

      {/* ナビゲーションボタン */}
      <nav className="mt-8 flex gap-10 md:gap-24 justify-center items-center text-center px-4">
        <a href="#profile" className={btnClass}>
          about me
        </a>
        <a href="#works" className={btnClass}>
          works
        </a>
        <a href="#contact" className={btnClass}>
          contact
        </a>
      </nav>

      {/* 背景画像 */}
      <section
        className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-cover bg-center bg-no-repeat mt-8 mb-60 border-b border-black/10"
        style={{ backgroundImage: `url('/images/my-icon-haikei.jpg')` }}
      />

      {/* コンテンツ */}
      <div className="flex flex-col gap-24 md:gap-32 max-w-5xl mx-auto px-6">
        {/* about me */}
        <section id="profile" className="scroll-mt-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-80">
            <div className="w-full md:w-1/2 text-center">
              <h3 className="text-4xl font-semibold tracking-wider mb-8 relative after:content-[''] after:block after:w-32 after:h-px after:bg-slate-800 after:mx-auto after:mt-3">
                about me
              </h3>
              <ul className="inline-block text-left space-y-2">
                <li className="list-disc ml-5 text-slate-600">
                  生まれも育ちも大阪です！
                </li>
                <div className="grid grid-cols-2 gap-x-4">
                  <li className="list-disc ml-5 text-slate-600">Skills:</li>
                  {skills?.map((skill: any) => (
                    <li
                      key={skill.id}
                      className="list-disc ml-5 text-slate-600"
                    >
                      {skill.name}
                    </li>
                  ))}
                </div>
              </ul>
            </div>
            {/* about meの画像 */}
            <div
              className={`relative w-full md:w-1/2 aspect-square md:h-[360px] ${shadowLeft}`}
            >
              <Image
                src="/images/my-icon.jpg"
                alt="about me"
                fill
                className="z-10 object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* works - 左右反転 */}
        <section id="works" className="scroll-mt-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20 mb-80">
            <div className="w-full md:w-1/2 text-center">
              <h3 className="text-4xl font-semibold tracking-wider mb-8 relative after:content-[''] after:block after:w-32 after:h-px after:bg-slate-800 after:mx-auto after:mt-3">
                works
              </h3>
              <div className="text-left space-y-6 px-4">
                {works.map((work: any) => (
                  <div
                    key={work.id}
                    className="border-l-2 border-[#f0d9c1] pl-4"
                  >
                    <h4 className="text-xl font-bold text-slate-800">
                      {work.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {work.description}
                    </p>
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {work.githubUrl}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* worksの画像 */}
            <div
              className={`relative w-full md:w-1/2 aspect-square md:h-[360px] ${shadowRight}`}
            >
              <Image
                src="/images/my-icon-works.jpg"
                alt="works"
                fill
                className="z-10 object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="scroll-mt-12">
          <div className="flex flex-col items-center text-center mb-80 max-w-5xl mx-auto px-6">
            <h3 className="text-4xl font-semibold tracking-wider mb-8 relative after:content-[''] after:block after:w-32 after:h-px after:bg-slate-800 after:mx-auto after:mt-3">
              contact
            </h3>
            <p className="text-slate-600">
              お問い合わせはこちらからお願いします。
            </p>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="text-center mt-20 pb-12 text-slate-600 italic">
          - Thank you -
        </footer>
      </div>
    </div>
  );
}
