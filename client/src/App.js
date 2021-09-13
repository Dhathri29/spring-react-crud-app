import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <div className="container">
                    <switch>
                        <Route path="/" exact component={ListEmployee} />
                        <Route path="/employees" component={ListEmployee} />
                        <Route path="/add/:id" component={AddEmployee} />
                    </switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
