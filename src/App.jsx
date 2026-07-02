import "/public/css/style.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import ModalProvider from "./context/ModalProvider";
import ProductsProvider from "./context/ProductsProvider";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <ProductsProvider>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </ProductsProvider>
      </ThemeProvider>

      <Toaster
        toastOptions={{ style: { color: "#fff", borderRadius: "2rem" } }}
      />
    </>
  );
}

export default App;
