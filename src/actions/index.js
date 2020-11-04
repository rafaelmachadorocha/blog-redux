// TODO: add and export your own actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

export function fetchPosts() {
  const url = 'http://reduxblog.herokuapp.com/api/posts?key=rafu-blog';
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const url = `http://reduxblog.herokuapp.com/api/posts/${id}?key=rafu-blog`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  };
}


export function createPost(body, callback) {
  const url = 'http://reduxblog.herokuapp.com/api/posts?key=rafu-blog'
  const promise = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json()).then(callback);
  return {
    type: POST_CREATED,
    payload: promise
  };
}
