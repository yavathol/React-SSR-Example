const Html = (title, body, bundle) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <script src="${bundle}" defer></script>
        </head>

        <body>
            <div id="app">${body}</div>
        </body>
    </html>
`;

export default Html;