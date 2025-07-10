import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "twin.macro";
import styled from "styled-components";

import { SectionHeading } from "components/misc/Headings.js";

import imgSades from "../../images/img_sades.png";
import imgHcampus from "../../images/img_hcampus.png";
import imgAdoptme from "../../images/img_adoptme.png";

// Styled Components
const Container = tw.div`relative py-20`; // background abu dihapus
const Wrapper = tw.div`w-full px-4`; // hilangkan max-width
const Heading = tw(SectionHeading)`w-full text-center`;

const CardWrapper = tw.div`flex justify-center mt-8`;
const Card = styled.div`
  ${tw`flex flex-col md:flex-row w-full md:w-[800px] bg-white px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]`}
`;

const ImageSection = tw.div`md:w-1/2 w-full flex-shrink-0`;
const Image = tw.img`w-full h-64 object-cover rounded-md`;
const Content = tw.div`md:w-1/2 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center text-center md:text-left`;

const Title = tw.h3`text-2xl font-bold text-primary-500`;
const Meta = tw.p`text-sm font-medium text-gray-500 mt-2`;
const Description = tw.p`text-sm font-medium text-gray-600 mt-4 leading-relaxed`;


const projects = [
  {
    title: "AdoptMe",
    year: "2025",
    type: "Tim",
    description:
      "AdoptMe is a web-based platform that simplifies the pet adoption process by efficiently, transparently, and systematically connecting potential adopters with pet owners. It is designed to offer a user-friendly yet informative experience in exploring pets available for adoption.",
    image: imgAdoptme,
  },
  {
    title: "Healthy Campus",
    year: "2025",
    type: "Tim",
    description:
      "Healthy Campus is a Flutter-based mobile application that helps students monitor healthy habits such as water intake, sleep, and physical activity, while providing daily reminders and educational content on physical health.",
    image: imgHcampus,
  },
  {
    title: "SaDes (Sarana Desa)",
    year: "2024",
    type: "Tim",
    description:
      "SaDes (Sarana Desa) is a conceptual design of an E-Marketplace platform aimed at supporting local product sales and boosting village economic growth through e-commerce. This project focuses solely on the application design, with the goal of enhancing accessibility, product quality, and collaboration among MSMEs and rural communities within a digital ecosystem.",
    image: imgSades,
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container>
      <Wrapper>
        <Heading>
          My <span tw="text-primary-500">Projects</span>
        </Heading>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <CardWrapper key={index}>
              <Card>
                <ImageSection>
                  <Image src={project.image} alt={project.title} />
                </ImageSection>
                <Content>
                  <Title>{project.title}</Title>
                  <Meta>
                    {project.year} — {project.type}
                  </Meta>
                  <Description>{project.description}</Description>
                </Content>
              </Card>
            </CardWrapper>
          ))}
        </Slider>
      </Wrapper>

      {/* Custom Style */}
      <style>{`
        .slick-slider,
        .slick-list,
        .slick-track {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .slick-slide {
          display: flex !important;
          justify-content: center;
        }

        .slick-dots {
          bottom: -35px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: #7c3aed;
        }

        .slick-dots li.slick-active button:before {
          color: #6d28d9;
        }
      `}</style>
    </Container>
  );
}
