import { NOTE_FRAGMENT } from "./fragments";
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
      return newNote;
    }
  }
};

export const defaults = {
  notes: [
    {
      __typename: "Note",
      content: "## Second",
      id: 1,
      title: "First"
    }
  ]
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
