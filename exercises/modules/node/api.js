const { users, posts: apiPosts } = require("./data");

getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find((user) => user.id === id);
    cb(user);
  }, 150);
};

getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = apiPosts.filter((post) => post.createdBy === userId);
    cb(posts);
  }, 150);
};

module.exports = { getUserById, getPostsForUser };
