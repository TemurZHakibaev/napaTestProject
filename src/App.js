import Header from "./components/Header/Header";
import SponsorsSection from "./components/Main/sponsorsSection/SponsorsSection";
import BisnessSection from "./components/Main/BisnessSection/BisnessSection";
import WorkSection from "./components/Main/WorkSection/WorkSection";
import BlogSetion from "./components/Main/BlocgSection/BlogSetion";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <main>
            <SponsorsSection/>
            <BisnessSection/>
            <WorkSection/>
            <BlogSetion/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
