import React from "react";
import { Switch, Route } from "react-router-dom";
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
import "./Portfolio.css";

const siteLinks = [
  { path: "/blog", label: "Blog", Component: Blog },
  { path: "/projects", label: "Projects", Component: Projects },
  { path: "/about", label: "About", Component: About },
  { path: "/contact", label: "Contact", Component: Contact },
];

const socialLinks = [
  { path: "https://linkedin.com/in/lucaspetherbridge", label: "LinkedIn" },
  { path: "https://github.com/lukexor", label: "GitHub" },
];

const Main = () => {
  document.body.classList.add("portfolio");
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {siteLinks.map(({ path, Component, props }) => (
            <Route key={path} path={path}>
              <Component {...props} />
            </Route>
          ))}
          404 Fall-through
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

export default Main;
