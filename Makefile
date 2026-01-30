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
	npm publish --access public
	npx gh-pages -d storybook-static
	rm -rf dist/ storybook-static/
	@echo "✅ Published npm package and Storybook to GitHub Pages!"
