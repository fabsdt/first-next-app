"use strict";
(() => {
var exports = {};
exports.id = 5890;
exports.ids = [5890];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ seed)
});

// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(9442);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(6274);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: ./utils/data.js

const data = {
    users: [
        {
            name: "admin",
            email: "admin@example.com",
            password: external_bcryptjs_default().hashSync("123456", 8),
            isAdmin: true
        },
        {
            name: "John",
            email: "user@example.com",
            password: external_bcryptjs_default().hashSync("123456", 8),
            isAdmin: false
        }, 
    ],
    products: [
        {
            name: "L7 9.05",
            slug: "l7-905",
            category: "Asics",
            image: "/images/L7.png",
            manufaturer: "Bitmain",
            price: 10710,
            hashrate: 9050,
            power: 3425,
            countInStock: 10,
            algorithm: "scrypt",
            description: "Antminer L7 (9.05Gh) de Bitmain minant l'algorithme Scrypt avec un hashrate maximum de 9.05Gh/s pour une consommation de 3425W."
        },
        {
            name: "S19XP",
            slug: "s19xp",
            category: "Asics",
            image: "/images/S19XP.png",
            manufaturer: "Bitmain",
            price: 6615,
            hashrate: 141,
            power: 3010,
            countInStock: 10,
            algorithm: "SHA-256",
            description: "Antminer S19 XP (141Th) de Bitmain minant l'algorithme SHA-256 avec un hashrate maximum de 141Th/s pour une consommation de 3010W."
        },
        {
            name: "Whatsminer M50",
            slug: "whatsminer-m50",
            category: "Asics",
            image: "/images/m50.png",
            manufaturer: "MicroBT",
            price: 3385,
            hashrate: 118,
            power: 3306,
            countInStock: 10,
            algorithm: "SHA-256",
            description: "Whatsminer M50 de MicroBT minant l'algorithme SHA-256 avec un hashrate maximum de 118Th/s pour une consommation de 3306W."
        },
        {
            name: "KA3",
            slug: "ka3",
            category: "Asics",
            image: "/images/KA3.png",
            manufaturer: "Bitmain",
            price: 12110,
            hashrate: 166,
            power: 3154,
            countInStock: 10,
            algorithm: "Kadena",
            description: "Antminer KA3 (166Th) de Bitmain minant l'algorithme Kadena avec un hashrate maximum de 166Th/s pour une consommation de 3154W."
        },
        {
            name: "Z15",
            slug: "z15",
            category: "Asics",
            image: "/images/Z15.png",
            manufaturer: "Bitmain",
            price: 3710,
            hashrate: 420,
            power: 1510,
            countInStock: 10,
            algorithm: "Equihash",
            description: "Antminer Z15 de Bitmain minant l'algorithme Equihash avec un hashrate maximum de 420ksol/s pour une consommation de 1510W."
        },
        {
            name: "S19J Pro",
            slug: "s19j-pro",
            category: "Asics",
            image: "/images/s19jpro.png",
            manufaturer: "Bitmain",
            price: 2170,
            hashrate: 100,
            power: 3050,
            countInStock: 10,
            algorithm: "SHA-256",
            description: "Antminer S19j Pro (100Th) de Bitmain minant l'algorithme SHA-256 avec un hashrate maximum de 100Th/s pour une consommation de 3050W."
        }, 
    ]
};
/* harmony default export */ const utils_data = (data);

// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(8989);
;// CONCATENATED MODULE: ./pages/api/seed.js




const handler = async (req, res)=>{
    await db/* default.connect */.Z.connect();
    await User/* default.deleteMany */.Z.deleteMany();
    await User/* default.insertMany */.Z.insertMany(utils_data.users);
    await Product/* default.deleteMany */.Z.deleteMany();
    await Product/* default.insertMany */.Z.insertMany(utils_data.products);
    await db/* default.disconnect */.Z.disconnect();
    res.send({
        message: "seeded successfully"
    });
};
/* harmony default export */ const seed = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8989,9442], () => (__webpack_exec__(7492)));
module.exports = __webpack_exports__;

})();