import Layout from "./layout/layout";
// import Homepage from "./pages/homepage/homepage";
import Searchpage from "./pages/searchpage/searchpage";
import "./stylesheets/color-string-constants.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Homepage /> */}
        <Searchpage />
      </Layout>
    </div>
  );
}

export default App;
