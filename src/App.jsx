import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from 'react';
import '@fontsource-variable/raleway'
import "./App.css"
import Loader from "./components/Loader/Loader";
import { ArriendamEstaContext } from "./ArriendamEstaContext";
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/loginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const PublicationDetailsPage = lazy(() => import("./pages/PublicationDetailsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));



function App() {

  const defaultContext = useState({id: "65123726c9692445567e5652"});

  const theme = extendTheme({
    colors: {
      brand: {
        // Rosados
        100: "#f986b7",
        200: "#f7559a",
        300: "#f5247d",
        // Negros
        400: "#393939",
        500: "#202020",
        600: "#060606",
      }
    },
    fonts: {
      heading: `'Raleway Variant', sans-serif`,
      body: `'Raleway Variant', sans-serif`,
    },
  })

  return (
    <>
      <ChakraProvider theme={theme}>
        <ArriendamEstaContext.Provider value={defaultContext}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/login" element={
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              } />
              <Route path="/register" element={
                <Suspense fallback={<Loader />}>
                  <RegisterPage />
                </Suspense>
              } />
              <Route path="/search" element={
                <Suspense fallback={<Loader />}>
                  <SearchPage />
                </Suspense>
              } />
              <Route path="/profile" element={
                <Suspense fallback={<Loader />}>
                  <ProfilePage />
                </Suspense>
              } />
              <Route path="/publication/:id" element={
                <Suspense fallback={<Loader />}>
                  <PublicationDetailsPage />
                </Suspense>
              } />
            </Routes>
          </BrowserRouter>
        </ArriendamEstaContext.Provider>

      </ChakraProvider>
    </>
  )
}

export default App
