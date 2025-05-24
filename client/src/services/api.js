export async function saveQuote(data) {
  const response = await fetch('http://localhost:4000/api/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  return result;
}
// This function sends a POST request to the server to save the quote data.
// It returns the server's response.