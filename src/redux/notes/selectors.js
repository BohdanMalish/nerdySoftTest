import { createSelector } from 'reselect';

export const listSelector = createSelector(
  (state) => state.notes,
  (notes) => notes
);
export const selectorFiltredData = text => {return createSelector(
  (state) => state.notes,
   (notes)=>remake(notes,text)
  )
};
const remake=(Data,text)=>{
    const {data}=Data;
    if(text==''||text==' '){return data;}
    const lst=data.filter(i=>compare(i.name,text));
    return lst;
}
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
