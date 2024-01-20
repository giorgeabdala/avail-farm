import { defineConfig } from 'vitest/config';

export default defineConfig({

        plugins: [

        ],
        test: {
            globals: true,
            include: ['**/test/*.test.ts'],
            testTimeout: 5000,

            coverage: {
                reporter: ['html', 'text', 'lcov'],
                reportsDirectory: './test/coverage'
            }


        },

    }



)