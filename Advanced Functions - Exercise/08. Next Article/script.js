function getArticleGenerator(articles) {

    let article = Array.from(articles);
    let contentRef = document.getElementById('content');

    return () => {
        if (article.length == 0) {
            return;
        }
        let articleElement = document.createElement('article')
        articleElement.textContent = article.shift()
        contentRef.appendChild(articleElement)
    }
}
