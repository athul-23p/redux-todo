import { Row } from "antd";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
function Todos() {
  const todos = useSelector((store) => store.todos);

  return (
    <div>
      <Row>
        <AddTodo/>
      </Row>
      <div>

      </div>
      {todos.map((todo, index) => {
        //   console.log(t);
        return <TodoItem  todo={{...todo}} key={nanoid(3)}/>
      })}
    </div>
  );
}

export default Todos;
