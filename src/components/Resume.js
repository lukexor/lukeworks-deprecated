import React from "react";
import { Helmet } from "react-helmet";
import Header from "./resume/Header";
import Aside from "./resume/Aside";
import Employment from "./resume/Employment";
import Education from "./resume/Education";
import Experience from "./resume/Experience";
import "./Resume.css";

// ====================================
// == Start of Resume Details

// Personal info
const resume = {
  header: {
    name: "Lucas Petherbridge",
    position: "Senior Software Engineer",
    summary: `Passionate & driven polyglot software engineer with 8+ years of experience
    solving problems. Started programming at age 15 and have consistently sought
    to expand and grow. Great communicator and team collaborator willing to take
    on any challenge.`,
  },
  info: {
    addr1: "9826 SW 59th Ave",
    addr2: "Portland, OR 97219",
    phone: "(503) 616-8265",
    email: "me@lukeworks.tech",
    website: "https://lukeworks.tech/",
  },
  employment: [
    {
      dates: "Jul 2020 - Current",
      duration: "1 mo",
      title: "Senior Software Engineer",
      entity: "Lithia Motors, Inc",
      location: "Portland, OR",
      icon: "/images/resume/lithia.png",
      bullets: [],
    },
    {
      dates: "Mar 2020 - Jul 2020",
      duration: "4 mos",
      title: "Senior Software Engineer",
      entity: "TEKsystems - Consultant at Nike",
      location: "Beaverton, OR",
      icon: "/images/resume/teksystems.png",
      bullets: [
        `Extended a product planning tool that enabled Merchant and Product teams
        to plan future product lines using JavaScript, Angular, Node.js,
        Typescript, GraphQL, & MySQL.`,
        `Designed, configured, & set up cloud infrastructure as code for
        a GraphQL API using Okta authentication, AWS & Terraform.`,
        `Created & managed CI/CD pipelines using Github, AWS CLI, BMX Jenkins
        & Docker.`,
        `Led team in clarifying scope, technology & architecture decisions for
        a new merchant planning project.`,
        `Mentored, provided code reviews & pair programmed with junior
        developers.`,
        `Exit: Contract ended due to organization restructure.`,
      ],
    },
    {
      dates: "Nov 2013 - Mar 2020",
      duration: "6 yrs 5 mos",
      title: "Senior Software Engineer",
      entity: "NetFortris (Formerly Fonality, Inc)",
      location: "Culver City, CA",
      icon: "/images/resume/netfortris.png",
      bullets: [
        `Worked remotely for 6 years while maintaining high productivity & close
        collaboration with teams.`,
        `Extended mobile UCaaS application to enable a rich customer integration
        experience using React Native & Redux with Typescript.`,
        `Redesigned Salesforce integration using modern APIs on a solo project
        reducing project size by 90% by switching from Angular to Vue.js thus
        increasing maintainability using JavaScript, Vue.js, XML, & Apex.`,
        `Developed & integrated a flexible cloud platform for a UCaaS system to
        achieve high scalability & availability using Perl & Golang.`,
        `Reduced dependency on legacy systems by 80% by developing a fault
        tolerant & automated migration which led to a 15% reduction in support
        & billing costs.`,
        `Designed & developed an OSS/BSS for the ordering, billing,
        & provisioning of telephony services that led to a 20% increase in
        revenue using Perl, JavaScript, JQuery, & HTML/CSS.`,
      ],
    },
  ],
  education: [
    {
      dates: "2015 - 2019",
      title: "Bachelor of Computer Science",
      entity: "Portland State University",
      location: "Portland, OR",
      icon: "/images/resume/psu.png",
      bullets: [
        `Consulted as a Scrum/Agile coach for 10 teams during my senior capstone
        in lieu of a project, providing guidance & support in the completion of
        their team projects.`,
      ],
    },
  ],
  experience: [
    {
      title: "Projects",
      bullets: [
        {
          dates: "Mar '19 – Current",
          title: "TetaNES",
          desc: `A Nintendo Entertainment System (NES) cross-platform/web
          emulator written in Rust using SDL2 & WebAssembly.`,
          website: "https://github.com/lukexor/tetanes",
        },
        {
          dates: "Aug '14 – Current",
          title: "Personal Portfolio/Blog",
          desc: `A website for blog articles & projects using Python/Django,
          NGINX, MySQL, & Redis. Currently working on a new version using React,
          GraphQL, & Rust/Rocket.`,
          website: "https://lukeworks.tech/",
        },
        {
          title: "Miscellaneous",
          desc: `Various side projects and other coding exercises including
          a suite of visual programs showcasing algorithms, animations, & game
          physics using the p5.js JavaScript library & HTML5 canvas.`,
          website: "https://lukeworks.tech/projects/",
        },
      ],
    },
  ],
  addtlExperience: [],
  langAndTech: [
    "JavaScript; React",
    "Rust; Golang; Python",
    "GraphQL; NGNIX; SQL",
    "AWS; Docker; Kubernetes; Jenkins; Terraform",
  ],
};

// == End of Resume Details
// ====================================

const Resume = () => {
  document.body.classList.add("resume");

  return (
    <>
      <Helmet>
        <title>Lucas Petherbridge | Software Engineer Resume</title>
        <meta
          name="description"
          content="Software Engineer Resume for Lucas Petherbridge."
        />
      </Helmet>

      <Header {...resume.header} />

      <main>
        <Aside {...resume.info} langAndTech={resume.langAndTech} />
        <section className="main-content">
          <Employment list={resume.employment} />
          <Education list={resume.education} />
          <Experience list={resume.experience} />
        </section>
      </main>
    </>
  );
};

export default Resume;
