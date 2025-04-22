/**
 * This script updates the README.md file with your Vercel deployment URL
 * Run it after deploying to Vercel with: node update-readme.js YOUR_VERCEL_URL
 */

const fs = require('fs');
const path = require('path');

// Get the Vercel URL from command line arguments
const vercelUrl = process.argv[2];

if (!vercelUrl) {
  console.error('Please provide your Vercel deployment URL as an argument');
  console.error('Example: node update-readme.js https://your-project-name.vercel.app');
  process.exit(1);
}

// Read the README.md file
const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Update the Storybook URL
readmeContent = readmeContent.replace(
  /- \*\*Storybook\*\*: \[View Storybook Documentation\]\(.*\)/,
  `- **Storybook**: [View Storybook Documentation](${vercelUrl})`
);

// Write the updated content back to README.md
fs.writeFileSync(readmePath, readmeContent);

console.log(`README.md updated with Storybook URL: ${vercelUrl}`);
