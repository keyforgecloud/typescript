import KeyforgeAPI from './index';

const getRoot = async () => {
  const apis = await KeyforgeAPI.getAPIs();
  const api = await KeyforgeAPI.getAPI("api_HnMugtwHzd535WcWYirGrIXE")
  const key = await KeyforgeAPI.createKey({

  })

  console.log(apis);
  console.log(api);
};

KeyforgeAPI.setCredentials({
  apiId: "api_HnMugtwHzd535WcWYirGrIXE",
  accountToken: "262rROjJms1mzSFujq04WXBJ6LqcGXSwN3OBu1uR8Br6N7JKeGhl4oNd5TeHxQyK"
})

void getRoot().then();
