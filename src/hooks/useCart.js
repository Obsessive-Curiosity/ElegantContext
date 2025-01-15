import { useContext } from "react";
import { CartContext } from "../stores/CartContext.jsx";

function useCart() {
  const { cartState, cartDispatch } = useContext(CartContext);

  function handleAddItemToCart(id) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  return { cartState, handleAddItemToCart, handleUpdateCartItemQuantity };
}

export default useCart;
