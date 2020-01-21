const fetch = require('node-fetch');
const fs = require('fs');

fetch(`https://portfolio-staging.roberskine.com/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    variables: {},
    query: `
        {
            entries(section: ["blog","work"]) {
                id,
                title,
                slug,
                uri
            }
        }
    `,
    }),
})
.then(result => result.json())
    .then(result => {
    var entries = [];
    for(i = 0; i < result.data.entries.length; i++ ){
        entries.push(result.data.entries[i].uri);
    }
    console.log(entries);
    fs.writeFile('./dynamicPages.json', JSON.stringify(entries), err => {
        if (err) {
            console.error('Error writing dynamic pages file', err);
        } else {
            console.log('Dynamic pages successfully written!');
        }
    });
});