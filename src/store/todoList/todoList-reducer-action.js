let initialState = [];

export function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'addItem':
      return [...state, action.payload];
    case 'deleteItem': 
      return state.filter(item => item._id !== action.payload);
    case 'toggleComplete':
      return state.map(item => item._id === action.payload ? { ...item, complete: !item.complete, } : item);
    default:
      return state;
  }
}

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

actions.loadtodoList = () => {
  return dispatch => {
    fetch(todoAPI)
    .then(results => results.json())
    .then(body => {
      dispatch(actions.get(body.results));
    });
  }
}

actions.remoteAPI = (id, record) => {
  return dispatch => {
    fetch(`${todoAPI}/${id}`, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
    then(res => res.json())
      .then(body => {
        console.log(body);
        dispatch(actions.put(id, body))
      });
  };
};


actions.addItem = (item) => ({
  type: 'addItem',
  payload: item,
});

actions.deleteItem = (id) => ({
  type: 'deleteItem',
  payload: {id},
});


actions.toggleComplete = (id) => ({
  type: 'toggleComplete',
  payload: { id...item, complete: !item.complete, }
});
