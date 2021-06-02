# demo

This Repository consists of 3 branches.

## 1. ISBN
This branch contains solution to ISBN search and data caching using Python3. Function get_book_info(isbn) receives an ISBN from the user and returns queries that through a database to select Title, Author and language assigned to that ISBN. If the ISBN has not recently been called, the result will be cached in an ordered dictionary. This will give us the ability to remove older entries when the dictionary reaches its maximum capacity. 

If the ISBN entered was previously saved in the cache, database will not be used to query the result again and the data will be retreived from the dictionary

## 2. 
