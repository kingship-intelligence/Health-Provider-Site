import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Providers from "@/pages/providers";
import ProviderDetail from "@/pages/provider-detail";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";

import Appointments from "@/pages/appointments";
import Insights from "@/pages/insights";
import InsightDetail from "@/pages/insight-detail";
import About from "@/pages/about";
import Insurance from "@/pages/insurance";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/providers" component={Providers} />
        <Route path="/providers/:id" component={ProviderDetail} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug" component={ServiceDetail} />

        <Route path="/appointments" component={Appointments} />
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={InsightDetail} />
        <Route path="/about" component={About} />
        <Route path="/insurance" component={Insurance} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
