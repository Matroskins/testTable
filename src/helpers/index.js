export const commentEmptyColumns = data =>
  data.length === 0 ? "------" : data;

export const Client = function(id) {
  this.id = id;
  this.name = "";
  this.email = "";
  this.phone = "";
  this.lastVisit = "";
  this.paySumm = "";
  this.visitedNum = "";
  this.isActive = "";
};

export const getClientFormLabel = key => {
  switch (key) {
    case "name":
      return "Имя";
    case "email":
      return "E-Mail";
    case "phone":
      return "Телефон";
    default:
      return "Поле формы";
  }
};

export const getUniqueId = (data: Array<T>) =>
  Math.max(...data.map(objData => objData.id)) + 1;

export const isContainObj = (container, smallObj) =>
  Object.keys(smallObj).reduce((isConsist, key) => {
    if (isConsist) {
      return smallObj[key] === container[key];
    }
    return isConsist;
  }, true);

export const compareArrays = (array1, array2) =>
  JSON.stringify(array1) === JSON.stringify(array2);

export const isNull = obj => obj === null && typeof obj === "object";

const columnsAliases = key => {
  switch (key) {
    case "name":
      return "Клиент";
    case "email":
      return "E-Mail";
    case "phone":
      return "Телефон";
    case "":
      return "";
    case "lastVisit":
      return "Дата последнего посещения";
    case "paySumm":
      return "Сумма оплат";
    case "visitedNum":
      return "Количество посещений";
    case "isActive":
      return "Активный абонемент";
    default:
      return key;
  }
};
export const getColumnsAliases = keys => keys.map(key => columnsAliases(key));
