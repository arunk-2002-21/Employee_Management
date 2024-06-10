"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timesheetController_1 = require("../controller/timesheetController");
const auth_1 = require("../services/auth");
const router = (0, express_1.Router)();
router.post('/entry', auth_1.authenticateJWT, timesheetController_1.createTimesheetEntry);
exports.default = router;
//# sourceMappingURL=timesheetRoutes.js.map