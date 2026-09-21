import langs from "suneditor/src/lang";
import Lang from "../types/lang";

const getLanguage = (lang?: Lang) => {
  switch (typeof lang) {
    case "object":
      return lang;
    case "string":
      return langs[lang];
    default:
      return undefined;
  }
};

export default getLanguage;
