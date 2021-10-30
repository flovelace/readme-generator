// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.toString() === "None" || !license) {
    return "";
  }
  return `[![License](https://img.shields.io/badge/License-${license}-lightgrey)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.toString() === "None" || !license) {
    return ""
  }

  const linkArr = ["https://www.gnu.org/licenses/licenses.en.html","https://www.mozilla.org/en-US/MPL/2.0/","https://opensource.org/licenses/MIT","https://www.boost.org/users/license.html", "https://unlicense.org/", "https://www.apache.org/licenses/LICENSE-2.0"];
  for (let i  = 0; i < linkArr.length; i++){
    if (linkArr[i].includes(license.toString().toLowerCase())){
      return `${linkArr[i]}`

    }
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.toString() === "None" || !license){
    return ""
  }
  return `
  ## License
  ${renderLicenseBadge(license)}(${renderLicenseLink(license)})
  The license for this project is: [${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}
  ${renderLicenseBadge(data.license)}(${renderLicenseLink(data.license)})
  ## Project Description
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation)
  - [Usage Guide](#usage)
  - [Contribution Information](#contribution)
  - [Testing Guide](#tests)
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
