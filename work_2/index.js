//Задание 1
/*Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, 
а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким 
названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. 
Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать 
true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, 
что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
*/

class Library {
    //Приватное свойство
    #books = [];

    get allBooks() {
        return this.#books;   
    }

    addBook(title) {
        if (!this.hasBook(title)) {
          this.#books.push(title);
        } else {
          throw new Error(`Книга с названием "${title}" уже есть`);
        }
    }

    removeBook(title) {
        if (this.hasBook(title)) {
          this.#books = this.#books.filter(a => a !== title);
        } else {
          throw new Error(`Книги с названием "${title}" нет`);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(initialLibrary) {
        this.#books = Library.init(initialLibrary);
    }

    static init(intArray) {
        const result = new Set(intArray);
        if (result.size === intArray.length) return intArray;
        throw new Error('Есть одинаковые книги');
    }
}

const account = new Library(['Книга 1', 'Книга 2', 'Книга 3']);
console.log('Созданы', account.allBooks);

try {
    account.addBook('Книга 3');
} catch (e) {
    console.log('Ошибка добавления', e.message);
}
    account.addBook('Книга 4')
    console.log('Добавляем:', account.allBooks)
  
try {
    account.removeBook('Книга 6')
} catch (e) {
    console.log('Ошибка удаления:', e.message)
}
account.removeBook('Книга 4')
console.log('Удаляем', account.allBooks);
  
console.log('Проверяем', account.hasBook('Книга 1'));
console.log('Проверяем', account.hasBook('Книга 7'));
  
try {
    const errAccount = new Library(['Книга 1', 'Книга 1'])
} catch (e) {
    console.log('Ошибка создания', e.message)
}


//Задание 2
/*
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для 
отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва 
менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.*/

feedback.addEventListener('click', () => {
    try {
      const userInp = userInput.value;
      if (userInp.trim() === '') {
        error.textContent = 'Вы ничего не ввели, прежде чем отправить отзыв!';
        throw new Error('Пустой текст');
      } else if (userInp.length > 500 || userInp.length < 50) {
        error.textContent = 'Текст не должен быть больше 500 и меньше 50 символов';
        throw new Error('Больше 500 символов');
      }
      pattern.insertAdjacentHTML('beforeend', `<div>${userInp}</div>`);
      userInput.value = '';
    } catch (error) {
      console.log(error)
    }
  })
