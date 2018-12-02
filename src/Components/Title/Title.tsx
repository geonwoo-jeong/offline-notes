import PropTypes from "prop-types";
import React, { SFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  title: string;
  link: string;
  button: any;
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  margin-left: 10px;
  transform: scale(0.8);
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const TitleContainer: SFC<IProps> = ({ title, link, button }) => (
  <>
    <Header>
      <Title>{title}</Title>
      <Link to={link}>
        <Button>{button}</Button>
      </Link>
    </Header>
  </>
);

TitleContainer.propTypes = {
  button: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TitleContainer;
