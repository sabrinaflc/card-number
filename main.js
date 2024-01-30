    $('#card-number').on('keypress change blur', function (event) {
        if (event.which < 48 || event.which > 57) {
            event.preventDefault();
            return;
        }

        $(this).val(function (index, value) {
            
            var cleanedValue = value.replace(/\s/g, '').replace(/[^0-9]+/gi, '');
            
            var formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim(); 

            return formattedValue;
        });
    });

    $('#card-number').on('copy cut paste', function () {
        setTimeout(function () {
            $('#card-number').trigger("change");
        });
    });

    function formatExpiryDate(event) {
        const inputElement = event.target;
        let inputValue = inputElement.value;
    
        const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters from the input
    
        if (/^\d+$/.test(numericValue)) {  // Check if the input contains only numeric characters
            if (numericValue.length > 2) { // Check if the input length is greater than 2
                const month = numericValue.slice(0, 2);
                const year = numericValue.slice(2);
    
                // Add a slash after the first two digits and validate the month
                if (parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12) {
                    inputValue = month + '/' + year;

                } else {
                    inputValue = ''; // Invalid month, clear the input
                    alert('Month should be between 01 and 12');
                }

                if (parseInt(year, 10) <= 23 && year.length == 2) {
                    inputValue = '';
                    alert('Year should be greather than or equal to 24');
                } else {
                    inputValue = month + '/' + year;
                }
            }

            inputElement.value = inputValue; // Faz o número sair formatado

        } else {
                inputElement.value = ''; // Non-numeric characters = clear the input
            }
    }
    
    function formatName(event) {

        let inputValue = event.target.value;

        let cleanedInput = inputValue.replace(/[^a-zA-Z\s]/g, ''); 

        cleanedInput = cleanedInput.toUpperCase();
        event.target.value = cleanedInput; 
    }

    function restrictToNumbers(event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
    
        const numericValue = inputValue.replace(/[^0-9]/g, '');

        inputElement.value = numericValue;
    }
