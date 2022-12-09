
document.getElementById("date").innerHTML = "Date: " + Date();

function validate() {
    let a = document.getElementById('item').value;
    if (a == '') {
        document.getElementById('itemvalidate').innerHTML = "Required*";
        return false;
    } else {
        document.getElementById('itemvalidate').innerHTML = "";


    }

    if (a !== '') {
        alert("Data Inserted Successfully.");
        return false;
    }
}

