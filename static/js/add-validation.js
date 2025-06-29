document.addEventListener("DOMContentLoaded", function() {
  const addForm = document.querySelector("#add-form");

  // add input EventListener to reset button state every time user starts typing
    // assign variables * By AI
    let add_button = document.getElementById("add-button");
    const add_button_color = add_button.style.backgroundColor;
    const add_button_text = add_button.textContent;

      // Event Input:
      addForm.addEventListener("input", function() {
          add_button.style.backgroundColor = add_button_color;
          add_button.textContent = add_button_text;
      })

      addForm.addEventListener("submit", function(e) {
        e.preventDefault();

      // NOTE* all comments written by me


      // Take input and set variables for each input
        const add_drink_name = addForm.add_drink_name.value.trim();
        const add_drink_brand = addForm.add_drink_brand.value.trim();
        const add_drink_price = addForm.add_drink_price.value.trim();

      // Set expressions to make sure every input is valid
      // Allow for spaces & decimal numbers (optional) for price
        const drink_name_valid = /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(add_drink_name);
        const drink_brand_valid = /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(add_drink_brand);
        const drink_price_valid = /^[0-9]+(\.[0-9]{2})?$/.test(add_drink_price);


      // if statement to submit or show invalidation
        if(!drink_name_valid && drink_brand_valid && drink_price_valid) {
            add_button.style.backgroundColor = "red";
            add_button.textContent = "Invalid Details";
        }
        else if (!drink_name_valid) {
            add_button.style.backgroundColor = "red";
            add_button.textContent = "Invalid Name";
        }
        else if(!drink_brand_valid) {
            add_button.style.backgroundColor = "red";
            add_button.textContent = "Invalid Brand";
        }
        else if(!drink_price_valid) {
            add_button.style.backgroundColor = "red";
            add_button.textContent = "Price is number-only";
        } else {
            add_button.style.backgroundColor = "green";
            add_button.textContent = "Complete!!!";
            // nest inside of completion
            // if success show validation before submitting
            setTimeout( function(){
                addForm.submit();
                addForm.reset();
                setTimeout( function() {
                    add_button.style.backgroundColor = add_button_color;
                    add_button.textContent = add_button_text;
                }, 1000)
            },1000)
        }
    })
})