import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarPage from "./pages/CalendarPage";
import { Menu } from "./components/styled/Menu.styled"

function App() {
  
  return (
    <>
      <Menu />
      <main>
        <CalendarPage />
      </main>
    </>
  );
}

export default App;
