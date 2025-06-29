document.addEventListener('DOMContentLoaded', () => {
    const search_form = document.querySelector('#search_form');
    search_form.addEventListener('submit', (e) => {
        e.preventDefault();


        // Linking HTML inputs to Javascript
        const search_drink_name = search_form.search_drink_name.value.trim();
        const drink_name_valid = /^[a-zA-Z]+( +[a-zA-Z]+)*$/.test(search_drink_name);

        // Button for nice validation showcase
        let search_button = document.getElementById('search-button');
        let search_button_color = search_button.style.backgroundColor;
        let search_button_text = search_button.textContent;
        let drink_input = document.getElementById('search_drink_name');

        // creating input event to reset background color every time user start typing
        drink_input.addEventListener("input", function() {
            search_button.style.backgroundColor = search_button_color;
            search_button.textContent = search_button_text;
        })

        // write the if statement
        if (!drink_name_valid) {
         search_button.style.backgroundColor = "red";
         search_button.textContent = "Invalid drink name";
        }
        else {
            search_button.style.backgroundColor = search_button_color;
            search_button.textContent = "Drink Found";
            setTimeout( function() {
                search_form.submit();
                search_form.reset();
                console.log(search_drink_name, drink_name_valid);
                setTimeout(function() {
                  search_button.style.backgroundColor = search_button_color;
                  search_button.textContent = search_drink_name;
                }, 1000)
            }, 1000)
        }
    })
})