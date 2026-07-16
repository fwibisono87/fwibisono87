import { expect, test } from '@playwright/test';

test('main document exposes its sections and project details', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1, name: 'FRANCIS WIBISONO' })).toBeVisible();
	await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();

	await page.getByRole('button', { name: 'Open project: MinerbaOne' }).click();
	await expect(page.getByRole('heading', { level: 1, name: 'MinerbaOne' })).toBeFocused();
	await expect(page.getByText('■ RESTRICTED —')).toBeVisible();
	await page.getByRole('button', { name: '← BACK TO INDEX' }).click();
	await expect(page.getByRole('button', { name: 'Open project: MinerbaOne' })).toBeFocused();
});

test('annex navigation and caption controls are keyboard-accessible', async ({ page }) => {
	await page.goto('/hashtag');
	await expect(page.getByRole('heading', { level: 1, name: 'CAPTION GENERATOR' })).toBeVisible();
	await page.getByLabel('CHARACTER').fill('Hoshimachi Suisei');
	await page.getByRole('button', { name: '#hololive' }).click();
	const caption = page.locator('pre[aria-label="Generated caption"]');
	await expect(caption).toContainText('Hoshimachi Suisei');
	await expect(caption).toContainText('#hololive');
});

test('photo annex exposes real event folders', async ({ page }) => {
	await page.goto('/photos');
	await expect(page.getByRole('heading', { level: 1, name: 'PHOTOGRAPHS' })).toBeVisible();
	await expect(page.getByText('Gelar Jepang UI 2023')).toBeVisible();
	await expect(page.getByText('■ ARCHIVE OFFLINE — EMAIL FOR ACCESS').first()).toBeVisible();
});
