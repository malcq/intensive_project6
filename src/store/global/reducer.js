

const initialStore = () => ({});

const globalStore = (store = initialStore(), { type, data } = {}) => {
  switch(type){
    default:
      return store;
  }
  
};

export default globalStore;