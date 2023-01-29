module.exports = {
  'packages/**/{*.vue,*.js,*.ts,*.jsx,*.tsx}': ['eslint --fix --cache', 'prettier --write --ignore-unknown'],
  'packages/**/{*.scss,*.css}': 'stylelint --fix --cache',
};
