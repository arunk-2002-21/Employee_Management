"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftDataRouter = void 0;
const express_1 = require("express");
const shiftController_1 = require("../controller/shiftController");
const shiftDataRouter = (0, express_1.Router)();
exports.shiftDataRouter = shiftDataRouter;
shiftDataRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shiftData = yield (0, shiftController_1.shiftDataGenerate)(req, res);
        res.send(shiftData);
    }
    catch (error) {
        console.log('Error in generate shift data', error);
    }
}));
//# sourceMappingURL=shiftRoutes.js.map