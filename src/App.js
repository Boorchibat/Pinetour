import { Header } from "./components";
import { Hero } from "./components/hero";
import { Destination } from "./components/destination";
import { Pricing } from "./components/pricing";
import { ReadyComponent } from "./components/ready";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Destination />
      <Pricing />
      <ReadyComponent />
      <Footer />
      
  
    </div>
  );
};
