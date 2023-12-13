import { Home } from "./pages/Home";
import { AddPage } from "./pages/AddPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from "./utils/network";
import { Navigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

const App = () => {
    const [authUser, setAuthUser] = useState(null);

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        try {
            const { error, data } = await getUserLogged();
            if (!error) {
                setAuthUser(data);
            } else {
                console.error("Error fetching user data after login:", error);
                setAuthUser(null);
            }
        } catch (error) {
            console.error("An unexpected error occurred while fetching user data after login:", error);
            setAuthUser(null);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { error, data } = await getUserLogged();
                if (!error) {
                    setAuthUser(data);
                } else {
                    console.error("Error fetching user data:", error);
                    setAuthUser(null);
                }
            } catch (error) {
                console.error("An unexpected error occurred while fetching user data:", error);
                setAuthUser(null);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="font-poppins">

            <Routes>
                {authUser === null ? (
                    <>
                        <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/add" element={<AddPage />} />
                    </>
                ) : (
                    <>
                    </>
                )}
            </Routes>

        </div>
    );
};



export default App;