// ====================================
// == Start of Resume Details

// Personal info
const personalInfo = {
    "name": "Lucas Petherbridge",
    "position": "Senior Software Engineer",
    "summary": "Senior Software Engineer with 8+ years experience solving problems by developing innovative software solutions in a variety of domains. I started programming at age 15 and love keeping up with the latest technology trends. I'm constantly looking for new challenges and opportunities for learning.",
    "addr1": "9826 SW 59<sup>th</sup> Ave",
    "addr2": "Portland, OR 97219",
    "phone": "(503) 616-8265",
    "email": "me@lukeworks.tech",
    "website": "https://lukeworks.tech/",
};
// Hard and Soft Skills
const softSkills = [{
        "proficiency": 5,
        "skills": "Leadership, Adaptability, Communication",
    },
    {
        "proficiency": 4,
        "skills": "Problem-Solving, Teamwork & Collaboration",
    },
    {
        "proficiency": 3,
        "skills": "Patience, Creativity",
    },
];
const hardSkills = [
    // Languages
    {
        "proficiency": 5,
        "skills": "Rust",
    },
    {
        "proficiency": 5,
        "skills": "Javascript, Python",
    },
    {
        "proficiency": 3,
        "skills": "C, C++, Golang",
    },
    // Technologies
    {
        "proficiency": 4,
        "skills": "React, Angular, Vue, GraphQL",
    },
    {
        "proficiency": 4,
        "skills": "MySQL, Postgres",
    },
    {
        "proficiency": 3,
        "skills": "Apache, Nginx",
    },
    {
        "proficiency": 3,
        "skills": "AWS, Jenkins, Docker, Terraform",
    },
];

