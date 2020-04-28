import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";



const Input = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const user = prompt('Name');
    setUser(user);
  }, []);
  const [desc, setDesc] = useState("");
  const [ mutation ] = useMutation(WRITE, {
    variables: {
      user,
      desc
    }
  });
  return (
    <div>
      <input
        type="text"
        value={desc}
        placeholder="내용을 입력하세요"
        onChange={e => {
          setDesc(e.target.value);
        }}
        onKeyPress={e => {
          if(e.key === 'Enter') {
            setDesc("");
            mutation();
          }
        }}
      />
      <button
        onClick={() => {
          setDesc("");
          mutation();
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Input;