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
