export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("ACTION TYPE", action.type);
  console.log("STATE AVANT: ", store.getState());
  console.log("ACTION", action);

  const result = next(action);

  // à partir d'ici c'est l'état après que le reducer ait traité l'action
  console.log("STATE APRÈS", store.getState());

  return result;
  //curryfiée
};
