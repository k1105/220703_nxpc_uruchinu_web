import styled from "styled-components";

export const ThumbnailContainer = ({ num }) => {
  return (
    <div>
      <Container>
        <Thumbnail src={`${process.env.PUBLIC_URL}/thumbnail/1.jpg`} />
        <Quality>1080p</Quality>
        <Title>{`汗だく！汁だく！その${num}`}</Title>
        <Information>
          <Uploader>uploader</Uploader>
          <Viewer>2.1M</Viewer>
          <Time>6 min </Time>
        </Information>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  height: 180px;
  width: 320px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Quality = styled.div`
  box-sizing: border-box;
  position: absolute;
  content: "";
  top: 10px;
  right: 10px;
  background: #ff0000;
  color: white;
  padding: 2px;
  border-radius: 2px;
`;

const Title = styled.div`
  text-align: center;
`;

const Information = styled.div`
  text-align: center;
`;

const Viewer = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const Uploader = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const Time = styled.div`
  display: inline-block;
  font-size: 0.7rem;
  background: #999;
  color: white;
  padding: 2px;
  border-radius: 2px;
`;
