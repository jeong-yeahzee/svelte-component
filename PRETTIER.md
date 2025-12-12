# Prettier 설정

프로젝트에서 사용하는 Prettier 설정입니다.

```jsonc
{
  "arrowParens": "always",        // 화살표 함수 매개변수가 하나라도 항상 괄호를 사용
  "bracketSameLine": true,        // JSX/Svelte 태그에서 마지막 `>`를 새 줄로 할지 여부
  "objectWrap": "preserve",       // 객체 리터럴 줄바꿈을 그대로 유지
  "bracketSpacing": true,         // 객체 리터럴에서 중괄호 안에 공백을 넣을지 여부 { foo: bar }
  "semi": true,                   // 문장 끝에 세미콜론 추가
  "experimentalOperatorPosition": "end", // 연산자 위치를 라인 끝으로 두는 실험적 옵션
  "experimentalTernaries": false, // 삼항 연산자 줄바꿈 관련 실험적 옵션 사용 여부
  "singleQuote": false,           // 문자열에 싱글 쿼트(') 대신 더블 쿼트(") 사용
  "quoteProps": "as-needed",      // 객체 속성 이름에 필요할 때만 따옴표 사용
  "trailingComma": "none",        // 배열/객체 마지막에 쉼표 추가 여부: none, es5, all 가능
  "singleAttributePerLine": false,// Svelte/JSX 태그 속성을 한 줄에 여러 개 쓸 수 있음
  "htmlWhitespaceSensitivity": "ignore", // HTML에서 공백 민감도: ignore, css, strict
  "vueIndentScriptAndStyle": true, // Svelte에서는 <script>와 <style>도 들여쓰기
  "proseWrap": "preserve",        // 마크다운 등 prose 줄바꿈 유지 방식
  "insertPragma": false,          // 파일 상단에 prettier 프래그마 주석 삽입 여부
  "requirePragma": false,         // 프래그마가 있어야만 포맷하도록 강제
  "useTabs": false,               // 들여쓰기 시 탭 대신 스페이스 사용
  "embeddedLanguageFormatting": "auto", // JS/CSS 등 내장 언어 코드 자동 포맷
  "tabWidth": 2,                  // 들여쓰기 스페이스 개수
  "printWidth": 100,              // 한 줄 최대 길이 (전체 기본)
  "plugins": ["prettier-plugin-svelte"], // Svelte 파일 포맷을 위해 Svelte 플러그인 사용
  "overrides": [
    {
      "files": "*.svelte",        // Svelte 파일에만 적용
      "options": {
        "parser": "svelte"        // Svelte 전용 파서 사용
      }
    },
    {
      "files": "*.ts",            // TypeScript 파일에만 적용
      "options": {
        "printWidth": 80          // TS 파일은 한 줄 최대 길이 80으로 제한
      }
    }
  ]
}