import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarPage from "./pages/CalendarPage";

function App() {
  
  return (
    <>
      <header>
        <h1>Leons app</h1>
      </header>
      <main>
        <CalendarPage />
      </main>
    </>
  );
}

export default App;
