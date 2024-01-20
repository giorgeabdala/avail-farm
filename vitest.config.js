"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    plugins: [],
    test: {
        globals: true,
        include: ['**/test/*.test.ts'],
        testTimeout: 5000,
        coverage: {
            reporter: ['html', 'text', 'lcov'],
            reportsDirectory: './test/coverage'
        }
    },
});
