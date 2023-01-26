module.exports = {
  'packages/**/{*.vue,*.js,*.ts,*.jsx,*.tsx}': ['eslint --fix --max-warnings=0 --cache', 'prettier --write --ignore-unknown ${staged}'],
  'packages/**/{*.scss,*.css}': 'stylelint --fix --cache',
};
