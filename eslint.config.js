import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS/TS 공통 설정 + 룰 추가 (svelte 제외))
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended", "prettier"],
    rules: {
      // 1. 들여쓰기 2칸
      indent: ["error", 2],
      // 2. 세미콜론 반드시 사용
      semi: ["error", "always"],
      // 3. 줄바꿈 방식: LF
      "linebreak-style": ["error", "unix"],
      // 4. 미사용 변수 경고
      "no-unused-vars": "warn"
    }
  },

  // Svelte 파일 전용 설정
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: "@typescript-eslint/parser" // TS 사용시
      },
      globals: globals.browser
    },
    plugins: {
      svelte: sveltePlugin
    },
    rules: {
      ...sveltePlugin.configs.recommended.rules,
      "svelte/indent": ["error", { indent: 2 }],
      semi: ["error", "always"],
      "linebreak-style": ["error", "unix"],
      "no-unused-vars": "warn"
    }
  },

  // 글로벌 설정 (JS/TS만)
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser
    }
  },

  // TypeScript 설정
  ...tseslint.configs.recommended
]);