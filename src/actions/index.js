export const heroesFetching = () => {
  // это функция
  return {
    // возвращем обьект у которого тип (HEROES_FETCHING)
    // ДАЛЬШЕ ЭТО ИДЕТ В РЕДЮСЕР
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};
