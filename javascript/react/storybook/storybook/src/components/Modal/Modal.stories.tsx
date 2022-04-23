import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

const Sample: React.FC = () => {
  const [show, setShow] = useState(false);
  const content = <h2>コンテンツ</h2>;

  return (
    <div>
      <button onClick={() => setShow(true)}>クリック</button>
      <Modal show={show} setShow={setShow} content={content} />
    </div>
  );
};

export const sample = () => <Sample />;
