### Run the following commnd to start the server

    npm run-scripts run

### To setup the project locally, Run the following command

    npm install

### Relevance Algorithm
    - ignore extra white space specified by the user (done)
    - ignore extra white space in the server's data (done)
    - ignore case sensitivity of the user's input (done)
    - ignore case sensitivity in the server's data (done)
    - sort the result by rating (most to least) (default) (done)
    - ordering (Asc & Desc)
        - name (working on)
        - rating (done)
    - filter
        - genre
        - subgenre
        - minimun - rating
        - minimun - rCount

### Pending Work
    - AWS Hosting
    - Try to setup Caching
        - Local - Redis
        - Server - Elasticache
    - Try to improve the fetching and basic manipulation of the data

### URLS to be used
    - /search (deault first 10 results will be pulled)
    - /search?page=1 (define the page number at which you want the data)
    - /search?orderBy="rating"&orderType="asc" (will order by rating and in asc order) (will take most to tcount in case of same rating)
    - /search?orderBy="rating"&orderType="desc" will order by rating and in desc order) (will take most to tcount in case of same rating)