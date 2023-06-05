// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "깃모지 선택~",
      
      customScope: "담당하신 브랜치 이름 또는 소속된 feature이름 적어주세요. 예) dashboardChart1",
      subject: "커밋 제목을 적어주세요. \n",
      body: '상세 내용을 적어주세요. 줄 바꿈은 "|" 을 사용해주세요.\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefix: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "이대로 커밋 하시겠습니까? (Y/N)"
    },
    types: [
      { value: "feat", name: "feat:     ✨  기능", emoji: ":sparkles:" },
      { value: "conf", name: "conf:      ⚙️  환경설정", emoji: ":gear:" },
      { value: "init", name: "init:     🎉  설치", emoji: ":tada:" },
      { value: "fix", name: "fix:    🔨  버그 수정", emoji: ":hammer:" },
      { value: "refactor", name: "refactor: 🏭   리팩토링", emoji: ":factory:" },
      { value: "typo", name: "typo:     ✏️ 오타 수정", emoji: ":pencil2:" },
      { value: "style", name: "style:     🗑️  코드 스타일 개선", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️   Changes that affect the build system or external dependencies", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: true,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: false,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 80,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
