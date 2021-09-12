

### This Repository consists of 3 folders

## 1. ISBN
This folder contains solution to ISBN search and data caching using Python3. Function get_book_info(isbn) receives an ISBN from the user and returns queries that through a database to select Title, Author and language assigned to that ISBN. If the ISBN has not recently been called, the result will be cached in an ordered dictionary. This will give us the ability to remove older entries when the dictionary reaches its maximum capacity. 

If the ISBN entered was previously saved in the cache, database will not be used to query the result again and the data will be retreived from the dictionary

## 2. Rating Stars
In this folder HTML, JavaScript, and CSS are used to create a rating widget for customers to submit their rating for a specific product in an eComerce website. When hovering on a star, the stars with lower values will become grey and the one being hovered will have a black outline. If the star is selected, the stars greyed out and the selected star will become all black. There is an output section informing the user that their submission was successful and the rating will also be shown. There is also a part of the code that shows an example of posting user's rating to a REST endpoint. This section is commented out.

## 3. Rest Countries
This folder contains HTML/JavaScript/CSS code to a search engine which receives name of a country and retreives the capital of a country, as well as the capital of its neighbour countries and prints them on screen using https://restcountries.eu/ API. If the name entered is not found, an error message will be shown stating that the country name entered is not valid.
