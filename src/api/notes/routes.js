const routes = (handler) => [
    {
        method: 'POST',
        path: '/notes',
        handler: handler.postNoteHandler, // postNoteHandler hanya menerima dan menyimpan "satu" note.
    },
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getNotesHandler, // getNotesHandler mengembalikan "banyak" note.
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler, // getNoteByIdHandler mengembalikan "satu" note.
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.putNoteByIdHandler, // putNoteByIdHandler hanya menerima dan mengubah "satu" note.
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler,
    },
];

module.exports = routes;