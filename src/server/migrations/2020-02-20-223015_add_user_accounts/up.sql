INSERT INTO app_user (
    id,
    name,
    email,
    website
) VALUES (
    1,
    'Lucas Petherbridge',
    'me@lukeworks.tech',
    'https://lukeworks.tech'
);
INSERT INTO account (
    id,
    user_id,
    bio,
    phone,
    avatar,
    role
) VALUES (
    1,
    1,
    'Hi! My name is Luke. I reside in Portland, OR and I''ve been tinkering with code since age 15 when I first learned what HTML was. Oh, what a journey it has been.

I''m a technology polyglot but I primarily work with Javascript, Python, Golang, Rust and even Arduino programming! I love learning new technologies and finding the best tool for the job. I have developed a borderline addiction to problem-solving over the years, with many late nights, refusing to go to bed until I was satisfied I had reached an acceptable solution.

I currently work at Nike which is fantastic since it combines my love of programming and fitness and turns out to be a great balance for my life.

I am constantly looking for new things to learn and better ways to do things including solving problems for fun and trying out new projects. Emerging technologies, especially AI and Machine Learning, excite me and I keep looking for anything I can sink my teeth into. I occasionally post articles to share my projects and ideas with the hope they spur discussions about code, software practices and technology.',
    '503-616-8265',
    'https://lukeworks.tech/static/images/about_me.jpg',
    'admin'
);
