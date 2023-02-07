const initialState = {
  // Это Главная хранилище
  heroes: [], // Список героев в качестве массива
  heroesLoadingStatus: "idle", // Статус загрузки наших героев
  filters: [], // Фильтры (пока не загрузились)
};

const reducer = (state = initialState, action) => {
  // state это текущая состояние  (до момента модификаци) (initalState)
  // action - название того действий которую я хочу совершить (HEROES_FETCHING) (HEROES_FETCHED) (HEROES_FETCHING_ERROR)
  switch (action.type) {
    case "HEROES_FETCHING": // КОГДА СОБИРАЕМСЯ ЧТО-ТО ОТПРОВЛЯТЬ
      return {
        // ВОЗВРАЩАЕМ
        ...state, // РАЗВЕРТЫВАЕМ ПРОШЛЫЕ ДАННЫЕ
        heroesLoadingStatus: "loading", // МЕНЯМ СТАТУС ЗАГРУЗКИ
      };
    case "HEROES_FETCHED": // КОГДА ПРЕДУДУЩИЙ ЗАПРОС ЗАВЕРШИЛСЯ ВЫПОЛНЯЕТЬСЯ ДРУГАЯ
      return {
        ...state,
        // ИЗ ACTION ЗАПИСЫВАЕМ ДАННЫЕ МАССИВ (initailState)
        heroes: action.payload, // В ПОЛЕ ГЕРОЕВ ЗАПИСЫВАЕМ ТО ТО ПРИХОДИТЬ ОТ СЕРВВЕРА "" heroes: [payload] "" (ПРИХОДИТЬ В ФОРМАТЕ PAYLOAD)
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    default:
      return state;
  }
};

export default reducer;
