import { Loader2 } from "lucide-react";
import { PropsWithChildren, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    <Suspense fallback={<Loader2 className="animate-spin" size={30} />}>
      {children}
    </Suspense>
  </BrowserRouter>
);
