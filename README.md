# LaunchDarkly User Importer

A simple app to help import and identify users into a LaunchDarkly environment.

## Setup
 - Install `node` v14 or greater
 - Install dependencies with `yarn|npm install`
 - Add LD keys to .env using the example provided in repo
 - Paste in your array of users into the `src/user-data.ts` file


## Run the importer
 - `yarn|npm run import:test` to import users into your test environment
 - `yarn|npm run import:prod` to import users into your production environment

