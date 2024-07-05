# Unique Email Addresses

## Prompt

Every **valid email** consists of a **local name** and a **domain name**, separated by the `@` sign. Besides lowercase letters, the email may contain one or more `.` or `+`.

- For example, in `alice@leetcode.com`, `alice` is the **local name**, and `leetcode.com` is the **domain name**.

If you add periods `.` between some characters in the **local name** part of an email address, mail sent there will be forwarded to the same address without dots in the **local name**. Note that this rule **does not apply** to **domain names**.

- For example, `alice.z@leetcode.com` and `alicez@leetcode.com` forward to the same email address.

If you add a plus `+` in the **local name**, everything after the first plus sign **will be ignored**. This allows certain emails to be filtered. Note that this rule **does not apply** to **domain names**.

- For example, `m.y+name@email.com` will be forwarded to `my@email.com`.
  It is possible to use both of these rules at the same time.

Given an array of strings `emails` where we send one email to each `emails[i]`, return _the number of different addresses that actually receive mails._

## Sample Input

```js
emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
```

## Sample Output

```js
2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
```

## Solution #1

```js
const numUniqueEmails = function (emails) {
  let result = new Set(); // create a new Set

  // Loop through the emails array
  for (let idx = 0; idx < emails.length; idx++) {
    let currentEmail = emails[idx];

    let domain = currentEmail.split("@");
    let local = domain[0].split("+");

    // Add to the Set after removing all dots from the local names.
    result.add(local[0].replaceAll(".", "") + "@" + domain[1]);
  }
  // return the result's size as the number of different emails
  return result.size;
};
```

## Solution #2

```js
const numUniqueEmails = function (emails) {
  let result = new Set();

  for (let email in emails) {
    // O(n)
    let currentEmail = emails[email],
      jidx = 0,
      localName = [],
      gidx = currentEmail.length - 1,
      domainName = [];

    // Get the local name
    while (currentEmail[jidx] !== "+" && currentEmail[jidx] !== "@") {
      // O(n)
      if (currentEmail[jidx] !== ".") localName.push(currentEmail[jidx]);
      jidx++;
    }

    // Get the domain name
    while (currentEmail[gidx] !== "@") {
      // O(n)
      domainName.unshift(currentEmail[gidx]);
      gidx--;
    }

    domainName.unshift("@");
    result.add(localName.concat(domainName).join(""));
  }
  return result.size;
};
```
