## Run the following commnd to start the server

    npm run-scripts run

## To setup the project locally, Run the following command

    npm install

## Relevance Algorithm

- ~~ignore extra white space specified by the user~~
- ~~ignore extra white space in the server's data~~
- ~~ignore case sensitivity of the user's input~~
- ~~ignore case sensitivity in the server's data~~
- ~~sort the result by rating (most to least) (default)~~
- ordering (Asc & Desc)
    1. name (working on)
    2. ~~rating~~
- filter
    1. genre
    2. subgenre
    3. minimun - rating
    4. minimun - rCount

## Pending Work

- ~~AWS Hosting~~
- ~~Try to setup Caching~~
    1. ~~Local - Redis~~
    2. ~~Server - Elasticache~~
    3. ~~Try to improve the fetching and basic manipulation of the data~~

## URLS to be used

- /search (deault first 10 results will be pulled)
- /search?page=1 (define the page number at which you want the data)
- /search?orderBy=rating&orderType=asc (will order by rating and in asc order) (will take most to tcount in case of same rating)
- /search?orderBy=rating&orderType=desc will order by rating and in desc order) (will take most to tcount in case of same rating)

## Live server URL 

    http://18.191.233.166:3000

- AWS EC2 instance is used to host the backend of the application
- AWS Elasticache is used for redis server.
- VPC is created since Elasticache can not be accessed from outside the VPC it belongs too.
- PM2 is used to run the process in background.