import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface Props {
  onclick: () => void;
}
const Like = ({ onclick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggles = () => {
    setStatus(!status);
    onclick();
  };
  if (status) return <AiFillHeart color="ff6b81" size={20} onClick={toggles} />;
  return <AiOutlineHeart size={20} onClick={toggles} />;
};

export default Like;
