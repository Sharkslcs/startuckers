import { test, expect } from "@playwright/test";

const prodUrl = process.env.PROD_URL ?? "https://startup-site.vercel.app";

if (!prodUrl) {
  throw new Error("Defina PROD_URL para rodar a validação de produção");
}

test.describe("Health check produção", () => {
  test("página principal carrega com título e CTA", async ({ page }) => {
    await page.goto(prodUrl);

    await expect(page).toHaveTitle(/Infinity Auto Solutions/i);
    await expect(page.getByRole("link", { name: /Fale com um especialista/i })).toBeVisible();
  });
});

