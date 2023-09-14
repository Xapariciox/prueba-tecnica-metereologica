import { useEffect } from "react";
import { getData } from "./services/data-meteorological";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  useEffect(() => {
    // getData();
    // console.log("hola");
  }, []);

  return <AppRouter />;
};

export default App;
