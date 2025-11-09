import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, data: payload };
    case "ERR":
      return { ...state, error: payload };
    case "isloading":
      return { ...state, isLoading: !state.isloading };
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "isloading" });
    axios
      .get(url)
      .then((res) => dispatch({ type: "ADD", payload: res.data.products }))
      .catch((err) => dispatch({ type: "ERR", payload: err }))
      .finally(() => {
        dispatch({ type: "isLoading" });
      });
  }, [url]);
  return { ...state };
};

export default useFetch;
