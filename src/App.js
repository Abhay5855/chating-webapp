import Chat from "./components/Chat";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png"
        alt=""
        style={{ width: "100px", textalign: "center" }}
      />

      <Container>
        <Chat />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
