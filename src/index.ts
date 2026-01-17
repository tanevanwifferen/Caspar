#!/usr/bin/env node

import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  console.log('Hello from Balthasar CLI!');
  console.log('Environment variable PORT:', process.env.PORT || 'not set');
}

main().catch((err) => {
  console.error('An error occurred:', err);
  process.exit(1);
});
