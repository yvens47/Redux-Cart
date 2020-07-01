const FILTER_PRODUCT = "FILTER_PRODUCT";

export default function productReducer(state = [], actions) {
  switch (actions.type) {
    case FILTER_PRODUCT:
      const filtered = [...state];

      return filtered.filter(
        filterList => filterList.category === actions.payload
      );
      break;

    default:
      return state;
  }
}
