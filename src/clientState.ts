import { NOTE_FRAGMENT } from "./fragments";
import { restoreNotes, saveNotes } from "./offline";
import { GET_NOTES } from "./queries";

export const resolvers = {
  Query: {
    note: (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typename: "Note",
        id: variables.id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
      return note;
    }
  },

  Mutation: {
    editNote: (_, { id, content, title }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: "Note",
        id
      });
      const updatedNote = {
        __typename: "Note",
        content,
        id,
        title
      };
      cache.writeFragment({
        data: updatedNote,
        fragment: NOTE_FRAGMENT,
        id: noteId
      });
      saveNotes(cache);
      return updatedNote;
    },

    createNote: (_, variables, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const { title, content } = variables;
      const newNote = {
        __typename: "Note",
        content,
        id: notes.length + 1,
        title
      };
      cache.writeData({
        data: {
          notes: [newNote, ...notes]
        }
      });
      saveNotes(cache);
      return newNote;
    }
  }
};

export const defaults = {
  notes: restoreNotes()
};
export const typeDefs = [
  `
        schema {
            query: Query
            mutation: Mutation
        }
        type Query {
            notes: [Note]!
            note(id: Int!): Note
        }
        type Mutation {
            createNote(title: String!, content: String!): Note
            editNote(id: Int!, title: String, content: String): Note
        }
        type Note {
            id: Int!
            title: String!
            content: String!
        }
    `
];
