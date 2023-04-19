export const question = [
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) {
        return true;
      }
      return "Sorry, your project name must only include letters, numbers, dashes or underscores.";
    },
  },
];
