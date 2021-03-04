import { SELECT_BEVERAGE } from '../actionNames';


const initialStore = () => ({
  barCard: {
    selectedId: null,
    revisionId: null,
  },
  recipes: {},
  calendar: {}
});

const globalStore = (store = initialStore(), { type, data } = {}) => {
  switch(type){
    case SELECT_BEVERAGE:
      return {
        ...store,
        barCard: {
          ...store.barCard,
          selectedId: data
        }
      };
    default:
      return store;
  }
  
};

export default globalStore;