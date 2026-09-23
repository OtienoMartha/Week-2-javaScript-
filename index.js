// ----------
// TASK 1 — FIVE CLASSIC FUNCTIONS
// -----------

/**
 * fizzBuzz(n)
 * Prints numbers 1..n.
 * Multiples of 3 → "Fizz", multiples of 5 → "Buzz",
 * multiples of both → "FizzBuzz".
 * Returns an array of the values so we can test it.
 */
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

/**
 * reverseString(str)
 * Returns the string with its characters reversed.
 * "nairobi" → "iboriaN"
 */
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

/**
 * isPalindrome(str)
 * Returns true if the string reads the same forwards and backwards,
 * ignoring case and non-alphanumeric characters.
 * "Racecar" → true, "hello" → false
 */
function isPalindrome(str) {
    // Normalise: lowercase and strip anything that isn't a letter or digit
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

/**
 * findLargest(arr)
 * Returns the largest number in an array.
 */
function findLargest(arr) {
    if (arr.length === 0) return null;

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

/**
 * countVowels(str)
 * Returns the number of vowels (a, e, i, o, u) in a string.
 * Case-insensitive.
 */
function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// --- Task 1 tests ---
console.log("=== Task 1: Classic Functions ===");
console.log("fizzBuzz(15):", fizzBuzz(15).join(", "));
console.log("fizzBuzz(5): ", fizzBuzz(5).join(", "));
console.log("reverseString('nairobi'):", reverseString("nairobi"));
console.log("reverseString('hello'):  ", reverseString("hello"));
console.log("isPalindrome('Racecar'):", isPalindrome("Racecar"));
console.log("isPalindrome('hello'):  ", isPalindrome("hello"));
console.log("findLargest([10, 45, 2, 67, 23]):", findLargest([10, 45, 2, 67, 23]));
console.log("findLargest([-5, -1, -10, -3]): ", findLargest([-5, -1, -10, -3]));
console.log("countVowels('JavaScript'):", countVowels("JavaScript"));
console.log("countVowels('aeiou'):     ", countVowels("aeiou"));
console.log();


// -----------
// TASK 2 — KENYAN COUNTY OBJECT
// ----------

// Two county objects
const nairobi = {
    name: "Nairobi",
    capital: "Nairobi City",
    population: 4397073,
    area: 696, // km²
    borders: ["Kiambu", "Machakos", "Kajiado"]
};

const mombasa = {
    name: "Mombasa",
    capital: "Mombasa City",
    population: 1208333,
    area: 212, // km²
    borders: ["Kilifi", "Kwale"]
};

/**
 * formatPopulation(num)
 * Formats a number with commas. 4397073 → "4,397,073"
 */
function formatPopulation(num) {
    return num.toLocaleString("en-US");
}

/**
 * displayCounty(county)
 * Returns a formatted summary string.
 */
function displayCounty(county) {
    const population = formatPopulation(county.population);

    return `${county.name} County | Capital: ${county.capital} | Population: ${population} | Area: ${county.area} km²`;
}

/**
 * bordersString(county)
 * Returns "X borders A, B, and C" — note the "and" before the last item.
 * If there are only two borders, "X borders A and B".
 */
function bordersString(county) {
    const b = county.borders;

    if (b.length === 1) {
        return `${county.name} borders ${b[0]}`;
    }

    const allButLast = b.slice(0, -1).join(", ");
    const last = b[b.length - 1];

    return `${county.name} borders ${allButLast}, and ${last}`;
}

// --- Task 2 tests ---
console.log("=== Task 2: Kenyan County Object ===");
console.log(displayCounty(nairobi));
console.log(displayCounty(mombasa));
console.log(bordersString(nairobi));
console.log(bordersString(mombasa));
console.log();


// ----------------
// TASK 3 — MATATU ROUTE SYSTEM
// ----------------

const routes = [
    { name: "Route 11 - Eastleigh",  fare: 50,  stops: ["CBD", "Pangani", "Eastleigh", "Mathare"] },
    { name: "Route 23 - Langata",    fare: 80,  stops: ["CBD", "Uhuru Gardens", "Langata", "Karen"] },
    { name: "Route 33 - Rongai",     fare: 100, stops: ["CBD", "Langata", "Ongata Rongai", "Rimpa"] },
    { name: "Route 34 - South B",    fare: 40,  stops: ["CBD", "South B", "South C", "Nairobi West"] },
    { name: "Route 44 - Buruburu",   fare: 50,  stops: ["CBD", "Jogoo Road", "Hamza", "Buruburu"] },
    { name: "Route 46 - Donholm",    fare: 60,  stops: ["CBD", "Jogoo Road", "Donholm", "Kayole"] },
    { name: "Route 58 - Kikuyu",     fare: 120, stops: ["CBD", "Westlands", "Kinoo", "Kikuyu"] },
    { name: "Route 100 - Githurai",  fare: 70,  stops: ["CBD", "Thika Road", "Roysambu", "Githurai"] },
    { name: "Route 125 - Thika",     fare: 200, stops: ["CBD", "Thika Road", "Ruiru", "Juja", "Thika"] },
    { name: "Route 14 - Westlands",  fare: 30,  stops: ["CBD", "University Way", "Museum Hill", "Westlands"] }
];

/**
 * cheapestRoute(routes)
 * Returns the route with the lowest fare.
 * Output: "Cheapest: Route 14 - Westlands at KES 30"
 */
function cheapestRoute(routes) {
    if (routes.length === 0) return "No routes available";

    let cheapest = routes[0];

    for (const route of routes) {
        if (route.fare < cheapest.fare) {
            cheapest = route;
        }
    }

    return `Cheapest: ${cheapest.name} at KES ${cheapest.fare}`;
}

/**
 * routesThroughStop(routes, stop)
 * Returns an array of route names that include the given stop.
 */
function routesThroughStop(routes, stop) {
    const matches = [];

    for (const route of routes) {
        if (route.stops.includes(stop)) {
            matches.push(route.name);
        }
    }

    return matches;
}

/**
 * journeyFare(routes, routeNames)
 * Sums the fare for each route name in the array.
 * journeyFare(routes, ["Route 14 - Westlands", "Route 58 - Kikuyu"]) → 150
 */
function journeyFare(routes, routeNames) {
    let total = 0;

    for (const name of routeNames) {
        const route = routes.find(r => r.name === name);

        if (route) {
            total += route.fare;
        } else {
            console.log(`Warning: route not found → ${name}`);
        }
    }

    return total;
}

// --- Task 3 tests ---
console.log("=== Task 3: Matatu Route System ===");
console.log(cheapestRoute(routes));

const westlandsRoutes = routesThroughStop(routes, "Westlands");
console.log("Routes through Westlands:", westlandsRoutes.join(", "));

const cbdRoutes = routesThroughStop(routes, "CBD");
console.log(`Routes through CBD: ${cbdRoutes.length} routes`);

const fare = journeyFare(routes, ["Route 14 - Westlands", "Route 58 - Kikuyu"]);
console.log(`Journey fare (Westlands → Kikuyu): KES ${fare}`);
console.log();


// ------------------------------------------------------------
// NUMBER TO WORDS
// -------------------------------------------------------------        

const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"
];

const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
    "eighty", "ninety"
];

