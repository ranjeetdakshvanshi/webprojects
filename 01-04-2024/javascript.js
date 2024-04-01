 function bodyload(){
        fetch("../data/flipkart.json")
        .then(function(response){
            return response.json();  
        })
        .then(function(product){
            document.getElementById("productImage").src= product.photo;
            document.getElementById("productTitle").innerHTML = product.title;
            document.getElementById("productRating").innerHTML = product.rating.rate;
            document.getElementById("productReviews").innerHTML = `${product.rating.ratings} Ratings & ${product.rating.reviews} Reviews`.fontcolor('gray').bold();
            document.getElementById("productPrice").innerHTML = `&#8377; ${product.price} <font size='5' color='gray'><strike> &#8377; ${product.actualPrice}</strike></font>`;
            for(var offer of product.offers){
                var li = document.createElement("li");
                li.innerHTML = `<span class="bi bi-tag-fill text-success"></span> ${offer}`;
                li.className = "mb-2 mt-2";
                document.querySelector("ul").appendChild(li);
            }
        })
    }
