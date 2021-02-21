import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ModalContextProvider from "./contexts/ModalContext";
import ProjectContextProvider from "./contexts/ProjectContext";
import TimeContextProvider from "./contexts/Time";
import DataContextProvider from './contexts/DataContext';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
      <ModalContextProvider>
      <ProjectContextProvider>
      <TimeContextProvider>
      <Header/>
      <MainContainer/>
      </TimeContextProvider>
      </ProjectContextProvider>
      </ModalContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
