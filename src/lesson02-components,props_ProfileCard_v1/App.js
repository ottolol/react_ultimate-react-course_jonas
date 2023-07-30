import "./style.css";

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
      <Skill skill="HTML+CSS" color="blue" emoji="💪" />
      <Skill skill="JavaScript" color="orange" emoji="💪" />
      <Skill skill="Web Design" color="grey" emoji="💪" />
      <Skill skill="Git and GetHub" color="red" emoji="👍" />
      <Skill skill="React" color="skyblue" emoji="💪" />
      <Skill skill="Svelte" color="tomato" emoji="👶" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
