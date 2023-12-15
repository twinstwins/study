// コンポーネントとしてではなく、クラスを付与してCSSのスタイルを付与するものとして使う

import React, { useState } from "react";
import "./FormInput.scss";

type Props = {
  variant: string;
};

const FormInput: React.FC<Props> = (props) => {
  const { variant, children, ...rest } = props;

  const [value, setValue] = useState("");

  const onChange = (event: any) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div className="form-1">
      <div>入力値: {value}</div>

      <div className="group">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        ></input>
        <label>Email</label>
      </div>
    </div>
  );
};

export default FormInput;
