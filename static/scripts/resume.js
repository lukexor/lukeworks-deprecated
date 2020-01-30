// ====================================
// == Start of Resume Details

// Personal info
const personalInfo = {
    "name": "Lucas Petherbridge",
    "position": "Software Engineer",
    "summary": "Driven software engineer with 8+ years experience solving problems by developing innovative software in a variety of domains. Fantastic communication skills breaking down technical details to non-technical stakeholders. Thirsty for knowledge, unparalleled leadership, and elegant solutions.",
    "addr1": "9826 SW 59<sup>th</sup> Ave",
    "addr2": "Portland, OR 97219",
    "phone": "(503) 616-8265",
    "email": "me@lukeworks.tech",
    "website": "https://lukeworks.tech/",
};
// Hard and Soft Skills
const softSkills = [
    { "proficiency": 5, "skills": "Leadership, Communication, Adaptability" },
    { "proficiency": 4, "skills": "Problem-Solving, Collaboration" },
];
const hardSkills = [
    // Languages
    { "proficiency": 5, "skills": "Rust, Python, Perl, Javascript" },
    { "proficiency": 4, "skills": "C, C++, Bash" },
    { "proficiency": 3, "skills": "Ruby, Java, Go" },
    // Technologies
    { "proficiency": 5, "skills": "MySQL, Postgres" },
    { "proficiency": 4, "skills": "Apache, Nginx" },
];

// Experiences/Projects
const workExperience = [
    {
        "start": "2013-11",
        "end": "Current",
        "title": "Senior Software Engineer",
        "entity": "NetFortris (Formerly Fonality, Inc)",
        "location": "Culver City, CA",
        "bullets": [
            "Redesigned outdated Salesforce integration adapter to modern API standards using Javascript, Vue.js, XML, & HTML/CSS.",
            "Developed & integrated a new, flexible cloud platform for a UCaaS system to achieve high scalability & availability using Perl & Go.",
            "Reduced dependency on legacy systems by 80% by developing a robust, automated migration path which led to a 15% reduction in support & billing costs.",
            "Decreased quote response times by 50% by refactoring redundant calculations & adding caching leading to a dramatic increase in sales productivity.",
        ],
    },
    {
        "start": "2012-10",
        "end": "2013-11",
        "title": "Scrum Master",
        "entity": "Fonality, Inc.",
        "location": "Culver City, CA",
        "bullets": [
            "Drafted & refined requirements, worked with product & development teams to design solutions & define timelines for management.",
            "Led process & development initiatives for an OSS/BSS for the ordering, billing, & provisioning of VoIP software using Perl, Javascript, Java/Tomcat, & MySQL.",
        ],
    },
];
const education = [
    {
        "start": "2015-09",
        "end": "2019-06",
        "title": "Bachelor of Computer Science",
        "entity": "Portland State University",
        "location": "Portland, OR",
        "bullets": [
            "Consulted as a Scrum/Agile coach for 10 teams during my senior capstone, providing guidance & support in the completion of senior projects.",
        ],
    },
];
const projects = [
    {
        "start": "2019-03",
        "end": "2019-06",
        "title": "RustyNES",
        "description": "A Nintendo Entertainment System (NES) emulator written in Rust using SDL2.",
        "link": "https://github.com/lukexor/rustynes",
    },
    {
        "start": "2014-08",
        "end": "Current",
        "title": "Personal Portfolio/Blog",
        "description": "A website showcasing personal projects and articles using Python/Django and Nginx/MySQL. I'm currently working on a migration to a Rust/Rocket implementation.",
        "link": "https://lukeworks.tech/",
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
            <span class="clear">${ proficiencies[row.proficiency] }</span>
        </div>
    </section>`;
    document.getElementById(section).innerHTML += html;
};
const addExperience = function(section, experience) {
    const start = formatDate(experience.start);
    const end = formatDate(experience.end);
    let description = "";
    if (experience.bullets.length > 1) {
        description += '<ul class="clear">';
        experience.bullets.forEach((bullet) => {
            description += `<li>${ bullet }</li>`
        });
        description += "</ul>";
    } else {
        description = experience.bullets[0];
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
    const start = formatDate(project.start);
    const end = formatDate(project.end);
    const html = `<section>
        <div class="experience">
            <h4>${ project.title }</h4>
        </div>
        <div class="dates">${ start } –  ${ end }</div>
        <div class="clear pad-bottom">
            ${ project.description } (<a href="${ project.link }">${ project.link }</a>)
        </div>
    </section>`;
    document.getElementById(section).innerHTML += html;
};

// Utility functions
const formatDate = function(date) {
    try {
        const dateObj = new Date(date);
        if (dateObj instanceof Date && !isNaN(dateObj)) {
            const month = dateObj.toLocaleDateString("default", { "month": "short" });
            const year = dateObj.toLocaleDateString("default", { "year": "2-digit" });
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

