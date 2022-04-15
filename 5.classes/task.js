class PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        Math.round(this.state *= 1,5);
    }

    set state(n){
        this._state = n;
        if (n > 100){
            return this.state = 100
        } else if (n < 0){
            return this.state = 0
        }
    }

    get state(){
        return this._state
    }
}


class Magazine extends PrintEditionItem{
    constructor(name,releaseDate,pagesCount,state){
        super (name,releaseDate,pagesCount,state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author,name,releaseDate,pagesCount,state){
        super (name,releaseDate,pagesCount,state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook  extends Book{
    constructor(author,name,releaseDate,pagesCount,state){
        super (author,name,releaseDate,pagesCount,state);
        this.type = "novel";
    }
}

class FantasticBook   extends Book{
    constructor(author,name,releaseDate,pagesCount,state){
        super (author,name,releaseDate,pagesCount,state);
        this.type =  "fantastic";
    }
}

class DetectiveBook   extends Book{
    constructor(author,name,releaseDate,pagesCount,state){
        super (author,name,releaseDate,pagesCount,state);
        this.type = "detective";
    }
}


class Library {
    constructor(name){
        this.name = name;
        this.books = []
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book)
        }
    }

    findBookBy(type, value){
        let result = this.books.find(item => item[type] === value);
        if(result){
            return result
        } else {
            return null
        }
    }

    giveBookByName(bookName){
        let book = this.books.findIndex(item => item.name === bookName);

        if (book >= 0){
            let deletBook = this.books.splice(book,1)
            return deletBook
        } else{
            return null
        }
    }
}


class Student{
    constructor(name){
        this.name = name;
        this.marks = {}
    }

    addMark(mark,setSubject  ){
        if(! (setSubject in this.marks)){
            this.marks[setSubject] = []
        }

        if(mark <=5 && mark >= 1){
            this.marks[setSubject].push(mark)
        } else{
            return 'Ошибка, неверная отметка'
        }
    }

    getAverageBySubject(setSubject){
        let subject = this.marks[setSubject]
        let sum = 0
        if(subject === undefined){
            return 'Несуществующий предмет'
        } else {
            subject.forEach((item) => sum += item);
            return `Средний балл по предмету ${setSubject} ${sum/subject.length}`
        }
    }

    getAverage(){
        let sum = 0;
        let size = 0 
        for(let key in this.marks){
            sum += this.marks[key].reduce( (sum, current) => sum + current)
            size += this.marks[key].length
        }
        return ` Средний балл по всем предметам ${sum/size}`
    }

    exclude(string) {
		if(string === "Исключен за попытку подделать оценки") {
			for (let student in this) delete this[student];
		}
	}

}