// 1. Employee Class
class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}

let employees = [
    new Employee('Lokesh', 'HR', 300),
    new Employee('Akash', 'HR', 1000),
    new Employee('Aman', 'HR', 700)
];


let x = employees.reduce((acc,item)=>{

    if( item.salary < 500) acc.low.push( item);
    if( item.salary > 500 && item.salary < 1000) acc.med.push( item);
    if( item.salary >= 1000 ) acc.high.push( item);

    
    return acc
},{low:[],med:[],high:[]})
console.log(x);



// 2. Student Class

class Student {
    name;
    grade;
    age;
  
    constructor(name, grade, age) {
      this.name = name;
      this.grade = grade;
      this.age = age;
    }
  }


  let students = [
    new Student('John',1,6),
    new Student('Josahn',2,7),
    new Student('Joadadhn',3,8)
  ]


  let y = students.reduce((acc,item)=>{

    if (!acc[item.grade]) {
        acc[item.grade] = []; 
    }
    acc[item.grade].push(item);
    return acc; 

    
    return acc
},{})

console.log(y);



// 3. Product Class

class Product {
    productName;
    category;
    price;
  
    constructor(productName, category, price) {
      this.productName = productName;
      this.category = category;
      this.price = price;
    }
  }

  let products = [
    new Product('iphone','Electronics',300),
    new Product('shirt','Clothing',200),
    new Product('iphone','Electronics',500),
    new Product('pant','Clothing',400)
  ]

  let z = products.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = {count:0,avgPrice:0}; 
    }
    acc[item.category].count++;
    acc[item.category].avgPrice += item.price

    return acc; 
    }, {});

    let lastz = Object.entries(z).reduce((acc,[category,item])=>{
        acc[category] = {count:item.count,avgPrice : item.avgPrice/item.count}
        return acc
    },{})


    console.log(lastz);



    // 4. Book Class


    class Book {
        title;
        author;
        pages;
      
        constructor(title, author, pages) {
          this.title = title;
          this.author = author;
          this.pages = pages;
        }
      }


      let books = [
        new Book('hello','the',300),
        new Book('shirt','the',200),
        new Book('iphone','wow',500),
        new Book('pant','wow',400)
      ]
    
      let ab = books.reduce((acc, item) => {
        if (!acc[item.author]) {
            acc[item.author] = {count:0,totalPages:0}; 
        }
        acc[item.author].count++;
        acc[item.author].totalPages += item.pages
    
        return acc; 
        }, {});

        
    
        console.log(ab);


        // 5. Movie Class

        class Movie {
            title;
            director;
            boxOffice;
          
            constructor(title, director, boxOffice) {
              this.title = title;
              this.director = director;
              this.boxOffice = boxOffice;
            }
          }


          let movies = [
            new Movie('hero','Steven Spielberg',1000),
            new Movie('herjgjo','Christopher Nolan',1020),
            new Movie('hevsgro','Steven Spielberg',1300),
            new Movie('heras','Christopher Nolan',1400)
          ]
                
          let result = movies.reduce((acc,item)=>{
            if(!acc[item.director]){
                acc[item.director] = {count: 0, totalBoxOffice: 0}
            }

            acc[item.director].count++;
            acc[item.director].totalBoxOffice+= item.boxOffice

            return acc
          },{})
          console.log(result);
          



    

      
      
    


    

    
  


  
  

  









