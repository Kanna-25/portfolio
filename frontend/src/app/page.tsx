import { getProfile, getWorks, getSkills } from "../../lib/api";
import Link from "next/link";

export default async function Home() {
  const profile = await getProfile();
  const works = await fetch("http://localhost:3001/api/works").then((res) =>
    res.json(),
  );
  const skills = await getSkills();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Portfolio</h1>

      <Link href="/admin/login">ログイン</Link>

      <section>
        <h2>Profile</h2>
        {profile && (
          <>
            <p>{profile.name}</p>
            <p>{profile.bio}</p>
          </>
        )}
      </section>

      <section>
        <h2>Works</h2>
        <ul>
          {works.map((work: any) => (
            <div key={work.id}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          ))}
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill: any) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
