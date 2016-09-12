export default function({ dispatch }) {
  return next => action => {
    /* action does contain promise */
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    action
    .payload
    .then(function(res){
      /* replace action with new payload instead of just action */
      const newAction = { ...action, payload: res };
      dispatch(newAction);
    })
  }
}
