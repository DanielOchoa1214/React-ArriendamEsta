import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import '@fontsource-variable/raleway'
import "./App.css"
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
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
              <Suspense fallback="Cargando...">
                <LoginPage/>
              </Suspense>
            }/>
            <Route path="/register" element={
              <Suspense fallback="Cargando...">
                <RegisterPage/>
              </Suspense>
            }/>
            <Route path="/search" element={
              <Suspense fallback="Cargando...">
                <SearchPage/>
              </Suspense>
            }/>
            <Route path="/profile" element={
              <Suspense fallback="Cargando...">
                <ProfilePage/>
              </Suspense>
            }/>
            <Route path="/publication/:id" element={
              <Suspense fallback="Cargando...">
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
