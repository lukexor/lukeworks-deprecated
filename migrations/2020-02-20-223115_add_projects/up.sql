INSERT INTO post (
    id,
    title,
    permalink,
    content,
    published_at,
    created,
    updated
) VALUES
    (
        11, /* id */
        'UM-Flint Environmental Science Club Website',
        'umflint_env_sci_club_website',
        '<div class="post-header-img">
        <img src="/static/images/projects/umflint_env_club_main.png" title="UM-Flint Environmental Science Club Website" alt="UM-Flint Environmental Science Club Website">
    </div>

When I was attending the University of Michigan-Flint for a few years and majoring in Environmental Science, I became heavily involved in the Environmental Science Club. There wasn''t a lot of members or general interest at the time, so I ended up being Vice President and maintainer of the club website. The existing website was incredibly dated and hard to maintain, so I designed and developed a new website. It''s very dated by today''s standards, but it served its purpose well to keep members up-to-date on club activities and local environmental news.',
        '2007-11-01 12:00:00', /* Published */
        '2017-03-27 01:41:46', /* Created */
        '2017-05-06 02:59:00' /* Updated */
    ),
    (
        12,
        'Personal Portfolio/Blog',
        'personal_portfolio_blog',
        '<div class="post-header-img">
    <img src="/static/images/projects/portfolio_blog_main.png" title="Personal Portfolio/Blog" alt="Personal Portfolio/Blog">
</div>

This website. I''ve had many iterations over the years, but I settled on this design and have been really happy with it for now. It was my first project using Python/Django and I used it to learn the framework and to learn testing out various security measures such as a honeypot field to prevent bots from spamming, learning how to set up HTTPS, etc. It''s been a lot of fun. I''ve also used it as a place to write and post about things that interest me.

My current work on this site is migrating over to a Rust/Rocket implementation. Updates coming soon!',
        '2019-08-21 16:09:16',
        '2017-03-27 01:06:07',
        '2017-07-13 17:44:00'
    ),
    (
        13, /* id */
        'MindYou', /* Title */
        'mindyou', /* permalink */
        '<div class="post-header-img">
  <img src="/static/images/projects/mindyou_main.png" title="MindYou" alt="MindYou" width="350px" style="width: 350px; float: right; padding-left: 15px">
</div>

<strong>MindYou</strong>&nbsp;is a feature-packed task management system for iPhone.
MindYou takes the most useful ideas from top productivity methodologies and combines them together into a single digital platform that can keep up with you wherever you are, with whatever you''re doing. Get Clear, Get Current, Get Creative, and Get Insight. You''ll get more done in less time than you ever thought possible by keeping your mind on your tasks to keep your tasks off your mind.

<p>Still under development.</p>
<p>Based on <a title="Getting Things Done" href="http://gettingthingsdone.com/">Getting Things Done</a> by David Allen, and <a title="Bullet Journal" href="http://bulletjournal.com/">Bullet Journal</a> by Ryder Carroll</p>
<br style="clear: both">',
        NULL, /* Published */
        '2014-11-18 21:24:20', /* Created */
        '2017-05-06 03:00:00' /* Updated */
    ),
    (
        14, /* id */
        'ChatDot', /* Title */
        'chatdot', /* permalink */
        'This was a class project that implements a basic IM application with Java using a basic multi-threaded client/server protocol. Users can register, login/logout, and chat individually with other users or broadcast messages out to all other users currently logged in. It''s a very simple application as a proof of concepts and has not been robustly featured or tested.',
        '2017-06-19 02:45:47', /* Published */
        '2020-01-23 02:42:17', /* Created */
        '2020-01-23 02:45:47' /* Updated */
    ),
    (
        15, /* id */
        'Haskelltaire', /* Title */
        'haskelltaire', /* permalink */
        '<div class="post-header-img">
  <img src="https://raw.githubusercontent.com/lukexor/haskelltaire/master/new_game_board.png">
</div>

<strong>Haskelltaire</strong> is a simple 1-card draw game of Solitaire played from the command line written in just 500 lines of [Haskell][]. It was done as part of a class project in functional programming and highlights how powerful and terse functional programming can be. The PlayingCard library can be easily adapted and generalized to allow the creation of many other card games.

[Haskell]: https://www.haskell.org/', /* Content */
        '2019-08-22 00:00:00', /* Published */
        '2019-08-21 15:42:14', /* Created */
        '2019-08-22 00:00:00' /* Updated */
    ),
    (
        16, /* id */
        'RustyNES - An NES Emulator written in Rust', /* Title */
        'rustynes', /* permalink */
        '<div class="post-header-img">
  <img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/rustynes.png" width="800">
</div>

<strong>RustyNES</strong> is an emulator for the Nintendo Entertainment System (NES) released in 1985, written using [Rust][rust] and [SDL2][sdl2].

It started as a personal curiosity that turned into a passion project to demonstrate a proficiency in Rust and in digital sound production. It can play most games but is still a work-in-progress. I hope to transform it into a fully-featured and performant NES emulator. It is my hope to see a Rust emulator rise in popularity and compete with the more popular C and C++ versions.

<strong>RustyNES</strong> is also meant to showcase how clean and readable low-level Rust programs can be in addition to them having the type and memory-safety guarantees that Rust is known for.

<img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/donkey_kong.png" width="350" style="padding: 5px"><img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/super_mario_bros.png" width="350" style="padding: 5px">
<img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/legend_of_zelda.png" width="350" style="padding: 5px"><img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/metroid.png" width="350" style="padding: 5px">

You can check out the code on [Github][github].

<div class="photo-credit" markdown="1">

photo credit: [Cerberus][] via [Zsolt Palatinus][] [copyright][]

</div>

[rust]: https://www.rust-lang.org/tools/install
[sdl2]: https://www.libsdl.org/
[github]: https://github.com/lukexor/rustynes
[Cerberus]: https://unsplash.com/photos/pEK3AbP8wa4
[Zsolt Palatinus]: https://unsplash.com/@sunitalap
[copyright]: https://unsplash.com/license',
        '2019-08-21 15:24:57', /* Published */
        '2019-08-21 15:19:30', /* Created */
        '2019-08-21 15:24:57' /* Updated */
    ),
    (
        17, /* id */
        'A Bell 103 Demodulator', /* Title */
        'bell_demodulator', /* permalink */
        'This was done as a class project and is the basic start to implementing a full Bell 103 modem. Currently, only the demodulating portion is implemented and is not fully featured.

It is currently capable of decoding 48000 kilosample/s 16-bit single-channel WAV files in little-endian Microsoft PCM format. The file contents must be encoded using the answering frequencies of the 9N1 Bell 103 protocol at 300 bits per second. The bytes must also be packed tight with no lead-in or filtering.

There are options for changing the sampling rate, and filter length as well as using the origin frequencies instead of answering but these have not been tested.',
        '2019-04-26 02:42:15', /* Published */
        '2020-01-23 02:39:36', /* Created */
        '2019-04-26 02:42:15' /* Updated */
    ),
    (
        18, /* id */
        'Maze Generation and A* Search', /* Title */
        'maze-astar', /* permalink */
        '<iframe id="myIframe" src="https://dev.lukeworks.tech/maze-astar" width="100%" frameborder="0" height="650px"></iframe>

Lately, I''ve been having a lot of fun putting this maze generator/A* search program together. It''s really enjoyable visualizing the algorithms as they loop through each iteration. So much so that I''m going to be doing a whole series of these based on various algorithms and data structures. My initial working implementation was using plain Javascript and canvas, but I''ve updated it to use the [ps5.js][] library which will be useful later on when I get to some more advanced algorithms.

The program allows you to test various settings for maze generation including cell size and how often the algorithm will connect through when it encounters a dead-end and has to backtrack. I added the ability to download and upload saved mazes since the smaller cell sizes can take quite a long time to generate and I wanted to be able to test A* against them (and hopefully some other search algorithms soon) later on. Once a maze is generated, each time you click *Solve Maze* it will generate random starting and goal points. You can also pause/unpause the algorithm as well as adjust the frame rate for how fast it updates.

Keep an eye out for more updates soon!

Huge shout out to [The Coding Train][] for getting me interested in visual algorithms and ps5.js!

[ps5.js]: https://p5js.org/
[The Coding Train]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw',
        '2020-02-01 19:57:51', /* Published */
        '2020-02-01 19:56:40', /* Created */
        '2020-02-01 19:57:51' /* Updated */
    ),
    (
        19, /* id */
        'The Matrix Has You', /* Title */
        'matrix', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/matrix" frameborder="0" width="100%" height="500px"></iframe>

I absolutely loved [The Matrix][] when it came out. I can''t even count how many times I rewatched it. I used to love all the Matrix screen savers that came out shortly after and always wondered how they did it. This was a lot of fun to program and required a lot less code than I expected. As always the devil is in the details and there are a lot of knobs that can be turned to tweak how the end result looks. I''m satisfied with how it turned out! Credit goes to [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) for the great tutorials.

[The Matrix]: https://www.imdb.com/title/tt0133093/',
        '2020-02-01 19:59:05', /* Published */
        '2020-02-01 19:58:25', /* Created */
        '2020-02-01 19:59:07' /* Updated */
    ),
    (
        20, /* id */
        'Fireworks!', /* Title */
        'fireworks', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/fireworks" frameborder="0" width="100%" height="500px"></iframe>

Fun celebration fireworks! It was a great exercise in using velocity vectors with particles and simulated gravity. Credit to [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) for the great videos.',
        '2020-02-05 22:41:11', /* Published */
        '2020-02-05 22:39:04', /* Created */
        '2020-02-05 22:41:13' /* Updated */
    ),
    (
        21, /* id */
        '2D Raycasting', /* Title */
        'raycasting-2d', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/raycasting-2d" frameborder="0" width="100%" height="500px"></iframe>

2D Raycasting with Javascript! It''s a lot of fun interacting with coding algorithms like this. This uses some [line intersection math](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection) from Wikipedia, By default it moves around randomly using the [p5js](https://p5js.org/) noise function, but you can toggle manual mouse movement by clicking on the frame. Shout out to [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) for all the awesome work he does!',
        '2020-02-06 00:22:12', /* Published */
        '2020-02-06 00:17:47', /* Created */
        '2020-02-06 00:21:58' /* Updated */
    ),
    (
        22, /* id */
        'Lorenz Attractor', /* Title */
        'lorenz-attractor', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/lorenz-attractor" frameborder="0" width="100%" height="500px"></iframe>

A quick little Javascript implementation of the [Lorenz Attractor](http://mathworld.wolfram.com/LorenzAttractor.html). Not too difficult, but fun to visualize and plenty of things could be done to make it more interesting. Credit to [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) for all the inspiration!',
        '2020-02-06 01:45:17', /* Published */
        '2020-02-06 01:43:11', /* Created */
        '2020-02-06 01:45:19' /* Updated */
    ),
    (
        23, /* id */
        'Pong', /* Title */
        'pong', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/pong" frameborder="0" width="100%" height="500px"></iframe>

Javascript Pong! Nothing too fancy here, but some fun competition against either the Computer or another Player. Lots more features could be added for better AI, but it supports touch events so is somewhat mobile friendly! One of my favorite parts of this project was adding a velocity boost to the ball if you hit it while moving up or down. Combine that with the maximum speed a paddle can move up or down and you get some challenging return shots!',
        '2020-02-11 02:21:57', /* Published */
        '2020-02-11 02:19:01', /* Created */
        '2020-02-11 02:21:59' /* Updated */
    ),
    (
        24, /* id */
        'Asteroids!', /* Title */
        'asteroids', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/asteroids" frameborder="0" width="100%" height="500px"></iframe>

An arcade classic. My original implementation of this was in Rust using my PixEngine project, so this is a Javascript port using p5js. Came out pretty nice! Many aspects of the program were much easier using p5js and Javascript but I now have plenty of ideas for improvements on my PixEngine. At some point I''d love to add more explosion particles to the ship and asteroids and other features like random UFOs flying around. More to come!',
        '2020-02-11 20:52:04', /* Published */
        '2020-02-11 20:50:22', /* Created */
        '2020-02-11 20:52:06' /* Updated */
    ),
    (
        25, /* id */
        'Discrete Fourier Transforms', /* Title */
        'fourier', /* permalink */
        '<iframe src="https://dev.lukeworks.tech/fourier" frameborder="0" width="100%" height="500px"></iframe>

I absolutely love watching visualizations. I''ve been following various YouTube channels on the topic such as [3Blue1Brown](https://www.youtube.com/watch?v=spUNpyF58BY) and [SmarterEveryDay](https://www.youtube.com/watch?v=ds0cmAV-Yek) and thought it was so cool to see waves represented as a series of end-to-end pendulums navigating around a circle. I thought it was even cooler when I found out you can draw **any** line shape using this method. Thanks to [The Coding Train](https://www.youtube.com/watch?v=Mm2eYfj0SgA) for getting me back into this topic enough to play with my own version of it.

Above is a rough approximation of a square wave, which you can adjust using the slider to a plan sine wave by moving left, or a better square wave by moving right. You can also click and drag in the right partition of the window to draw your own shape! When you release the mouse, it''ll start re-drawing it using the Discrete Fourier Transform. Pressing Escape gets you back to the sine wave demo. Neat!',
        '2020-02-12 22:45:01', /* Published */
        '2020-02-12 22:38:57', /* Created */
        '2020-02-12 22:45:03' /* Updated */
    ),
    (
        26, /* id */
        'Fluid Simulation',
        'fluid-simulation',
        '<iframe src="https://dev.lukeworks.tech/fluid-simulation" frameborder="0" width="100%" height="500px"></iframe>

Fluid Simulation in Javascript using [p5js](https://p5js.org/). You can click/touch and drag to create a fire trail. Inspired by [The Coding Train](https://www.youtube.com/watch?v=alhpH6ECFvQ) of course. Also check out this great [article](https://mikeash.com/pyblog/fluid-simulation-for-dummies.html) about fluid simulations by Mike Ash. It''s amazing how he broke down the logic and math. Of course, with Javascript we''re limited in processing power, so it''s not very high resolution but still really cool! It works by depositing "dye" with a density value at a certain (x, y) grid position and then adding some velocity to that area. Then each draw cycle, it performs a series of diffusion, projection, and advection calculations for each grid position, accounting for neighboring densities and velocities, solving linear equations based on the Navier-Stokes equations (which I do not understand). In this simplistic simulation, it''s only simulating in 2D, while the equations over on Mike Ash''s page are for 3D. Also, it''s only simulating incompressible fluid dynamics here. There are a ton of knobs and settings that can be tweaked to get some really interesting effects!

One major problem I have and still can''t figure out how to resolve is that at the point of "dye" deposit, there are some flickering pixels that are darker than they should be. I believe it has something to do with velocities being too high and the advection affecting them in an adverse way. Mike''s article links to this [fire simulation](https://www.escapemotions.com/experiments/fluid_fire_3/index.php) that is really neat. That one is much higher resolution and doesn''t suffer from the brightness issue I have. Maybe with some more tweaking I can get a nicer result but I''m pretty happy about this as it is!',
        '2020-02-21 23:50:53', /* Published */
        '2020-02-21 23:43:43', /* Created */
        '2020-02-21 23:50:53' /* Updated */
    )
;

INSERT INTO project (
    id, post_id, website, started, completed
) VALUES
    (1, 11, 'https://umflint-env.lukeworks.tech/', '2007-09-01', '2007-11-01'),
    (2, 12, 'https://lukeworks.tech/', '2014-08-12', NULL), /* Current */
    (3, 13, 'https://mindyou.me/', '2014-11-18', NULL), /* Current */
    (4, 14, 'https://github.com/lukexor/ChatDot', '2017-04-24', '2017-06-19'),
    (5, 15, 'https://github.com/lukexor/haskelltaire', '2019-03-01', '2019-03-27'),
    (6, 16, 'https://github.com/lukexor/rustynes', '2019-04-01', '2019-06-09'),
    (7, 17, 'https://github.com/lukexor/bell103_demodulator', '2019-04-20', '2019-04-26'),
    (8, 18, 'https://lukeworks.tech/maze-astar', '2020-01-28', '2020-01-29'),
    (9, 19, 'https://lukeworks.tech/matrix', '2020-01-30', '2020-01-30'),
    (10, 20, 'https://lukeworks.tech/fireworks', '2020-02-03', '2020-02-05'),
    (11, 21, 'https://lukeworks.tech/raycasting-2d', '2020-02-06', '2020-02-06'),
    (12, 22, 'https://lukeworks.tech/lorenz-attractor', '2020-02-06', '2020-02-06'),
    (13, 23, 'https://lukeworks.tech/pong', '2020-02-11', '2020-02-11'),
    (14, 24, 'https://lukeworks.tech/asteroids', '2020-02-11', '2020-02-11'),
    (15, 25, 'https://lukeworks.tech/fourier', '2020-02-12', '2020-02-12'),
    (16, 26, 'https://lukeworks.tech/fluid-simulation', '2020-02-21', '2020-02-21')
;

INSERT INTO post_author (
    post_id,
    author_id
) VALUES
    (11, 1),
    (12, 1),
    (13, 1),
    (14, 1),
    (15, 1),
    (16, 1),
    (17, 1),
    (18, 1),
    (19, 1),
    (20, 1),
    (21, 1),
    (22, 1),
    (23, 1),
    (24, 1),
    (25, 1),
    (26, 1)
;

INSERT INTO post_tag (
    post_id, tag_id
) VALUES
    (11, 18), /* umflint-env - web */
    (12, 12), /* lukeworks.tech - rust */
    (12, 18), /* lukeworks.tech - web */
    (13, 1), /* mindyou.me - bujo */
    (13, 2), /* mindyou.me - gtd */
    (13, 16), /* mindyou.me - mobile */
    (14, 15), /* ChatDot - java */
    (15, 3), /* haskelltaire - games */
    (15, 11), /* haskelltaire - functional prog */
    (15, 13), /* haskelltaire - haskell */
    (16, 3), /* rustynes - games */
    (16, 4), /* rustynes - nes */
    (16, 7), /* rustynes - emulation */
    (16, 12), /* rustynes - rust */
    (16, 14), /* rustynes - sound */
    (17, 7), /* bell103_demodulator - emulation */
    (17, 14), /* bell103_demodulator - sound */
    (18, 5), /* maze-astar - p5js */
    (18, 6), /* maze-astar - javascript */
    (18, 9), /* maze-astar - algorithms */
    (19, 5), /* matrix - p5js */
    (19, 6), /* matrix - javascript */
    (20, 5), /* fireworks - p5js */
    (20, 6), /* fireworks - javascript */
    (21, 5), /* raycasting-2d - p5js */
    (21, 6), /* raycasting-2d - javascript */
    (21, 3), /* raycasting-2d - games */
    (22, 5), /* lorenz-attractor - p5js */
    (22, 6), /* lorenz-attractor - javascript */
    (22, 10), /* lorenz-attractor - math */
    (23, 5), /* pong - p5js */
    (23, 6), /* pong - javascript */
    (23, 3), /* pong - games */
    (24, 5), /* asteroids - p5js */
    (24, 6), /* asteroids - javascript */
    (24, 3), /* asteroids - games */
    (25, 5), /* fourier - p5js */
    (25, 6), /* fourier - javascript */
    (25, 10), /* fourier - math */
    (26, 5), /* fluid-simulation - p5js */
    (26, 6), /* fluid-simulation - javascript */
    (26, 10) /* fluid-simulation - math */
;
