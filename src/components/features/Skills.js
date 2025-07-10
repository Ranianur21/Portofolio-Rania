import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-center`;

const CategoryHeading = tw.h3`text-xl font-bold mt-12 text-primary-500 text-center w-full`;

const ColumnsWrapper = styled.div`
  ${tw`flex flex-col md:flex-row flex-wrap justify-center w-full`}
`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-8`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default function Skills() {
  const cards = {
    "Frontend": [
      {
        imageSrc: "https://cdn.simpleicons.org/html5/E34F26",
        title: "HTML",
        description: "Markup language for creating structured web content."
      },
      {
        imageSrc: "https://cdn.simpleicons.org/css3/1572B6",
        title: "CSS",
        description: "Styling language for responsive design."
      },
      {
        imageSrc: "https://cdn.simpleicons.org/javascript/F7DF1E",
        title: "JavaScript",
        description: "Language for interactive web features."
      },
      {
        imageSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        title: "Tailwind CSS",
        description: "Utility-first CSS framework."
      }
    ],
    "Backend": [
      {
        imageSrc: "https://cdn.simpleicons.org/php/777BB4",
        title: "PHP (basic)",
        description: "Server-side scripting basics."
      },
      {
        imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        title: "Java",
        description: "Object‑oriented programming foundation."
      },
      {
        imageSrc: "https://cdn.simpleicons.org/laravel/FF2D20",
        title: "Laravel (basic)",
        description: "MVC framework with routing & templates."
      }
    ],
    "Tools & Frameworks": [
      {
        imageSrc: "https://cdn.simpleicons.org/git/F05032",
        title: "Git",
        description: "Version control via Git CLI & GitHub."
      },
      {
        imageSrc: "https://cdn.simpleicons.org/vite/646CFF",
        title: "Vite",
        description: "Blazing fast build tool for modern web."
      },
      {
        imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        title: "VS Code",
        description: "Primary code editor with powerful extensions."
      }
    ],
    "Others": [
      {
        imageSrc: "https://cdn.simpleicons.org/mysql/4479A1",
        title: "MySQL",
        description: "Reliable database via phpMyAdmin."
      },
      {
        imageSrc: "https://cdn.simpleicons.org/figma/F24E1E",
        title: "Figma (basic)",
        description: "UI design and prototyping."
      }
    ]
  };

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          My <span tw="text-primary-500">Skills</span>
        </Heading>

        {Object.entries(cards).map(([category, skillList], index) => (
          <React.Fragment key={index}>
            <CategoryHeading>{category}</CategoryHeading>
            <ColumnsWrapper>
              {skillList.map((card, i) => (
                <Column key={i}>
                  <Card>
                    <span className="imageContainer">
                      <img src={card.imageSrc} alt={card.title} />
                    </span>
                    <span className="textContainer">
                      <span className="title">{card.title}</span>
                      <p className="description">{card.description}</p>
                    </span>
                  </Card>
                </Column>
              ))}
            </ColumnsWrapper>
          </React.Fragment>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
}
