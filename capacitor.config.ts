import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ayay.jarviscommandcenter',
  appName: 'J.A.R.V.I.S Command Center',
  webDir: 'www',
  server: {
    url: 'https://hizq3w7nw2z5u.kimi.place',
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
