import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./portfolio/components/Header";
import SiteNav from "./portfolio/components/SiteNav";
import SocialNav from "./portfolio/components/SocialNav";
import Footer from "./portfolio/components/Footer";
import Home from "./portfolio/pages/Home";
import Blog from "./portfolio/pages/Blog";
import Projects from "./portfolio/pages/Projects";
import About from "./portfolio/pages/About";
import Contact from "./portfolio/pages/Contact";
import NotFound from "./util/NotFound";

interface ILink {
  path: string;
  label: string;
  component?: FunctionComponent<{}>;
}

const siteLinks: ILink[] = [
  { path: "/blog", label: "Blog", component: Blog },
  { path: "/projects", label: "Projects", component: Projects },
  { path: "/about", label: "About", component: About },
  { path: "/contact", label: "Contact", component: Contact },
];

const socialLinks: ILink[] = [
  { path: "https://linkedin.com/in/lucaspetherbridge", label: "LinkedIn" },
  { path: "https://github.com/lukexor", label: "GitHub" },
];

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {siteLinks.map((route) => (
            <Route key={route.path} path={route.path}>
              {React.createElement(route.component!)}
            </Route>
          ))}
          // 404 Fall-through
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <SiteNav links={siteLinks} />
      <SocialNav links={socialLinks} />
      <Footer links={siteLinks} />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    width: 90%;
    color: #333;
    background: #e8ecf0;

    @media screen and (min-width: 700px) {
      background-attachment: fixed;
      background-position: 90% 80%;
    }
  }
  .fadein {
    animation: fadein 2s;
  }
`;

export default Main;
export type { ILink };
