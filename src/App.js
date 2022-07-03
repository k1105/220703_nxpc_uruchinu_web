import { useState } from "react";
import styled from "styled-components";
import { ThumbnailContainer } from "./lib/ThumbnailContainer";

export const App = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div style={{ width: `90%`, margin: "30px auto" }}>
        <header>
          <Notification>
            If you want to see more porn videos in 日本語, you can simply upload
            some and write their title in 日本語! This index is updated every 30
            minutes.
          </Notification>
          {(() => {
            const items = [];
            for (let i = 0; i < 10; i++) {
              items.push(
                <div
                  style={{
                    background: page === i + 1 ? "#888" : "#fff",
                    display: "inline-block",
                    boxSizing: "border-box",
                    width: "30px",
                    height: "30px",
                    padding: "2px",
                    border: "1px solid #ccc",
                    textAlign: "center",
                    lineHeight: "24px",
                    marginRight: "10px",
                    borderRadius: "3px",
                  }}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </div>
              );
            }
            return (
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                {items}
              </div>
            );
          })()}
        </header>
        <div style={{ textAlign: "center" }}>
          {(() => {
            const thumbnails = [];
            for (let i = 0; i < 20; i++) {
              thumbnails.push(
                <Container>
                  <ThumbnailContainer num={i + (page - 1) * 20 + 1} />
                </Container>
              );
            }
            return <div>{thumbnails}</div>;
          })()}
        </div>
        <footer>
          {(() => {
            const items = [];
            for (let i = 0; i < 10; i++) {
              items.push(
                <div
                  style={{
                    background: page === i + 1 ? "#888" : "#fff",
                    display: "inline-block",
                    boxSizing: "border-box",
                    width: "30px",
                    height: "30px",
                    padding: "2px",
                    border: "1px solid #ccc",
                    textAlign: "center",
                    lineHeight: "24px",
                    marginRight: "10px",
                    borderRadius: "3px",
                  }}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </div>
              );
            }
            return (
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                {items}
              </div>
            );
          })()}
        </footer>
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
