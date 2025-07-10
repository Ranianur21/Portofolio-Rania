import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/icon_logo.jpeg";

// IMPORT IKON SVG SEBAGAI GAMBAR
import IgIcon from "../../images/icon_ig.svg";
import LinkedinIcon from "../../images/icon_linkedin.svg";
import GithubIcon from "../../images/icon_github.svg";
import WaIcon from "../../images/icon_wa.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block hover:text-gray-500 transition duration-300 mx-4`}
  img {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;

export default function Footer() {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} alt="Rania Logo" />
            <LogoText>Rania</LogoText>
          </LogoContainer>

          <LinksContainer>
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#project">Projects</Link>
            <Link href="#organization">Experience</Link>
            <Link href="#contact">Contact</Link>
          </LinksContainer>

          <SocialLinksContainer>
            <SocialLink
              href="https://wa.me/6285161962199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WaIcon} alt="WhatsApp" />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/rniaarn_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IgIcon} alt="Instagram" />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/rania-nurbaity-b8870b226"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </SocialLink>
            <SocialLink
              href="https://github.com/Ranianur21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" />
            </SocialLink>
          </SocialLinksContainer>

          <CopyrightText>
            &copy; 2025, Rania Nurbaity. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
}
