import styled from "styled-components";
import { ThumbnailContainer } from "./lib/ThumbnailContainer";

export const App = () => {
  return (
    <div>
      <div style={{ width: `90%`, margin: "30px auto" }}>
        <header>
          <Notification>
            If you want to see more porn videos in 日本語, you can simply upload
            some and write their title in 日本語! This index is updated every 30
            minutes.
          </Notification>
        </header>
        <div style={{ textAlign: "center" }}>
          {(() => {
            const thumbnails = [];
            for (let i = 0; i < 20; i++) {
              thumbnails.push(
                <Container>
                  <ThumbnailContainer num={i} />
                </Container>
              );
            }
            return <div>{thumbnails}</div>;
          })()}
        </div>
      </div>
    </div>
  );
};

const Container = styled.div`
  display: inline-block;
  margin: 50px 10px;
`;

const Notification = styled.div`
  background: #ccc;
`;
