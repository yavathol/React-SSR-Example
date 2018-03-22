const Html = (title, body) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
        </head>

        <body>
            <div class="container">${body}</div>
        </body>
    </html>
`;

export default Html;