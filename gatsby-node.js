const axios = require('axios');
require("dotenv").config({
    path: `.env`
});
// const BASE_URL = 'https://backend-faizzul.herokuapp.com';
const BASE_URL = process.env.BACKEND_URL;

const fetch_page_data = async(endpoint) =>
{
    console.log(BASE_URL)
    console.log(process.env.BACKEND_URL)
    // return axios.get(`${BASE_URL}/${endpoint}`);
    return axios.get(`${process.env.BACKEND_URL}${endpoint}`);
}

exports.createPages = async ({actions: {createPage}}) => {
        let articles = await fetch_page_data('/articles').then(res=>{ return res.data}).catch(() => {return []})
        let projects = await fetch_page_data('/portfolios').then(res=>{ return res.data}).catch(() => {return []})
        let landing = await fetch_page_data('/homepage').then(res=>{ return res.data}).catch(() => {return []})
        
        console.log(articles)

        // Create a page that lists all articles.
        createPage({
            path: `/insight`,
            component: require.resolve("./src/templates/insight.js"),
            context: {articles} 
        });

        // Create landing page
        createPage({
            path: `/`,
            component: require.resolve("./src/templates/landing.js"),
            context: {landing,articles,projects} 
        });
        // Create individual article page.
        articles.forEach(article =>{
            createPage({
                path: `/insight/${article.blob}`,
                component: require.resolve("./src/templates/article.js"),
                context: {article}
            })
        });
    

}