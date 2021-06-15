const {
  addBookHandler,
  getAllBooksHandler,
  getDetailOfBook,
  updateBookWithCompleteData,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailOfBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookWithCompleteData,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
