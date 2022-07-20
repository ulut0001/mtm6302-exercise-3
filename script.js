//Global variables

const $dateInfo = document.getElementById('dateinfo');
const $maninWindow = document.getElementById('main-window');
let $fullname = document.getElementById('fullname');
let $employment = document.getElementById('employment');
let $skills = document.getElementById('skills');
let $agreed = document.getElementById('checkbox');
const $saveButton = document.getElementById('savebutton');
const $sendButton = document.getElementById('sendbutton');
const $submitted = document.getElementById('submitted');
const $closeButton = document.getElementById('closebutton');

//save button functions

$saveButton.addEventListener ('click', function(e) {
    e.preventDefault();
    let fullName = $fullname.value;
    let employment = $employment.value;
    let skills = $skills.value;
    let agreed = $agreed.checked;
    console.log(agreed);
    localStorage.setItem("fullname", fullName);
    localStorage.setItem("employment", employment);
    localStorage.setItem("skills", skills);
    if (agreed = true) {
        let agreeValue = 1;
        localStorage.setItem("agreed", agreeValue);
    };
    $dateInfo.textContent = 'Saved at - ' + (new Date());
});

//gets items from local storage

if(localStorage.getItem("fullname")) {
    fullName = localStorage.getItem("fullname");
    $fullname.value = fullName;
};

if(localStorage.getItem("employment")) {
    employment = localStorage.getItem("employment");
    $employment.value = employment;
};

if(localStorage.getItem("skills")) {
    skills = localStorage.getItem("skills");
    $skills.value = skills;
};

if(localStorage.getItem("agreed")) {
    let agreeValue = localStorage.getItem("agreed")
    if (agreeValue = 1) {
        $agreed.checked = true;
    };
};

//send button functions

$sendButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.localStorage.clear();
    $fullname.value = '';
    $employment.value = 'ft';
    $skills.value = '';
    $agreed.checked = false;
    $submitted.style.display = 'flex';
});

//info screen closing

$closeButton.addEventListener('click', function() {
    $submitted.style.display = 'none';
});
