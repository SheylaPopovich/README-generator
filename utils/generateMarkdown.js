// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case 'Academic.Free.License':
      link = 'https://opensource.org/licenses/AFL-3.0';
      break;
    case 'Boost.Software.License':
      link = 'https://www.boost.org/users/license.html';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'PostgreSQL.License':
      link = 'https://www.postgresql.org/about/licence/';
      break;
    default:
      link = '';
      break;
  }
  return link;
  return '';
}

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `##  [License](#license)
      This application is licensed under: ${license}
      ${renderLicenseLink(license)}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents
1.  [Description](#description)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [Contribution](#contribution)
5.  [Test](#test)
6.  [Questions](#questions)
7.  [License](#license)
        
## [Description](#description)
    ${data.description}
## [Installation](#installation)
    ${data.installation}
## [Usage](#usage)
    ${data.usage}
## [Contribution](#contribution)
     ${
      data.contribution
    }
## [Test](#test)
    The testing used for this application
     ${data.test}
## [Questions](Questions)
    If you have any questions, feel free to reach out to me via GitHub: ${
    data.github} or you may also send me an email at: ${data.email}.
    Lets connect with me on LinkedIn: ${data.linkedIn}


${renderLicenseSection(data.license)}

## Show your support
      Give a ⭐ if this project helped you!

`;
}

module.exports = generateMarkdown;