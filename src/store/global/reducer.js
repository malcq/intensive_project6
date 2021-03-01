const initialStore = () => ({
  barCard: {},
  recipes: {},
  calendar: {}
});

const globalStore = (store = initialStore(), { type, data } = {}) => {
  switch(type){
    default:
      return store;
  }
  
};

export default globalStore;