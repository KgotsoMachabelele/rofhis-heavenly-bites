import React, { createContext, useContext, useReducer, useCallback } from 'react';

// ── State Shape ──────────────────────────────
const initialState = {
  items: [],       // [{ ...product, qty }]
  isOpen: false,   // cart sidebar open
};

// ── Actions ──────────────────────────────────
const ADD_ITEM      = 'ADD_ITEM';
const REMOVE_ITEM   = 'REMOVE_ITEM';
const UPDATE_QTY    = 'UPDATE_QTY';
const CLEAR_CART    = 'CLEAR_CART';
const TOGGLE_CART   = 'TOGGLE_CART';
const OPEN_CART     = 'OPEN_CART';
const CLOSE_CART    = 'CLOSE_CART';

// ── Reducer ───────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };

    case UPDATE_QTY: {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter(i => i.id !== id) };
      }
      return {
        ...state,
        items: state.items.map(i => i.id === id ? { ...i, qty } : i),
      };
    }
    case CLEAR_CART:
      return { ...state, items: [] };

    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };

    case OPEN_CART:
      return { ...state, isOpen: true };

    case CLOSE_CART:
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

// ── Context ───────────────────────────────────
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem     = useCallback((product) => dispatch({ type: ADD_ITEM,    payload: product }), []);
  const removeItem  = useCallback((id)      => dispatch({ type: REMOVE_ITEM, payload: id }), []);
  const updateQty   = useCallback((id, qty) => dispatch({ type: UPDATE_QTY,  payload: { id, qty } }), []);
  const clearCart   = useCallback(()        => dispatch({ type: CLEAR_CART }), []);
  const toggleCart  = useCallback(()        => dispatch({ type: TOGGLE_CART }), []);
  const openCart    = useCallback(()        => dispatch({ type: OPEN_CART }), []);
  const closeCart   = useCallback(()        => dispatch({ type: CLOSE_CART }), []);

  const totalItems  = state.items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice  = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
