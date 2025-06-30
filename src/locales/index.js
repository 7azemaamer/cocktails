import { createI18n } from "vue-i18n";
import en from "./en.json";
import ar from "./ar.json";

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, ar },
});
