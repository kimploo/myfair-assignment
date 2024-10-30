import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  verbose: true,
  testPathIgnorePatterns: [
    "<rootDir>/src/util/test-for-test/",
    // Add other directories to ignore if needed
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
