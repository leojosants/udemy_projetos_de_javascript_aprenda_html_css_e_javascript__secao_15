/* */
const numbers = document.querySelectorAll('.number');
const generate_button = document.querySelector('#generate');

/* */
function generateNumbers() {
    const maximum_number = 60;
    const minimum_number = 1;
    const result = [];

    while (result.length < 6) {
        const number = Math.floor(Math.random() * (maximum_number - minimum_number + 1)) + minimum_number;

        if (!result.includes(number)) {
            result.push(number);
        };
    };

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].textContent = result[i];
    };
};

/* */
generate_button.addEventListener('click', generateNumbers);