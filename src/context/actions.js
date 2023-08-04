import axios from "axios";
import { GET_ALL_BOOKS, GET_ALL_USERS } from "./types";

export const getAllBooks = () => {
  return async function (dispatch) {
    try {
      // console.log("GET_ALL_BOOKS*********************");
      const response = await axios.post("http://localhost:8000/getBooks");
      console.log("response==>" + response);
      return dispatch({
        type: GET_ALL_BOOKS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error--" + error);
      throw Error(error.message);
    }
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      // console.log("GET_ALL_BOOKS*********************");
      const response = await axios.post("http://localhost:8000/findUser");
      console.log("response==>" + response);
      return dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error--" + error);
      throw Error(error.message);
    }
  };
};
