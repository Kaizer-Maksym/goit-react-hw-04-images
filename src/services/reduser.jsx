export default function reducer(state, action) {
  const { page, loading, pictures } = state;
  const { payload } = action;

  switch (action.type) {
    case 'fetch':
      return { ...state, pictures: [...pictures, payload] };
    case 'reset':
      return { ...state, pictures: [] };
    case 'query':
      return { ...state, query: payload };
    case 'increment':
      return { ...state, page: page + payload };
    case 'loading':
      return { ...state, loading: !loading };
    case 'largImg':
      return { ...state, largImg: payload };
    case 'tags':
      return { ...state, tags: payload };

    default:
      return state;
  }
}
