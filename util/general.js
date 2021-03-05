const getNextId = (collection) => {
  let highest = 0;
  if(collection.length > 0) {
    for(let i = 0; i < collection.length; i++) {
      if(collection[i].id > highest) {
        highest = collection[i].id;
      }
    }
  }
  return highest + 1;
};

export default getNextId;