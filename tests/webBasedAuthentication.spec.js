import { expect, test } from "@playwright/test";

test("Bypass Authentication by embedding Credentials", async ({ page }) => {

    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth") 

    await page.waitForTimeout(3000);

    await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible();

});

test("Bypass auth by encoding credientials base64 format in a secure manner", async ({ page }) => {
    //step1: encoding the credentials into base64 format
   let encodedCredentials = Buffer.from("admin:admin").toString("base64");
   //buffer here is an interface of Uint8Array and has a method toString that converts it to a string in base64 format
    
   //step2: add the credentials to the HTTP header
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});
    //key + value format => map => authorization is key, basic + encodedCredentials is value

    await page.goto("https://practice.cydeo.com/basic_auth");

});


test("Bypass auth by encoding credientials base64 format with env", async ({page}) => {
  //step1: encoding the credentials into base64 format with env
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  //buffer here is an interface of Uint8Array and has a method toString that converts it to a string in base64 format

  //step2: add the credentials to the HTTP header
  await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});
  //key + value format => map => authorization is key, basic + encodedCredentials is value

  await page.goto("https://practice.cydeo.com/basic_auth");
});



