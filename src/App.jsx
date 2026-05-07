import "/public/css/style.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import ModalProvider from "./context/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}

export default App;
