import Routing from "./Routers/Routing";
import Layout from "./layout/layout";
import "./stylesheets/color-string-constants.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
}

export default App;