// Experiences/Projects
const workExperience = [{
        "start": "2020, 03",
        "end": "2020, 06",
        "title": "Senior Software Engineer",
        "entity": "TEKsystems - Consultant at Nike",
        "location": "Beaverton, OR",
        "img": "https://media-exp1.licdn.com/dms/image/C4E0BAQFINoS6Zc9PAg/company-logo_100_100/0?e=1602720000&v=beta&t=lEQJYFR-w_-1y5Tmf4fvxQMBLeVjDu1kLQ8Z-LDLEuU",
        "bullets": [
            "Extended & maintained a product planning SPA that enabled Merchant and Product teams to efficiently plan out future product lines using JavaScript, Angular, Node.js, Typescript, GraphQL, & MySQL.",
            "Designed, configured, & set up cloud infrastructure as code for a GraphQL API integration with ElasticSearch & Okta authentication using AWS & Terraform. Required cross-team collaboration.",
            "Created & managed automated build & deployment pipelines using Github, AWS CLI, BMX Jenkins & Docker.",
            "Led team in clarifying scope, technology & architecture decisions for a new merchant planning project.",
            "Mentored, provided code reviews & pair programmed with junior developers.",
            "Exit: Contract ended due to organization restructure.",
        ],
    },
    {
        "start": "2013, 11",
        "end": "2020, 03",
        "title": "Senior Software Engineer",
        "entity": "NetFortris (Formerly Fonality, Inc)",
        "location": "Culver City, CA",
        "img": "https://media-exp1.licdn.com/dms/image/C4E0BAQGAeHgWGRf3xA/company-logo_100_100/0?e=1602720000&v=beta&t=whY1yqfM3bODadLwjdg6P3IsTHHE6gF7J0V1P9wMthM",
        "bullets": [
            "Worked remotely for 6 years while maintaining high productivity & close collaboration with teams.",
            "Extended mobile UCaaS application to enable rich customer integration experience with our communication platform using React Native & Redux with Typescript.",
            "Redesigned legacy Salesforce telephony integration using modern API standards on a solo project which reduced total code by 90% by switching from Angular to Vue.js while maintaining features & increasing maintainability using JavaScript, Vue.js, XML, & Apex.",
            "Developed & integrated a flexible cloud platform for a UCaaS system to achieve high scalability & availability using Perl & Golang.",
            "Reduced dependency on legacy systems by 80% by developing a fault tolerant, automated migration solution which led to a 15% reduction in support & billing costs.",
            "Designed & developed an OSS/BSS for the ordering, billing, & provisioning of VoiP services that led to a 20% increase in overall revenue using Perl, JavaScript, JQuery, & HTML/CSS.",
        ],
    },
    {
        "start": "2013, 03",
        "end": "2013, 11",
        "title": "Scrum Master",
        "entity": "Fonality, Inc.",
        "location": "Culver City, CA",
        "img": "https://media-exp1.licdn.com/dms/image/C4E0BAQGRT0VJ6N47rQ/company-logo_100_100/0?e=1602720000&v=beta&t=IqYYWl3lZA1AIl3HuiZnXL-CMyyVzKCtKAZa7GLJwGc",
        "bullets": [
            "Drafted & refined requirements working with Product Owner & development teams to design solutions & define timeline estimates for management.",
            "Led process & development initiatives for an OSS/BSS for the ordering, billing, & provisioning of VoIP services using JIRA, Git, & Crucible.",
            "Advocated for team collaboration, communication, & education using pair programming & code reviews",
        ],
    },
];
const education = [{
    "start": "2015",
    "end": "2019",
    "title": "Bachelor of Computer Science",
    "entity": "Portland State University",
    "location": "Portland, OR",
    "img": "https://media-exp1.licdn.com/dms/image/C4D0BAQHTacvX0dq-6w/company-logo_100_100/0?e=1602720000&v=beta&t=_NlNfnkW4CtfYjFIeHfbxfdMXeSqmiCjVq6CJHntPZ8",
    "bullets": [
        "Consulted as a Scrum/Agile coach for 10 teams during my senior capstone in lieu of a project, providing guidance & support in the completion of their team projects.",
    ],
  },
  // {
  //   "start": "2003, 09",
  //   "end": "2004, 06",
  //   "title": "Computer Science",
  //   "entity": "Kettering University",
  //   "location": "Flint, MI",
  //   "bullets": [
  //       "Started a CS degree which only lasted a year due to some unfortunate life events.",
  //   ],
  // },
];
const projects = [{
        "start": "2020, 01",
        "end": "2020, 03",
        "title": "Javascript Visualizations",
        "description": "A suite of visual programs showcasing algorithms, animations, & game physics using the p5.js Javascript library & HTML5 canvas. Deployed with Rust, Rocket, & Nginx.",
        "link": "https://lukeworks.tech/projects/",
    },
    {
        "start": "2014, 08",
        "end": "Current",
        "title": "Portfolio/Blog",
        "description": "A website showcasing personal projects & blog articles using Python, Django, Nginx, MySQL, & Redis. I'm currently working on a migration to a Rust implementation using Rocket.",
        "link": "https://lukeworks.tech/",
    },
    {
        "start": "2019, 03",
        "end": "Current",
        "title": "TetaNES",
        "description": "A Nintendo Entertainment System (NES) emulator written in Rust using SDL2 & WebAssembly.",
        "link": "https://github.com/lukexor/tetanes",
    },
    {
        "start": "2019, 09",
        "end": "Current",
        "title": "PixEngine",
        "description": "A simple, cross-platform graphics/UI engine framework with a minimal interface using Rust & SDL2.",
        "link": "https://github.com/lukexor/pix-engine",
    },
];

// Populate sections on page load
window.onload = function() {
    Object.entries(personalInfo).forEach((info) => addInfo("personal-info", info));
    softSkills.forEach((row) => addSkill("soft-skills", row, softProficiencies));
    hardSkills.forEach((row) => addSkill("hard-skills", row, hardProficiencies));
    workExperience.forEach((experience) => addExperience("work-experience", experience, false));
    education.forEach((experience) => addExperience("education", experience, true));
    projects.forEach((project) => addProject("projects", project));
};

