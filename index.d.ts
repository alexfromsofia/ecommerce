export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_DELIVERY_TOKEN: string;
      CONTENTFUL_PREVIEW_TOKEN: string;
      CONTENTFUL_ENVIRONMENT: string;
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_PAYMENT_DESCRIPTION: string;
      STRIPE_WEBHOOK_SECRET: string;
      NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
      NEXT_PUBLIC_AUTH0_SCOPE: string;
      NEXT_PUBLIC_AUTH0_DOMAIN: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_REDIRECT_URI: string;
      NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI: string;
      AUTH0_CLIENT_SECRET: string;
      SESSION_COOKIE_SECRET: string;
      SESSION_COOKIE_LIFETIME: string;
    }
  }
  interface Window {
    __user: any;
  }
}
