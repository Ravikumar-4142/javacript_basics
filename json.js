function validateJSON(jsonString) {
    try {
        // Attempt to parse the JSON data
        const jsonData = JSON.parse(jsonString);
        
        // If parsing succeeds, return a success message
        return { valid: true, error: null };
    } catch (error) {
        return { valid: false, error: error.message, position: error.at };
    }
}

const jsonDataToValidate = `{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "ok": "john@example.com",
    "hello": "john@example.com",
    "hi": "john@example.com ",
}`;

const validationResult = validateJSON(jsonDataToValidate);

if (validationResult.valid) {
    console.log("JSON is valid.");
} else {
    console.log("JSON is not valid.");
    console.error(`Error message: ${validationResult.error}`);
    console.error(`Error occurred at position: ${validationResult.position}`);
}
