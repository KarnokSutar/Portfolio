import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import NoteApp from "../assets/img/noteapp.png";
import QuickQuiz from "../assets/img/quickquiz.png";
import BillSplitter from "../assets/img/billsplitter.png";
import Chatty from "../assets/img/chatty.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Notes App",
      description: "Web and better version of Note Pad.",
      imgUrl: NoteApp,
      sourceUrl:"https://github.com/KarnokSutar/QuickQuiz",
      siteUrl:"https://noteappkarnok.netlify.app"
    },
    {
      title: "Quick Quiz",
      description: "A quiz app which enables you to change your answer based on your whim.",
      imgUrl: QuickQuiz,
      sourceUrl:"https://github.com/KarnokSutar/Note-App",
      siteUrl:"https://quickquizkarnok.netlify.app"
    },
    {
      title: "Bill Splitter",
      description: "A web app to split bills among your friends.",
      imgUrl: BillSplitter,
      sourceUrl:"https://github.com/KarnokSutar/BillSplitterApp",
      siteUrl:"https://earnest-axolotl-07e20d.netlify.app"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Chatty,
      sourceUrl:"https://github.com/KarnokSutar/QuickQuiz",
      siteUrl:"https://earnest-axolotl-07e20d.netlify.app"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-right"></img>
    </section>
  )
}
