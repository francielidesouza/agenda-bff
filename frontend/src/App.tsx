import { ThemeProvider } from "styled-components";
import { AxiosInterceptor } from "./AxiosInterceptor";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const theme = {
    primary: "#2196f3",
    background: "#64b5f6",
    inputBackground: "#bbdefb",
    border: "#d1d1d1",
    textPrimary: "#333333",
    textSecondary: "#666666",
    placeholder: "#999999",
    buttonBackground: "#1565c0",
    buttonText: "#ffffff",
    buttonBackgroundHover: "#1976d2",
    card: "#a5cded",
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AxiosInterceptor>
          <AuthProvider>
            <RoutesMain />
          </AuthProvider>
        </AxiosInterceptor>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};
