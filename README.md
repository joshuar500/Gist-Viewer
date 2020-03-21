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
- [x] Favoriting Gists

### Notes

This was an exercise in creating a project with React using very minimal libraries. No router libraries were used. Flow was introduced for type checking -- this can be improved. Lodash is also part of this library but I could have ommitted it. The react-scripts are merely for building the project and providing hot module replacement (part of create-react-app).

Part of the requirements was to build a small wrapper for the Github API.
