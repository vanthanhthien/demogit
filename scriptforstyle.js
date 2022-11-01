let products = {
    data: [
      {
        productName: "nike air force 1 '07",
        category: "LIFESTYLE",
        price: "30",
        image: "pic/stylelife/1.JPG",
      },
      {
        productName: "nike dunk high retro",
        category: "LIFESTYLE",
        price: "49",
        image: "pic/stylelife/2.JPG",
      },
      {
        productName: "nike air vapormax 2021 fk",
        category: "LIFESTYLE",
        price: "99",
        image: "pic/stylelife/3.JPG",
      },
      {
        productName: "nike air max 270",
        category: "LIFESTYLE",
        price: "29",
        image: "pic/stylelife/4.JPG",
      },

      /*jordan */

      {
        productName: "air jordan 1 mid",
        category: "JORDAN",
        price: "129",
        image: "pic/air/1.JPG",
      },
      {
        productName: "jordan series ES",
        category:"JORDAN",
        price:"85",
        image:"pic/air/2.JPG"
      },
      {
        productName: "air jordan dub zero",
        category:"JORDAN",
        price:"160",
        image:"pic/air/3.JPG"
      },
      {
        productName: "air jordan XXXVII tatum",
        category:"JORDAN",
        price:"205",
        image:"pic/air/4.JPG"
      },
      {
        productName: "air jordan 7 retro SE",
        category:"JORDAN",
        price:"210",
        image:"pic/air/5.JPG"
      },
      {
        productName: "air jordan zoom cmft",
        category:"JORDAN",
        price:"150",
        sale:"200",
        image:"pic/air/6.JPG"
      },

      /* BASEKETBALL */

      {
        productName: "Lebron XX trinity ",
        category:"BASEKETBALL",
        price:"200",
        image:"pic/baseketball/1.JPG"
      },
      {
        productName: "nike air zoom g.t. cut 2 ",
        category:"BASEKETBALL",
        price:"170",
        image:"pic/baseketball/2.JPG"
      },
      {
        productName: "zoom freak 4 birthstone ",
        category:"BASEKETBALL",
        price:"130",
        image:"pic/baseketball/3.JPG"
      },
      {
        productName: "kd15 naphessa collier ",
        category:"BASEKETBALL",
        price:"150",
        image:"pic/baseketball/4.JPG"
      },
      {
        productName: "kyrie low 5 ",
        category:"BASEKETBALL",
        price:"102.97",
        sale:"200",
        image:"pic/baseketball/5.JPG"
      },
      /* running */
      {
        productName: "kyrie low 5 ",
        category:"RUNNING",
        price:"150",
        sale:"200",
        image:"pic/running/1.JPG"
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    // sale up

  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }  
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };