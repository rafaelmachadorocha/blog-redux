// TODO: add and export your own actions
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const url = 'http://reduxblog.herokuapp.com/api/posts?key=rafu-blog';
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  };
}
