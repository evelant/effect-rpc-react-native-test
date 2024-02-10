import { registerRootComponent } from "expo";
//@ts-expect-error
import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";
// const { TextEncoder, TextDecoder } = require("fast-text-encoding");
require("fastestsmallesttextencoderdecoder");
const { fetch, Headers, Request, Response } = require("react-native-fetch-api");
const { ReadableStream } = require("web-streams-polyfill");
// const { ReadableStream } = require("@stardazed/streams");

// polyfillGlobal("TextEncoder", () => TextEncoder);
// polyfillGlobal("TextDecoder", () => TextDecoder);
polyfillGlobal("ReadableStream", () => ReadableStream);
polyfillGlobal("fetch", () => fetch);
polyfillGlobal("Headers", () => Headers);
polyfillGlobal("Request", () => Request);
polyfillGlobal("Response", () => Response);

const { App } = require("./App");
registerRootComponent(App);
