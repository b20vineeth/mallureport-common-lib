export const dispatchAction = (callback) => (args) => {
  return function (dispatch, getState) {
      callback({ args, dispatch, getState })
  }
}