const fetch = require('node-fetch');

async function query({ query, variables = {} }){
    const result = await fetch(process.env.HASURA_API_URL,{
        method: 'POST',
        headers : {
            'Contact-type': 'application/json',
            'X-Hasura-Admin-Secret': process.env.HASURA_GRAPHQL_DATABASE_URL,
        },
        body: JSON.stringify({query, variables})
    })
    .then(response => response.json())

    return result.data
};

exports.query = query

