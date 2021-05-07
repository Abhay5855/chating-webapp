import Chat from "./components/Chat";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
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
