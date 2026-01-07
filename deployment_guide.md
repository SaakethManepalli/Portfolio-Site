# How to Host Your Portfolio on a Custom Domain

Since your project is a **static website** (HTML, CSS, JS), the easiest and best way to host it is using **Netlify** or **Vercel**. Both are free for personal projects and extremely reliable.

Here is the recommended method using **Netlify Drop** (easiest, no code required).

## Step 1: Deploying the Website

1.  **Prepare your folder**:
    *   Make sure your `index.html` is at the very top level of your folder (which it is).
    *   Ensure all your assets (images, css, js) are in the folder.

2.  **Go to Netlify Drop**:
    *   Open your browser and search for "Netlify Drop" or go to [app.netlify.com/drop](https://app.netlify.com/drop).
    *   You may need to sign up for a free account.

3.  **Drag and Drop**:
    *   Take your ENTIRE project folder `magnetic-lunar` and drag it onto the target area in the browser.
    *   Netlify will upload and publish it instantly. You will get a random URL like `agitated-darwin-12345.netlify.app`.

## Step 2: Setting up a Custom Domain

Once your site is online with the random URL, you can add your own domain (e.g., `saakethmanepalli.com`).

1.  **In the Netlify Dashboard**:
    *   Click on **"Domain settings"** (or "Set up a custom domain").
    *   Click **"Add custom domain"**.

2.  **Enter your Domain**:
    *   Type the domain you want (e.g., `yourname.com`).
    *   If you **already own it** (e.g., on Namecheap, GoDaddy):
        *   Netlify will give you "nameservers" (e.g., `dns1.p01.nsone.net`).
        *   Go to your domain registrar (GoDaddy/Namecheap), find "Nameservers" in settings, and paste the Netlify ones there.
    *   If you **don't own it yet**:
        *   You can often buy it directly through Netlify, which automatically configures everything for you. This is the easiest option if you haven't bought one yet.

## Step 3: HTTPS (Security)

*   Netlify automatically provides a free SSL certificate (HTTPS).
*   It might take up to 24 hours after changing DNS settings for the secure lock icon to appear, but usually, it's much faster (minutes).

## Alternative: Using Vercel

If you prefer Vercel:
1.  Go to [vercel.com](https://vercel.com) and sign up.
2.  Install Vercel CLI (`npm i -g vercel`) if you have Node.js, OR use their GitHub integration if you push your code to GitHub.
3.  Their domain setup is very similar: Settings -> Domains -> Add.
