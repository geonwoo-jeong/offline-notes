export interface addNote {
  id: number;
}

export interface addNoteVariables {
  title: string;
  content: string;
}

export interface updateNote {
  id: number;
}

export interface updateNoteVariables {
  title: string;
  content: string;
  id: number;
}
