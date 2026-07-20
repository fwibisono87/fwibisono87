import type { PlaywrightTestConfig } from '@playwright/test';
import { existsSync } from 'node:fs';

const systemChrome = process.env.PLAYWRIGHT_CHROME_PATH ??
	(existsSync('/usr/bin/google-chrome-stable') ? '/usr/bin/google-chrome-stable' : undefined);

const config: PlaywrightTestConfig = {
	use: {
		baseURL: 'http://127.0.0.1:4173',
		launchOptions: systemChrome ? { executablePath: systemChrome } : undefined
	},
	webServer: {
		command: 'npm run build && npm run preview -- --host 127.0.0.1',
		port: 4173,
		reuseExistingServer: true
	},
	testDir: 'tests'
};

export default config;
