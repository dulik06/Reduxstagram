// increment
function increment(index) {
  type: 'INCREMENT_LIKES',
  index
}

// add comments
function addComment(postId, author, comment) {
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
}

// remove comments
function removeComment(postId, i) {
  type: 'REMOVE_COMMENT',
  postId,
  i
}
