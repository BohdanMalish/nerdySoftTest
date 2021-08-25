import { createSelector } from "reselect";

export const listSelector = createSelector(
  (state) => state.notes,
  (notes) => notes
);
export const selectorFiltredData = (text) => {
  return createSelector(
    (state) => state.notes,
    (notes) => filter(notes, text)
  );
};
export const selectorsimilardData = (text, context) => {
  return createSelector(
    (state) => state.notes,
    (notes) => similarData(notes, text, context)
  );
};
const similarData = (Data, name, context) => {
  const { data } = Data;
  const lst = data.filter((i) => compare(i.name, name));
  const list = data.filter((i) => compare(i.context, context));
  const array = [...new Set([...list, ...lst])];
  return array;
};
const filter = (Data, text) => {
  const { data } = Data;
  if (text == "" || text == " ") {
    return data;
  }
  const lst = data.filter((i) => compare(i.name, text));
  return lst;
};
const compare = (elementName, searchName) => {
  const nameLst = elementName.split(" ");
  const searchLst = searchName.split(" ");
  for (let i = 0; i < nameLst.length; i++) {
    for (let j = 0; j < searchLst.length; j++) {
      if (nameLst[i] === searchLst[j]) {
        return true;
      }
    }
  }
};
