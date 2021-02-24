import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import searchRepositorys from "../redux/action-creator/index";

const Parent = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const state = useSelector((state) => state);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchRepositorys(term));
  };

  console.log(state);

  return (
    <div>
      <h2>This is Parent</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={(e) => setTerm(e.target.value)} />
        <button>Search Package</button>
      </form>
    </div>
  );
};

export default Parent;

{
  /* <ChildAsFC color="red" onClick={() => console.log("CLicked ")}>
        {" "}
        This is Children
      </ChildAsFC> */
}
