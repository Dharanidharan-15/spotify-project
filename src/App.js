import Layout from "./layout/layout";
import Homepage from "./pages/homepage/homepage";
import "./stylesheets/color-string-constants.scss";

function App() {
  return (
    <div className="App">
    <Layout>
        <Homepage />
    </Layout>
      </div>
  );
}

export default App;
