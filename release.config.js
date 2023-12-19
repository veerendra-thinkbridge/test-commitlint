const config = {
  branches: [
    "main", 
   { name: 'prod', prerelease: 'prod' },
   { name: 'qa', prerelease: 'qa' },
   { name: 'dev', prerelease: 'dev' }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
  ],
};

module.exports = config;

    