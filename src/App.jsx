import "./App.css";
import { Button, Layout } from "antd";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Content, Header } from "antd/lib/layout/layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{backgroundColor:"white"}}>
          <h1>Todo App</h1>
        </Header>
        <Content>
          <Todos />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
