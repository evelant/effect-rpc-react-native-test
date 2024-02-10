import { registerRootComponent } from "expo";
//@ts-expect-error
// import { polyfill } from "react-native-polyfill-globals";
// import { polyfill as polyfillEncoding } from "react-native-polyfill-globals/src/encoding";
import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";

// import { polyfill as polyfillFetch } from "react-native-polyfill-globals/src/fetch";
const { TextEncoder, TextDecoder } = require("text-encoding");
const { fetch, Headers, Request, Response } = require("react-native-fetch-api");
const { ReadableStream } = require("web-streams-polyfill");

polyfillGlobal("TextEncoder", () => TextEncoder);
polyfillGlobal("TextDecoder", () => TextDecoder);
polyfillGlobal("ReadableStream", () => ReadableStream);
polyfillGlobal("fetch", () => fetch);
polyfillGlobal("Headers", () => Headers);
polyfillGlobal("Request", () => Request);
polyfillGlobal("Response", () => Response);

const { App } = require("./App");
registerRootComponent(App);
