# Changelog
    All notable changes will be mentioned here

## [0.0.0] - 20-02-2020
    - setup of the repository
    - routes folder added with home path
    - body-parser module added
    - custom script added to run easily
    - nodemon server added
    - readme file created

## [1.0.0] - 20-02-2020
### Added
    - game Repository
    - game Service
    - helper functions
    - changelog

## [1.0.1] - 20-02-2020
### Added
    - orderting by rating added / default with secondary ordering by rcount
### Changed
    - Better commenting

## [1.0.2] - 20-02-2020
    - pending work section added in readme file 

## [1.0.3] - 20-02-2020
### fixes
    - Pagination was not working
    - gitignore file added

## [1.0.4] - 21-02-2020
### Added
    - Redis added for caching to increse the performance
        - fetching the data will be cached and will be deleted periodically(can trigger this event when required)
        - the query result will aslo be cached