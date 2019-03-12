INSERT INTO account (
    email,
    full_name,
    password,
    password_updated,
    website,
    phone,
    bio,
    is_admin,
    is_staff,
    is_active
) VALUES (
    'me@lukeworks.tech',
    'Luke Petherbridge',
    '$2y$12$sRQvwF6KZ5NibMei3NFTauGCvGUG.akONtMhOpHRXOIbZfcBY5JYC',
    NOW(),
    'https://lukeworks.tech/',
    '310.486.3143',
    'Hi! My name is Luke. I live in Portland, OR working out of a menagerie of coffee shops and pie establishments. I''ve been tinkering with code since high school when I first learned what HTML and CSS were. Oh, what a journey it has been.\n\nI work with Perl a lot, but I also dabble in just about everything in my spare time including C/C++, Python, Golang, Rust, and Javascript. I love learning new technologies and finding the best tool for the job. Over the years I have developed a borderline addiction to problem-solving with many late nights, refusing to go to bed until I was satisfied I had reached an acceptable stopping point.\n\nI am constantly trying to find faster and better ways to solve problems as well as finding new things to work on just for fun. Emerging technologies excite me and I keep looking for what else I can sink my teeth into. I post articles here to share ideas and spur discussions about code, software practices and technology.',
    TRUE,
    TRUE,
    TRUE
);
