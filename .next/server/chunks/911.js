exports.id = 911;
exports.ids = [911];
exports.modules = {

/***/ 1877:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Footer_title___pDUp"
};


/***/ }),

/***/ 4257:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__nEsGl",
	"list": "Header_list__170vh",
	"item": "Header_item__xMht_"
};


/***/ }),

/***/ 8118:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__K9hpm",
	"content": "Layout_content__I9Lg2"
};


/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(4257);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header/index.tsx




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (Header_module_default()).list,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Header_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Header_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Blog",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Blog"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Header_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/users",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Users"
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(1877);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/index.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: (Footer_module_default()).title,
            children: "made with love Karawang"
        })
    });
}

// EXTERNAL MODULE: ./components/Layout/Layout.module.css
var Layout_module = __webpack_require__(8118);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout/index.tsx






function Layout(props) {
    const { children , pageTitle  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "NextJS Basic |",
                            " ",
                            pageTitle
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Website NextJs Basic"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Layout_module_default()).content,
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ })

};
;