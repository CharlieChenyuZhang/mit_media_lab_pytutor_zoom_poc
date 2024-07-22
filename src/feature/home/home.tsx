/* eslint-disable no-restricted-globals */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, Button } from 'antd';
import { IconFont } from '../../component/icon-font';
import './home.scss';
import VideoAttach from '../video/video-attach';
import styled from 'styled-components';
import mitMediaLabLogo from '../../assets/images/mit-media-lab-logo.png';

const { Meta } = Card;
interface HomeProps extends RouteComponentProps {
  status: string;
  onLeaveOrJoinSession: () => void;
}

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-top: 100px;
`;

const Title = styled.h1``;

const SubTitle = styled.p`
  margin: 20px 60px;
`;

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const { history, status, onLeaveOrJoinSession } = props;
  let actionText;
  if (status === 'connected') {
    actionText = 'Disconnect the session';
  } else if (status === 'closed') {
    actionText = 'Connect the session';
  }
  return (
    <div>
      <div className="home">
        <Logo src={mitMediaLabLogo} alt="MIT Media Lab Logo" />
        <Title>Personal Robots: PyTutor PoC</Title>
        <SubTitle>
          <i>PoC with Zoom Video SDK.</i>
        </SubTitle>
        {actionText && (
          <Button type="link" className="navleave" onClick={onLeaveOrJoinSession}>
            {actionText}
          </Button>
        )}
        <VideoAttach />
      </div>
    </div>
  );
};
export default Home;
