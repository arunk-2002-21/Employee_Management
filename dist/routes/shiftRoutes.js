"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shiftController_1 = require("../controller/shiftController");
const auth_1 = require("../services/auth");
const router = (0, express_1.Router)();
router.post('/start', auth_1.authenticateJWT, shiftController_1.startShift);
router.post('/end', auth_1.authenticateJWT, shiftController_1.endShift);
exports.default = router;
//# sourceMappingURL=shiftRoutes.js.map