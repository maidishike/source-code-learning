/** 封装 **/


/*创建对象的基本模式*/

// 门户大开型对象
var test = 'test';
var Book = function(isbn, title, author){
    if (isbn == undefined) {
        throw new Error('Book isbn is required');
    }
    this.isbn = isbn;
    this.title = title || 'No Title';
    this.author = author || 'No author';
};
Book.prototype.display = function () {
    console.log(this);
    console.log('display');
};

new Book('hello world').display();
