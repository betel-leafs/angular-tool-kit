import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  public getBrowserLanguageCode() {
    let langCode = "";
    switch (navigator.language) {
      case "en":
      case "en-US":
        langCode = "en";
        break;
      case "de":
      case "de-DE":
        langCode = "de";
        break;

      case "fr":
      case "fr-FR":
        langCode = "fr";
        break;

      default:
        langCode = "en";
    }
    return langCode;
  }
  public getLanguageCodeFromURL()
  {
    return location.pathname.toString().split("/")[1];
  }
}
