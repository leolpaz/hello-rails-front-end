import axios from "axios";

const GET_GREETINGS = 'hello-rails/GET-GREETINGS'

const initialState = []

export const fetchData = () => async (dispatch) => {
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  const response = await axios.get('http://localhost:3000/api/greetings')
  const { data } = response
  const payload = data.text
  dispatch({
    type: GET_GREETINGS,
    payload,
  })
}

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS: 
      return [...state, action.payload]
    default:
      return state
  }
}

export default greetingsReducer