// Functions to add content for each section
const addInfo = function(section, info) {
    const id = info[0];
    let data = info[1];
    let element = document.getElementById(id);
    if (element) {
        if (data.match(/http/)) {
            data = `<a href="${ data }">${ data }</a>`;
        } else if (data.match(/@/)) {
            data = `<a href="mailto:${ data}">${ data}</a>`;
        }
        element.innerHTML = data;
    } else {
        console.warn(`Failed to find ${ id }`);
    }
};
const addSkill = function(section, row, proficiencies) {
    let proficiency_bars = "";
    for (let i = 0; i < row.proficiency; ++i)
        proficiency_bars += '<div class="square"></div>';

    const html = `<section>
        <div class="skill">${ row.skills }</div>
        <div class="skill-proficiency">
            ${ proficiency_bars }
            <span class="clear proficiency">${ proficiencies[row.proficiency] }</span>
        </div>
    </section>`;
    document.getElementById(section).innerHTML += html;
};
const addExperience = function(section, experience, edu) {
    const start = formatDate(experience.start);
    const end = formatDate(experience.end);
    const duration = calcDuration(experience.start, experience.end);
    let description = "";
    if (experience.bullets.length > 1) {
        description = '<ul class="clear">';
        experience.bullets.forEach((bullet) => {
            description += `<li>${ bullet }</li>`
        });
        description += "</ul>";
    } else {
        description = `<p>${experience.bullets[0]}</p>`;
    }
    const dates = edu
      ? `<div class="dates">${ experience.start } - ${ experience.end }</div>`
      : `<div class="dates">${ start } –  ${ end } <span>${ duration }</span></div>`;
    const html = `<section>
        <div class="experience">
            <img src="${ experience.img }" />
            <h4>${ experience.title }</h4>
        </div>
        <h5 class="clear">${ experience.entity }, ${ experience.location }</h5>
        ${dates}
        ${ description }
    </section>`;
    document.getElementById(section).innerHTML += html;
};
const addProject = function(section, project) {
    const start = formatDate(project.start);
    const end = formatDate(project.end);
    const html = `<section>
        <div class="experience">
            <h4 class="project-title">${ project.title }</h4>
        </div>
        <div class="dates">${ start } –  ${ end }</div>
        <div class="clear pad-bottom">
            <p>
              ${ project.description } (<a href="${ project.link }">${ project.link }</a>)
            </p>
        </div>
    </section>`;
    document.getElementById(section).innerHTML += html;
};

// Utility functions
const formatDate = function(date) {
    if (date === "Current") {
      return date;
    }
    date = date.split(",");
    const year = date[0];
    const month = date[1] || 1;
    const day = date[2] || 1;
    try {
        const dateObj = new Date(year, month - 1, day);
        if (dateObj instanceof Date) {
            const month = dateObj.toLocaleDateString("default", {
                "month": "short"
            });
            const year = dateObj.toLocaleDateString("default", {
                "year": "2-digit"
            });
            date = `${ month } '${ year }`;
        }
    } catch (e) {
        console.warn(e);
    }
    return date;
};
const calcDuration = function(start, end) {
    start = start.split(",");
    end = end.split(",");
    const sYear = start[0];
    const sMonth = start[1] || 1;
    const eYear = end[0];
    const eMonth = end[1] || 1;
    let duration = "1 mo";
    try {
        let dYears = eYear - sYear;
        let dMonths = (eMonth - sMonth) + 1;
        if (dMonths < 0) {
          dYears -= 1;
          dMonths += 12;
        }
        let years = dYears > 0 ? `${dYears} yr` : "";
        if (dYears > 1) years += 's';
        let months = dMonths > 0 ? `${dMonths} mo` : "";
        if (dMonths > 1) months += 's';
        duration = `${years} ${months}`;
    } catch (e) {
      console.warn(e);
    }
    return duration;
}

// == End of Resume Details
// ====================================

// Constant lookup tables
const softProficiencies = {
    5: "Excellent",
    4: "Superior",
    3: "Average",
    2: "Subpar",
    1: "Poor",
};
const hardProficiencies = {
    5: "Advanced",
    4: "Superior",
    3: "Proficient",
    2: "Familiar",
    1: "Poor",
};
