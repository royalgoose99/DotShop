import { Container, createMuiTheme, CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import '../layout/Styles.css'
import { ThemeProvider } from "@mui/system";
import { useState } from "react";

// react function that returns jsx/tsx

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createMuiTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#EAEAEA' : '#121212'
      }
    }
  });

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
 
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* The margin in all browsers is removed. */}
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;