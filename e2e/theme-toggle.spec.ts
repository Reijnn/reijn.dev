import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test('should toggle theme from light to dark', async ({ page }) => {
    await page.goto('/');

    // Check initial theme (should be light by default)
    let theme = await page.locator('html').evaluate((el) =>
      el.getAttribute('data-theme')
    );
    expect(theme).toBe('light');

    // Click theme toggle
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();
    await themeToggle.click();

    // Wait for page reload
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(300);

    // Check theme changed to dark
    theme = await page.locator('html').evaluate((el) =>
      el.getAttribute('data-theme')
    );
    expect(theme).toBe('dark');
  });

  test('should toggle theme from dark to light', async ({ page }) => {
    await page.goto('/');

    // First set to dark by clicking toggle (since initial state is light)
    let themeToggle = page.locator('.theme-toggle');
    await themeToggle.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(300);

    // Verify we're now in dark mode
    let theme = await page.locator('html').evaluate((el) =>
      el.getAttribute('data-theme')
    );
    expect(theme).toBe('dark');

    // Now click toggle again to go back to light
    themeToggle = page.locator('.theme-toggle');
    await themeToggle.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(300);

    // Check theme changed to light
    theme = await page.locator('html').evaluate((el) =>
      el.getAttribute('data-theme')
    );
    expect(theme).toBe('light');
  });

  test('should persist theme preference across page reloads', async ({
    page,
  }) => {
    await page.goto('/');

    // Set dark theme
    const themeToggle = page.locator('.theme-toggle');
    await themeToggle.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(300);

    // Reload page manually
    await page.reload();

    // Check theme is still dark
    const theme = await page.locator('html').evaluate((el) =>
      el.getAttribute('data-theme')
    );
    expect(theme).toBe('dark');
  });

  test('should find theme toggle button on page', async ({ page }) => {
    await page.goto('/');

    // Check that theme toggle exists and is visible
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();

    // Check that it contains an SVG
    const svg = themeToggle.locator('svg.theme-toggler');
    await expect(svg).toBeVisible();
  });
});
