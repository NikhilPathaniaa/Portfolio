import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LeIb4shAAAAAOyY2VX4yZ2H2Yb5TbN0Yr0dM1Zl">
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}
