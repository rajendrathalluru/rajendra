# Rajendra Portfolio

Static portfolio site prepared for GitHub Pages deployment.

## Local preview

```bash
cd /Users/rajendrathalluru/Documents/portfolio
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy to GitHub Pages

### Option 1: Personal site

Create a repository named `your-github-username.github.io`, then push these files to the `main` branch.

Your site will publish at:

`https://your-github-username.github.io/`

### Option 2: Project site

Create a normal repository like `portfolio`, then push these files to the `main` branch.

Your site will publish at:

`https://your-github-username.github.io/portfolio/`

## GitHub settings

After pushing:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Push again if needed, or run the `Deploy Portfolio to GitHub Pages` workflow manually.

## First push

```bash
cd /Users/rajendrathalluru/Documents/portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/your-github-username/your-repo-name.git
git push -u origin main
```

## Notes

- The site uses relative asset paths, so it works for both personal and project GitHub Pages URLs.
- `.nojekyll` is included so GitHub Pages serves the site as plain static files.
