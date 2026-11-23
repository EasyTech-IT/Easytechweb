const { test, expect } = require("@playwright/test");

test("homepage exposes consistent EasyTech search metadata", async ({ page }) => {
  const response = await page.goto("/");
  expect(response.status()).toBe(200);
  await expect(page).toHaveTitle("IT-Service in Altenstadt & Wetterau | EasyTech");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https:\/\/easytechit\.de\/?$/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "IT-Service in Altenstadt & Wetterau | EasyTech",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /IT-Service für Privatpersonen/,
  );
});

test("software development is discoverable and works on mobile", async ({ page }) => {
  await page.goto("/");
  const serviceLink = page.locator('.home-service-links a[href="/softwareentwicklung/"]');
  await expect(serviceLink).toBeVisible();
  await serviceLink.click();
  await expect(page).toHaveURL(/\/softwareentwicklung\/$/);
  await expect(page.getByRole("heading", { name: /Ihre Idee/ })).toBeVisible();
  await expect(page.getByText("sie sind keine dargestellten Kundenprojekte")).toBeVisible();
  await expect(page.getByRole("link", { name: "Projekte ansehen" })).toHaveAttribute("href", "/projekte/");
  await expect(page.getByRole("link", { name: /Projekt besprechen/ }).first()).toHaveAttribute("href", "/kontakt/");

  await page.setViewportSize({ width: 320, height: 800 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  await expect(page.getByRole("heading", { name: "Web-Apps" })).toBeVisible();
});

test("IT-cost guide has valid metadata, sources, and a mobile-friendly price table", async ({ page }) => {
  const response = await page.goto("/ratgeber/it-betreuung-kosten-kmu/");
  expect(response.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Was kostet externe IT-Betreuung für KMU?", level: 1 })).toBeVisible();

  const structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(structuredData["@type"]).toBe("Article");
  expect(structuredData.publisher.name).toBe("EasyTech IT-Solutions");
  expect(structuredData.author).toBeUndefined();
  expect(structuredData.datePublished).toBeUndefined();
  expect(structuredData.dateModified).toBeUndefined();
  await expect(page.locator('a[href^="https://www.ionos.de/"]')).toHaveCount(2);
  await expect(page.locator('a[href*="bsi.bund.de"][href*="CyberRisikoCheck"]')).toHaveCount(1);

  await page.setViewportSize({ width: 390, height: 844 });
  const table = page.locator(".article-content table");
  const dimensions = await table.evaluate((element) => ({
    width: element.getBoundingClientRect().width,
    scrollWidth: element.scrollWidth,
    viewportWidth: window.innerWidth,
  }));
  expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewportWidth);
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.width + 1);
});

test("analytics requires consent and stops after withdrawal", async ({ browser }) => {
  const context = await browser.newContext();
  const analyticsRequests = [];
  await context.route(/googletagmanager|google-analytics/, async (route) => {
    analyticsRequests.push(route.request().url());
    await route.fulfill({ status: 200, contentType: "application/javascript", body: "" });
  });

  const page = await context.newPage();
  await page.goto("/kontakt/", { waitUntil: "networkidle" });
  await expect.poll(() => page.evaluate(() => window.__easytechAnalyticsState)).toBe("denied");
  expect(await page.evaluate(() => localStorage.getItem("ja-itc-cookie-consent"))).toBeNull();
  expect(analyticsRequests).toHaveLength(0);

  await page.getByRole("button", { name: "Cookie-Einstellungen", exact: true }).click();
  await page.getByRole("button", { name: /Alle akzeptieren/ }).click();
  await expect.poll(() => page.evaluate(() => window.__easytechAnalyticsState)).toBe("granted");
  expect(analyticsRequests.filter((url) => url.includes("gtag/js"))).toHaveLength(1);

  await page.getByRole("button", { name: "Cookie-Einstellungen", exact: true }).click();
  await page.getByRole("button", { name: /Nur notwendige/ }).click();
  await expect.poll(() => page.evaluate(() => window.__easytechAnalyticsState)).toBe("denied");
  expect(JSON.parse(await page.evaluate(() => localStorage.getItem("ja-itc-cookie-consent"))).analytics).toBe(false);
  expect(analyticsRequests.filter((url) => url.includes("gtag/js"))).toHaveLength(1);
  await context.close();
});
