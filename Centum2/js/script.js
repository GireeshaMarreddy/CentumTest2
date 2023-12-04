function calculateLoan() {

    var employeeId = document.getElementById("employeeId").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var designation = document.getElementById("designation").value;
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);

    
    if (employeeId.length < 4 || !employeeId.startsWith('E')) {
        alert("Employee ID must be at least 4 characters and start with 'E'.");
        return;
    }

    
    var loanMultiplier = 1;
    if (designation === "manager") {
        loanMultiplier = 10;
    } else if (designation === "developer") {
        loanMultiplier = 15;
    } else if (designation === "analyst") {
        loanMultiplier = 20;
    }

    var loanAmount = loanAmount * loanMultiplier;
    var calculatedInterest = (loanAmount * interestRate) / 100;


    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Employee ID: ${employeeId}</p>
        <p>Name: ${name}</p>
        <p>Address: ${address}</p>
        <p>Designation: ${designation}</p>
        <p>Calculated Loan Amount: ${loanAmount}</p>
        <p>Calculated Interest: ${calculatedInterest}</p>
        <p>Maturity Date: ${maturityDate}</p>
    `;
}
