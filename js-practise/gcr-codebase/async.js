
/*
====================================================
Q1. THE STARTUP MORNING - ASYNC COFFEE MAKER
====================================================
*/

// Function to boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("Water boiled successfully!");
                resolve();
            }
        }, 1500);
    });
}

// Function to brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Coffee brewing failed!");
            } else {
                console.log("Coffee brewed successfully!");
                resolve();
            }
        }, 1500);
    });
}

// Function to pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("Coffee poured into the cup!");
                resolve();
            }
        }, 1500);
    });
}

function makeCoffee() {
    console.log("\nQ1. Async Coffee Maker");

    return boilWater()
        .then(() => brewCoffee())
        .then(() => pourCoffee())
        .then(() => {
            console.log("Coffee ready for the team!");
        })
        .catch(error => {
            console.log("Coffee process error:", error);
        });
}


/*
====================================================
Q2. TASK SCHEDULER - MICRO VS MACRO TASK
====================================================
*/

function taskScheduler() {
    console.log("\nQ2. Task Scheduler");

    console.log("Start");

    // setTimeout callback is a macrotask.
    setTimeout(() => {
        console.log("setTimeout - Macrotask");
    }, 0);

    // Promise.then callback is a microtask.
    Promise.resolve().then(() => {
        console.log("Promise - Microtask");
    });

    console.log("Synchronous log");

    console.log("End");

    // Microtasks execute before macrotasks.
    // After synchronous code finishes, JavaScript
    // processes the microtask queue first.
    // Then it processes the macrotask queue.
}


/*
====================================================
Q3. BUG TRACKER - CALLBACK TO PROMISE MIGRATION
====================================================
*/

// Promise-based version of fetchBugs()
function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const randomFailure = Math.random() < 0.3;

            if (randomFailure) {
                reject("API request failed!");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }

        }, 1000);

    });
}

function bugTracker() {
    console.log("\nQ3. Bug Tracker");

    return getBugs()
        .then(bugs => {
            console.log("Bugs fetched successfully:");
            console.table(bugs);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}


/*
====================================================
Q4. DEVOPS DELAY - ASYNC TIMEOUT RACE
====================================================
*/

// Function to simulate server response
function serverResponse(serverName, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject(serverName + " failed!");
            } else {
                console.log(serverName + " responded successfully!");
                resolve(serverName);
            }

        }, delay);

    });
}

async function deployment() {
    console.log("\nQ4. Deployment Servers");

    // Promise.all() waits for both servers.
    const allServers = Promise.all([
        serverResponse("Server A", 2000),
        serverResponse("Server B", 3000)
    ]);

    // Promise.race() returns the first settled result.
    // Here it gives the first successful response
    // unless a server fails before responding.
    const fastestServer = Promise.race([
        serverResponse("Server A", 2000),
        serverResponse("Server B", 3000)
    ]);

    // Handle both results separately.
    const allResult = allServers
        .then(() => {
            console.log("Deployment completed for all servers");
        })
        .catch(error => {
            console.log("Deployment error:", error);
        });

    const raceResult = fastestServer
        .then(server => {
            console.log("Fastest response:", server);
        })
        .catch(error => {
            console.log("Race error:", error);
        });

    await Promise.all([allResult, raceResult]);
}


/*
====================================================
Q5. FRONTEND RUSH - CALLBACK HELL
====================================================
*/

// First implementation using nested callbacks

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

function callbackPipeline() {
    console.log("\nQ5. Callback Hell");

    // Nested callbacks create callback hell.
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}


// Second implementation using async/await

function asyncStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function asyncPipeline() {
    console.log("\nQ5. Async/Await Pipeline");

    // Each await waits for the previous stage.
    // This makes asynchronous code easier to read.
    await asyncStage("Design completed");
    await asyncStage("Build completed");
    await asyncStage("Testing completed");
    await asyncStage("Deployment completed");
    await asyncStage("Celebration time!");
}


/*
====================================================
Q6. E-COMMERCE DASHBOARD - PRODUCT FETCHER
====================================================
*/

async function fetchProducts() {
    console.log("\nQ6. Product Fetcher");

    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("-------------------------");
        });

    } catch (error) {
        console.log(
            "Failed to load products. Please try again."
        );
    }
}


/*
====================================================
Q7. LAZY LOADER - PROMISE.ALLSETTLED()
====================================================
*/

// Profile loading
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile loading failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

// Posts loading
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts loading failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

