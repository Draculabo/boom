module.exports = {
  'packages/**/{*.vue,*.js,*.ts,*.jsx,*.tsx}': ['eslint --fix', 'prettier --write'],
  'packages/**/{*.scss,*.css}': 'stylelint --fix',
};
