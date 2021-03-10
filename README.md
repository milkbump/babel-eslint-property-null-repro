This reproduces two errors that I think may be related.

Uncomment rules in `.eslintrc.js` to reproduce bugs. Use `npm run dev` to run Rollup.

Bugs are present using `macOS 10.15.7` and `npm@6.14.6`.

Uncommenting `"template-curly-spacing"` results in:
```
[!] (plugin eslint) TypeError: Cannot read property 'value' of null
Occurred while linting /Users/***/babel-repro/index.js:4
index.js
TypeError: Cannot read property 'value' of null
Occurred while linting /Users/***/babel-repro/index.js:4
    at checkSpacingBefore (/Users/***/babel-repro/node_modules/eslint/lib/rules/template-curly-spacing.js:52:24)
    at TemplateElement (/Users/***/babel-repro/node_modules/eslint/lib/rules/template-curly-spacing.js:136:17)
    at /Users/***/babel-repro/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (/Users/***/babel-repro/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (/Users/***/babel-repro/node_modules/eslint/lib/linter/node-event-generator.js:256:26)
    at NodeEventGenerator.applySelectors (/Users/***/babel-repro/node_modules/eslint/lib/linter/node-event-generator.js:285:22)
    at NodeEventGenerator.enterNode (/Users/***/babel-repro/node_modules/eslint/lib/linter/node-event-generator.js:299:14)
    at CodePathAnalyzer.enterNode (/Users/***/babel-repro/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at /Users/***/babel-repro/node_modules/eslint/lib/linter/linter.js:954:32
```

Uncommenting `"indent"` results in:
```
[!] (plugin eslint) TypeError: Cannot read property 'range' of null
Occurred while linting /Users/***/babel-repro/index.js:1
index.js
TypeError: Cannot read property 'range' of null
Occurred while linting /Users/***/babel-repro/index.js:1
    at OffsetStorage.setDesiredOffset (/Users/***/babel-repro/node_modules/eslint/lib/rules/indent.js:341:45)
    at /Users/***/babel-repro/node_modules/eslint/lib/rules/indent.js:1397:29
    at Array.forEach (<anonymous>)
    at Object.TemplateLiteral [as listener] (/Users/***/babel-repro/node_modules/eslint/lib/rules/indent.js:1389:34)
    at /Users/***/babel-repro/node_modules/eslint/lib/rules/indent.js:1635:55
    at Array.forEach (<anonymous>)
    at Program:exit (/Users/***/babel-repro/node_modules/eslint/lib/rules/indent.js:1635:26)
    at /Users/***/babel-repro/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (/Users/***/babel-repro/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
```