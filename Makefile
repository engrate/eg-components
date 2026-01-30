.PHONY: help publish

help:
	@echo
	@echo "COMMANDS:"
	@echo
	@echo "  make publish  - Build and publish package to npm + Storybook to GitHub Pages"
	@echo

publish:
	rm -rf dist/ storybook-static/
	npm run verify
	npm run build
	npm run build-storybook
	# The .nojekyll file tells GitHub Pages to bypass Jekyll processing and serve all files as-is. This ensures Storybook's assets (including any files/folders starting with _) are properly served.
	touch storybook-static/.nojekyll
	npm publish --access public
	npx gh-pages -d storybook-static
	rm -rf dist/ storybook-static/
	@echo "✅ Published npm package and Storybook to GitHub Pages!"
