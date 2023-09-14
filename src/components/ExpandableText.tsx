import { useState } from "react";

interface Props {
  childern: string;
  maxChar?: number;
}

const ExpandableText = ({ childern, maxChar = 100 }: Props) => {
  const [Expand, setExpansion] = useState(false);
  const text = childern.substring(maxChar);

  return (
    <div>
      {text}...
      <button
        onClick={() => {
          setExpansion(!Expand);
        }}
      >
        {Expand ? "less" : "more"}
      </button>
    </div>
  );
};

export default ExpandableText;
