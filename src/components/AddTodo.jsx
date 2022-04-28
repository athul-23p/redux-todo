import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Space } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../Redux/actions";

function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ width: "100%" }}
    >
      <Col span={18}>
        <Input placeholder="add todo .." onChange={handleChange} />
      </Col>
      <Col span={2}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="middle"
          onClick={() => {
            if (text === "") return;
            dispatch(addTodo(text));
          }}
        />
      </Col>
    </Row>
  );
}

export default AddTodo;
