import TechIcons from "./components/tech Icons/tech_icons";

export default function Home() {

  return (
    <main className="main_wrapper" id="main_wrapper">
      <div className="intro_wrapper">
        <h1 className="page_title">Welcome.</h1>
        <div className="page_intro">
          <p>
            My name is Jose Padilla. I'm a Software Engineer in Houston,
            Texas. Programming is a true enjoyment of mine since it accommodates
            my need of solving problems. Currently, I am sharpening my skills
            with projects and volunteering as a Software Engineer at Hack For
            LA and Flow Lobby.
          </p>
        </div>
      </div>
      <div className="divider">
      </div>
      <TechIcons />
    </main>
  );
}
