import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings.js";
import { ReactComponent as ArrowLeftIcon } from "feather-icons/dist/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "feather-icons/dist/icons/arrow-right.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";

// IMPORT GAMBAR
import Sekre1Img from "../../images/img_sekre1.png";
import SekreLitbangImg from "../../images/img_sekrelitbang.png";
import AksiPKMImg from "../../images/img_aksipkm.png";
import UkmpkImg from "../../images/img_ukmpk.png";

const Container = tw.div`relative py-20`;
const TwoColumn = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch gap-10 mt-24`;
const LeftColumn = tw.div`lg:w-1/2 flex flex-col justify-between min-h-[550px]`;
const RightColumn = tw.div`lg:w-1/2 relative flex justify-center`;

const Image = styled.img`
  ${tw`rounded-lg object-cover w-full max-w-md`}
  max-height: 450px;
  height: auto;
`;

const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-base sm:text-lg lg:text-xl font-medium mt-4 text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-purple-700 mt-6 flex items-center gap-2`;
const Org = tw.p`text-lg text-gray-500 mt-2`;
const Subheading = tw.p`text-sm text-purple-600 font-semibold mb-2 uppercase tracking-wide`;

const ControlsWrapper = tw.div`flex justify-start mt-6 gap-3`;
const NavButton = styled.button`
  ${tw`flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 focus:outline-none`}
  font-size: 0.875rem;
`;

const Icon = styled.span`
  ${tw`w-4 h-4`}
  svg {
    width: 100%;
    height: 100%;
  }
`;

const experiences = [
  {
    imageSrc: Sekre1Img,
    subheading: "Administrative Role",
    description:
      "Maintain meeting records, handle official letters, and manage internal administration and inventory.",
    title: "Secretary 1",
    organization: "HIMASIFO UPN Veteran Jawa Timur 2025",
  },
  {
    imageSrc: SekreLitbangImg,
    subheading: "Department Support",
    description:
      "Handled administration, documented meetings, supported program execution, and led assigned activities.",
    title: "Secretary of RnD Department",
    organization: "HIMASIFO UPN Veteran Jawa Timur 2024",
  },
  {
    imageSrc: AksiPKMImg,
    subheading: "Leadership Experience",
    description:
      "Led the planning and execution of a hybrid PKM (Student Creativity Program) training event for new students, attended by over 200 participants. Managed both online seminars and offline final presentations, ensuring smooth technical and logistical operations. Supervised a team of 25+ committee members and coordinated with internal speakers and evaluators.",
    title: "Project Leader AKSI PKM 2024",
    organization: "RnD Department of HIMASIFO UPN Veteran Jawa Timur",
  },
  {
    imageSrc: UkmpkImg,
    subheading: "Technical Operations",
    description:
      "Directed operator teams in two national webinars, ensuring seamless technical execution including slide handling, transitions, and live troubleshooting for 300–500 participants.",
    title: "Head of Operator Division",
    organization: "UKMPK UPN Veteran Jawa Timur",
  },
];

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = experiences[currentIndex];

  return (
    <Container>
      <SectionHeading>Organizational Experience</SectionHeading>
      <TwoColumn>
        <LeftColumn>
          <div>
            {current.subheading && <Subheading>{current.subheading}</Subheading>}
            <Description>{current.description}</Description>
          </div>

          <div>
            <Title>
              <BriefcaseIcon tw="w-5 h-5 text-purple-700" />
              {current.title}
            </Title>
            <Org>{current.organization}</Org>
          </div>

          <ControlsWrapper>
            <NavButton onClick={goToPrevious}>
              <Icon>
                <ArrowLeftIcon />
              </Icon>
              Previous
            </NavButton>
            <NavButton onClick={goToNext}>
              Next
              <Icon>
                <ArrowRightIcon />
              </Icon>
            </NavButton>
          </ControlsWrapper>
        </LeftColumn>

        <RightColumn>
          <Image src={current.imageSrc} alt={current.title} />
        </RightColumn>
      </TwoColumn>
    </Container>
  );
}
