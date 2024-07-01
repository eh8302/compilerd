document.getElementById('run').addEventListener('click', async () => {
    const code = document.getElementById('code').value;
    const language = document.getElementById('language').value;
    const outputElement = document.getElementById('output');

    // Encode the code in base64
    const encodedCode = btoa(code);

    // Define the judge0-ce API endpoint and your API key
    const endpoint = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true';
    const apiKey = 'YOUR_API_KEY_HERE';//replace with your own api key from rapidapi.com

    try {
        // Send the code to judge0-ce for execution
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey,
            },
            body: JSON.stringify({
                source_code: encodedCode,
                language_id: getLanguageId(language),
            })
        });

        // Parse the JSON response
        const result = await response.json();

        // Decode the output from base64
        const output = atob(result.stdout || result.stderr || 'No output');
        outputElement.textContent = output;

    } catch (error) {
        // Handle errors
        outputElement.textContent = 'An error occurred: ' + error.message;
    }
});

// Function to map language to judge0-ce language ID
function getLanguageId(language) {
    const languageIds = {
        cpp: 54,
        java: 62,
        python3: 71
        // Add more languages and their IDs
    };
    return languageIds[language];
}
