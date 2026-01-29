.PHONY: help publish

help:
	@echo
	@echo "COMMANDS:"
	@echo
	@echo "  make publish  - Build and publish package to npm"
	@echo

publish:
	@npm whoami >/dev/null 2>&1 || npm login
	rm -rf dist/
	npm run verify
	npm run build
	npm publish --access public
	@echo "✅ Published successfully!"
