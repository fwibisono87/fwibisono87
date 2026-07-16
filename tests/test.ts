import { expect, test } from '@playwright/test';

test('main document exposes its sections and project details', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'no-preference' });
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1, name: 'FRANCIS WIBISONO' })).toBeVisible();
	await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();

	await page.getByRole('button', { name: 'Open project: MinerbaOne' }).click();
	await expect(page.getByRole('heading', { level: 1, name: 'MinerbaOne' })).toBeFocused();
	await expect(page.getByText('■ RESTRICTED —')).toBeVisible();
	await page.getByRole('button', { name: '← BACK TO INDEX' }).click();
	await expect(page.getByRole('button', { name: 'Open project: MinerbaOne' })).toBeFocused();

	const juniorRole = page.getByRole('button', { name: /Junior Frontend Engineer/ });
	const currentRole = page.getByRole('button', { name: /Software Engineer/ });
	await expect(juniorRole).toHaveAttribute('aria-expanded', 'false');
	await expect(currentRole).toHaveAttribute('aria-expanded', 'false');
	await expect(page.locator('#experience-0')).toHaveAttribute('aria-hidden', 'true');
	await currentRole.click();
	await expect(currentRole).toHaveAttribute('aria-expanded', 'true');
	await expect(juniorRole).toHaveAttribute('aria-expanded', 'false');
	await expect(page.locator('#experience-0')).toHaveAttribute('aria-hidden', 'false');

	const panel = page.locator('#experience-0');
	await page.waitForTimeout(180);
	const expandingHeight = await panel.evaluate((element) => element.getBoundingClientRect().height);
	await page.waitForTimeout(340);
	const expandedHeight = await panel.evaluate((element) => element.getBoundingClientRect().height);
	expect(expandingHeight).toBeGreaterThan(0);
	expect(expandingHeight).toBeLessThan(expandedHeight);

	await currentRole.click();
	await expect(currentRole).toHaveAttribute('aria-expanded', 'false');
	await page.waitForTimeout(180);
	const collapsingHeight = await panel.evaluate((element) => element.getBoundingClientRect().height);
	expect(collapsingHeight).toBeGreaterThan(0);
	expect(collapsingHeight).toBeLessThan(expandedHeight);
	await page.waitForTimeout(340);
	await expect(panel).toHaveJSProperty('clientHeight', 0);
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
