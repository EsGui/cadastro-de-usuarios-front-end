import RegisterUserPage from "./Pages/RegisterUserPage";
import './App.css'
import Logic from "./Context/Logic";

function App() {
  return (
    <div>
      <Logic>
        <RegisterUserPage />
      </Logic>
    </div>
  );
}

export default App;
