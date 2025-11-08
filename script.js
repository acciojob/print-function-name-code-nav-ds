function functionName() {
  // Use arguments.callee.name to get the current function's name
  alert(arguments.callee.name);
}

// Call the function
functionName(); // Alerts "functionName"
