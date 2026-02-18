import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import ServiceChiefOfStaff from "./pages/ServiceChiefOfStaff";
import ServiceInnovation from "./pages/ServiceInnovation";
import ServiceAiTransformation from "./pages/ServiceAiTransformation";
import ServiceTrainingTalent from "./pages/ServiceTrainingTalent";
import ServiceExternalGrowth from "./pages/ServiceExternalGrowth";

import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/services"} component={Services} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/partners"} component={Partners} />
        <Route path={"/services/chief-of-staff"} component={ServiceChiefOfStaff} />
        <Route path={"/services/innovation-transformation"} component={ServiceInnovation} />
        <Route path={"/services/ai-transformation"} component={ServiceAiTransformation} />
        <Route path={"/services/training-talent"} component={ServiceTrainingTalent} />
        <Route path={"/services/external-growth-partnerships"} component={ServiceExternalGrowth} />
        <Route path={"/insights"} component={Insights} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
