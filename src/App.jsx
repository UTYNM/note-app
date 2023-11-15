import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
    return (
        <div className="font-poppins">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
