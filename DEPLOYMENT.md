# Deploying UZENCE Design System Storybook

This guide explains how to deploy the UZENCE Design System Storybook to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)

## Deployment Steps

### 1. Push Your Code to GitHub

Make sure your code is pushed to your GitHub repository:

```bash
git add .
git commit -m "Prepare for Storybook deployment"
git push
```

### 2. Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Other
   - Build Command: `npm run build-storybook`
   - Output Directory: `storybook-static`
   - Install Command: `npm install`
5. Click "Deploy"

Vercel will automatically detect the `vercel.json` configuration file in your repository and use those settings.

### 3. Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the instructions to set up DNS

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository. Any changes pushed to your main branch will trigger a new deployment.

## Alternative: Deploy to Chromatic

If you prefer to use Chromatic (which is specifically designed for Storybook):

1. Install Chromatic:
   ```bash
   npm install --save-dev chromatic
   ```

2. Add a script to your package.json:
   ```json
   "scripts": {
     "chromatic": "chromatic --project-token=YOUR_PROJECT_TOKEN"
   }
   ```

3. Run the deployment:
   ```bash
   npm run chromatic
   ```

You'll need to sign up at [chromatic.com](https://www.chromatic.com/) to get your project token.

## Troubleshooting

- If you encounter build errors, check the Vercel build logs
- Make sure all dependencies are correctly installed
- Verify that the build-storybook script works locally before deploying
