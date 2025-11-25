"use strict";

// Array with delay days for multiple late books
let delays = [3, 7, 0, 12, 5];

// Total fine and count of actually delayed books
let totalFine = 0;
let delayedReturnsCount = 0;

// Loop through each delay and calculate per-book fine
for (let i = 0; i < delays.length; i++) {
    let daysLate = delays[i];
    let fineForThisBook = 0;

    if (daysLate > 0) {
        delayedReturnsCount++;
    }

    if (daysLate >= 1 && daysLate <= 5) {
        fineForThisBook = daysLate * 10;
    } else if (daysLate >= 6 && daysLate <= 10) {
        fineForThisBook = daysLate * 20;
    } else if (daysLate >= 11) {
        fineForThisBook = daysLate * 50;
    }

    totalFine += fineForThisBook;

    console.log("Book", i + 1, "- Days Late:", daysLate, "Fine:", fineForThisBook);
}

// Extra penalty if more than 3 delayed returns
let penalty = 0;
if (delayedReturnsCount > 3) {
    penalty = 200;
    totalFine += penalty;
}

// Final fine summary
console.log("Delayed Returns Count:", delayedReturnsCount);
console.log("Additional Penalty:", penalty);
console.log("Total Fine:", totalFine);
