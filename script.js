// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
console.log('Задача 1');
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
for (const key in numbers) {
    if (numbers[key] >= 3){
        console.log(numbers[key]);
    }
}


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
console.log('Задача 2');
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
        },
        },
    ],
};


console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


console.log('Задача 3');

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
//Значения объектов сохраняютися по ссылке, потому сохраняю первоначальный объект по значению для 
// вывода первоначальных цен 
localStorage.setItem('products', JSON.stringify(products));
// извлекаю данные и преобразовываю в объект
const productsBefore = JSON.parse(localStorage.getItem('products'));
console.log('Значения, которые были до изменений');
console.log(productsBefore);
for (const key in products) {
    products[key].price = products[key].price - 0.15 * products[key].price
}
console.log('Значения после изменений');
console.log(products);


console.log('Задача 4');

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.
// Исходные данные - массив anotherProducts.
const anotherProducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWhithPhotos = anotherProducts.filter((products) => {
    if(products.hasOwnProperty('photos') && products.photos.length > 0 ) return true;
});
console.log(productsWhithPhotos);
// 2. Необходимо отсортировать массив anotherProducts используя метод sort по цене, начиная с самой маленькой, 
// заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
const anotherProductsSorted = anotherProducts.sort((a, b) =>{
    return a.price - b.price;
});
console.log(anotherProductsSorted);


// **Задание 5**
// Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения 
// второго массива — значениями.

console.log('Задача 5');
let arr = [];
for (let index = 0; index < en.length; index++) {
    arr[en[index]] = ru[index];
}
console.log(arr);

















// const weekDay = {
//     'fff': 'Понедельник',
//     2: 'Вторнник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
// // console.log(weekDay.fff);

// const user = {

//     firstName: 'Kostya',
//     surname: 'Filipenko',
//     age: 40,

//     showAll: function () {
//         let str = '';
//         for (const key in user) {
//             if (key != 'showAll') str += '-' + user[key];
//         }
//         console.log(str);
//     }

// }

// user.showAll();
// let newProp = prompt('Название свойства');
// user[newProp] = prompt('Введите значание свойства');
// user.showAll();

// delete user.surname;
// user.showAll();

// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0;
// for (const key in obj) {
//     for (const subkey in obj[key]) {
//         sum +=obj[key][subkey];
//     }
// }
// console.log(sum);

// Создайте объект riddles 
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

// const riddles = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'Ель',
//     count: 0,
//     hints: {
//         hint1: 'Хвойная',
//         hint2: 'Есть иголки'
//     },
//     askQuestion: function () {
//         if (prompt(this.question) == this.answer) {
//             alert('Молодец!');
//             this.count = 0;
//         } else {
//             if (this.count == 0) {
//                 alert('Неверный ответ, первая подсказка: ' + this.hints.hint1);
//                 this.count++;
//             } else if (this.count == 1) {
//                 alert('Неверный ответ, вторая подсказка: ' + this.hints.hint2);
//                 this.count++;
//             } else if (this.count == 2) {
//                 alert('Вы проиграли, правильный ответ ' + this.answer);
//                 this.count = 0;
//             }
//         }
        
//     }
    
// };
// do {
//     riddles.askQuestion();
// } while (riddles.count != 0);