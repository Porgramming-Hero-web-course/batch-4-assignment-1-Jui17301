### How to handle asynchronous operations using async/await over callback/promise TypeScript.

### 1. Using Callbacks

It is used before Promises, but can lead to nested code.Before async/await, callbacks were commonly used for asynchronous operations.

Example with a callback:

       function fetchData(callback: (data: string) => void) {
        setTimeout(() => {
        callback("Data loaded");
      }, 2000);
     }

     fetchData((data) => {
    console.log(data); 
     });


### 2. Using Promises:(Better Approach)

Provide a cleaner way to handle asynchronous operations, chaining .then() and .catch().With Promises,return a Promise object and resolve/reject it when the operation is completed:

    function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
     }

     fetchData().then((data) => {
    console.log(data); 
    });


#### 3. Using async/await (Simplified Way)
   
   Makes asynchronous code cleaner and more readable by allowing you to write it in a synchronous style, avoiding chaining and nested callbacks.async/await makes it even simpler by allowing us to write asynchronous code that looks like synchronous code.

     async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
   }

     async function getData() {
    const data = await fetchData();
    console.log(data);
   }

     getData();
