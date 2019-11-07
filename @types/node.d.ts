declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    // MONGO_URI: string;
    // MONGO_USER: string;
    // MONGO_PASS: string;
  }
}
