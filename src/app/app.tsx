import { RouterProvider, StoreProvider } from "./providers";
import { Routing } from "@pages/index";

function App() {
  return (
    <StoreProvider>
      <RouterProvider>
        <Routing />
      </RouterProvider>
    </StoreProvider>
  );
}

export default App;
