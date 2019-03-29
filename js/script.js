var user_json;

function gotoUserList() {
    var userName = passWord = '';
    var status = false;
    userName = document.getElementById("exampleInputEmail1").value;
    passWord = document.getElementById("exampleInputPassword1").value;
    var items = [
        ['Bret', '1-770-736-8031x56442'],
        ['Antonette', '010-692-6593x09125'],
        ['Samantha', '1-463-123-4447'],
        ['Karianne', '493-170-9623x156'],
        ['Kamren', '(254)954-1289'],
        ['Leopoldo_Corkery', '1-477-935-8478x6430'],
        ['Elwyn.Skiles', '210.067.6132'],
        ['Maxime_Nienow', '586.493.6943x140'],
        ['Delphine', '(775)976-6794x41206'],
        ['Moriah.Stanton', '024-648-3804'],
    ];
    for (i = 0; i < items.length; i++) {
        if (userName == items[i][0] && passWord == items[i][1]) {
            status = true;
            break;
        }
    }
    if (status) {
        window.location.replace("file:///home/sk/Projects/login-user-list/user_list.html");
    } else {
        console.log("login failed")
    }
}

function XHR(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', file, true);
    xhr.send();
}

function init() {
    XHR('./data/data.json', function (response) {
        // Parse JSON string into object
        user_json = JSON.parse(response);


        user_json.forEach(function (el) {
            //console.log(el);
            createUserList(el);
        });
    });
}

function createUserList(data) {
    var user_li = `
        <tr>
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>
            <td>${data.username}</td>
            <td>${data.email}</td>
            <td>street: ${data.address.street}, suite: ${data.address.suite}, city: ${data.address.city}</td>
        </tr>
    `;
    //console.log(user_li);
    $('tbody').append(user_li);
}
console.log(user_json);
init();