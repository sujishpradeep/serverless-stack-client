const dev = {
  STRIPE_KEY: "pk_test_1RCthZqlMRm68N8vH15DQQy300IguA4cbd",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-1fbkisxoszcaf"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://hxyoclie9c.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_SHubvGmIu",
    APP_CLIENT_ID: "2993f3vv2jgu5rjqqcjrnmv8kv",
    IDENTITY_POOL_ID: "ap-southeast-2:0d2c7647-4288-42d4-8aa4-6510a8642933"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_1RCthZqlMRm68N8vH15DQQy300IguA4cbd",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-g3b8vyhkrpwj"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://kri66lr4z8.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_oqMr8wv4Z",
    APP_CLIENT_ID: "4j9nsqktev3pcim5opjs629i65",
    IDENTITY_POOL_ID: "ap-southeast-2:3ddcb95b-3273-4028-969d-e372e7fa21d9"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
