## Josh's Gist Viewer

Search, list, view, and favorite Gists from Github.

### Setup

Clone the repo.

```
yarn install
yarn start
```

### Features

- [x] Search for Gists by Username
- [x] List Gists from that User
- [x] Get Gist details by ID
- [x] View Gist details
- [x] IN PROGRESS: Favoriting Gists

### Notes

This was an exercise in creating a project with React using very minimal libraries. No router libraries were used but I did begin to introduce flow for type checking. Lodash is also part of this library but definitely was not necessary. The react-scripts are merely for building the project and providing hot module replacement.

Part of the requirements was to build a small wrapper for the Github API.