class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const foundBook = this.books.find(book => book[type] === value);
    return foundBook || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex !== -1) {
      const book = this.books[bookIndex];
      this.books.splice(bookIndex, 1);
      return book;
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
  console.log("Книга 1919 года не найдена, создаём новую...");
  const oldBook = new Book("Неизвестный автор", "Редкая книга", 1919, 200);
  oldBook.state = 40;
  library.addBook(oldBook);
  book1919 = library.findBookBy("releaseDate", 1919);
  console.log(`Добавлена книга: ${book1919.name}, ${book1919.releaseDate} год`);
}

console.log("\n--- Выдача книги ---");
const givenBook = library.giveBookByName("Машина времени");
if (givenBook) {
  console.log(`Выдана книга: "${givenBook.name}"`);
  console.log(`Состояние до повреждения: ${givenBook.state}`);

  givenBook.state = 20;
  console.log(`Состояние после повреждения: ${givenBook.state}`);

  givenBook.fix();
  console.log(`Состояние после восстановления: ${givenBook.state}`);

  library.addBook(givenBook);
  console.log(`Книга добавлена обратно: ${library.books.some(book => book.name === givenBook.name)}`);
} else {
  console.log("Книга не найдена в библиотеке");
}

console.log("\n--- Состояние библиотеки ---");
console.log(`Библиотека: ${library.name}`);
console.log(`Количество книг: ${library.books.length}`);
console.log("Книги в библиотеке:");
library.books.forEach(book => {
  console.log(`- ${book.name} (${book.releaseDate}), состояние: ${book.state}, тип: ${book.type || book.constructor.name}`);
});

console.log("\n--- Поиск книг ---");
const murzilka = library.findBookBy("name", "Мурзилка");
if (murzilka) {
  console.log(`Найдена: ${murzilka.name}, ${murzilka.releaseDate}`);
}

const sherlock = library.findBookBy("author", "Артур Конан Дойл");
if (sherlock) {
  console.log(`Найдена: ${sherlock.name}, автор: ${sherlock.author}`);
}