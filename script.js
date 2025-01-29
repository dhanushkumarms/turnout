document.addEventListener("DOMContentLoaded", () => {
    const voteForm = document.getElementById("voteForm");
    let votes = {
        candidate1: localStorage.getItem("votes-candidate1") || 0,
        candidate2: localStorage.getItem("votes-candidate2") || 0,
        candidate3: localStorage.getItem("votes-candidate3") || 0
    };
    function updateVotes() {
        document.getElementById("votes-candidate1").textContent = votes.candidate1;
        document.getElementById("votes-candidate2").textContent = votes.candidate2;
        document.getElementById("votes-candidate3").textContent = votes.candidate3;
    }
    updateVotes();
    voteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
        if (selectedCandidate) {
            const candidate = selectedCandidate.value;
            votes[candidate]++;
            localStorage.setItem(`votes-${candidate}`, votes[candidate]);
            updateVotes();
            alert("Vote submitted successfully!");
        } else {
            alert("Please select a candidate before submitting your vote.");
        }
    });
});
