const card = document.getElementById('card');
const rejectBtn = document.getElementById('reject-btn');
const acceptBtn = document.getElementById('accept-btn');

const entrepreneurData = {
  name: "Piss",
  company: "XYZ",
  location: "City, Country",
  bio: "in workforce for 10 years"
};

function displayEntrepreneurProfile() {
  card.innerHTML = `
    <h2>${entrepreneurData.name}</h2>
    <p>Company: ${entrepreneurData.company}</p>
    <p>Location: ${entrepreneurData.location}</p>
    <p>bio: ${entrepreneurData.bio}</p>
  `;
}

displayEntrepreneurProfile();

rejectBtn.addEventListener('click', () => {
  console.log("Rejected");
});

acceptBtn.addEventListener('click', () => {
  console.log("Accepted");
});
