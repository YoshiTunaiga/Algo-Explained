n = 6;

function getNthFib(n) {

  // If number is (1) or (0) return 0;
  if(n === 1 || n === 0) return 0;

  // If number is (2) return 1;
	else if (n === 2) return 1;

  // Else, if number is any other, get the fibonacci
	else return getNthFib(n - 1) + getNthFib(n - 2);
}

getNthFib(n);
