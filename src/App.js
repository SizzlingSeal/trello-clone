import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ModalContextProvider from "./contexts/ModalContext";
import TimeContextProvider from "./contexts/Time";
import DataContextProvider from './contexts/DataContext';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
      <ModalContextProvider>
      <TimeContextProvider>
      <Header/>
      <MainContainer/>
      </TimeContextProvider>
      </ModalContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
