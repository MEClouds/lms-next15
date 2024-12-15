import { LogtoNextConfig, UserScope } from "@logto/next"

export const logtoConfig: LogtoNextConfig = {
  scopes: [UserScope.Email, UserScope.Phone, UserScope.CustomData],
  endpoint: "https://nkgs9e.logto.app/",
  appId: "zbtmrdyc8qk7nljqc3zfj",
  appSecret: "dp75d0yh8RZXG5cSYp4RRwn3A9cMCU1a",
  baseUrl: "http://localhost:3000", // Change to your own base URL
  cookieSecret: "V3y08StbXe47PxakfITPmwwVj5dYJJEu", // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === "production",
}
