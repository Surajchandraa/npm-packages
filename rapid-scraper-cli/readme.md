# rapid-scraper-cli
cli tool for web scraping. you can get links,images,description,title,keywords,social_media links etc of a website using commands.

## Installation:
- `npm install rapid-scraper-cli`

## command:
```bash
    get <info> <website_url>
```

## commands available:
- `get links url`
-  `get description url`
- `get images url`
- `get social url`
- `get para url`
- `get title url`
- `get keywords url`

## Example 1-
- ```bash
    get links https://github.com/

- ```js
    '#start-of-content',
    'https://github.com/',
    '/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home',
    '/features/actions',
    '/features/packages',
    '/features/security',
    '/features/codespaces',
    '/features/copilot',
    '/features/code-review',
    '/features/issues',
    '/features/discussions',
    '/features',
    'https://docs.github.com',
    'https://skills.github.com/',
    'https://github.blog',
    ... more items
    ```

## Example 2:
- ```bash
    get social https://github.com/
    ```

 - ```js
    
    github: 'https://github.com/github/site-policy/pull/582',
    facebook: 'https://www.facebook.com/GitHub',
    linkedin: 'https://www.linkedin.com/company/github',
    youtube: 'https://www.youtube.com/github',
    tiktok: 'https://www.tiktok.com/@github'


    ```