import path from "path";
const resolve = (_path) => path.resolve(__dirname, _path);

module.exports = {
  testURL: "http://localhost",
  moduleNameMapper: {
    "assets/(.*)": resolve("./assets/$1"),
    "components/(.*)": resolve("./components/$1"),
    "pages/(.*)": resolve("./pages/$1"),
    "src/(.*)": resolve("./src/$1"),
  },
  testEnvironment: "jsdom",
  snapshotSerializers: ["jest-serializer-html"],
  testPathIgnorePatterns: ["e2e/", ".*donottest.*"],
  transform: { "^.+\\.(t|j)sx?$": ["@swc/jest"] },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
};
