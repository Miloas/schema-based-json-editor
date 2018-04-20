const { Service } = require('clean-scripts')

const tsFiles = `"packages/@(core|react)/@(src)/**/*.@(ts|tsx)" "spec/**/*.ts"`
const jsFiles = `"*.config.js" "spec/**/*.config.js"`
const excludeTsFiles = `"packages/@(core|react)/@(src)/**/*.d.ts"`

const tscCoreSrcCommand = `ngc -p packages/core/src`
const tscReactSrcCommand = `tsc -p packages/react/src`

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  build: [
    {
      copy: isDev ? undefined : [
        `cpy ./packages/core/src/libs.d.ts ./packages/core/dist`
      ],
      version: [
        {
          js: [
            tscCoreSrcCommand,
            {
              react: [
                tscReactSrcCommand,
                isDev ? undefined : `rollup --config packages/react/src/rollup.config.js`,
              ],
            }
          ],
        },
      ]
    }
  ],
  lint: {
    ts: `tslint ${tsFiles} --exclude ${excludeTsFiles}`,
    js: `standard ${jsFiles}`,
    export: `no-unused-export ${tsFiles} --exclude ${excludeTsFiles}`,
    commit: `commitlint --from=HEAD~1`,
    markdown: `markdownlint README.md change_logs.md`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: {
    ts: `tslint --fix ${tsFiles} --exclude ${excludeTsFiles}`,
    js: `standard --fix ${jsFiles}`
  },
  watch: {
    tscCoreSrcCommand: `${tscCoreSrcCommand} --watch`,
    tscReactSrcCommand: `${tscReactSrcCommand} --watch`,
  },
}
