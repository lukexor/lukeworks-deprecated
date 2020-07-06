// ====================================
// == Start of Resume Details

// Personal info
const personalInfo = {
    "name": "Lucas Petherbridge",
    "position": "Senior Software Engineer",
    "summary": "Senior Software Engineer with 8+ years experience solving problems by developing innovative software. I started programming at age 15 and have never stopped pushing the limits of my craft, I'm constantly looking for new challenges & opportunities for learning.",
    "addr1": "9826 SW 59<sup>th</sup> Ave",
    "addr2": "Portland, OR 97219",
    "phone": "(503) 616-8265",
    "email": "me@lukeworks.tech",
    "website": "https://lukeworks.tech/",
};
// Hard and Soft Skills
const softSkills = [{
        "proficiency": 5,
        "skills": "Leadership, Quick-Learner, Communication",
    },
    {
        "proficiency": 4,
        "skills": "Problem-Solving, Teamwork",
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
        "end": "2020, 07",
        "title": "Senior Software Engineer",
        "entity": "TEKsystems - Consultant at Nike",
        "location": "Beaverton, OR",
        "bullets": [
            "Extended & maintained a critical product planning tool using Angular & Node.js with Typescript, GraphQL, & MySQL.",
            "Set up, configured, & managed infrastructure as code using AWS & Terraform.",
            "Created & managed automated deployment pipelines using BMX Jenkins & Docker.",
            "Led team in defining scope & architecture decisions for projects.",
            "Mentored & pair programmed with junior developers.",
        ],
    },
    {
        "start": "2013, 11",
        "end": "2020, 03",
        "title": "Senior Software Engineer",
        "entity": "NetFortris (Formerly Fonality, Inc)",
        "location": "Culver City, CA",
        "bullets": [
            "Extended mobile UCaaS application to meet customer needs using React Native & Redux with Typescript.",
            "Redesigned legacy Salesforce integration to modern API standards on a solo project which reduced total code by 90% switching from Angular to Vue.js while maintaining features & increasing maintainability using Vue.js, XML, & Apex.",
            "Developed & integrated a flexible cloud platform for a UCaaS system to achieve high scalability & availability using Perl & Golang.",
            "Reduced dependency on legacy systems by 80% by developing a fault tolerant, automated migration path which led to a 15% reduction in support & billing costs.",
            "Decreased UI responsiveness by 50% leading to a dramatic increase in sales productivity.",
            "Designed & developed an OSS/BSS for the ordering, billing, & provisioning of VoiP services that led to a 20% increase in overall revenue using Perl, JQuery, & HTML/CSS.",
        ],
    },
    {
        "start": "2012, 10",
        "end": "2013, 11",
        "title": "Scrum Master",
        "entity": "Fonality, Inc.",
        "location": "Culver City, CA",
        "bullets": [
            "Drafted & refined requirements working with Product Owner & development teams to design solutions & define timelines for management.",
            "Led process & development initiatives for an OSS/BSS for the ordering, billing, & provisioning of VoIP services using JIRA, Git, & Crucible.",
            "Advocated for team collaboration, communication, & education using pair programming & code reviews",
        ],
    },
];
const education = [{
    "start": "2015, 09",
    "end": "2019, 06",
    "title": "Bachelor of Computer Science",
    "entity": "Portland State University",
    "location": "Portland, OR",
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
    workExperience.forEach((experience) => addExperience("work-experience", experience));
    education.forEach((experience) => addExperience("education", experience));
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
const addExperience = function(section, experience) {
    const start = formatDate(experience.start.split(','));
    const end = formatDate(experience.end.split(','));
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
    const html = `<section>
        <div class="experience">
            <h4>${ experience.title }</h4>
        </div>
        <div class="dates">${ start } –  ${ end }</div>
        <h5 class="clear">${ experience.entity }, ${ experience.location }</h5>
        ${ description }
    </section>`;
    document.getElementById(section).innerHTML += html;
};
const addProject = function(section, project) {
    const start = formatDate(project.start.split(','));
    const end = formatDate(project.end.split(','));
    const html = `<section>
        <div class="experience">
            <h4>${ project.title }</h4>
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
    let year = date[0];
    let month = date[1] || 0;
    let day = date[2] || 1;
    try {
        const dateObj = new Date(year, month - 1, day);
        if (dateObj instanceof Date && !isNaN(dateObj)) {
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

// == End of Resume Details
// ====================================

// Constant lookup tables
const softProficiencies = {
    5: "Excellent",
    4: "Above Average",
    3: "Average",
    2: "Below Average",
    1: "Poor",
};
const hardProficiencies = {
    5: "Advanced",
    4: "Superior",
    3: "Proficient",
    2: "Familiar",
    1: "Poor",
};
