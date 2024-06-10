"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportController_1 = require("../controller/reportController");
const auth_1 = require("../services/auth");
const router = (0, express_1.Router)();
router.get('/generate', auth_1.authenticateJWT, reportController_1.generateReport);
exports.default = router;
//# sourceMappingURL=reportRoutes.js.map