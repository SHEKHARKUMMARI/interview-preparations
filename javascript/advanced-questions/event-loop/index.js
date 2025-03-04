async function asyncFunction() {
  console.log("Async start"); // (2)
  await new Promise((resolve) => setTimeout(resolve, 0)); // (Moves to macrotask queue)
  console.log("Async end"); // (Executes after macrotasks)
}

console.log("Script start"); // (1)

asyncFunction(); // Calls asyncFunction()

Promise.resolve().then(() => {
  console.log("Promise resolved"); // (4) Microtask (Runs before macrotasks)
});

console.log("Script end"); // (3)
// Out put
// Script start
// Async start
// Script end
// Promise resolved
// Async end

// 🔹 Execution Order
// Step	Action	Explanation
// 1️⃣	console.log('Script start')	Runs first (Synchronous)
// 2️⃣	asyncFunction()	Calls the async function
// 3️⃣	console.log('Async start')	Logs inside asyncFunction
// 4️⃣	await new Promise(resolve => setTimeout(resolve, 0))	Moves setTimeout to the macrotask queue
// 5️⃣	console.log('Script end')	Runs after function call
// 6️⃣	Promise.resolve().then(...)	Microtask (added to microtask queue)
// 7️⃣	console.log('Promise resolved')	Runs immediately after synchronous code (microtasks run before macrotasks)
// 8️⃣	console.log('Async end')	Runs after macrotask (setTimeout) is resolved

//----> Does all the code after await move to the macrotask queue?

// No, the remaining code after await does not move to the macrotask queue. Instead, it is placed back into the microtask queue after the awaited promise resolves.

// 🔹 What Happens to Code After await?
// When execution reaches an await statement:

// Execution inside the async function is paused.

// The function returns control to the event loop.
// Any statements after await are not executed yet.
// The awaited promise is scheduled to resolve

// If the promise is already resolved, execution resumes immediately.
// If the promise is pending, execution of the async function is suspended until the promise settles.
// When the promise resolves, the remaining code is placed into the microtask queue.

// Unlike setTimeout, which goes to the macrotask queue, the continuation of the async function stays in the microtask queue.
// This ensures that it runs before any macrotasks like setTimeout or setInterval.
// 🔹 Example: Microtask vs. Macrotask Behavior
// js
// Copy
// Edit
// async function asyncFunction() {
//   console.log("1: Start");

//   await new Promise((resolve) => setTimeout(resolve, 0));

//   console.log("2: End");
// }

// console.log("3: Script start");

// asyncFunction();

// console.log("4: Script end");

// Promise.resolve().then(() => console.log("5: Promise resolved"));

// setTimeout(() => console.log("6: setTimeout executed"), 0);
// 🔹 Step-by-Step Execution Order
// Step	Code Executed	Notes
// 1️⃣	console.log("3: Script start")	Runs first (synchronous)
// 2️⃣	asyncFunction() is called	Starts executing
// 3️⃣	console.log("1: Start")	Logs inside asyncFunction
// 4️⃣	await new Promise(setTimeout(resolve, 0))	Pauses function execution, schedules setTimeout (macrotask)
// 5️⃣	console.log("4: Script end")	Runs after asyncFunction suspends
// 6️⃣	Promise.resolve().then(...)	Microtask queue (executes after sync code)
// 7️⃣	console.log("5: Promise resolved")	Runs (microtask)
// 8️⃣	setTimeout(resolve, 0) fires	Macrotask queue (runs after microtasks)
// 9️⃣	console.log("2: End")	Resumes asyncFunction (microtask)
// 🔟	console.log("6: setTimeout executed")	Runs from macrotask queue

// 🔹 What Gets Scheduled in Each Queue?
// Type	Goes to     Microtask Queue?	Goes to Macrotask Queue?
// Promise.then()	✅ Yes	             ❌ No
// Promise.catch()	✅ Yes	             ❌ No
// Promise.finally()✅ Yes	             ❌ No
// queueMicrotask()	✅ Yes	             ❌ No
// MutationObserver	✅ Yes	             ❌ No
// setTimeout()	    ❌ No	                ✅ Yes
// setInterval()	❌ No	                ✅ Yes
// setImmediate() (Node.js)	❌ No	        ✅ Yes
// requestAnimationFrame()	❌ No	        ✅ Yes
