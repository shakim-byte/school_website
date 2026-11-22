// Store the selected user role
let selectedRole = "";

// Function for selecting a user role
function selectRole(role) {

    selectedRole = role;

    document.getElementById("selected-role").textContent =
        "Selected account: " + role;

    console.log("User selected: " + role);
}
// ===================================
// STUDENT REGISTRATION SYSTEM
// ===================================

// Check whether we are on the student registration page
const studentForm = document.getElementById("student-form");

if (studentForm) {

    // Get previously saved students from browser storage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Display existing students when page opens
    displayStudents();


    // Handle student registration
    studentForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();


        // Collect student information
        const firstName = document.getElementById("first-name").value.trim();

        const lastName = document.getElementById("last-name").value.trim();

        const gender = document.getElementById("gender").value;

        const dateOfBirth = document.getElementById("date-of-birth").value;

        const admissionNumber = document.getElementById("admission-number").value.trim();

        const studentClass = document.getElementById("class").value;

        const admissionDate = document.getElementById("admission-date").value;

        const parentName = document.getElementById("parent-name").value.trim();

        const parentPhone = document.getElementById("parent-phone").value.trim();

        const parentEmail = document.getElementById("parent-email").value.trim();

        const address = document.getElementById("address").value.trim();


        // Check whether admission number already exists
        const existingStudent = students.find(function(student) {

            return student.admissionNumber.toLowerCase() === admissionNumber.toLowerCase();

        });


        if (existingStudent) {

            alert("This admission number already exists!");

            return;

        }


        // Create a student object
        const newStudent = {

            firstName: firstName,

            lastName: lastName,

            fullName: firstName + " " + lastName,

            gender: gender,

            dateOfBirth: dateOfBirth,

            admissionNumber: admissionNumber,

            studentClass: studentClass,

            admissionDate: admissionDate,

            parentName: parentName,

            parentPhone: parentPhone,

            parentEmail: parentEmail,

            address: address

        };


        // Add student to our student list
        students.push(newStudent);


        // Save students in browser storage
        localStorage.setItem("students", JSON.stringify(students));


        // Display students
       displayFilteredStudents(JSON.parse(localStorage.getItem("students")) || []);


        // Clear the form
        studentForm.reset();


        // Inform the administrator
        alert("Student registered successfully!");

    });


    // Display registered students
    function displayFilteredStudents(students) {
    const studentsList = document.getElementById("students-list");

    studentsList.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.admissionNumber || ""}</td>
            <td>${student.firstName || ""} ${student.lastName || ""}</td>
            <td>${student.gender || ""}</td>
            <td>${student.className || ""}</td>
            <td>${student.parentName || ""}</td>
            <td>${student.parentPhone || ""}</td>
        `;

        studentsList.appendChild(row);
    });
}

        students.forEach(function(student) {

            const row = document.createElement("tr");


            row.innerHTML = `
                <td>${student.admissionNumber}</td>
                <td>${student.fullName}</td>
                <td>${student.gender}</td>
                <td>${student.studentClass}</td>
                <td>${student.parentName}</td>
                <td>${student.parentPhone}</td>
            `;


            studentsList.appendChild(row);

        });

    }

}
