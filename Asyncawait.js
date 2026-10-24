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
// Example: a Promise-based timer and async/await
function delay(milliseconds) {
	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds);
	});
}

async function getMessage() {
	console.log("Waiting...");
	await delay(1000);
	return "Hello after one second!";
}

getMessage()
	.then((message) => console.log(message)) // handles fulfillment
	.catch((error) => console.error("Operation failed:", error)) // handles rejection
	.finally(() => console.log("Finished")); // runs either way

// Error handling can also use try/catch inside an async function:
async function loadData(url) {
	try {
		const response = await fetch(url); // fetch() returns a Promise
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data = await response.json(); // body parsing also returns a Promise
		return data;
	} catch (error) {
		console.error("Could not load data:", error);
		throw error; // rethrow if the caller should handle the failure too
	}
}

// Sequential awaits run one after another. For independent work, Promise.all()
// waits for all operations together (in parallel) and rejects if any rejects:
async function loadBoth(firstUrl, secondUrl) {
	const [first, second] = await Promise.all([
		loadData(firstUrl),
		loadData(secondUrl),
	]);
	return { first, second };
}

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
