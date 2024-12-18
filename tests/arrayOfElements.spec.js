import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

   let elements;
    
    test.beforeEach(async({page}) => {
      await page.goto("https://practice.cydeo.com/");
      await page.waitForTimeout(3000);
      elements = await page.locator("//ul[@class='list-group']/li/a").all();
      //we added all method to get all elements at once,
      //otherwise it would return the first one wihtout it
    });


  test("Verify that there are exactly 50 link elements within the <ul> tag.", async ({
    page,
  }) => {
    
    

    expect(elements.length).toBe(50);
    //we used toBe method to check the length of the array.
    //we used this method, because elements.length is a value, not a locator object

    expect(elements.length).toBeGreaterThanOrEqual(20);
    expect(elements.length).toBeLessThan(100);
    //these are other methods that I can use with the value inside

  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible and clickable.", async ({
    page}) => {

        for (let element of elements) {
            await expect(element).toBeVisible();
            //expect(await element.isVisible()).toBeTruthy();
            await expect(element).toBeEnabled;
        };

  });

  test("Verify that each of 50 link elements within the <ul> tag has a href attribute.", async ({
    page,
  }) => {

    for (let element of elements){

      await expect(element).toHaveAttribute("href");
      
      console.log(
        `${await element.innerText()} : ${await element.getAttribute("href")}`
      );
      //const href = await element.getAttribute("href");
      //expect(href).not.toBeNull();
    }

  });
});

/*
1. Verify that there are exactly 50 link elements within the <ul> tag.
2. Verify that each of the 50 link elements within the <ul> tag is visible and clickable.
3. Verify that each of 50 link elements within the <ul> tag has a href attribute.
*/
