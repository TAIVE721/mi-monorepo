import { useReducer } from "react";
import "./App.css";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { NavReducer } from "../reducers/NavReducer.js";
import { S_Elements } from "../components/S_Elements.jsx";
import { Calculate } from "../components/Calculate.jsx";
import { S_Categories } from "../components/S_Categories.jsx";
import { Categories_Provider } from "../contexts/C_context.jsx";
import { Elements_Provider } from "../contexts/E_context.jsx";

function App() {
  const [state, dispatch] = useReducer(NavReducer, {
    calculate: true,
  });

  function calculate() {
    dispatch("calculate");
  }

  function categories() {
    dispatch("categories");
  }

  function elements() {
    dispatch("elements");
  }

  return (
    <>
      <Header
        calculate={calculate}
        categories={categories}
        elements={elements}
      ></Header>

      <main>
        <Categories_Provider>
          <Elements_Provider>
            {state.calculate && <Calculate></Calculate>}
            {state.elements && <S_Elements></S_Elements>}
            {state.categories && <S_Categories></S_Categories>}
          </Elements_Provider>
        </Categories_Provider>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
