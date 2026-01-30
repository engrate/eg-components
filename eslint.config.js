import eslint from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import testingLibrary from 'eslint-plugin-testing-library'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'storybook-static/**',
      '.storybook/**',
    ],
  },

  // Base JavaScript recommended
  eslint.configs.recommended,

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },

  // React files
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off', // TypeScript handles prop types
    },
  },

  // Test files
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    plugins: {
      'testing-library': testingLibrary,
    },
    rules: {
      ...testingLibrary.configs.react.rules,
      // These rules are too strict for testing internals like charts and custom components
      'testing-library/no-node-access': 'off',
      'testing-library/no-container': 'off',
      'testing-library/prefer-screen-queries': 'off',
      'testing-library/no-wait-for-multiple-assertions': 'off',
    },
  },

  // Storybook files - base config first
  ...storybook.configs['flat/recommended'],

  // Storybook overrides - must come after base to take precedence
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      // Stories often have demo anchors with # hrefs
      'jsx-a11y/anchor-is-valid': 'off',
      // Stories may have demo labels for illustration
      'jsx-a11y/label-has-associated-control': 'off',
      // Using @storybook/react-vite framework
      'storybook/no-renderer-packages': 'off',
    },
  },

  // Test files - also disable label accessibility for test helpers
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
    },
  }
)
