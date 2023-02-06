import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react"; // Делать правильно запрос в правильное время
import { useDispatch, useSelector } from "react-redux";

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../../actions";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
  const { heroes, heroesLoadingStatus } = useSelector((state) => state); // Деструк... достали 2 званчений это герой и статус героя (heroes), (heroesLoadingStatus)
  // UseSelector это хук который позволет притяговать кусочки кокого-то вашего глобального state. Для того тобы использовать внутри компонента
  const dispatch = useDispatch(); // Для того чтобы использовать функцию dispatch
  const { request } = useHttp(); // Получить наш обьект запроса

  useEffect(() => {
    dispatch(heroesFetching()); // (ЗАПУСКАЕМ ФУНКЦИЮ heroesFetching() ИЗ actions который идет в Reducer)
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data))) // (ЗАПУСКАЕМ ФУНКЦИЮ heroesFetched(data)  ИЗ actions который идет в Reducer)
      // DATA ложим в функцию
      .catch(() => dispatch(heroesFetchingError())); // (ЗАПУСКАЕМ ФУНКЦИЮ heroesFetchingError() ИЗ actions который идет в Reducer)

    // eslint-disable-next-line
  }, []); // Здесь пустой массив значить будеть использовано только 1 раз

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return <HeroesListItem key={id} {...props} />;
    });
  };

  const elements = renderHeroesList(heroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
