import { getProfile, getWorks, getSkills } from "../lib/api";

export default async function Home() {
  const profile = await getProfile();
  const works = await getWorks();
  const skills = await getSkills();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Portfolio</h1>

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
            <li key={work.id}>{work.title}</li>
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
