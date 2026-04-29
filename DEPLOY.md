# Kae Shop - Deployment Guide

## Overview
This guide walks you through:
1. Creating a GitHub repository
2. Pushing code to GitHub
3. Deploying to Vercel (live URL in ~5 minutes)
4. Adding a custom domain later

---

## Prerequisites
- GitHub account (free at github.com)
- Vercel account (free at vercel.com, can sign in with GitHub)
- Node.js installed (download from nodejs.org if you don't have it)
- Git installed (usually comes with Node.js)

---

## Step 1: Create GitHub Repository (2 minutes)

1. Go to **github.com** and log in
2. Click **"+"** in top right → **"New repository"**
3. Name: `kae-shop`
4. Set to **Public** (important for Vercel)
5. Click **"Create repository"**
6. **Copy the HTTPS URL** it shows you (looks like `https://github.com/YOUR-USERNAME/kae-shop.git`)

---

## Step 2: Initialize Project & Push to GitHub (3 minutes)

Open Terminal and run these commands (one at a time):

```bash
# Navigate to the kae-shop folder
cd path/to/kae-shop

# Initialize Git (if not already done)
git init

# Add your GitHub repo as the remote
git remote add origin https://github.com/YOUR-USERNAME/kae-shop.git

# Stage all files
git add .

# Commit
git commit -m "Initial commit: Kae Shop"

# Push to GitHub
git branch -M main
git push -u origin main
```

**If you get an authentication error:**
- GitHub now requires personal access tokens
- Go to github.com → Settings → Developer settings → Personal access tokens
- Create a new token with `repo` scope
- Use the token as your password when pushing

After push, refresh github.com/YOUR-USERNAME/kae-shop and verify files appear there.

---

## Step 3: Deploy to Vercel (literally one click)

1. Go to **vercel.com** and sign up (use GitHub login, easiest)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Find and select **`kae-shop`** from the list
5. Click **"Import"**
6. **Leave all settings as default** (Vercel auto-detects it's a Vite app)
7. Click **"Deploy"**

**That's it.** Vercel builds and deploys. You'll get a URL like:
```
https://kae-shop-xxxxx.vercel.app
```

This is your **live site**. Send this URL to Kae.

---

## Step 4: Auto-Deploy on Updates

Now whenever you push code to GitHub:
```bash
git add .
git commit -m "Updated products" (or whatever change)
git push
```

Vercel automatically detects the push and redeploys. No manual steps.

---

## Step 5 (Later): Custom Domain

Once Kae is happy, buy a domain (Namecheap, GoDaddy, Google Domains):
- `kae-shop.com` or `shop.kaefficial.com` or similar

Then in Vercel:
1. Go to your project → **Settings** → **Domains**
2. Add your domain
3. Vercel gives you DNS records to add (takes ~10 minutes to propagate)
4. Done. Your site is now at your custom domain.

---

## Making Changes

To update the site later (add products, change prices, etc.):

1. Edit `src/App.jsx` locally
2. Push to GitHub: `git add . && git commit -m "..." && git push`
3. Vercel redeploys automatically
4. Changes live in ~30 seconds

---

## Troubleshooting

**"Command not found: git"**
- Install Git from git-scm.com

**"npm: command not found"**
- Install Node.js from nodejs.org

**Vercel won't deploy**
- Check that repo is Public (not Private)
- Check that you connected with GitHub account

**Need to change product info?**
- Edit the `products` array in `src/App.jsx`
- Each product has: name, color, material, details, status, price
- Push to GitHub and Vercel auto-deploys

---

## Questions?

DM me if anything fails. But this workflow is bulletproof—you've got this.
