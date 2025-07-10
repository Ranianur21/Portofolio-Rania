import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg`;
const RightColumn = tw.div`w-full max-w-md mt-16 lg:mt-0 lg:ml-16`;

const Heading = styled.h1`
  ${tw`text-4xl sm:text-5xl lg:text-6xl font-black text-gray-100 leading-tight`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`inline-block bg-gray-100 text-primary-500 px-4 py-2 rounded`}
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.a`inline-block px-8 py-3 mt-10 text-sm sm:text-base bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const HeroImage = styled.img`
  ${tw`w-full rounded-lg shadow-xl`}
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#project">Projects</NavLink>
      <NavLink href="#organization">Experience</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="#contact">Hire Me</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Welcome to my portfolio</Notification>
            <Heading>
              <span>Hello, I'm Rania</span>
              <br />
              <SlantedBackground> Undergraduate Information System </SlantedBackground>
            </Heading>
            <PrimaryAction href="#project">See My Projects</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <HeroImage src={require("images/raniaprofil.png")} alt="Rania" />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
