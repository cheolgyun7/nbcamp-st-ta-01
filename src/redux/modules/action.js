export const PLUS_BUTTON = "PLUS_BUTTON";
export const MINUS_BUTTON = "MINUS_BUTTON";

export const plusButton = (payload) => ({
  type: PLUS_BUTTON,
  payload,
});

export const minusButton = (payload) => ({
  type: MINUS_BUTTON,
  payload,
});
