import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-app-polyfill/stable";

import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";

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
                        <Route path="/view/:id" component={ViewEmployee} />
                    </switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
