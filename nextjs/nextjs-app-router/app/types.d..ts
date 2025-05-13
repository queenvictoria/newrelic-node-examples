import NewRelicBrowser from "new-relic-browser"

declare global {
  interface Window {
    newrelic: typeof NewRelicBrowser
  }
}