// Messages loading
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Messages loading failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    console.log("\nQ7. Dashboard Loading");

    const startTime = Date.now();

    // All three Promises run concurrently.
    // allSettled waits until every Promise settles.
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {

        const modules = [
            "Profile",
            "Posts",
            "Messages"
        ];

        if (result.status === "fulfilled") {
            console.log(
                modules[index] + " Success:",
                result.value
            );
        } else {
            console.log(
                modules[index] + " Failed:",
                result.reason
            );
        }

    });

    const endTime = Date.now();

    console.log(
        "Total time:",
        (endTime - startTime) / 1000,
        "seconds"
    );
}


/*
====================================================
Q8. ORDER PROCESSING - RETRY MECHANISM
====================================================
*/

// Order submission API
function submitOrder() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // 50% chance of failure
            if (Math.random() < 0.5) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }

        }, 1000);

    });
}

async function processOrder() {
    console.log("\nQ8. Order Processing");

    let success = false;

    for (let i = 1; i <= 3; i++) {

        try {
            const result = await submitOrder();

            console.log("Attempt " + i + ": Success");
            console.log(result);

            success = true;
            break;

        } catch (error) {
            console.log("Attempt " + i + ": Failed");
        }

    }

    if (!success) {
        throw new Error("Order could not be processed");
    }
}

async function runOrder() {
    try {
        await processOrder();
    } catch (error) {
        console.log("Final Error:", error.message);
    }
}


/*
====================================================
Q9. DEBUGGING THE EVENT LOOP
====================================================
*/

// Predicted output order:
// Script start
// Script end
// Promise callback
// Timeout callback

function eventLoopDemo() {
    console.log("\nQ9. Event Loop");

    console.log("Script start");

    // Macrotask
    setTimeout(() => {
        console.log("Timeout callback");
    }, 0);

    // Microtask
    Promise.resolve().then(() => {
        console.log("Promise callback");
    });

    console.log("Script end");

    // Synchronous code runs first.
    // After synchronous execution, microtasks execute.
    // Finally, macrotasks like setTimeout execute.
}


/*
====================================================
Q10. FINAL DELIVERY - ASYNC PIPELINE DEBUGGER
====================================================
*/

// Helper function to simulate asynchronous steps
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {

        // Random delay between 1 and 2 seconds
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {

            // 20% chance of failure
            if (Math.random() < 0.2) {
                reject(stepName + " failed");
            } else {
                console.log(successMessage);
                resolve();
            }

        }, delay);

    });
}

// Delivery pipeline steps

function takeOrder() {
    return deliveryStep(
        "Take order",
        "Step 1: Order taken"
    );
}

function prepare() {
    return deliveryStep(
        "Prepare food",
        "Step 2: Food prepared"
    );
}

function pack() {
    return deliveryStep(
        "Pack food",
        "Step 3: Package ready"
    );
}

function dispatch() {
    return deliveryStep(
        "Dispatch order",
        "Step 4: Out for delivery"
    );
}

function deliver() {
    return deliveryStep(
        "Deliver order",
        "Delivery completed!"
    );
}

// Main pipeline function
async function runPipeline() {

    console.log("\nQ10. Food Delivery Pipeline");

    console.log("Start Pipeline");

    try {

        // Each await waits for the current step
        // to resolve before starting the next step.

        await takeOrder();

        await prepare();

        await pack();

        await dispatch();

        await deliver();

    } catch (error) {

        // If any step rejects, execution jumps here.
        console.log("Pipeline failed!", error);

    }
}


/*
====================================================
MAIN FUNCTION - RUN ALL QUESTIONS ONE BY ONE
====================================================
*/

async function main() {

    // Q1
    await makeCoffee();

    // Q2
    taskScheduler();

    // Allow scheduled event-loop callbacks to execute
    await new Promise(resolve => setTimeout(resolve, 50));

    // Q3
    await bugTracker();

    // Q4
    await deployment();

    // Q5 - Callback version
    callbackPipeline();

    // Wait for callback pipeline to finish (5 seconds)
    await new Promise(resolve => setTimeout(resolve, 5100));

    // Q5 - Async/await version
    await asyncPipeline();

    // Q6
    await fetchProducts();

    // Q7
    await loadDashboard();

    // Q8
    await runOrder();

    // Q9
    eventLoopDemo();

    // Allow event loop callbacks to execute
    await new Promise(resolve => setTimeout(resolve, 50));

    // Q10
    await runPipeline();

    console.log("\nAll 10 Questions Completed!");
}

// Start execution
main();
