/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/ErrorBoundary.tsx":
/*!**************************************!*\
  !*** ./components/ErrorBoundary.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/react */ \"@sentry/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sentry_react__WEBPACK_IMPORTED_MODULE_2__]);\n_sentry_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props){\n        super(props);\n        this.state = {\n            hasError: false\n        };\n    }\n    static getDerivedStateFromError(_) {\n        return {\n            hasError: true\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        // Log error to Sentry\n        _sentry_react__WEBPACK_IMPORTED_MODULE_2__.captureException(error, {\n            extra: {\n                componentStack: errorInfo.componentStack\n            }\n        });\n        console.error(\"Error caught by ErrorBoundary:\", error, errorInfo);\n    }\n    render() {\n        if (this.state.hasError) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"2rem\",\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Something went wrong.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lerat\\\\Desktop\\\\desktop\\\\Front-End\\\\alx-graphql-0x03\\\\alx-rick-and-morty-app\\\\components\\\\ErrorBoundary.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"We’re looking into it. Please refresh the page.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lerat\\\\Desktop\\\\desktop\\\\Front-End\\\\alx-graphql-0x03\\\\alx-rick-and-morty-app\\\\components\\\\ErrorBoundary.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lerat\\\\Desktop\\\\desktop\\\\Front-End\\\\alx-graphql-0x03\\\\alx-rick-and-morty-app\\\\components\\\\ErrorBoundary.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this);\n        }\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBVXhDLE1BQU1FLHNCQUFzQkYsd0RBQWU7SUFDekMsWUFBWUksS0FBeUIsQ0FBRTtRQUNyQyxLQUFLLENBQUNBO1FBQ04sSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFBRUMsVUFBVTtRQUFNO0lBQ2pDO0lBRUEsT0FBT0MseUJBQXlCQyxDQUFRLEVBQUU7UUFDeEMsT0FBTztZQUFFRixVQUFVO1FBQUs7SUFDMUI7SUFFQUcsa0JBQWtCQyxLQUFZLEVBQUVDLFNBQTBCLEVBQUU7UUFDMUQsc0JBQXNCO1FBQ3RCViwyREFBdUIsQ0FBQ1MsT0FBTztZQUFFRyxPQUFPO2dCQUFFQyxnQkFBZ0JILFVBQVVHLGNBQWM7WUFBQztRQUFFO1FBQ3JGQyxRQUFRTCxLQUFLLENBQUMsa0NBQWtDQSxPQUFPQztJQUN6RDtJQUVBSyxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQ3ZCLHFCQUNFLDhEQUFDVztnQkFBSUMsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsV0FBVztnQkFBUzs7a0NBQ2pELDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRTs7Ozs7Ozs7Ozs7O1FBR1Q7UUFFQSxPQUFPLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLFFBQVE7SUFDNUI7QUFDRjtBQUVBLGlFQUFlckIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsZXJhdFxcRGVza3RvcFxcZGVza3RvcFxcRnJvbnQtRW5kXFxhbHgtZ3JhcGhxbC0weDAzXFxhbHgtcmljay1hbmQtbW9ydHktYXBwXFxjb21wb25lbnRzXFxFcnJvckJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9yZWFjdFwiO1xyXG5cclxudHlwZSBFcnJvckJvdW5kYXJ5UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufTtcclxuXHJcbnR5cGUgRXJyb3JCb3VuZGFyeVN0YXRlID0ge1xyXG4gIGhhc0Vycm9yOiBib29sZWFuO1xyXG59O1xyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFcnJvckJvdW5kYXJ5UHJvcHMsIEVycm9yQm91bmRhcnlTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFcnJvckJvdW5kYXJ5UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihfOiBFcnJvcikge1xyXG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcclxuICAgIC8vIExvZyBlcnJvciB0byBTZW50cnlcclxuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yLCB7IGV4dHJhOiB7IGNvbXBvbmVudFN0YWNrOiBlcnJvckluZm8uY29tcG9uZW50U3RhY2sgfSB9KTtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYXVnaHQgYnkgRXJyb3JCb3VuZGFyeTpcIiwgZXJyb3IsIGVycm9ySW5mbyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIycmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxoMj5Tb21ldGhpbmcgd2VudCB3cm9uZy48L2gyPlxyXG4gICAgICAgICAgPHA+V2XigJlyZSBsb29raW5nIGludG8gaXQuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlbnRyeSIsIkVycm9yQm91bmRhcnkiLCJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJfIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvciIsImVycm9ySW5mbyIsImNhcHR1cmVFeGNlcHRpb24iLCJleHRyYSIsImNvbXBvbmVudFN0YWNrIiwiY29uc29sZSIsInJlbmRlciIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsInRleHRBbGlnbiIsImgyIiwicCIsImNoaWxkcmVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/ErrorBoundary.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./graphql/apolloClient.ts":
