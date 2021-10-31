// Renders the badges. If user selects NONE, it will return an empty string
function renderLicenseBadge(license) {
  if (license.toString() === "None" || !license) {
    return "";
  } else {
  return `[![License](https://img.shields.io/badge/License-${license}-lightgrey)]`;
  }
};
// Renders the links to the licenses
function renderLicenseLink(license) {
  if (license.toString() === "None" || !license) {
    return "";
  }
// Array to hold our links and conver them to lowercase strings
  const licenseArr = ["https://www.gnu.org/licenses/licenses.en.html","https://www.mozilla.org/en-US/MPL/2.0/","https://opensource.org/licenses/MIT","https://www.boost.org/users/license.html", "https://unlicense.org/", "https://www.apache.org/licenses/LICENSE-2.0"];
  for (let i  = 0; i < licenseArr.length; i++) {
    if (licenseArr[i].includes(license.toString().toLowerCase())) {
      return `${licenseArr[i]}`
    } else if (license.toString() === "MIT") {
      return `${licenseArr[2]}`
    }
  }
};

function renderLicenseSection(license) {
  if (license.toString() === "None" || !license){
    return "";
  }
  return `
  ## License
  ${renderLicenseBadge(license)}(${renderLicenseLink(license)})
  The license for this project is: [${license}](${renderLicenseLink(license)}). Please consult the link provided for usage, reproduction, and/or distribution of this program.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}(${renderLicenseLink(data.license)})
  ## Project Description
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation)
  - [Usage Guide](#usage)
  - [Contribution Information](#contribution)
  - [Testing Guide](#testing)
  ## Installation Instructions
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributors
  ${data.credits}
  ## Github
  ${data.github}
  ## Testing Guide
  ${data.testing}`;
}

module.exports = generateMarkdown;
