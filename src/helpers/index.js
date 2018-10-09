// @flow

export const commentEmptyColumns = (data: string) =>
  data.length === 0 ? "------" : data;

export type clientType = {
  id: number,
  name: string,
  email: string,
  phone: string,
  lastVisit: string,
  paySumm: string,
  visitedNum: string,
  isActive: string
};

export const Client = function(id: number) {
  this.id = id;
  this.name = "";
  this.email = "";
  this.phone = "";
  this.lastVisit = "";
  this.paySumm = "";
  this.visitedNum = "";
  this.isActive = "";
};

export const getClientFormLabel = (key: string) => {
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

export const getUniqueId = (data: Array<any>) =>
  Math.max(...data.map(objData => objData.id)) + 1;

export const isContainObj = (container: {}, smallObj: {}) =>
  Object.keys(smallObj).reduce((isConsist: boolean, key: string) => {
    if (isConsist) {
      return smallObj[key] === container[key];
    }
    return isConsist;
  }, true);

export const compareArrays = (
  array1: Array<any>,
  array2: Array<any>
): boolean => JSON.stringify(array1) === JSON.stringify(array2);

export const isNull = (obj: any) => obj === null && typeof obj === "object";

const columnsAliases = (key: ?string) => {
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
export const getColumnsAliases = (keys: Array<?string>): Array<?string> =>
  keys.map(key => columnsAliases(key));
