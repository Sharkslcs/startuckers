import { test, expect } from "@playwright/test";

test.describe("SEO metadata", () => {
  test("home expõe título e metatags sociais", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Infinity Auto Solutions/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", "Infinity Auto Solutions");
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", expect.stringContaining("/og"));
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  });
});

