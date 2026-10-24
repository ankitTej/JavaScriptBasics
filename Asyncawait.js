// Async/await in JavaScript
//
// Asynchronous code can start an operation (such as a timer or network request)
// and let other work continue while it waits. This avoids blocking the program.
//
// Promise: an object representing a value that may be available now, later, or
// never. A promise is pending, fulfilled (resolved), or rejected.
// async: a function modifier that makes the function return a Promise. Returning
// a normal value fulfills that Promise; throwing an error rejects it.
// await: used inside an async function (or at module top level where supported).
// It pauses that function until a Promise settles, then gives its value or throws
// its rejection. It does not block the JavaScript thread.
//


// Related terms:
// - Non-blocking: waiting does not stop unrelated JavaScript from running.
// - Callback: a function supplied to run later; Promises and async/await provide
//   a clearer way to compose many asynchronous operations.
// - Promise chaining: use .then(), .catch(), and .finally() on a Promise.
// - Concurrency: multiple operations make progress during overlapping time;
//   this is not necessarily the same as running simultaneously on multiple CPUs.
// - Event loop: JavaScript runtime mechanism that schedules callbacks and resumes
//   async work when timers, I/O, or other operations complete.
// - Rejection: a Promise failure, commonly handled with catch() or try/catch.


function checkresult(mark) {
	return new Promise((resolve, reject) => {
			if (mark >= 50) {
				resolve("Pass");
			} 
			else {
				reject("Fail");
			}
		}, 1000);
	};

	checkresult(30)
	.then((result) => {
		console.log("Success: " + result);
	}).catch((error) => {
		console.log("Error: " + error);
	});		

