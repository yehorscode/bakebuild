import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/pages/Layout/Layout";
import Home from "@/pages/Home/Home";
import { TooltipProvider } from "@/components/ui/tooltip";
export function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
