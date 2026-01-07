const envVariables = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
};

function checkConfig(conf: any) {
  const keys = Object.keys(conf);
  keys.forEach((key) => {
    if (!conf[key]) {
      console.log(`${key} is not in .env file`);
    } else {
      console.log("All env varaible are okay");
    }
  });
}

checkConfig(envVariables);

const apiBaseUrl = envVariables.apiBaseUrl;

export { apiBaseUrl };
