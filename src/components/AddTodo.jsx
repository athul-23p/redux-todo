import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
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
    <div>
      <Space>
        <Input placeholder="add todo .." onChange={handleChange} />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="small"
          onClick={() => {
            if(text ==="") return;
            dispatch(addTodo({ title: text }));
          }}
        />
      </Space>
    </div>
  );
}

export default AddTodo;
