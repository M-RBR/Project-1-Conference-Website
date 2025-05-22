const params = new URL(window.location.href).searchParams;

const gender = params.get("gender");
const status = params.get("status");
const fname = params.get("fname");
const lname = params.get("lname");
const email = params.get("email");
const abstract = params.get("abstract");

const body = document.body;

const title = document.createElement("h2");
title.textContent = "Your submitted information:";
body.appendChild(title);

function createInfo(label, value) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${label}:</strong> ${value}`;
  body.appendChild(p);
}

createInfo("Gender", gender);
createInfo("Status", status);
createInfo("First Name", fname);
createInfo("Last Name", lname);
createInfo("Email", email);
createInfo("Abstract", abstract);
