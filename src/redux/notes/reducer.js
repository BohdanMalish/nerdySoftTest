import { UPDATE_DATA } from "./constants";
const initialState = {
  data: [
    {
      id: 1,
      name: "Honda Jazz 2012 автомат",
      dateCreated: "19.02.2021",
      context:
        "Honda Jazz III 2012 року випуску, мотор бензин 1.4 на автоматичній коробці (варіатор) ",
    },
    {
      id: 2,
      name: "Ford Mondeo 2009",
      dateCreated: "19.02.2021",
      context: "Гарна комплектація, хороший стан.Деталі по телефону",
    },
    {
      id: 3,
      name: "Skoda Octavia A5",
      dateCreated: "19.02.2021",
      context:
        "Skoda Octavia A5, 2007 р, м. Львов. Перший власник із салону , машина не бита . Все працює . Пробіг : 244 тис.",
    },
    {
      id: 4,
      name: "Skoda Superb 2010 року",
      dateCreated: "19.02.2021",
      context:
        "Продається Skoda Superb 2010 року .Є не величкі недоліки по кузову .Всі питання по телефону ",
    },
    {
      id: 5,
      name: "Suzuki Grand Vitara 2008 р",
      dateCreated: "19.02.2021",
      context:
        "Автомобіль, який зарекомендував себе з позитивної точки зору. Це транспорт, який не підведе вас у дорозі ",
    },
    {
      id: 6,
      name: "Daewwo Lanoc",
      dateCreated: "19.02.2021",
      context:
        "Нова машина",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
