const  URL =  'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
const newsRight = document.querySelector('.right-news-column');



fetch(URL)

.then((res) => res.json())

.then((json) => {
    // console.log(json);
    json = json.slice(0,99);
    for(let id of json){
        grabStory(id);
    }
    // console.log(json);
})

function grabStory(newsId){
    const story = `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`;

fetch(story)

.then((res) => res.json())

.then((article)=> {
    listArticle(article);
    console.log(article);
    
})
}

function listArticle(article){
    let html = `<div class = "news-container">
                    <h2 class="title"><a href=${article.url}>${article.title}</a></h2>
                    <div class="subHeading">
                    ${article.score} points | ${article.by} | ${article.kids.length} comments
                    </div>
                </div>`
                // console.log(article);
    newsRight.innerHTML += html;
}

