import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <br/>
      {/* map url paths */}
      <Route path="/" exact component={Home} />
      <Route path="/exercises" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
