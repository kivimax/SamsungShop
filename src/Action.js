import { setProductDetails, setError } from "./Slice";

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/items/${id}`);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const product = await response.json();
    dispatch(setProductDetails(product));
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(setError(error.message));
  }
};
