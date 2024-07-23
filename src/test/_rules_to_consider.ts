export const rulesToConsider = [
  '@typescript-eslint/no-empty-object-type',
  '@typescript-eslint/no-import-type-side-effects',
  '@typescript-eslint/no-inferrable-types',
  '@typescript-eslint/no-invalid-this',
  '@typescript-eslint/no-loop-func',
  '@typescript-eslint/no-magic-numbers',
  '@typescript-eslint/no-meaningless-void-operator',
  '@typescript-eslint/no-mixed-enums',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing',
  '@typescript-eslint/no-redundant-type-constituents',
  '@typescript-eslint/no-require-imports',
  '@typescript-eslint/no-restricted-imports',
  '@typescript-eslint/no-shadow',
  '@typescript-eslint/no-unnecessary-condition',
  '@typescript-eslint/no-unnecessary-parameter-property-assignment',
  '@typescript-eslint/no-unnecessary-qualifier',
  '@typescript-eslint/no-unnecessary-template-expression',
  '@typescript-eslint/no-unnecessary-type-arguments',
  '@typescript-eslint/no-unnecessary-type-parameters',
  '@typescript-eslint/no-unsafe-assignment',
  '@typescript-eslint/no-unsafe-call',
  '@typescript-eslint/no-unsafe-declaration-merging',
  '@typescript-eslint/no-unsafe-enum-comparison',
  '@typescript-eslint/no-unsafe-function-type',
  '@typescript-eslint/no-unsafe-member-access',
  '@typescript-eslint/no-unsafe-return',
  '@typescript-eslint/no-unsafe-unary-minus',
  '@typescript-eslint/no-useless-empty-export',
  '@typescript-eslint/no-wrapper-object-types',
  '@typescript-eslint/parameter-properties',
  '@typescript-eslint/prefer-as-const',
  '@typescript-eslint/prefer-destructuring',
  '@typescript-eslint/prefer-enum-initializers',
  '@typescript-eslint/prefer-find',
  '@typescript-eslint/prefer-for-of',
  '@typescript-eslint/prefer-literal-enum-member',
  '@typescript-eslint/prefer-namespace-keyword',
  '@typescript-eslint/prefer-readonly-parameter-types',
  '@typescript-eslint/prefer-regexp-exec',
  '@typescript-eslint/prefer-string-starts-ends-with',
  '@typescript-eslint/require-await',
  '@typescript-eslint/switch-exhaustiveness-check',
  '@typescript-eslint/unified-signatures',
  '@typescript-eslint/use-unknown-in-catch-callback-variable',
  'arrow-body-style',
  'block-scoped-var',
  'camelcase',
  'capitalized-comments',
  'complexity',
  'consistent-this',
  'default-case',
  'for-direction',
  'func-name-matching',
  'func-names',
  'func-style',
  'getter-return',
  'grouped-accessor-pairs',
  'guard-for-in',
  'id-denylist',
  'id-length',
  'id-match',
  'import/consistent-type-specifier-style',
  'import/default',
  'import/dynamic-import-chunkname',
  'import/exports-last',
  'import/extensions',
  'import/group-exports',
  'import/max-dependencies',
  'import/named',
  'import/namespace',
  'import/newline-after-import',
  'import/no-amd',
  'import/no-anonymous-default-export',
  'import/no-commonjs',
  'import/no-cycle',
  'import/no-default-export',
  'import/no-deprecated',
  'import/no-dynamic-require',
  'import/no-empty-named-blocks',
  'import/no-extraneous-dependencies',
  'import/no-import-module-exports',
  'import/no-internal-modules',
  'import/no-mutable-exports',
  'import/no-named-as-default',
  'import/no-named-as-default-member',
  'import/no-named-export',
  'import/no-namespace',
  'import/no-nodejs-modules',
  'import/no-relative-packages',
  'import/no-relative-parent-imports',
  'import/no-restricted-paths',
  'import/no-self-import',
  'import/no-unassigned-import',
  'import/no-unresolved',
  'import/no-unused-modules',
  'import/no-useless-path-segments',
  'import/order',
  'import/prefer-default-export',
  'import/unambiguous',
  'line-comment-position',
  'logical-assignment-operators',
  'max-classes-per-file',
  'max-depth',
  'max-lines',
  'max-lines-per-function',
  'max-nested-callbacks',
  'max-statements',
  'multiline-comment-style',
  'n/callback-return',
  'n/exports-style',
  'n/file-extension-in-import',
  'n/global-require',
  'n/hashbang',
  'n/no-extraneous-import',
  'n/no-extraneous-require',
  'n/no-missing-import',
  'n/no-missing-require',
  'n/no-mixed-requires',
  'n/no-process-env',
  'n/no-process-exit',
  'n/no-restricted-import',
  'n/no-restricted-require',
  'n/no-sync',
  'n/no-unpublished-bin',
  'n/no-unpublished-import',
  'n/no-unpublished-require',
  'n/no-unsupported-features/es-builtins',
  'n/no-unsupported-features/es-syntax',
  'n/no-unsupported-features/node-builtins',
  'n/prefer-global/buffer',
  'n/prefer-global/console',
  'n/prefer-global/process',
  'n/prefer-global/text-decoder',
  'n/prefer-global/text-encoder',
  'n/prefer-global/url',
  'n/prefer-global/url-search-params',
  'n/prefer-node-protocol',
  'n/prefer-promises/dns',
  'n/prefer-promises/fs',
  'no-alert',
  'no-await-in-loop',
  'no-bitwise',
  'no-console',
  'no-constant-binary-expression',
  'no-constructor-return',
  'no-continue',
  'no-div-regex',
  'no-dupe-else-if',
  'no-duplicate-imports',
  'no-else-return',
  'no-empty-static-block',
  'no-eq-null',
  'no-extra-label',
  'no-implicit-coercion',
  'no-implicit-globals',
  'no-inline-comments',
  'no-inner-declarations',
  'no-invalid-this',
  'no-label-var',
  'no-lonely-if',
  'no-loop-func',
  'no-magic-numbers',
  'no-multi-assign',
  'no-negated-condition',
  'no-nested-ternary',
  'no-new-native-nonconstructor',
  'no-nonoctal-decimal-escape',
  'no-param-reassign',
  'no-plusplus',
  'no-promise-executor-return',
  'no-restricted-exports',
  'no-restricted-globals',
  'no-restricted-imports',
  'no-restricted-properties',
  'no-restricted-syntax',
  'no-script-url',
  'no-setter-return',
  'no-shadow',
  'no-ternary',
  'no-undef',
  'no-undefined',
  'no-underscore-dangle',
  'no-unsafe-optional-chaining',
  'no-unused-labels',
  'no-unused-private-class-members',
  'no-useless-concat',
  'no-warning-comments',
  'operator-assignment',
  'prefer-arrow-callback',
  'prefer-destructuring',
  'prefer-exponentiation-operator',
  'prefer-named-capture-group',
  'prefer-numeric-literals',
  'prefer-object-has-own',
  'prefer-object-spread',
  'prefer-rest-params',
  'prefer-spread',
  'prefer-template',
  'promise/always-return',
  'promise/avoid-new',
  'promise/catch-or-return',
  'promise/no-callback-in-promise',
  'promise/no-multiple-resolved',
  'promise/no-native',
  'promise/no-nesting',
  'promise/no-new-statics',
  'promise/no-promise-in-callback',
  'promise/no-return-in-finally',
  'promise/no-return-wrap',
  'promise/prefer-await-to-callbacks',
  'promise/prefer-await-to-then',
  'promise/valid-params',
  'radix',
  'require-atomic-updates',
  'require-await',
  'require-unicode-regexp',
  'require-yield',
  'sort-imports',
  'sort-keys',
  'sort-vars',
  'strict',
  'vars-on-top',
]
