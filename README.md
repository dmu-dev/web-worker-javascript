# web-worker-javascript

This project demostrates the web worker in action. 
The application has 3 buttons namely calculate sum, calculate sum with webWorker and change background.

Calculate sum and calculate sum with webWorker calculates the sum of 1 billion numbers. Change background color changes the background of the application between beige and cyan colors.

On calculating the sum using Calculate sum with webWorker button, we will be still able to change the background of the application as it uses a seperate thread to perform the action whereas the application doesnt change the background color if we try to calculate the sum using Calculate sum until that action is completed as it uses the main thread and blocks the other actions.