import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Layout/Home/indx';
import { ThemeProvider } from "@mui/styles";
import generateTheme from './Utils/Generate-theme';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const theme = generateTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;