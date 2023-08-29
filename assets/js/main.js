let searchForm = document.getElementById("form-search");
let resultContainer = document.getElementById("result-container");
const currentIP = "192.168.0.102";

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let question = document.getElementById('question').value;
    if (question != "") {
        $.ajax({
            type: 'GET',
            url: `http://${currentIP}/custom/avatar/get_av_new.php?q=` + encodeURIComponent(question),
            success: function (response) {
                resultContainer.textContent = response; // Update the result container with the response
            },
            error: function () {
                resultContainer.textContent = 'An error occurred while fetching the result.';
            }
        });
    }
    else {
        alert("Ensure you input a value in both fields!");
    }
    question = "";
})