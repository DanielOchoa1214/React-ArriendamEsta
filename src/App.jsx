import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import '@fontsource-variable/raleway'
import "./App.css"
import Loader from "./components/Loader/Loader";
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/loginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const PublicationDetailsPage = lazy(() => import("./pages/PublicationDetailsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));



function App() {

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
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/login" replace/>}/>
            <Route path="/login" element={
              <Suspense fallback={<Loader/>}>
                <LoginPage/>
              </Suspense>
            }/>
            <Route path="/register" element={
              <Suspense fallback={<Loader/>}>
                <RegisterPage/>
              </Suspense>
            }/>
            <Route path="/search" element={
              <Suspense fallback={<Loader/>}>
                <SearchPage/>
              </Suspense>
            }/>
            <Route path="/profile" element={
              <Suspense fallback={<Loader/>}>
                <ProfilePage/>
              </Suspense>
            }/>
            <Route path="/publication/:id" element={
              <Suspense fallback={<Loader/>}>
                <PublicationDetailsPage/>
              </Suspense>
            }/>
          </Routes>
        </BrowserRouter>

      </ChakraProvider>
    </>
  )
}

export default App
