import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <div className="container">
                    <switch>
                        <Route path="/" component={ListEmployee}></Route>
                        <Route
                            path="/employees"
                            component={ListEmployee}
                        ></Route>
                    </switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
