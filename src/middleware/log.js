const logMiddleware = ( ) => (next) => (action) => {
    console.log(`Action: ${action.type}, ${action.event}`);
    next(action);
};
export default logMiddleware;