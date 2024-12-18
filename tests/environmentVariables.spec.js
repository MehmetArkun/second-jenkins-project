import { test } from "@playwright/test";

test("Environemnet variable practice", async ({ page }) => {
  //go to visual studio settings, type >user, and click on user settings json
  //that's where we put out environemnt variables in vs studio configuration

  console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);

  
});

test("Bypass auth by encoding credientials base64 format with env @sep_login", async ({page}) => {
  //step1: encoding the credentials into base64 format with env
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  //buffer here is an interface of Uint8Array and has a method toString that converts it to a string in base64 format

  //step2: add the credentials to the HTTP header
  await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});
  //key + value format => map => authorization is key, basic + encodedCredentials is value

  await page.goto("https://practice.cydeo.com/basic_auth");

});