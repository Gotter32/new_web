import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
// import Lablist from "./components/LabsList";
import ThemeProvider from "./providers/ThemeProvider";
// import ThemeChange from "./providers/ThemeProviderMUI";



function App() {
  return (
    <>
      <div>
        {/* <ThemeChange> */}
        <ThemeProvider>
          <Header />
          <div className="main_page">
            {/* <Lablist /> */}
            <Content />
          </div>
          <Footer />
        </ThemeProvider>

        {/* </ThemeChange> */}
      </div>
    </>
  );
}

export default App;