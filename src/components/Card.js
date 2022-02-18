import React from "react";
import Button from "./Button";
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "./styles/ContainerStyled";
import { StyledName } from "./styles/CustomStyle";
import { H1, Image, P, Tag } from "./styles/ElementsStyled";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <H1>React Anime Intro Card</H1>
        <P>
          Hello, I am <StyledName name="Mir Labib Hossain" color="white" /> , a
          Jr. FrontEnd Developer based in Dhaka
        </P>
        <Tag>ReactJS</Tag>
        <Tag>Laravel</Tag>
        <Tag>MySQL</Tag>
        <ButtonContainer>
          <Button
            link="https://www.instagram.com/_mir.labib_"
            text="Instagram"
          />
          <Button
            link="https://github.com/Mir-Labib-Hossain"
            text="Github repo"
          />
        </ButtonContainer>
        <Image
          src="https://freepngimg.com/thumb/anime/26533-9-uchiha-sasuke-transparent-picture-thumb.png"
          alt="Nerd"
          width="300px"
        />
      </ContentContainer>
    </CardContainer>
  );
}
