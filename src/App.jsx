import { Home } from "./pages/Home";
import { AddPage } from "./pages/AddPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from "./utils/network";

import React, { useEffect, useState } from "react";

function App() {
    const [authUser, setAuthUser] = useState(null);

    const onLoginSuccess = async ({ accessToken }) => {
        console.log(accessToken, "onLoginSuccess");
        putAccessToken(accessToken);
        const { error, data } = await getUserLogged();
        if (!error) {
            setAuthUser(data);
        } else setAuthUser(null);
    };

    const onLogout = () => {
        setAuthUser(null);
        putAccessToken("");
    };

    useEffect(() => {
        const fetchData = async () => {
            const { error, data } = await getUserLogged();
            if (!error) {
                setAuthUser(data);
            } else setAuthUser(null);
        };
        fetchData();
    }, []);

    return (
        <div className="font-poppins">
            <header>
                {authUser &&
                    <Navbar authUser={authUser} logout={onLogout} />}
            </header>
            <main>
                <Routes>
                    {
                        authUser === null ? (
                            <>
                                <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
                                <Route path='/register' element={<RegisterPage />} />
                            </>
                        ) : (
                            <>
                                <Route path='/' element={<Home />} />
                                <Route path='/add' element={<AddPage />} />
                            </>
                        )}

                </Routes>
            </main>
        </div>
    );
}



export default App;