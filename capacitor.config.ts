import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.rohilaharsh.expenseTracker',
  appName: 'expense-tracker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
