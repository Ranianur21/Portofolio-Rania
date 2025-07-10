import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/HeroPage.js";
import About from "components/features/AboutPage";
import Skills from "components/features/Skills";
import Projects from "components/cards/Projects";
import ContactUsForm from "components/forms/ContactPage.js";
import Footer from "components/footers/FooterPage.js";
import Organization from "components/testimonials/Organization";

export default () => (
  <AnimationRevealPage>
    <div id="hero">
      <Hero />
    </div>

    <div id="about">
      <About />
    </div>

    <div id="skills">
      <Skills />
    </div>


    <div id="project">
      <Projects />
    </div>

    <div id="organization">
      <Organization />
    </div>

    <div id="contact">
      <ContactUsForm />
    </div>

<Footer />

  </AnimationRevealPage>
);
