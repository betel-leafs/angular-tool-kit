import { Component, Inject, LOCALE_ID, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { DOCUMENT } from "@angular/common";
import { environment } from "src/environments/environment";
import { env } from "process";
import { ConfigService } from "./service/config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-tool-kit";
  constructor(configService: ConfigService) {
    // if (environment.production) {
    //   // Get the language code from URL
    //   let urlLangCode = configService.getLanguageCodeFromURL();
    //   // Get the browser language
    //   let navLangCode = configService.getBrowserLanguageCode();
    //   // are we supporting URL lang code? if not reassign to english.
    //   urlLangCode = environment.supportedLanguages.includes(urlLangCode)
    //     ? urlLangCode
    //     : "en";

    //   if (urlLangCode !== navLangCode) {
    //     window.location.href = location.href.replace(
    //       "/" + urlLangCode + "/",
    //       "/" + navLangCode + "/"
    //     );
    //   }
    // }
  }
}
