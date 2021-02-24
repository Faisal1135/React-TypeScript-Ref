import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RepositoryList: React.FC = () => {
  const [term, setterm] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" onChange={(e) => setterm(e.target.value)} />
        <button>Search For Repository</button>
      </form>
    </div>
  );
};

export default RepositoryList;
