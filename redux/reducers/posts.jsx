const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          subtitle: action.text,
          meta: action.meta,
          content: action.content
        }
      ]
    default:
      return state
  }
}
 
export default posts