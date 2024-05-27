# keyforge

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> The official Keyforge API client library for Javascript and Typescript.

## Install

```bash
npm install @keyforgecloud/lib
```

## Usage

```typescript
import KeyforgeAPI from '@keyforgecloud/lib';

const createAndVerify = async () => {
  KeyforgeAPI.setAccountToken("your-account-token")
  KeyforgeAPI.setDefaultAPI("your-api-id")

  const key = await KeyforgeAPI.createKey({
    name: 'My Key',
    ownerId: 'user_abc123',
    permissions: ['read', 'write'],
    metadata: {
      "key": "value"
    }
  }, 'your-api-id'); // API ID is optional if set a default (KeyforgeAPI.setDefaultAPI)

  const verification = await KeyforgeAPI.verifyKey(key.token)
    .then(() => true)
    .catch(() => false);

  if (verification) {
    console.log('Key verified successfully');
  } else {
    console.log('Key verification failed');
  }
};

createAndVerify();
```


[build-img]:https://github.com/keyforgecloud/typescript/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/keyforgecloud/typescript/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/keyforge
[downloads-url]:https://www.npmtrends.com/keyforgecloud/lib
[npm-img]:https://img.shields.io/npm/v/@keyforgecloud/lib
[npm-url]:https://www.npmjs.com/package/@keyforgecloud/lib
[issues-img]:https://img.shields.io/github/issues/keyforgecloud/typescript
[issues-url]:https://github.com/keyforgecloud/typescript/issues
[codecov-img]:https://codecov.io/gh/keyforgecloud/typescript/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/keyforgecloud/typescript
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
