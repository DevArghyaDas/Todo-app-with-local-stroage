import { atomWithStorage } from "jotai/utils";

export const todosAtom = atomWithStorage<string[]>("todo-list", []);