/**
 * tensToWords(n)
 * Converts 1–99 to words. 42 → "forty-two"
 */
function tensToWords(n) {
    if (n < 20) return ones[n];

    const tensDigit = Math.floor(n / 10);
    const onesDigit = n % 10;

    if (onesDigit === 0) return tens[tensDigit];

    return `${tens[tensDigit]}-${ones[onesDigit]}`;
}

/**
 * chunkToWords(n)
 * Converts 1–999 to words. 250 → "two hundred and fifty",
 * 500 → "five hundred"
 */
function chunkToWords(n) {
    if (n === 0) return "";

    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;

    let result = "";

    if (hundreds > 0) {
        result += `${ones[hundreds]} hundred`;
    }

    if (remainder > 0) {
        if (hundreds > 0) result += " and ";
        result += tensToWords(remainder);
    }

    return result;
}

/**
 * numberToWords(amount)
 * Converts a number from 1 to 9,999,999 into Kenyan shilling word form.
 *   1500    → "one thousand five hundred shillings"
 *   250     → "two hundred and fifty shillings"
 *   42      → "forty-two shillings"
 *   1000000 → "one million shillings"
 */
function numberToWords(amount) {
    if (amount === 0) return "zero shillings";

    if (amount < 0) return `minus ${numberToWords(-amount)}`;

    if (amount > 9999999) return "amount too large";

    const millions = Math.floor(amount / 1000000);
    const thousands = Math.floor((amount % 1000000) / 1000);
    const remainder = amount % 1000;

    const parts = [];

    if (millions > 0) {
        parts.push(`${chunkToWords(millions)} million`);
    }

    if (thousands > 0) {
        parts.push(`${chunkToWords(thousands)} thousand`);
    }

    if (remainder > 0) {
        parts.push(chunkToWords(remainder));
    }

    return `${parts.join(" ")} shillings`;
}

// --- Bonus tests ---
console.log("=== Bonus: Number to Words ===");
console.log(numberToWords(42));       // forty-two shillings
console.log(numberToWords(250));      // two hundred and fifty shillings
console.log(numberToWords(1500));     // one thousand five hundred shillings
console.log(numberToWords(1000000));  // one million shillings
console.log(numberToWords(2500000));  // two million five hundred thousand shillings
console.log(numberToWords(9999999));  // nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine shillings
console.log(numberToWords(305));      // three hundred and five shillings
console.log(numberToWords(1200));     // one thousand two hundred shillings