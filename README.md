# orsondewitt.com

Jekyll site (GitHub Pages). Run locally with `bundle exec jekyll serve`.

## Add a project

1. Add an entry to `_data/projects.yml` (title, colours, image, facts, media, links). Order in the file is the order on the homepage.
2. Create `_pages/<slug>.md` with `layout: project`, `project: <slug>`, `permalink: /<slug>`, a `title`, `description` and `image`. The page body is the story.
3. Put images in `assets/img/` (about 1000 px wide, JPEG). The homepage, the project page and "Next project" update themselves.

Original, uncompressed artwork lives in `assets/source/` and is not published.
