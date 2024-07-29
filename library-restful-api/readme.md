# Library Restful API

This was written with NodeJS and can be deployed locally but requires installation of mongodb. Follow the instructions below to run it:

```shell
npm run server
```

The available routes are as follows:

`GET /books` returns all available books

`GET /books/:id` returns a particular book with the specified id

`POST /books` creates a book
`Expects {title String, author AuthorID, publicationYear Number, genre String}`

`PUT /books/:id` edits a book id
`Expects same parameters as creating a book along with bookID`

`DELETE /books/:id` delets a book id

`GET /authors` returns all available authors

`GET /authors/:id` returns a particular author with the specified id

`POST /authors` creates an author
`Expects {name String, birthdate Number}`

`PUT /authors/:id` edits an author id
`Expects same parameters as creating an author along with authorID`

`DELETE /authors/:id` delets an author id