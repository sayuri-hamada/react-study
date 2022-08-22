module.exports = {
  '**/*.{ts,tsx}': ['yarn lint:script', 'git add --force'],
  '**/*.scss': ['yarn lint:style', 'git add --force'],
  '**/*.{js,json}': ['yarn prettier', 'git add --force'],
};
