// loop through the array
const generateCards = teamProfileArr => {
    if (!teamProfileArr) {
        return '';
    }

    for (var i = 0; i < teamProfileArr.length; i++) {
        return `
        <p>Success! [i] ${[i]}</p>
        `;
    }
};

// export function to generate entire page
module.exports = HTMLmarkup => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>

    <body>
        ${generateCards}
    </body>
    </html>
    `;
}