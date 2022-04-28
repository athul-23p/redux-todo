import { Col, Row } from "antd";

function TodoItem({ todo }) {
  return (
    <Row gutter={[12,0]} style={{textAlign:"center",border:"1px solid lightgrey",margin:"5px",borderRadius:"2px"}}>
      <Col span={24}>{todo.title}</Col>
    </Row>
  );
}

export default TodoItem;
