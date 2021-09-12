import sqlite3
from collections import OrderedDict

class isbn_search():

    def __init__(self):
        
        self.cached = OrderedDict()
        self.max_number_cached = 5
    
    
    def create_demo_table(self):
        """
        The following function is used to create a demo database using
        sqlite3.
        """
        conn = sqlite3.connect('test.db')
        c = conn.cursor()
        c.execute('''CREATE TABLE  IF NOT EXISTS BOOKS
        (ISBN CHAR(50) PRIMARY KEY NOT NULL, 
        Title CHAR(50) NOT NULL,
        Author CHAR(50) NOT NULL, 
        Language CHAR(50) NOT NULL);''')
        print ("Table created successfully")
        c.execute("INSERT INTO BOOKS (Title, Author, Language,ISBN) \
            VALUES ('Book0', 'Mike', 'English', '0123' )")
        c.execute("INSERT INTO BOOKS (Title, Author, Language, ISBN) \
            VALUES ('Book1', 'Paul', 'English', '24245' )")
        c.execute("INSERT INTO BOOKS (Title, Author, Language,ISBN) \
        VALUES ('Book2', 'jack', 'English', '35465' )")
        c.execute("INSERT INTO BOOKS (Title, Author, Language,ISBN) \
        VALUES ('Book3', 'Tim', 'Spanish', '75632' )")
        c.execute("INSERT INTO BOOKS (Title, Author, Language,ISBN) \
        VALUES ('Book4', 'John', 'Turkish', '75658' )")
        print ("Records created successfully")
        conn.close()
    
    def get_book_info(self,isbn):
        """
        This function receives ISBN and queries the row containing
        that ISBN.
        Args:
            isbn(string): string received from the user to search database

        Returns:
            A list containing a tuple of Title, Author and language 

        """
        conn = sqlite3.connect('test.db')
        c = conn.cursor()
        print ("Opened database successfully")
        # conn = mysql.connector.connect(host="localhost", user="root", passwd="admin123") 
        c.execute("SELECT Title, Author, Language FROM BOOKS  where ISBN='{}'".format(isbn))
        row = c.fetchall()
        
        return row

        
    def wrapper(self,cmd):
        """
        This function will update the cache to keep the results in memory

        Args:
            cmd(string): ISBN received from User
        """
        result = self.get_book_info(cmd)
        if result:
            title,author,language = result[0] 
            if len(self.cached)==self.max_number_cached:
                # Remove the oldest search from cach to free up space for the new entry
                self.cached.popitem(last=False)

            self.cached[cmd]=[title,author,language]
            print(self.cached[cmd])
        else:
            print('ISBN not Found!')

    def run(self):
        while True:
            cmd = input('Enter the code ISBN')
            if cmd in self.cached.keys():
                print(self.cached[cmd])
            else:
                self.wrapper(cmd)
                        
                

            

test = isbn_search()
test.create_demo_table()
test.run()
# Try the following ISBNs: 1212, 1234, 2323, 3434, 3456, 4545, 4567, 5656, 5678, 6789, 7890
