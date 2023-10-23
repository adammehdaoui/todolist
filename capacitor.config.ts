import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'todolist.app',
  appName: 'todolist',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
