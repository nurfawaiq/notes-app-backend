const routes = (handler) => [
    {
        method: 'POST',
        path: '/notes',
        handler: handler.postNoteHandler, // postNoteHandler hanya menerima dan menyimpan "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getNotesHandler, // getNotesHandler mengembalikan "banyak" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler, // getNoteByIdHandler mengembalikan "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.putNoteByIdHandler, // putNoteByIdHandler hanya menerima dan mengubah "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler,
        options: {
            auth: 'notesapp_jwt',
        },
    },
];

module.exports = routes;