import { test, expect } from "@playwright/test";

test.describe("Smoke", () => {
  test("abre a home com sucesso", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /experiências digitais/i })).toBeVisible();
  });
});
