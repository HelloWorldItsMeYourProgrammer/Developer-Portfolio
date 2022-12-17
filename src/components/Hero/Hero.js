import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Personal Portfolio Of <br />
          Karolis Šidlauskas
        </SectionTitle>
        <SectionText>
          I’m a software developer with the MERN Full-Stack development knowledge. Althought I specialise in MongoDB, Express.js, React.js, Node.js
          tools, I'm always keen to learn new ways of software building.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
