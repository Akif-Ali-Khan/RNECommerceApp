import {by, device, expect, element} from 'detox';

describe('Category Detail Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('displays category details', async () => {
    // Wait for the loading component to disappear
    await expect(element(by.id('loading-component'))).toBeNotVisible();

    // Assert category header text
    await expect(element(by.text('New In'))).toBeVisible();

    // Assert subcategory texts
    await expect(element(by.text('Sub Category 1'))).toBeVisible();
    await expect(element(by.text('Sub Category 2'))).toBeVisible();
    await expect(element(by.text('Sub Category 3'))).toBeVisible();

    // Assert product texts
    await expect(
      element(by.text('Black Sheet Strappy Textured Glitter Bodycon Dress')),
    ).toBeVisible();
    await expect(
      element(by.text('Stone Ribbed Strappy Cut Out Detail Bodycon Dress')),
    ).toBeVisible();
  });
});
