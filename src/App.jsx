import "/public/css/style.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import ModalProvider from "./context/ModalProvider";
import ProductsProvider from "./context/ProductsProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ProductsProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ProductsProvider>

      <Toaster
        toastOptions={{ style: { color: "#fff", borderRadius: "2rem" } }}
      />
    </>
  );
}

export default App;