/*!*********************************!*\
  !*** ./graphql/apolloClient.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apollo_client__WEBPACK_IMPORTED_MODULE_0__]);\n_apollo_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n        uri: \"https://rickandmortyapi.com/graphql\"\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2dyYXBocWwvYXBvbGxvQ2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVFO0FBRXZFLE1BQU1HLFNBQVMsSUFBSUgsd0RBQVlBLENBQUM7SUFDOUJJLE1BQU0sSUFBSUYsb0RBQVFBLENBQUM7UUFDakJHLEtBQUs7SUFDUDtJQUNBQyxPQUFPLElBQUlMLHlEQUFhQTtBQUMxQjtBQUVBLGlFQUFlRSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGxlcmF0XFxEZXNrdG9wXFxkZXNrdG9wXFxGcm9udC1FbmRcXGFseC1ncmFwaHFsLTB4MDNcXGFseC1yaWNrLWFuZC1tb3J0eS1hcHBcXGdyYXBocWxcXGFwb2xsb0NsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEh0dHBMaW5rIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgdXJpOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9ncmFwaHFsXCJcclxuICB9KSxcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XHJcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiSHR0cExpbmsiLCJjbGllbnQiLCJsaW5rIiwidXJpIiwiY2FjaGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./graphql/apolloClient.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/react */ \"@apollo/client/react\");\n/* harmony import */ var _graphql_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/graphql/apolloClient */ \"(pages-dir-node)/./graphql/apolloClient.ts\");\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ErrorBoundary */ \"(pages-dir-node)/./components/ErrorBoundary.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apollo_client_react__WEBPACK_IMPORTED_MODULE_3__, _graphql_apolloClient__WEBPACK_IMPORTED_MODULE_4__, _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__]);\n([_apollo_client_react__WEBPACK_IMPORTED_MODULE_3__, _graphql_apolloClient__WEBPACK_IMPORTED_MODULE_4__, _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// --- Initialize Sentry at the very top ---\n\n\n_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.init({\n    dsn: \"https://8aa2b74e6ce435786305d079df961b2f@o4510256525869056.ingest.us.sentry.io/4510256533471232\",\n    tracesSampleRate: 1.0\n});\n// --- Your existing imports ---\n\n\n\n\n// --- Your main app component ---\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client_react__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: _graphql_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lerat\\\\Desktop\\\\desktop\\\\Front-End\\\\alx-graphql-0x03\\\\alx-rick-and-morty-app\\\\pages\\\\_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lerat\\\\Desktop\\\\desktop\\\\Front-End\\\\alx-graphql-0x03\\\\alx-rick-and-morty-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lerat\\\\Desktop\\\\desktop\\\\Front-End\\\\alx-graphql-0x03\\\\alx-rick-and-morty-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7O0FBQ0g7QUFFekNBLGdEQUFXLENBQUM7SUFDVkUsS0FBSztJQUNMQyxrQkFBa0I7QUFDcEI7QUFFQSxnQ0FBZ0M7QUFDRjtBQUV3QjtBQUNWO0FBQ1c7QUFFdkQsa0NBQWtDO0FBQ25CLFNBQVNJLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNMLGdFQUFjQTtRQUFDQyxRQUFRQSw2REFBTUE7a0JBQzVCLDRFQUFDQyxpRUFBYUE7c0JBQ1osNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGVyYXRcXERlc2t0b3BcXGRlc2t0b3BcXEZyb250LUVuZFxcYWx4LWdyYXBocWwtMHgwM1xcYWx4LXJpY2stYW5kLW1vcnR5LWFwcFxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLSBJbml0aWFsaXplIFNlbnRyeSBhdCB0aGUgdmVyeSB0b3AgLS0tXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvbmV4dGpzXCI7XG5cblNlbnRyeS5pbml0KHtcbiAgZHNuOiBcImh0dHBzOi8vOGFhMmI3NGU2Y2U0MzU3ODYzMDVkMDc5ZGY5NjFiMmZAbzQ1MTAyNTY1MjU4NjkwNTYuaW5nZXN0LnVzLnNlbnRyeS5pby80NTEwMjU2NTMzNDcxMjMyXCIsXG4gIHRyYWNlc1NhbXBsZVJhdGU6IDEuMCwgLy8gY2FwdHVyZSBhbGwgdHJhbnNhY3Rpb25zIGZvciBkZXZlbG9wbWVudFxufSk7XG5cbi8vIC0tLSBZb3VyIGV4aXN0aW5nIGltcG9ydHMgLS0tXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvcmVhY3RcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvZ3JhcGhxbC9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gXCJAL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeVwiO1xuXG4vLyAtLS0gWW91ciBtYWluIGFwcCBjb21wb25lbnQgLS0tXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2VudHJ5IiwiaW5pdCIsImRzbiIsInRyYWNlc1NhbXBsZVJhdGUiLCJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsIkVycm9yQm91bmRhcnkiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react":
/*!***************************************!*\
  !*** external "@apollo/client/react" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@apollo/client/react");;

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "@sentry/react":
/*!********************************!*\
  !*** external "@sentry/react" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@sentry/react");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();