import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Check(): checks the radio button and checkbox if they haven't checked yet", async ({ page }) => {
   let checkboxesLink = page.locator("text='Checkboxes'");
   await checkboxesLink.click();

   let firstCheckbox = page.locator("#box1");
   let secondCheckbox = page.locator("#box2");

   await page.waitForTimeout(3000);

   await firstCheckbox.check();
   await secondCheckbox.check();

   await expect(firstCheckbox).toBeChecked();
   await expect(secondCheckbox).toBeChecked();

  });

  test("Uncheck(): unchecks the radio button and checkbox if they haven't unchecked yet", async ({ page }) => {

let checkboxesLink = page.locator("text='Checkboxes'");
await checkboxesLink.click();

let firstCheckbox = page.locator("#box1");
let secondCheckbox = page.locator("#box2");

await page.waitForTimeout(3000);

await firstCheckbox.uncheck();
await secondCheckbox.uncheck();

await expect(firstCheckbox).not.toBeChecked();
await expect(secondCheckbox).not.toBeChecked();  

});

  test("selectOption(): for drop down boxes", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let dropdownBox = page.locator("//select[@id='dropdown']");

    //select by value
    //await dropdownBox.selectOption("1");

    //select by text
    //await dropdownBox.selectOption({ label: "Option 1" });

    //select by index
    //await dropdownBox.selectOption({ index: 1 });

  })

  test("innerText(): retrieves the visible text of the element", async ({page}) => {

    let headerElement = page.locator("//span[@class='h1y'");

    let expectedText = "Test Automation Practice";

    // option 1 - using expect & element to check the text
    await expect(headerElement).toHaveText(expectedText);

    let actualText = await headerElement.innerText();

    //option2: actualText is a value of the element, not the element itself, therefore we use toEqual()
    //expect(actualText).toEqual(expectedText);

  });


  test("inputValue()", async({page}) => {
    let inputLink = page.locator("text='Inputs'")
    await inputLink.click();
    await page.waitForTimeout(3000);

    let numberInputBox = page.locator("//input[@type='number']");
    await numberInputBox.fill("98765");
    await page.waitForTimeout(3000);

    let inputValue = await numberInputBox.inputValue();
    expect(inputValue).toEqual("98765");
    console.log("Input value is: " + inputValue);

  });

  test("getAttribute()", async({page})=>{

    let abTestingLink = page.getByText("A/B Testing");
    let hrefValue = await abTestingLink.getAttribute("href");
    console.log("Href value is: " + hrefValue);
    expect(hrefValue).toEqual("/abtesting");

  });

  test("state methods of locator object", async ({page}) => {
   let header2Element = page.getByText("Available Examples");

   //expect(await header2Element.isVisible()).toBeTruthy(); bu ikinci option cozum

  await expect(header2Element).toBeVisible();
    
  });

  test("isEnabled(), to test if a link is clickable", async ({page}) => {
        let abTestingLink = page.getByText("A/B Testing");

        //expect(await abTestingLink.isEnabled()).toBeTruthy();
        // expect'in ilk ici boolean ile dolu, sonra o boolean dogru mu degil mi diyoruz tobetruthy ile
        
        await expect(abTestingLink).toBeEnabled();
        // boyle de olur, bu da kisa cozum

      //isDisabled da tam tersi

    

  })

  // bu methodlarda ana nokta su, isDisabled, isEnabled, isVisible falan bunlarla expect icine zincirleme
  // booelan koyabiliyoruz, sonra toBeTruthy() veya toBeFalsy() ile kontrol ediyoruz
  //to be metodlarini ise expect disina zincirliyoruz

});
