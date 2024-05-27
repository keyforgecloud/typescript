import KeyforgeAPI from './index';

const getRoot = async () => {
  const apis = await KeyforgeAPI.getAPIs();

  console.log(apis);
};

KeyforgeAPI.setCredentials('', '50AxdevBeMrB1sZSzPur2pE0t1LVCDTDt6Yern08Qf4qlMsrKQu9TJn1eWhve92');

void getRoot().then();
