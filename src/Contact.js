import { useState } from "react";

const Contact = () => {
  const [sdt, setSdt] = useState("9340930413413");
  const [gmail, setGmail] = useState("nq7xq@example.com");

  return (
    <div className="contact">
      <h1>Liên hệ</h1>
      <div>
        <p>Số điện thoại: {sdt}</p>
        <p>Gmail: {gmail}</p>
      </div>
    </div>
  );
};

export default Contact;
