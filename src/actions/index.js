export const heroesFetching = () => {
  // это функция
  return {
    // возвращем обьект у которого тип (HEROES_FETCHING)
    // ДАЛЬШЕ ЭТО ИДЕТ В РЕДЮСЕР
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  // ПОЛУЧАЕТ СПИСОК ГЕРОЕВ В ВИДЕ МАССИВА []
  return {
    type: "HEROES_FETCHED",
    payload: heroes, // КАК PAYLOAD СЮДА ДАННЫЕ ПЕРЕДАЕТ (ПОЛУЧАЕТ ВОТ ЗДЕСЬ БУДЕТ МАССИВ ПОЛУЧЕННЫХ ГЕРОЕ [])
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};
