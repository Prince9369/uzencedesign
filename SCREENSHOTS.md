# Creating Screenshots and GIFs for UZENCE Design System

This guide explains how to create high-quality screenshots and GIFs to showcase the UZENCE Design System components and interactions.

## Required Screenshots/GIFs

For the assignment submission, you need to create the following visual assets:

1. **Overall Design System Preview**
   - Filename: `screenshots/preview.png`
   - Content: A screenshot of the main application showing multiple components

2. **Color System**
   - Filename: `screenshots/color-system.png`
   - Content: A screenshot of the color system section showing color tokens

3. **Accordion Interaction**
   - Filename: `screenshots/accordion.gif`
   - Content: A GIF showing the accordion expanding and collapsing

4. **Tag/Badge Components**
   - Filename: `screenshots/tag.png`
   - Content: A screenshot showing different tag/badge variants

5. **Top Navigation Interaction**
   - Filename: `screenshots/topnav.gif`
   - Content: A GIF showing dropdown menus and mobile responsiveness

6. **Tabs Interaction**
   - Filename: `screenshots/tabs.gif`
   - Content: A GIF showing tab switching

7. **Theme Toggle Interaction**
   - Filename: `screenshots/theme-toggle.gif`
   - Content: A GIF showing switching between light and dark themes

## Tools for Creating Screenshots and GIFs

### For Static Screenshots

#### Windows
- Windows Snipping Tool or Snip & Sketch
- Press `Windows + Shift + S` to capture a region

#### macOS
- Press `Command + Shift + 4` to capture a region
- Press `Command + Shift + 5` for more options

#### Cross-platform
- Browser DevTools (F12) > "Screenshot" option
- [Lightshot](https://app.prntscr.com/en/index.html)
- [Greenshot](https://getgreenshot.org/)

### For GIFs

#### Windows
- [ScreenToGif](https://www.screentogif.com/) (recommended)
- [ShareX](https://getsharex.com/)

#### macOS
- [Kap](https://getkap.co/)
- [GIF Brewery](https://gfycat.com/gifbrewery)

#### Cross-platform
- [LICEcap](https://www.cockos.com/licecap/)
- [Peek](https://github.com/phw/peek) (Linux)

## Best Practices

1. **Resolution and Size**
   - Aim for a width of 800-1200px
   - Keep file sizes reasonable (compress if needed)
   - For GIFs, consider reducing frame rate to decrease file size

2. **Quality**
   - Ensure text is readable
   - Use high-contrast mode if needed
   - Capture at 1x scale (not zoomed in/out)

3. **Content**
   - Focus on the component being showcased
   - Show all relevant states and interactions
   - For theme toggle, show both light and dark modes

4. **Optimization**
   - Use [ezgif.com](https://ezgif.com/) to optimize GIFs
   - Consider using [TinyPNG](https://tinypng.com/) for PNG compression

## Step-by-Step Process

### For Static Screenshots

1. Open the application or Storybook
2. Navigate to the component you want to capture
3. Use your preferred screenshot tool to capture the region
4. Save the file with the appropriate name in the `screenshots` directory

### For GIFs

1. Open your GIF recording tool
2. Select the region to capture
3. Start recording
4. Perform the interaction slowly and deliberately
5. Stop recording
6. Edit if necessary (trim, adjust speed)
7. Save the file with the appropriate name in the `screenshots` directory

## Theme Toggle GIF Example

To create the theme toggle GIF:

1. Open the application
2. Start recording
3. Click the theme toggle button in the top navigation bar
4. Wait 1-2 seconds to show the dark theme
5. Click the toggle again to switch back to light theme
6. Wait 1-2 seconds
7. Stop recording
8. Save as `screenshots/theme-toggle.gif`
