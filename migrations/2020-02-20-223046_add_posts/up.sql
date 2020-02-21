INSERT INTO post (
    id,
    title,
    permalink,
    content,
    category_id,
    author_id,
    minutes_to_read,
    published_at,
    created,
    updated
) VALUES
    (
        1,
        'First post',
        'first-post',
        'It''s taken me awhile to get around to it, but the site is up and all pages are in a mostly complete state. There''s a lot more functionality I want to add like comments and an RSS feed but this is a good start!

I''ll be posting articles about once a month to start with as I finish out the site, and we''ll see where to go from there. Happy coding!',
        9, /* Programming */
        1, /* Author */
        1, /* Minutes */
        '2014-11-18 00:00:00',
        '2014-11-18 00:00:00',
        '2014-12-12 07:46:26'
    ),
    (
        2,
        '"Lost and Found" Series : Lessons Learned',
        'lost-and-found-series',
        '<div class="post-header-img"><img src="/static/images/articles/headers/lost_and_found_part_0.jpg" title="Lessons Learned" alt="Lessons Learned"></div>

My software development career has been a long and insightful journey. I''ve learned a lot in a short time and I''d like to share my story in this five part series I''m titling *"Lost and Found"*. It''s a tale of my meandering past; highlighting the early days of my fascination for code and of my going astray, only to return, years later, with an even greater passion. There were a lot of mistakes made, but also lessons learned. Good ol'' Einstein was right when he said *"A person who never made a mistake never tried anything new"*.

I hope you follow along as the series unfolds over the next several weeks. The software industry has such a fascinating landscape that changes almost daily, and at an ever increasing pace as technology blooms. I''m amazed how different the technological landscape is now compared to years ago when I got my first computer and how different the world is because of it. Working professionally at a software company is very different than I had imagined growing up, with more problems to solve than software alone can tackle.

Stay tuned for [Part 1]!

<div class="photo-credit">

photo credit: [Brett Jordan] via [photopin] [cc][]

</div>

[Part 1]: /lost-and-found-part-1/ ''"Lost and Found" : Part 1 - From Dungeons & Dragons to HTML''
[Brett Jordan]: https://www.flickr.com/photos/x1brett/11960121845/
[photopin]: http://photopin.com
[cc]: http://creativecommons.org/licenses/by/2.0/',
        1, /* Career */
        1, /* Author */
        2, /* Minutes */
        '2014-11-21 07:42:52',
        '2014-11-21 07:42:52',
        '2016-11-26 00:09:18'
    ),
    (
        3,
        '"Lost and Found" : Part 1 - From Dungeons & Dragons to HTML',
        'lost-and-found-part-1',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/lost_and_found_part_1.jpg" title="Dungeons and Dragons" alt="Dungeons and Dragons">
</div>

My descent into the world of programming started at a pretty young age. This was back in the early days of the world wide web. Internet giants like Facebook and Twitter weren''t on the scene yet and Google was just getting started. It was a time when [GeoCities][] was the third-most visited site on the internet[^1]. At age 13 I had been hooked on technology for some time, having already gone through a few flavors of Windows[^2]. I didn''t start getting interested in programming, however, until after [Windows 98][] had come out.

The computers and the advancing technology of the internet were awe-inspiring, but they were not what got the programming ball rolling. It was, oddly enough, a chat room. A Dungeons & Dragons chat room, to be precise. It was something my cousin and I used to do in our spare time. We''d log in, enter chat, and roleplay our chosen characters with other users. During one such encounter, the mage I was talking to typed <span style="color: red">red letters</span> in the chat window.

**I was amazed by this.** I knew that web pages had some kind way to format text, but I had no idea how to apply it to chat. There were no formatting options available that I could see. So, I inquired mbout how to turn my text red[^3]. It wasn''t CSS or Markdown or any other similar method[^4]. It was just plain ol'' HTML. Just type `<font color="red">`, type your words, and close it with `</font>`. Simple enough!

Little did this random internet stranger know that this revelation would start me on a path that would forever change my life and how I viewed the world. It wasn''t long before I started digging into the rest of the HTML 4.0 specification, learning CSS 2.0 and JavaScript[^5]. Somewhere along the way, I stumbled across [Perl][] and began tinkering. I was still a big D&D fan and spent a lot of time on www.netdragons.com playing an RPG called Vagabond''s Quest[^6].

I loved the game and wanted to make my own version. **My very first programming project was born!** I learned a lot, but looking back I''m shocked at how little I knew. As an example, I had no concept of databases back then. My saved game data was a text file with each line corresponding to a character and each value separated by a vertical-pipe (|). Perl **is** great at parsing text, so it did have that going for it!

As an outcome of all these experiences, I piqued the interest of my younger brother, launching him on his own path towards programming as a career and I had settled on a major for college: *Computer Science*. I didn''t know it at the time, but I was **not** prepared to major in computer science.

Not because I wasn''t smart enough, or interested enough, but because I did not fully understand what it was about. Computer Science is pretty self-explanatory, but the experience of school vs real world application are entirely different and I was about to learn that the hard way. I''ll explain what I mean in [Part 2][]. See you there!

<div class="photo-credit">

photo credit: [lydia_shiningbrightly][] via [photopin][] [cc][]

</div>

[^1]: [RIP GeoCities][].

[^2]: [Windows 3.1x][] and [Windows 95][].

[^3]: Out of Character of course.

[^4]: Markdown didn''t even exist yet.

[^5]: Back before there were frameworks like jQuery or AngularJS. Back when everyone loved to hate JavaScript.

[^6]: Sadly the site no longer exists.

[GeoCities]: http://en.wikipedia.org/wiki/GeoCities "GeoCities"
[Windows 3.1x]: http://en.wikipedia.org/wiki/Windows_3.1x "Windows 3.1x"
[Windows 95]: http://en.wikipedia.org/wiki/Windows_95 "Windows 95"
[Windows 98]: http://en.wikipedia.org/wiki/Windows_98 "Windows 98"
[Perl]: http://perl.com/ "Perl"
[RIP GeoCities]: http://www.pcworld.com/article/163765/So_Long_GeoCities_We_Forgot_You_Still_Existed.html "RIP GeoCities"
[Part 2]: /lost-and-found-part-2/ ''"Lost and Found" : Part 2 - PC load letter?!''

[lydia_shiningbrightly]: https://www.flickr.com/photos/lydiashiningbrightly/3423988153/
[photopin]: http://photopin.com
[cc]: http://creativecommons.org/licenses/by/2.0/',
        1, /* Career */
        1, /* Author */
        6, /* Minutes */
        '2014-11-26 00:52:11',
        '2014-11-26 00:52:11',
        '2017-03-27 01:34:24'
    ),
    (
        4,
        '"Lost and Found" : Part 2 - PC load letter?!',
        'lost-and-found-part-2',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/lost_and_found_part_2.jpg" title="PC load letter" alt="PC load letter">
</div>

In [Part 1][] I regaled you with my first encounter with programming and the bygone era of the early web computing days. Now, I''m going to explain why school turned out very differently for me than the real world. This may seem like a stupidly obvious realization to anyone who has already passed through the gauntlet of our education system, but when you''re still in the thick of things it''s not as clear. Looking back, I realize how under prepared I was and how much I relied on sheer luck to get by. I was intent on getting a career in software development, without a thought or consideration for any alternatives. I scored pretty high in that area on my career placement exam, I had fun doing it at home, and so, obviously, this must be the one and only career for me. My quest was so blind that I also didn''t even consider other schools. I had settled on a university that seemed to be a good fit: [Kettering University][], and didn''t bother with any second or third choices.

Then I got a notice from my counselor about my GPA being less than...desirable. So, I wrote a letter of apology in hopes they would accept my application. Luckily, they did, and I was off to college to prepare for my career! I was finally moving out on my own, on my way to learning how to write real, professional software. The first few weeks were great. I was making friends, taking difficult, but challenging classes like Calculus, Discrete Mathematics, and Introduction to Java. I was really enjoying myself. Many late nights were spent on homework assignments, trying to work out the algorithms needed to get them working correctly. Of course, at this time, I also played an excessive amount of [Final Fantasy XI Online][] which cut into my studies more than I would admit at the time. Programming was hard, the compile, hack, compile cycle was annoying. Calculus was also hard, along with many of my other classes. Then came, what I consider to be, some pivotal moments that altered my life course.

## Exhibit A ##

I was given a Java project in which we were told to write an encryption algorithm that would take some text, encrypt it, and print it out. The second part of the assignment was to reverse the encrypted text back into its original form. Now, these days, I consider this to be a pretty trivial task, especially with the wealth of encryption libraries available in pretty much any language of your choosing. However, this assignment (at least as I remember it) did not involve the use of any pre-existing libraries. We had to implement an encryption algorithm from scratch. This was only my second semester in computer science, and I **hated** this assignment. I never did complete it successfully. I was able to encrypt text well enough but never succeeded in being able to decrypt the content. **Strike 1 in my plans for a career in software development**.

## Exhibit B ##

The looming expenses of the upcoming academic year were starting to worry me. My tuition for that first year came out to around $24,000 including room & board, and I was barely able to afford it[^7]. The whole reason I had settled on Kettering was because they offer a great co-op program. The idea was that you would swap between school and co-op every three months. I had been looking for a co-op position since the start of the school year and nothing had come up. The few interviews I had had all required one critical skill that I failed to satisfy: [Visual Basic][]. The chicken-and-egg conundrum was that Kettering did not offer a course in Visual Basic (as far as I knew at the time). Lovely. **Strike 2**.

## Exhibit C ##

A movie called [Office Space][] was released a few years before I started at Kettering that cast a very negative (but humorous) light on the software industry and on the mind-numbing conditions of working in cubicles. I absolutely love that movie, but, quite honestly, I was terrified to actually get a job in software if I was going to end up stuck for years on end in a cubicle patching bank software. It just seemed so mindless, and so far my experience in school was exactly that. It was far different than the fun I had had sitting in my room at home, hacking away on something I got excited about. **Strike 3**.


It was because of this third strike that I began to consider transferring schools because I was going to go bankrupt without a co-op. And, I thought, I might as well change my major while I was at it since the whole computer science thing wasn''t really turning out to be my cup o'' tea. My thought process was that the reason I used to get so excited about programming was because the projects I had worked on had a much more visible outcome. Graphics, web design, user interactivity. The assignments I was being given in class were all back-end algorithms, where most of the work was being done behind the scenes with no visible output. Following that line of logic, I decided to switch my major to Graphic Design. I switched schools too, to a local community college called [Baker][] (much cheaper tuition!).

I had fun for a year before I realized how bored I was. I was really good at it, but it just didn''t have the same gratification as working out the solution to a complex problem. I sought the advice of one of my graphic design teachers about what I should do. Her recommendation was to try something more challenging, naturally. I went home that evening and dug into the course curriculum offerings that Baker had to find the major that would suit me. Web Design seemed to fit the bill nicely. It had front-end components with a visual output, it also involved back-end programming that would challenge me. I thought I was all set!

Sadly, it was not to be. Only a year into the program, Baker canceled their Web Design degree. Thinking about it now, that seems kind of crazy and extreme. It''s possible that I misunderstood what that cancellation was truly about, but nevertheless, I ended up switching schools and majors yet again. It was the proverbial *last straw* on my camel''s back.

Now, let''s fast-forward through four years of changing schools and majors, getting married, and moving from Michigan to California. I managed to land in an IT related field working as a support technician for a company that sells business phone systems as a service. This was a **fantastic** job. So much better than anything I had before, and stable enough as a career choice for me to forego finishing my degree. Over the course of a few years, I steadily rose through the technical support ranks, earning experience and knowledge as I went. It was around this time that my intense passion for programming began to resurface. Out of necessity, the job required knowing a lot about our software which was primarily written in [Perl][]. It was also a great boon to be able to write or hack together quick support scripts to help with everyday, mundane, tasks.

More and more, each day, I was spending increasing amounts of time and energy on programming various things and getting excited like I used to back in those early days. I was slowly planning my transition to move over to the engineering side of our company. There were so many good ideas I had that would solve problems we were dealing with in support. I wanted to be the one to solve those problems through software. Of course, my wishes were eventually granted and I was able to change positions.

When I finally found time to reflect on my history with software development, I realized that being taught how to program is not the same as discovering how to program. This, I think, more than any other is why software in school is so different than software in a professional environment. In school, I was being told about problems that needed solving and was told to solve them. The problems were not *my* problems and thus were not important. It wasn''t until I started encountering problems that were important to me, that programming solutions to them also became both important and interesting enough to invest my time in. It was in the thick of that problem solving that I discovered how to program. Very fluidly and organically.

The best advice I can give to anyone wanting to get into software development is to go find a problem that you''re passionate about solving and go solve it. The joy of writing words into a computer that solves a problem is amazing and well worth the effort. In [Part 3][], I''ll delve into what my first experiences were like in engineering and the kinds of challenges that came up that I didn''t expect going in.

<div class="photo-credit">

photo credit: [GYLo][] via [photopin][] [cc][]

</div>

[^7]: Read: I took out a ton of loan money to pay for it.

[Part 1]: /articles/2014/11/lost-and-found-part-1/ ''"Lost and Found" : Part 1 - From Dungeons & Dragons to HTML''
[Kettering University]: http://www.kettering.edu/ "Kettering University"
[Final Fantasy XI Online]: http://www.playonline.com/ff11us/index.shtml "Final Fantasy XI"
[Visual Basic]: http://en.wikipedia.org/wiki/Visual_Basic "Visual Basic"
[Office Space]: http://www.imdb.com/title/tt0151804/ "Office Space"
[Baker]: http://www.baker.edu/ "Baker College"
[Perl]: http://www.perl.org/ "Perl"
[Part 3]: /articles/2014/12/lost-and-found-part-3/ ''"Lost and Found" : Part 3 - I do not think it means what you think it means''

[GYLo]: https://www.flickr.com/photos/gylo/273523592/
[photopin]: http://photopin.com
[cc]: http://creativecommons.org/licenses/by/2.0/',
        1, /* Career */
        1, /* Author */
        14 /* Minutes */,
        '2014-12-04 03:06:26',
        '2014-12-04 03:06:26',
        '2017-03-27 01:32:01'
    ),
    (
        5,
        '"Lost and Found" : Part 3 - I do not think it means what you think it means',
        'lost-and-found-part-3',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/lost_and_found_part_3.jpg" title="I do not think that means what you think it means" alt="I do not think that means what you think it means">
</div>

In the post-college world I recounted in [Part 2][], things are much different than I imagined. At this point in my career, I was working on increasingly more side software projects. Software Engineering, in practice, was still a bit of a black box to me. Since I was working on the support side of the company, I only saw the end product[^8]. Occasionally, our team would have a discussion on the new features coming out and we would conduct various levels of training. However, I still had very little insight into how these ideas or features came to exist. Who defined them? How were they designed? In the end, I was just a consumer of the software and subjected to the end-user experience. Once in awhile, bugs that had existed for years would finally get fixed or features we had clamored for would be released. In reality, though, we weren''t the designated end-users of the system; our customers were. Many of the changes were directed at customer reported issues, which is generally good for business. Much of my frustration from working in support was dealing with this dilemma of not seeing the changes we, as a support team, wanted to see. My desire to switch over to the engineering side of the company was to see if I could help effect change in that area.

To my surprise, it wasn''t as easy as I had imagined. The first few weeks on the engineering team were very enlightening. My expectation coming in was to start digging into the code-base, learn the basic development cycle practices such as code-review, team meetings, design discussions, etc. That expectation was not met, and was instead turned on its head. There was a lot more disorganization than I imagined possible, which was bad for the company overall, but a great opportunity in waiting. You see, before I switched departments, I had been promoted over the years up to a support leadership position managing our most skilled technicians. I had a knack for process control and here was a great chance to institute a fresh process from the ground up. Instead of diving in as a software developer, I steadily fleshed out my role as a [Scrum Master][]. I was even sent off to get [certified][]. There was a lot of work to do. My arrival on the team happened to coincide with a total system re-implementation of our operational and business support systems. We adopted scrum and agile practices with a fervour and we had the management and team support to make it a success.

Scrum didn''t solve all of our problems though. While we delivered the project with much greater success than previous projects, we still missed deadlines and budgets. Despite those downfalls, the thought of trying to meet those guidelines in the pre-scrum era were unfathomable; both to the whole team and to me. It was a very satisfying experience overall. However, as we neared the remaining few months of the project, my desire for technical and intellectual problem solving started to gnaw at me. I had a great sense of proper process control, but it wasn''t fulfilling enough to keep me content. I eventually stepped down from the Scrum Master position and into a dedicated software developer role. I felt I could affect a much greater influence on the development practices by rising to a leadership role within the team. That goal has certainly driven my style and design decisions over the last few years and continues to be a motivating factor for doing things as close to the right way as possible.

Once we released our two years of effort to production, everything changed. Scrum became hard to maintain within the tightly controlled QA and release processes we had developed over the years and continued to use. The priority of features, changes, and bug fixes didn''t fit nicely into our two week sprints. Various processes were created by various members of the team in order to address issues that came up. The end result worked, for the most part, and got software releases out the door, but ideal of scrum and it''s processes became mostly obsolete. We weren''t developing in a vacuum anymore. We had stakeholders to answer to that we didn''t have before. All of the conflicting priorities made maintaining our agile processes difficult. Early on in the Scrum adoption process, it seemed easy and natural to strictly adhere to the ideal workflow. As reality keeps reminding us, though, ideologies should be applied within reason. Each company, each team, each project all have their own little quirks. There''s never a silver bullet that will solve all problems for all cases. Even today, we''re trying to adapt and see what works and what doesn''t.

Overall, developing production software has been much different than I expected. Long gone are my dreams of creating the myriad of fantastic tools and features that I yearned for while in support. The demands of business, customers, and product strategy have out shadowed those dreams. That is not to say that many of those ideas won''t ever come to fruition, but it will likely be by sheer necessity to support our customers and not nearly to the extent with which I had hoped. Resource limitations are much more restrictive than I had imagined and it''s through process control and implementation that we can get the most bang for the buck. In [Part 4][] I''ll start getting into the nitty-gritty of the trials and tribulations of the software development lifecycle like QA, unit testing, code reviews, and more.

<div class="photo-credit">

photo credit: [Princess Bride][] [Motion picture]. (1987).

</div>

[^8]: And lamented about all the things wrong with it (from a technical support perspective)

[Part 2]: /articles/2014/12/lost-and-found-part-2/ ''"Lost and Found" : Part 2 - PC load letter?!''
[Scrum Master]: http://scrummethodology.com/the-scrummaster-role/
[certified]: https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm
[Part 4]: /articles/2015/01/lost-and-found-part-4/ ''"Lost and Found" : Part 4 - Software development in practice''[Princess Bride]: http://princessbrideforever.com/',
        1, /* Career */
        1, /* Author */
        9, /* Minutes */
        '2014-12-18 21:49:53',
        '2014-12-17 22:49:49',
        '2017-03-27 01:31:37'
    ),
    (
        6,
        '"Lost and Found" : Part 4 - Software development in practice',
        'lost-and-found-part-4',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/lost_and_found_part_4.jpg" title="Software development in practice" alt="Software development in practice">
</div>

The "Lost and Found" series continues from [Part 3][] with a deeper look into the practice of software development and the kinds of wins and losses I''ve seen along the way. Rewinding back a bit to my days working in technical support, I remember how dreadful it was trying to troubleshoot something that appeared to be a bug in the software. Many times we had no way of knowing what the cause was or where it stemmed from. The primary reason for this, as you might guess, was that we had **very** poor error handling. On top of that, our code base had little to no logging. If there was any error handling at all, it was done by passing around an error message in [$@][]. For those unfamiliar with Perl or how it handles errors, $@ is meant to store the error message from the last [eval()][] operator; however, many Perl developers set it manually when an error occurs. I can''t quite understand how this was ever standard practice. The obvious issues with this approach are that it gives very little detail about the error other than a string, the message can be easily clobbered or overwritten and worst of all there''s no stack trace or information about where the error was originally set. If you were lucky enough to get a valid error message, you''d have to [grep][] the code base to find where the error got set, hoping that there were only a few places to look.

With that bit of backstory out of the way, you can imagine how much of a win it was to finally get some logging in place. One of the first things I helped with when we started our software rewrite was to implement [Log::Log4perl][][^9]. I think this, above anything else we did, saved hundreds of developer hours. I can recall numerous occasions where I was working in very complicated parts of the system and discovered defects within seconds, simply by having detailed DEBUG and ERROR logging noting the module, method, and line number. This was long before we had given any serious consideration to unit tests, but despite the manual effort, it was a huge step up from before. Of course, the one caveat with this approach is that after months or years when you''ve hardened various sections of your code, the logs become cluttered with useless messages. Things get to the point where sifting through the log is like trying to decode [The Matrix][]. This makes it difficult to find bugs in more recently written code. After a long enough period of time, those DEBUG statements should be removed or changed to TRACE statements instead.

So, logging is great, especially during the early stages of development when lots of testing/debugging is going on during integration testing. What''s better? Unit tests. I''ve heard a lot of people talk about unit tests and many of them have varied definitions of what they are and what they are not. The specific definition is going to depend on personal preference and what is required of the project you''re working on. Regardless of the definition, however, some key principles should apply; small in scope, done by the developer implementing the code, and fast. Some people refer to unit tests as if they were integration tests and use the terms interchangeably. I think this is a mistake, if you''ve got integration tests set up ([Selenium][], for example), calling them unit tests give you a false sense of confidence in your test coverage. It''s a given that having **some** tests is better than having no tests, but ensuring unit tests are in place gives you finer control and helps ensure modularity, clean interfaces, and encapsulation. This is especially important if you have an [MVC][] or Model-View-Controller architecture.

Which, I believe, leads to one of our largest losses. The lack of unit tests from the start of the project resulted in much of our business logic (Controller in MVC) mixed up with our View code. This means that when we did get around to writing unit tests, it was now much harder. In Python/Django that means ensuring a valid request context. In Perl, it usually means having a CGI instance. It''s extra overhead to have to worry about because there''s more mutable state that needs to be set up to test a View instead of testing a method in a Controller. We also have a lot of our Model logic littered around as well. This means that for the majority of the code, it''s almost impossible to test without having a real, live database up and running. All of these issues ultimately lead to mental molasses that result in developers **not** writing any unit tests at all. This, I think, is a great argument for having a more [TDD][]-centric workflow. If you attack a problem solution with testing at the forefront of your mind, you''re forced to design code in a way that''s easily tested.

Not having unit tests obviously results in more developer time debugging, due to not having an early notification if something breaks. It also results in code that is buggy and error-prone. However, the biggest impact is ultimately on the QA team and eventually the customer. One of the slowest areas of the software development cycle is in manual testing. This comes in the form of regular testing of new features, regression testing, smoke-testing, load testing, and penetration testing. This can add up to hundreds of hours of testing for even the smallest of features, especially depending on the number and variety of inputs. It''s no wonder, then, that unit tests would save much of this time if said tests can provide a high level of confidence that they cover what needs to be covered. Having unit tests automate regression testing alone would justify the time and energy to implement and maintain them. Just think about the thousands of bugs your average enterprise system can manifest over its lifetime. If every bug had a test ensuring it never occurred again in production, how much time would the QA folks have to focus on other things like smoke-testing?

I doubt any sane developer would refute the usefulness of unit tests. The usefulness is rarely in question. The obstacles that are typically brought up are time and difficulty of implementation. I''ve already mentioned that implementation becomes much easier if you focus on testability first. Time, however, is simply a matter of perspective. We humans are notoriously bad at estimating time. It''s especially bad if that time is split into hundreds of small increments over the course of six months or if that time isn''t felt by the person doing the estimation. With unit tests, time put in now saves magnitudes of time put in later. This saved time isn''t just for the developer. It''s also for the fine folks in QA, Systems, and ultimately for the Customer or Support Technician. All of that adds up. 

Let''s run through a small example. Say you''ve got a reporting system that you wrote without unit tests which report the number of calls taken in a day. Now say there''s a bug in that reporting system that doesn''t account for calls that were transferred to another extension. The customer, at the end of their week, pulls up the report and is surprised at the low call count. So maybe they spend 30 minutes adding up their calls by looking through their emails, or [CRM][] system or whatever. Finally, they come to the conclusion that the report is wrong. They then call support and wait on the phone for 15 minutes before getting to speak to someone. The technician spends 30 minutes troubleshooting the issue (assuming they didn''t already know about the bug) before informing the customer. The technician files a bug report. Now say this happens to 100 other customers. Some time later a QA person spends 30 minutes reproducing the issue and filing an engineering ticket to fix. The ticket takes time from the engineering project manager to update the issue, assign it to a developer, prioritize it, etc. Let''s say 10 minutes in total[^10]. Finally, the developer gets it, tracks down the code, fixes it and tests it: 1 hour. QA re-tests it before it gets deployed: 30 minutes. These are all very low estimates considering the amount of overhead some companies have in coordinating resources.

Have you been keeping track? Total time spent by all parties: ~105 hours[^11]. The time it should have taken to write unit tests to ensure the reporting system accounted for all types of call traffic: ~2 hours[^12]. It''s a no-brainer. In [Part 5][] I''ll talk about career stagnation and some ideas for preventing it.

<div class="photo-credit">

photo credit: [Crossroads: Success or Failure][] via [StockMonkeys][] [cc][]

</div>

[^9]: A Perl implementation of [Log4j][].

[^10]: This is a very efficient project manager!

[^11]: (30 minutes customer troubleshooting + 15 minutes waiting for support + average 15 minutes on the phone) * 100 customers = 100 hours. Then tack on about ~5 hours of internal administrative overhead to find/fix/release the bug.

[^12]: Depending on the complexity of the system and how easily the bug was found in the source.

[Part 3]: /articles/2014/12/lost-and-found-part-3/ ''"Lost and Found" : Part 3 - I do not think it means what you think it means''
[$@]: http://perldoc.perl.org/perlvar.html#Error-Variables
[eval()]: http://perldoc.perl.org/functions/eval.html
[grep]: http://perldoc.perl.org/functions/grep.html
[Log::Log4perl]: http://search.cpan.org/~mschilli/Log-Log4perl-1.46/lib/Log/Log4perl.pm
[Log4j]: http://logging.apache.org/log4j/2.x/
[The Matrix]: https://www.youtube.com/watch?v=3vAnuBtyEYE
[Selenium]: http://www.seleniumhq.org/
[MVC]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
[TDD]: http://en.wikipedia.org/wiki/Test-driven_development
[CRM]: http://en.wikipedia.org/wiki/Customer_relationship_management
[Part 5]: /articles/2015/03/lost-and-found-part-5/ ''"Lost and Found" : Part 5 - Turbo-charge your career and avoid stagnation''

[Crossroads: Success or Failure]: https://www.flickr.com/photos/86530412@N02/8226451812/
[StockMonkeys]: http://www.stockmonkeys.com/
[cc]: http://creativecommons.org/licenses/by/2.0/',
        1, /* Career */
        1, /* Author */
        14, /* Minutes */
        '2015-01-14 22:30:34',
        '2015-01-14 19:45:21',
        '2017-03-27 04:46:14'
    ),
    (
        7,
        '"Lost and Found" : Part 5 - Turbo-charge your career and avoid stagnation',
        'lost-and-found-part-5',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/lost_and_found_part_5.jpg" title="Turbo-charge your career and avoid stagnation" alt="Turbo-charge your career and avoid stagnation">
</div>

The "Lost and Found" series comes to a close. Previously, in [Part 4][] I talked about the importance of unit testing your code. As the final chapter in this series, I want to talk about my most recent struggle: career stagnation.

There have been a handful of moments in my career where I felt I had plateaued. It was a point at which I wasn''t learning very much day to day. The moment that realization set in, work became a grind (at least for me). Day in and day out, it was the same old routine. I don''t know about you, but I *love* learning new things. It''s what gets me up in the morning and keeps me up late at night. If I''m not learning, I get depressed and lazy. While this alone should be enough motivation to avoid falling into this lethargy trap, there''s another negative side-effect. Plateauing in your career usually means you stop moving up, or lateral, or anywhere. If you''re happy with that arrangement, then read no further. However, most of us want that next promotion, that next client, or that fancy senior developer position at *[Insert your dream company that may or may not rhyme with moogle here]*. Reaching those goals is almost impossible if you hit a ceiling and fall short of their requirements[^13]. Even the most vaulted developer at Facebook isn''t going to be kept around for long if they stop learning. The software industry just moves too quickly and will leave you in its dust in a nanosecond if you can''t keep up.

So what are you to do? It can be hard working a solid 40 hour week while juggling any number of other responsibilities like family, a significant other, children, or side hobbies. How are you expected to fit in career building on top of all that? Well, the first step is deciding to make it a priority. Many people complain about not having enough time, but time isn''t the issue. We all get 24 hours a day to work with but as evident by the likes of Bill Gates, Steve Jobs, or *[Insert your favorite software idol here]* it **is** possible to reach heights previously unfathomable. The only difference is that they made their goals a priority. If all this sounds like hogwash to you, let me ask you to take a moment and think about what you prioritize your time on. Go on, I''ll be here when you get back. Got it? Good. Those things are a higher priority to you than the things you''re not spending time on. But you do them and find time somewhere in your busy schedule. If you''re saying that TV isn''t a high priority, then why are you watching it?!

The second step is easy: Start reading books related to your career, or listening to audio books while you exercise or during your commute. All you need is 30 minutes in the morning and 30 minutes in the evening, every day. Do that and you''ll burn through about one book a week which means 50 books a year. Compare that to the average that most adults read, which is 1 book a year, and you''ll be far above the game! 50 books a year is the equivalent of a Ph.D in your field every single year. Can you start to imagine what kind of effect that would have on your career and your income!? There''s a whole list of other things you can do as well, but I think the first two steps will suffice in getting you started. If you''re curious about what those other things are, I highly recommend checking out [The Miracle of Self-Discipline][] by [Brian Tracy][].

<div class="photo-credit">

photo credit: [Speeding ticket][] via [stavos][] [cc][]

</div>

[^13]: Unless, of course, you already work there and are living happily ever after. Good for you!

[Part 4]: /articles/2015/01/lost-and-found-part-4/ ''"Lost and Found" : Part 4 - Software development in practice''
[The Miracle of Self-Discipline]: http://www.amazon.com/The-Miracle-Self-Discipline-No-Excuses-Getting/dp/1908364041
[Brian Tracy]: http://www.amazon.com/Brian-Tracy/e/B001H6OMRI/ref=dp_byline_cont_book_1

[Speeding ticket]: https://www.flickr.com/photos/stavos52093/13410355444/in/photolist-8gsuJC-oW3LQq-qPseP7-36xkGr-6ExgHD-43Nus-6mnrrz-3QHNwP-gbVGkP-bRpoPz-mr2zsU-gouj3k-6RQh4p-aaYpt5-8McSTo-6rNawe-arXC3L-7vVN5M-afEu4o-dmP9Qh-2euPzE-q2ne4-75bkeW-q6xbQN-87iTve-djR9r-niAXry-4BJWrU-7kiiEN-8gsumL-7A6E5Y-niC99x-vwpVu-9m92M6-doPzkr-g3Q67S-biTteT-9Auzue-pvC3xU-8A9jZ7-6DDvQP-8gstEj-4duuGf-8RaEzb-6aAq7T-q2kNZ-53tmsw-2Kuosm-9T8XaV-5F7c9W
[stavos]: https://www.flickr.com/photos/stavos52093/
[cc]: http://creativecommons.org/licenses/by/2.0/',
        1, /* Career */
        1, /* Author */
        6, /* Minutes */
        '2015-03-18 18:56:01',
        '2015-03-18 17:24:34',
        '2017-03-27 04:46:02'
    ),
    (
        8,
        'Software Malaise',
        'software_malaise',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/software_malaise.jpg" title="Software Malaise" alt="Software Malaise">
</div>

It''s rant time. I haven''t written an article in a while partly because I''ve been busy with work, school, and a self-identity crisis and partly because I haven''t had something worth writing about. Until now.

You see, I''ve been cooped up at the same company for a long time now but I try to keep an eye on the general movement of software and technology. From my little, limited peep-hole view of the software industry, I certainly can''t see everything. In fact, I''m probably missing a ton of context, but I''m going to be self-righteous for a second and air my grievances to the internet. The title of this article is Software Malaise, which is quite apt. According to good ol'' Merriam-Webster, malaise means a vague sense of mental or moral ill-being, which is exactly what I want to discuss. I can''t pinpoint why I''m bothered, or who''s fault it is, but I''m mentally ill with the current practice of software development.

I think, ultimately, it comes down to a people problem. People suck, in general. They tend to let all kinds of personal biases interfere with otherwise pristine logical analysis. Okay, so what the hell am I talking about? Here''s the heart of the issue: Software can be so much better than it currently is - both in terms of what it can do and the ease with which it can be developed. Currently, though, it sucks and it sucks hard. It''s insane how hard it is to develop good, quality software on a budget within an appropriate amount of time without wanting to pull your hair out. That''s not even getting into how much of a nightmare the code-base is to maintain over a 10 year period.

Why is that? Why do teams have such an issue with creating high quality, well-tested, bug-free software? Why is it so hard to write good, automated tests? Why the hell hasn''t something replaced Javascript already? Why is it so hard to center a damn element on an HTML page with CSS? The issue only gets worse with the size of the team or the size of the code-base. All kinds of methodologies have been invented over the years to try and manage this chaos and complexity. Scrum, Kanban, TDD, Pair programming, etc. Many times they help, many times they don''t, or the teams fail to implement them correctly. Or they implement them fine, but they degrade over time and stop being as effective.

Some of the answers come down to momentum and individual developer comfort levels. There are millions of people using these languages and technologies and billions or trillions of lines of code that would have to either be rewritten or backwards supported for the foreseeable future. It''s like someone who has a mess of papers strewn across their desk. They know exactly where everything is, so don''t go changing anything, otherwise, it''ll be anarchy. Organized chaos. Another possible answer is that it''s a hard problem to solve. Maybe it''s too hard to find something that works or performs better. Maybe too many people have differing opinions and we can''t come to a common consensus on what should be done or how it should be implemented. Sometimes, people or companies do try, but the community squashes it, or ignores it, and the energy of the project flutters out.

I don''t buy some of that crap. Most of what we have and use now was invented by someone to solve a problem. Adoption took time, it didn''t happen instantly. Python wasn''t always as popular as it is today, or Ruby, or Java for that matter. Frameworks like Django or Ruby on Rails didn''t always exist. I think the problem is that not enough people are focusing on solving those types of problems anymore. Either because they''re too busy with other things, or because there''s no money in it. I''m not the only one who thinks this way or takes issue with the problems we''re faced with but choose to ignore. For some interesting videos highlighting some different aspects of what I''m talking about see: [The Web Will Die When OOP Dies][], [Replacing the Unix tradition][], and [Object-Oriented Programming is Garbage][].

It''s clear to me that much of the software landscape was built and designed by brilliant minds on hardware that we scoff at as being ancient and barely usable. However, I don''t see enough new ideas or new ways of doing things that take advantage of the fact that we''re not limited to 80 column screens or 8 KB of memory. Sure, new languages have been invented, some as recently as 2014. Examples are Go, Rust, Swift, and Dart. But, they all seem to follow in the footsteps of previous generations with few major changes. Or, in the case of Dart, opt to compile down to Javascript instead of just replacing it. Why is C syntax so popular among so many languages? Because it works or because it''s what we''re used to and it''s comfortable? There are improvements, though, it''s not all doom and gloom. Swift, for example, is quite interesting in that it has a playground mode so you can see the effects of your changes as you make them, making development much easier than the standard write, compile, run cycle we''re all used to. For a demonstration of this idea where a developer can focus on the invention process instead of getting bogged down with the tools, see [Inventing on Principle][].

Now, don''t get me wrong. It is literally awe inspiring what has been achieved with software in spite of all of these problems. But this only further proves my point - imagine what could be possible to achieve if we didn''t have to jump through hoop after hoop just to get a system deployed that is stable and scalable. Also, I''m not saying that no one is working on this problem or that there haven''t been great strides and improvements over the years. It just seems to me that, on the whole, the development community is resistant to such changes. It saddens me that is how things operate. The larger something is, the harder it is to move or change, and with software reaching as far and wide as it has, it''s becoming increasingly difficult to innovate. I only hope that some day, a new generation of developers will say they''ve had enough and will lead the charge into a new era of computing. Perhaps advancements in AI will help bring about a future where software is easier to write, test, and debug and we can tackle some truly amazing problems with the systems we design.

<div class="photo-credit">

photo credit: [Hasselblad][] via [Francesco Masciello][] [cc][]

</div>

[The Web Will Die When OOP Dies]: https://www.youtube.com/watch?v=_CEBG_s92P8
[Replacing the Unix tradition]: https://www.youtube.com/watch?v=L9v4Mg8wi4U
[Object-Oriented Programming is Garbage]: https://www.youtube.com/watch?v=V6VP-2aIcSc
[Inventing on Principle]: https://vimeo.com/36579366
[Hasselblad]: https://www.flickr.com/photos/pupaz/13793871713/in/photolist-n1Vcun-5ch7AR-5bfB7V-7rmbtW-5UvRey-7m3zTr-pwP9fk-dFWtFn-4RvXoh-2CKSuH-Q1krwf-PDQnDZ-7m7tS9-T2dK6T-dqtryH-BGEErU-5zF1Yd-RYH594-4TLkM-nkzh4Q-bSjshn-aFV86-xhDW-7m3AHk-gCmsSM-cdSu81-bpbah8-9CqhcQ-DWFcJ3-7hcY5X-ipzGLV-acMiq3-bBrezH-7mj53W-6XkLdV-mUUFm4-bw7tMg-b2N2p8-8TQhJG-qodqY-65pXG1-drMhLF-ji7CzD-SC6wMB-dJ6Qpn-bre7p-5zJmLR-ajckuK-j4hk-QceCvV
[Francesco Masciello]: https://www.flickr.com/photos/pupaz/
[cc]: https://creativecommons.org/licenses/by-nc-nd/2.0/',
        9, /* Software Development */
        1, /* Author */
        10, /* Minutes */
        '2017-03-27 05:36:10',
        '2017-03-27 02:06:39',
        '2018-10-30 20:26:29'
    ),
    (
        9,
        'Programming an NES Emulator from Scratch in Rust',
        'rustynes_part_1',
        '<div class="post-header-img">
     <img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/rustynes.png" width="800">
</div>

I decided several months ago that it''d be a neat idea to create my own [NES emulator][rustynes] using my new favorite language: [Rust][rust]. Little did I know how complicated it would be or how much of my soul would be required (and I''m not even finished!). My story starts shortly after I registered for my final few courses finishing my Bachelors of Computer Science. One of those courses was called "Rust Programming". In preparation for the course, I decided I should learn a bit about it before class started because I had only heard about it in passing. I immediately fell in love with it.

Now, don''t get me wrong, there were certainly growing pains. There were some new ideas to get used to like borrow checking and lifetimes, but I slowly managed to get used to things and got really excited for class to begin. One of the course requirements was completing a decently sized code project that would span several weeks, and thus I began my search for the perfect Rust project. I''ve been into classic video games for years now and have played several emulators over that time, so I figured that might be a solid place to start. When I discovered there were barely any fully functional NES emulators written in Rust, I decided this would be the perfect project. The NES is an old platform so it should be simple to emulate right? Right. Little did I know...

This project has been a labor of love, with much pain and frustration mixed with the joy and satisfaction. I''d like to share some of my journey in, what will likely turn out to be, a many part series. My intention is to highlight the many benefits of embarking on such a large project and perhaps help caution against some of the pitfalls. I''ve learned so much from this endeavor and expanded my ability as a programmer. Also, while I understand why the NES Dev wiki discourages new emulator development, I highly encourage anyone interested to either start their own as just a toy project, or help collaborate on an existing project as it is highly informative and rewarding.

You can check out the code for this project on [github][rustynes].

Here are some of the things this series will cover:

* How does software emulation of hardware like the NES work?
* What features does an emulator require?
* What games can be played? How are games emulated?
* How did I approach emulating the NES from scratch using Rust?
* How was using Rust in such a low-level environment?
* What are some of the features of my implementation?
* What''s the current status/future of the project?

### Current Status

There are currently 7 mappers completely implemented with 1 more in progress. I''ll cover more on what mappers are later, but these 8 mappers will allow around 84% of NES games to be playable. Many of the remaining games are Japanese released games, obscure games, or homebrew games. These mappers include many popular titles including all of the Super Mario games, Zelda, Metroid, Final Fantasy, and Castlevania among many others.

<img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/legend_of_zelda.png" width="600" style="padding: 5px">

**Current Features:**

* Runs at a stable ~60 FPS even with the PPU debugging feature enabled, even on relatively low-end machines (Testing/Development was done on a 2013 Macbook Air)
* Average FPS Counter in title bar
* Can use either Keyboard or an Xbox style controller as input
* Supports Turbo keys
* Fast Forward and Speed Increase/Decrease 
* Reset/Power Cycle emulation
* Save/Load any time during gameplay (4 save slots) - Finally beat those games you never could with flawless play throughs
* Fullscreen/Windowed modes
* Toggle Sound on/off
* Take screenshots of your epic adventures
* PPU Debugger - See what the Picture Processing Unit graphics look like in memory in real time
* CPU Debugger - Pause and step through single CPU instructions at a time, or step whole frames at a time

**Future Features:**

* Action recording (Record inputs and play them back)
* Sound recording (Save those classic 8-bit tunes)
* Configuration menus (Currently, all configuration is done via command line flags)
* Custom keybinds
* Network multi-player - play 2-player classics with friends!
* Advanced debugging support for NES game developers
* Web-assembly front-end to enable browser play cross-platform
* Game Genie
* [WideNES][widenes] - A feature where the game level map is recorded as you progress, allowing you to zoom out and see the whole game world at once
* A Headless mode - could be useful to automate NES testing suites or play around with AI learning algorithms

**Code Statistics**

* Source Lines of Code :  8513
* Comments :  1324
* Number of files  :  24
* Number of commits : 166

Overall, I''m very happy with the project and its performance, but I''m a perfectionist and there''s still a lot to do. There are many crusty corners that I''d like to substantially refactor. Frustration got the better of me at times and in an attempt to just get things working, I left my "best practices" at the door. Rust was a fantastic choice for this project, especially once you get past the strict constraints Rust puts on you. I certainly struggled a lot early on in development because Rust limits variable ownership and mutable state and the prime thing this project is attempting to emulate is hardware where everything is globally mutable.

### Emulator Overview

The NES hardware is composed of the following six components:

* [CPU][CPU] - A [Ricoh RP2A03][2A03] Central Processing Unit based on the [MOS6502][MOS6502], modified to disable the binary decimal mode and include support for the APU.
* [PPU][PPU] - Picture Processing Unit. This does the bulk of the work putting out pixels. It''s based on the [Ricoh RP2C02][2C02].
* [APU][APU] - Audio Processing Unit. While the original hardware combined the CPU and the APU into the RP2A03, I''ve emulated it as a separate module for ease of maintenance.
* [Memory Mapped I/O][memorymap] - This includes built in writable RAM (WRAM) in the NES console, the APU, Controller Input, Program RAM (PRG-RAM) and read-only memory (ROM) typically located on the Cartridge. ROM is split further into Program ROM (PRG-ROM) and Character ROM (CHR-ROM) used for background and character sprites.
* [Controller Input][controller] - NES controller input (Start, Select, A, B, and directional buttons).
* [Cartridge Board][cartridge] - Each NES game came on a board or "cart" with designated circuitry. Each game had different, pre-defined, circuitries which were called [mappers][mappers].

The architecture I''ve chosen groups the CPU, PPU, and APU components inside of a Console module which sits alongside of Input, Memory, and Mapper modules. The current UI module uses the Rust [SDL2][sdl2] libraries to handle the windows, input, graphics and audio. This will be updated to be swappable with a web-assembly implementation in a future version to allow playing the emulator in a modern browser.

In [Part 2][], I''ll go into the details of my implementation and some of the major insights learned along the way.

[rustynes]: https://github.com/lukexor/rustynes
[rust]: https://www.rust-lang.org/
[widenes]: https://prilik.com/ANESE/wideNES
[CPU]: https://wiki.nesdev.com/w/index.php/CPU
[2A03]: https://en.wikipedia.org/wiki/Ricoh_2A03
[2C02]: https://en.wikipedia.org/wiki/Picture_Processing_Unit
[MOS6502]: http://archive.6502.org/datasheets/rockwell_r650x_r651x.pdf
[PPU]: https://wiki.nesdev.com/w/index.php/PPU
[APU]: https://wiki.nesdev.com/w/index.php/APU
[memorymap]: https://wiki.nesdev.com/w/index.php/CPU_memory_map
[controller]: https://wiki.nesdev.com/w/index.php/Standard_controller
[cartridge]: https://wiki.nesdev.com/w/index.php/Cartridge_board_reference
[mappers]: https://wiki.nesdev.com/w/index.php/Mapper
[sdl2]: https://docs.rs/sdl2/0.32.2/sdl2/
[Part 2]: /articles/2020/01/rustynes_part_2',
        9, /* Software Development */
        1, /* Author */
        10, /* Minutes */
        '2019-09-19 06:10:44',
        '2019-09-18 03:52:26',
        '2019-09-18 03:55:26'
    ),
    (
        10,
        'NES Emulation in Rust: Designs and Frustrations',
        'rustynes_part_2',
        '<div class="post-header-img">
    <img src="/static/images/articles/headers/nes_console.jpg" title="Nintendo Entertainment System" alt="Nintendo Entertainment System">
</div>

<style>
th, td {
  padding: 5px;
  border: 1px solid;
}
table {
  border: 1px solid;
  margin-bottom: 10px;
}
</style>

In [Part 1][], I went over the current state of my NES emulator project in Rust, and today I''ll continue by going into the details of how the NES operates at a hardware level, and some of the constructs I used to emulate that with Rust.

### Emulator In-Depth

#### Clocking

The NES contains several hardware components that can perform computations (CPU, PPU, APU, and Cartridge). In order to ensure everything communicates and coordinates properly, a clock is required to keep them in sync. Nintendo released multiple versions of the NES in different regions, with different hardware containing differing clock timing. In the United States, for example, the NES used the [NTSC][] television standard with an [RP2A03](https://en.wikipedia.org/wiki/Ricoh_2A03) CPU while the consoles released in Europe followed the [PAL][] standard and used a RP2A07 CPU. Both the television standard and the chosen hardware for that region affect the timing and methods for generating the NES video. I''ll primarily be referencing NTSC for the remainder of this article since that''s the NES I grew up with and emulated, though there are many differences for the PAL and [Dendy][] versions which I have not emulated. The NTSC NES had a master clock of 21.477272 MHz which was divided by each component for it’s own use as outlined below:

<table>
  <tbody>
  <tr>
    <th>Component</th>
    <th>Clock Divider</th>
    <th>Clock Speed</th>
  </tr>
  <tr>
    <td>Master</td>
    <td>1:1</td>
    <td>21.477272 MHz</td>
  </tr>
  <tr>
    <td>CPU</td>
    <td>1:12</td>
    <td>1.789773 MHz</td>
  </tr>
  <tr>
    <td>PPU</td>
    <td>1:4</td>
    <td>5.369318 MHz</td>
  </tr>
  <tr>
    <td>APU</td>
    <td>1:24</td>
    <td>0.894886 MHz</td>
  </tr>
  </tbody>
</table>

Additionally, the APU uses an internal [Frame Counter](http://wiki.nesdev.com/w/index.php/APU_Frame_Counter), separately from it''s clock, that it uses to clock it''s multiple components like the [Pulse](http://wiki.nesdev.com/w/index.php/APU_Pulse) and [Triangle](http://wiki.nesdev.com/w/index.php/APU_Triangle) channels every quarter and half-frames. The APU is arguably the most complicated to emulate the clock timing for.

Thus, with a clock pulse being so critical to the proper emulation of the NES, I set about creating a Clocked trait.

    pub trait Clocked {
        fn clock(&mut self) -> usize {
            0
        }
    }

This trait would be implemented for every major component: CPU, PPU, APU, and even some Mappers.

Calling this `clock()` function would advance that component by the smallest, reasonably discrete step possible. The CPU, for example, would execute one full instruction. Here comes the first rub: in the original NES hardware, all of the components are running in parallel with each other, so the PPU, APU or Mapper could read/update values on their address or data buses during the *middle* of a CPU instruction.

Most emulators ignore this for performance reasons and simply do some level of "catch-up" by running the CPU for a bit, then running the PPU/APU/Mapper to catch up. By alternating back and forth between the components, you get fairly accurate emulation. This is what my initial implementation did, but recently I wanted to make RustyNES as cycle-accurate as possible and so every time `clock()` is called on the CPU - one full instruction is executed which may include several sub-instructions. Every instruction on the CPU involves either a read from or a write to memory. Before that read or write is done, the CPU caches up the PPU, APU, and Mapper so that if those components read or update a value, the correct read or write is performed.

#### Memory Mapping

The next big component of the NES is how it maps available memory using it’s limited 16-bit address space. Note that while the address space is 16-bits, the data bus was limited to only 8-bits at a time. Both the CPU and PPU had separate memory maps as outlined below:

**[CPU Memory Map](http://wiki.nesdev.com/w/index.php/CPU_memory_map)**

    --------------------- $10000   --------------------- $10000

                                    PRG-ROM Upper Bank

                                   --------------------- $C000

    Cartridge Space                 PRG-ROM Lower Bank

                                   --------------------- $8000
                                    SRAM
                                   --------------------- $6000
                                    Expansion ROM
    --------------------- $4020    --------------------- $4020
                                    APU & I/O Registers
                                   --------------------- $4000

     I/O Registers                  Mirrors $2000-$2007

                                   --------------------- $2008
                                    PPU Registers
    --------------------- $2000    --------------------- $2000

                                    Mirrors $0000-$07FF

                                   --------------------- $0800
     RAM                            RAM
                                   --------------------- $0200
                                    Stack
                                   --------------------- $0100
                                    Zero Page
    --------------------- $0000    --------------------- $0000

**[PPU Memory Map](http://wiki.nesdev.com/w/index.php/PPU_memory_map)**

    --------------------- $10000   --------------------- $10000

     Mirrors $0000-$3FFF            Mirrors $0000-$3FFF

    --------------------- $4000    --------------------- $4000

                                    Mirrors $3F00-$3F1F

     Palettes                      --------------------- $3F20
                                    Sprite Palette
                                   --------------------- $3F10
                                    Background Palette
    --------------------- $3F00    --------------------- $3F00

                                    Mirrors $2000-$2EFF

                                   --------------------- $3000
                                    Attribute Table 3
                                   --------------------- $2FC0
                                    Name Table 3
                                   --------------------- $2C00
                                    Attribute Table 2
     Name Tables                   --------------------- $2BC0
                                    Name Table 2
                                   --------------------- $2800
                                    Attribute Table 1
                                   --------------------- $27C0
                                    Name Table 1
                                   --------------------- $2400
                                    Attribute Table 0
                                   --------------------- $23C0
                                    Name Table 0
    --------------------- $2000    --------------------- $2000
                                    Pattern Table 1
     Pattern Tables                --------------------- $1000
                                    Pattern Table 0
    --------------------- $0000    --------------------- $0000

That looks complicated and it sort of is, but it helps if we clarify some terminology.

- **PRG-ROM**: Program Read-Only Memory. The PRG-ROM is broken up into two parts which are generally referred to as PRG-ROM and CHR-ROM or Character Read-Only Memory. PRG-ROM is all the logic of the game. Rules, physics, control-flow, etc, while CHR-ROM is all the sprite and image data.
- **Bank**: A fixed or swappable "view" of memory. As mentioned, the NES is limited to a 16-bit address space which isn''t very big. While this was enough for some early NES titles, it limited the size of games and so various cartridges added extra hardware (called Mappers) to be able to swap out banks of memory so that while the NES is referencing the same memory addresses in the range `$8000-$FFFF`, it''s actually reading different addresses from the much larger address range provided on the cartridge.
- **SRAM**: Save Random-Access Memory. This was battery-backed memory that could persist between play sessions. Not all cartridges had this, but games like *The Legend of Zelda* used it for it''s save slots.
- **Expansion ROM**: Very few cartridges used this area. It was primarily used to add extra features to the NES like sound-processing, or extra Name Tables.
- **I/O**: Input/Output. This includes the PPU, APU, and Controller.
- **Sprite**: These are the moving entities in the game, primarily the player character, enemies, projectiles, etc.
- **[Name Table](http://wiki.nesdev.com/w/index.php/PPU_nametables)**: These are the background scenes for each level. The NES had internal memory enough for two Name Tables at a time, but had address space for four. This allowed the NES to use a Name Table Mirroring technique which allowed games to swap between Name Tables for use in scrolling the level (More on this later).
- **Attribute Table**: Each Name Table had an attribute table that mapped palette colors to areas of the Name Table.
- **Pattern Table**: These contain image patterns used in constructing sprites.

The Pattern, Attribute, and Name Tables are all populated from the CHR-ROM portion of the cartridge and can be swapped around as necessary during gameplay. In order to construct this mapping, I came up with a Bus struct that contains the various components:

    pub struct Bus {
        pub ppu: Ppu,
        pub apu: Apu,
        pub mapper: MapperRef,
        pub input: Input,
        pub wram: Memory,
    }

The CPU struct holds a copy of this Bus in order to read/write data from it. There are likely other or better ways to structure things given that the CPU only *really* needs access to registers on the PPU/APU and not the entire object itself. I could have also split out the Mapper/Cartridge into PRG-ROM and CHR-ROM so that it did not need to be shared between the CPU and PPU, but that may be a project for another day.

The MapperRef above is defined as `pub type MapperRef = Rc<RefCell<dyn Mapper>>`. It''s a bit wordy for sure.

To explain it, there are two things to know:

1. At compile time we don''t know what *type* of Mapper is going to be loaded because it depends on the individual game cartridge being played. A dynamic trait object is a solution for this. The Mapper trait defines a set of methods that can be called on any concrete Mapper such as reading/writing data to it or determining if an IRQ is pending. The `dyn` keyword means it''s a dynamic object loaded at run time.
2. The Rc/RefCell means that I''m placing the Mapper object behind a mutable memory location with dynamically checked borrow rules. The Rc is a Reference Counted data structure that allows multiple owners of an object by calling `clone()` on it. Once all references go to zero, the dynamic memory can be freed. This setup also ensures that only one part of the system can get a mutable copy at a time by calling either `borrow()` or `borrow_mut()`. There is some performance overhead with this, but the alternative is a lot of unsafe Rust code to allow shared access to data.

`wram` above stands for *Work RAM* which is the 2KB worth of internal memory available to the CPU for processing.

#### CPU

The **Central Processing Unit** is the work-horse of the NES and processes all the logic of a game including how to squish a Goomba or shoot a blaster. It follows a very simple paradigm in basic computing: Fetch, Decode, Execute, Repeat. The CPU uses a Program Counter (PC) to keep track of where in memory it''s reading and executing instructions from.

When the NES is powered on or reset, the CPU defaults the PC to address `$FFFC`. This is known as the *Reset Vector* and tells the NES where to start reading instructions from. This address is in the Cartridge Space. From there it decodes what the instruction is, executes it and increments the PC by the correct amount based on the instruction. Different instructions increment the PC by different amounts. The RP2A03 CPU was incredibly brilliant for it''s time. It was limited to only 256 unique instructions, but it had 12 different [Addressing Modes][] which could subtly change how the instruction operated leading to some very efficient code.

#### PPU

The **Picture Processing Unit** handles all of the pixel-by-pixel calculations required to output a video signal. It runs at 3x the speed of the CPU. This is critical because the CPU can only run roughly 29,780 cycles per frame, but there are 61,440 pixels that need to be generated for NTSC (256x240) which means the CPU, by itself, is too slow to draw a full screen at the required 60hz refresh rate. Running at triple the speed allows the PPU enough time to generate all of the pixels and still have some idle time left over which is called the Vertical Blanking period (VBlank). Game designers use this period to have the CPU update values, change state, etc. Doing this in the middle of rendering would cause odd screen glitches and artifacts. The PPU by far was the most complicated component to emulate overall. NES designers used many varied mathematical tricks in order to get the most out of the hardware.

The PPU contained the following sub-components:

* **Name Tables**: Four virtual tables, two of them real with mirroring options. It specified 32x30 bytes which contain data for which 8x8 (or 8x16 depending on the mode) image pattern to use.
* **Attribute Tables**: Specifies with 4-color palette is used for each 16x16 tile area.
* **Object Attribute Memory (OAM)**: Stores position, palette, and various properties (like whether it''s inverted left/right or up/down) for sprites. There is a total of 64 unique sprites per frame, with a maximum of 8 active at any time. If you''ve ever noticed sprites flickering when playing the NES when there are a lot of enemies on the screen, this is the sprite limit being reached.
* **Palette**: 8 unique 4-color palettes, however the first is always transparent for each palette allowing a global background color to be available. There are a total of 64 unique NES colors to choose from, but only 32 can be chosen at a time that would fit within the 8, 4-color list.

The PPU and CPU are on different address spaces, but they still communicate with each other. The CPU communicates to the PPU by reading from and writing to it''s available registers on addresses `$2000-$2007` while the PPU can issue Non-Maskable Interrupts (NMIs) to the CPU during end-of-scanline (also known as Horizontal Blanking or HBlank) and VBlank periods. When these interrupts are called, the CPU jumps to the NMI Vector address at `$FFFA` and begins executing instructions before returning where it left off. This is what allows the CPU to perform updates during VBlank.

While the PPU could address four Name Tables, it only had internal memory for two of them unless a mapper provided additional memory for this. This meant that Name Tables had to be *mirrored*. There were several mirroring modes depending on the Mapper:

- Vertical
- Horizontal
- Single Screen
- Four Screen (Mapper had to support this)

See [here](https://wiki.nesdev.com/w/index.php/Mirroring) for examples of each mirroring type.

#### APU

The **Audio Processing Unit** handles all the music and noise production. It contains five channels which is then mixes together to create the classic 8-bit sound we all know and love:

- Two [Pulse](http://wiki.nesdev.com/w/index.php/APU_Pulse) (or Square wave) generators
- A [Triangle](http://wiki.nesdev.com/w/index.php/APU_Triangle) generator
- A [Noise](http://wiki.nesdev.com/w/index.php/APU_Noise) generator
- A [Delta Modulation Channel (DMC)](http://wiki.nesdev.com/w/index.php/APU_DMC) for playing Digital Pulse Code Modulation (DPCM) samples

Each channel is driven by a variable rate clock using a Frame Counter. The output of each channel is then combined and sent to the Digital-Analog-Converter of the NES.

Implementing this was fairly fun and while the clock timing is a bit hard to understand, the logic is not. During testing I added the ability to toggle various channels on or off and it was a real joy to see how each channel sounded in isolation and what it added to the overall effect when combined.

#### Mappers

The [Mappers](http://wiki.nesdev.com/w/index.php/Mapper) are arguable the single-most important component of the NES and what helped extend the lifetime and longevity of the NES way beyond what the initial hardware was capable of. By having each cartridge provide additional circuitry and hardware, games were able to add features and capabilities without requiring upgrades to the NES console. Nowadays with everything being either digital or on discs, consoles are limited to their original hardware.

Some functionalities Mappers provided:

- PRG-ROM/CHR-ROM Bank Switching (often)
- PRG-RAM/CHR-RAM that was sometimes battery backed (often)
- Name Table Mirroring (always)
- CPU Interrupt Requests (IRQs) (commonly)
- Additional Sound Generation (rarely)
- PPU Attribute alterations (rarely)
- Additional PPU Name Tables (rarely)
- Utilities (like fast multiplication) (rarely)

The boards that came out with the initial  NES release were very basic. NROM was the first board created and was labeled as Mapper 0 (Super Mario Bros used NROM). It had either 16KB or 32KB of PRG-ROM and 8KB of CHR-ROM with no bank switching. Each game had a hard-wired Vertical or Horizontal mirroring. While there are hundreds of unique mappers, only 8 comprise roughly 85% of all NES titles published. Most of the other 15% are games released only in Japan so I have not spent much time implementing any other mappers.

#### Interrupts

As with any computing system that has components that need to interoperate, the NES had the ability to interrupt the CPU and request that it do some work. All of the major components could issue interrupts to the CPU. The APU and Mappers could issue regular IRQ interrupts and the PPU would issue NMIs which meant that the CPU could not ignore them.

One of the most difficult things in emulating the NES was getting the interrupts and their timing right. Without this, nothing works correctly. This is because game designers knew **exactly** how fast the NES would run and many games are very specific about the timing of events in order for their logic to happen correctly.

### Development

The biggest hurdle with development early on was coming up with a workable architecture that allows the application to emulate mutable memory and address bus behavior. This was tough in Rust. I had to simultaneously learn how the NES hardware operated while trying to digest Rust''s typing and borrow rules. I was unable to reference any of the C or C++ emulator implementations for assistance because most, if not all, of them use pointers (especially circular pointers) to handle this issue. Eventually, I settled on all of the major components (The APU, PPU, WRAM, and Mapper) going inside of a Bus struct that implements a Memory trait which has read/write methods. The CPU needs access to all of those components so it contains the Bus. The Nes struct holds onto the CPU and is responsible for clocking everything. The Mapper was the next big hurdle because there are multiple types of mappers that aren''t known until the game cartridge is read at run time. I decided to wrap that into a Rc + RefCell so that I could share it among the APU, PPU, and CPU. The Nes also needed a copy since it handles reading/writing Save Ram (SRAM) for loading/saving game state.

### Relating to Rust

#### Integers

Gotcha - during development, frame rates were so slow with the default development build, so I was instead using `--release`. It turns out that integer overflow checking is disabled by default during release builds. DOH! Many a bug to be had early on. I had to update the opt-level to 2 for development builds to speed things up and still keep those checks.

#### Ownership

Rust made sharing data across components very difficult. I spent many hours early on fighting with the compiler and eventually was able to come up with a design using Reference Counted objects as a way to share data safely.

#### Matching

Matching in Rust is such a joy to use and made the Bus module very clean since it allowed a straight forward way to encode the memory mapping outlined above:

    fn read(&mut self, addr: u16) -> u8 {
        let val = match addr {
            0x0000..=0x1FFF => { .. } // Read wram
            0x2000..=0x3FFF => { .. } // Read PPU
            0x4000..=0x4015 => { .. } // Read APU
            0x4016..=0x4017 => { .. } // Read Input
            0x4018..=0x401F => { .. } // Read APU/ I/O
            0x4020..=0xFFFF => { .. } // Read Cartridge Space
        };
        val
    }

There were some performance concerns with this, however, and while I''m not finished researching it, at present, I currently have the match arms sorted by what seem to be most commonly called. This is because the believe is that depending on how the compiler optimizes this, it''s linearly searching down the match statements until it finds the correct arm. For such a short list like above, this may not be a concern but for the CPU opcode list which is 256 instructions long, it may be a substantial performance bottleneck. The reason I''m not finished researching is because it''s unknown whether the compiler converts this to a simple jump table or not, in which case the order would not affect the lookup time.

#### Performance

I believe there''s still a lot to be gained from performance increases. I''ve done several benchmarks on my laptop and there don''t seem to be any obvious bottlenecks, and while I can get a fairly consistent 60 FPS on my several-year-old laptop, it''s still not quite as fast as some of the C emulators out there. Specifically, I believe there could be some great dynamic programming or memoization techniques I could use to speed things up and I''m sure as Rust evolves, it''s optimizations for certain target platforms will improve (I''m most interested in arm7 improvements).

#### Testing & Debugging

[Testing](https://wiki.nesdev.com/w/index.php/Emulator_tests) and debugging were paramount in getting a handle on the complexity of this project, especially when it came to subtle bugs or obscure behavior. I implemented the CPU first and the [nestest](http://www.qmtpro.com/~nes/misc/nestest.txt) was crucial in determining if my CPU instructions were executing correctly.

From there, I started building the PPU and relied extensively on other emulators debug features in order to compare to my own. I went so far as to build in my own debugging suite of tools and a whole drawing engine to render them with. Without these, I would have spent many more hours and may have gone insane.

<img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/nametable_viewer.png" width="350" style="padding: 2px">
<img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/ppu_viewer.png" width="350" style="padding: 2px">
<img src="https://raw.githubusercontent.com/lukexor/rustynes/master/static/debugger.png" width="704" style="padding: 2px">

### Conclusion

This was a fantastic project and I learned so much. While I''m not actively working on this anymore, I do plan to continue tinkering with it and extending it over the years to come. There is much to be done and many feature improvements I''d like to add.

<div class="photo-credit" markdown="1">

photo credit: [Nintendo Entertainment System with controller][] via [Evan-Amos][] [Public Domain][]

</div>

[Part 1]: /articles/2019/09/rustynes_part_1/

[Nintendo Entertainment System with controller]: https://en.wikipedia.org/wiki/Nintendo_Entertainment_System#/media/File:NES-Console-Set.jpg
[Evan-Amos]: https://commons.wikimedia.org/wiki/User:Evan-Amos
[Public Domain]: https://en.wikipedia.org/wiki/en:public_domain
[NTSC]: https://en.wikipedia.org/wiki/NTSC
[PAL]: https://en.wikipedia.org/wiki/PAL
[Dendy]: https://en.wikipedia.org/wiki/Dendy_(console)
[Addressing Modes]: https://wiki.nesdev.com/w/index.php/CPU_addressing_modes',
        9, /* Software Development */
        1, /* Author */
        43, /* Minutes */
        '2020-01-31 21:19:14',
        '2019-09-19 07:11:06',
        '2019-09-19 07:12:00'
    )
;

INSERT INTO post_tag (
    post_id,
    tag_id
) VALUES
    (2, 8), /* Lost & Found - Series */
    (3, 8), /* Lost & Found 1 - Series */
    (4, 8), /* Lost & Found 2 - Series */
    (5, 8), /* Lost & Found 3 - Series */
    (6, 8), /* Lost & Found 4 - Series */
    (7, 8), /* Lost & Found 5 - Series */
    (9, 3), /* NES 1 - Games */
    (9, 4), /* NES 1 - NES */
    (9, 12), /* NES 1 - Rust */
    (10, 3), /* NES 2 - Games */
    (10, 4), /* NES 2 - NES */
    (10, 12) /* NES 2 - Rust */
;
