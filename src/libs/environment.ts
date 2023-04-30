import stringsEn from "../mock.strings.en.json"
import stringsZh from "../mock.strings.zh.json"

export const environment = {
  app: "demo",
  page: "/",
  lang: "en",
  version: "0.0.1",
  flights: "", // AB test
  config: {},  // Config for page
  strings: stringsEn,
  langMap: {
    en: stringsEn,
    zh: stringsZh
  }
  // TODO: i18n.detectLanguage() to get zh/en/fr lang config json
}