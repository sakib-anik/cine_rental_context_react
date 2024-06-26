import { useReducer, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
