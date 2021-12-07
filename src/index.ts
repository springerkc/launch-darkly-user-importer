const dotenv = require('dotenv').config();
import * as LDClient from 'launchdarkly-node-client-sdk';
import { insertSpace } from './utils';
import { IUser, userData } from './user-data';

const appLabel = '[LaunchDarklyImporter]';
const enviro = process.env.enviro || '';
const devKey = process.env.ldDevKey || '';
const prodKey = process.env.ldProdKey || '';
const passes = [];
const fails = [];

const client = LDClient.initialize(enviro === 'prod' ? prodKey : devKey, { anonymous: true }, { eventCapacity: 500 });

const identifyUsers = () => Promise
  .all(userData
    .map(async (user: IUser) => {
      try {
        console.log('Processing => ', `${user.id} - ${user.name}`);
        await client.identify({
          key: user.id,
          name: user.name,
          email: user.email,
          custom: {
            staff: user.staff || false,
            multiple_emails: user.multiple_emails,
            two_factor_auth: user.two_factor_auth,
          },
        });
        passes.push(user);
      } catch (error) {
        console.log('Failed to identify => ', `${user.id} - ${user.name}`);
        fails.push(user);
      }
    })
  );

const printSummary = () => {
  const pLeng = passes.length.toString().length;
  const fLeng = fails.length.toString().length;
  console.log('|---------- Post Identification Report ----------|');
  console.log(`|${insertSpace(49)}|`)
  console.log(`| ${passes.length}${insertSpace(50 - (pLeng + 35))}🎉 users successfully identified |`);
  console.log(`| ${fails.length}${insertSpace(50 - (fLeng + 30))}⛔ users failed to identify |`);
  console.log('|________________________________________________|');
  process.exit();
};


(async () => {
  client.on('ready', async () => {
    console.log(`${appLabel} Importing Environment => `, process.env.enviro);
    await identifyUsers();
    printSummary();
  });
})();
