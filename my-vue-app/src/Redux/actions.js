import axios from "axios";
export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";



export function getUsers() {
  return async function (dispatch) {
    const apiData = await axios.get("https://api-gamertech.onrender.com/users");
    const users = apiData.data;
    dispatch({
      type: GET_USERS,
      payload: users,
    });
  };
};

export function createUser(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-gamertech.onrender.com/users",
        payload
      );
      dispatch({
        type: CREATE_USER,
        payload: json.data.user,
      });
    } catch (error) {
      console.log(error.message);
    }
  }};
 









