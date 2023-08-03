import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "💪",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "💪",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "💪",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "👍",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "💪",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "👶",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./avatar.jpg" alt="Alex West" />;
}

function Intro() {
  return (
    <div>
      <h1>Aleksey Sveshnikov</h1>
      <p>
        While web development typically refers to web markup and coding, website
        development includes all related development tasks, such as client-side
        scripting, server-side scripting, server and network security
        configuration.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        // <Skill skillObj={s} key={s.skill} /> - пример передачи сразу всего объекта
        <Skill skill={s.skill} level={s.level} color={s.color} key={s.skill} />
      ))}
    </div>
  );
}

// function Skill({ skillObj }) {} - пример передачи сразу всего объекта
// при такой записи, понятно какие параметры передаются. Нежели если бы мы передали целый объект как в примере lesson03-_pizza
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
}
