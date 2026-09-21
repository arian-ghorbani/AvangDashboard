import "/public/css/style.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import ModalProvider from "./context/ModalProvider";
import ProductsProvider from "./context/ProductsProvider";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./context/ThemeProvider";
import ServicesProvider from "./context/ServicesProvider";
import UsersProvider from "./context/UsersProvider";
import SearchProvider from "./context/SearchProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <SearchProvider>
          <ProductsProvider>
            <ServicesProvider>
              <UsersProvider>
                <ModalProvider>
                  <RouterProvider router={router} />
                </ModalProvider>
              </UsersProvider>
            </ServicesProvider>
          </ProductsProvider>
        </SearchProvider>
      </ThemeProvider>

      <Toaster
        toastOptions={{ style: { color: "#fff", borderRadius: "2rem" } }}
      />
    </>
  );
}

export default App;
