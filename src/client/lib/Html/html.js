import serialize from 'serialize-javascript';

const Html = (title, bundle, data, body) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <script src="${bundle}" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
            <div id="app">${body}</div>
        </body>
    </html>
`;

export default Html;