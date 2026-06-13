# Random User Fetcher

A simple web application that fetches a randomly generated user from the
[Random User API](https://randomuser.me/) and displays their basic profile
information.

## Features

- Fetches a new random user on demand
- Displays the user's name, email, country, and gender
- Shows a loading message while the request is in progress
- Displays a clear error message when the request fails
- Uses only HTML, CSS, and vanilla JavaScript

## Project Structure

```text
VulnurisAssignment/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
`-- readme.md
```

## Getting Started

No installation or build step is required.

1. Clone or download the repository.
2. Open the project directory.
3. Open `index.html` in a modern web browser.

For the most reliable behavior, serve the project through a local web server.
For example, with Visual Studio Code you can use the Live Server extension.
If Python is installed, you can instead run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Usage

1. Click **Get Random User**.
2. Wait for the API request to finish.
3. View the generated user's details in the profile card.
4. Click the button again to fetch another user.

## How It Works

The click handler in `js/script.js` sends a request to:

```text
https://randomuser.me/api/
```

After a successful response, the app reads the first user from the returned
`results` array and renders selected details into the page. Failed requests are
caught and replaced with an error message.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Random User API

## Possible Improvements

- Display the user's profile picture
- Add more profile details such as phone number and city
- Disable the button while a request is in progress
- Improve responsive styling and accessibility
- Add automated tests

## License

This project is intended for educational and demonstration purposes.
