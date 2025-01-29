document.addEventListener("DOMContentLoaded", function () {
    const voteForm = document.getElementById("voteForm");

    voteForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const candidate = document.getElementById("candidate").value;
        alert(`Thank you for voting! You selected: ${candidate}`);
    });
});
