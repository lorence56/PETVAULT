document.getElementById('petForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const petName = document.getElementById('petName').value;
  const species = document.getElementById('species').value;
  const age = document.getElementById('age').value;
  const breed = document.getElementById('breed').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const contact = document.getElementById('contact').value;

  const result = `
    <h3>Pet Registered Successfully</h3>
    <p><strong>Name:</strong> ${petName}</p>
    <p><strong>Species:</strong> ${species}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Breed:</strong> ${breed}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Contact:</strong> ${contact}</p>
  `;

  document.getElementById('output').innerHTML = result;
});
