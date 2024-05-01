function AddRow() {
  validationFields();
  var student = {
    name: document.getElementById("firstname").value,
    email: document.getElementById("email").value,
    website: document.getElementById("Website").value,
    image: document.getElementById("image-link").value,

    gender: function () {
      if (document.getElementById("gender1").checked) {
        return "Male";
      } else if (document.getElementById("gender2").checked) {
        return "Female";
      } else {
        return "";
      }
    },
    skills: function () {
      var allSkills = "";
      if (document.getElementById("skill1").checked) {
        allSkills = allSkills + "Java ";
      }
      if (document.getElementById("skill2").checked) {
        allSkills = allSkills + "HTML, ";
      }
      if (document.getElementById("skill3").checked) {
        allSkills = allSkills + "CSS, ";
      }
      return allSkills;
    },
    addinfo: function (allinfo, imagePath) {
      var AddRown = document.getElementById("show");
      var NewRow = AddRown.insertRow(1);
      var size = 1,
        index = 0;
      var cel1 = NewRow.insertCell(0);
      var cel3 = NewRow.insertCell(1);
      var cel2 = NewRow.insertCell(2);
      cel1.innerHTML = allinfo;
      cel2.innerHTML = "new Image";
      cel3.innerHTML = "&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;";
      var imageInfo =
        "<img class='img-fluid' src=" +
        imagePath +
        " width =90px height=90px><img/>";
      cel2.innerHTML = imageInfo;

      size++;
      index++;
    },
    validateName: function (name) {
      return name;
    },
    validateEmail: function (email) {
      return email;
    },
    varifyEmail: function (email) {
      var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      return reg.test(email);
    },
    validateWebsite: function (website) {
      return website;
    },
    varifyWebsite: function (website) {
      regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

      return regexp.test(website);
    },
    validateImage: function (image) {
      return image;
    },
    validateGender: function (gender) {
      return gender;
    },
    validateskills: function (skills) {
      return skills;
    },
  };

  var allinfo =
    student.name +
    "<br>" +
    student.gender() +
    "<br>" +
    student.email +
    "<br>" +
    "<a href=" +
    student.website +
    " target=_blank>" +
    student.website +
    "</a>" +
    "<br>" +
    student.skills();
  var imagePath = student.image;
  var flag = 0;
  var str1 = "",
    str2 = "",
    str3 = "",
    str4 = "",
    str5 = "",
    str6 = "";
  if (student.validateName(student.name) == false) {
    flag = 1;
    str1 = str1 + "Name is Required \n";
  }
  var isEmailEntered = 1;
  if (student.validateEmail(student.email) == false) {
    flag = 1;
    isEmailEntered = 0;
    str2 = str2 + "Email is Required \n";
  }
  if (student.varifyEmail(student.email) == false && isEmailEntered == 1) {
    flag = 1;
    str2 = str2 + "Email is not correct \n";
  }
  var isWebsiteEntered = 1;
  if (student.validateWebsite(student.website) == false) {
    flag = 1;
    isWebsiteEntered = 0;
    str3 = str3 + "Website is Required \n";
  }
  if (
    student.varifyWebsite(student.website) == false &&
    isWebsiteEntered == 1
  ) {
    flag = 1;
    str3 = str3 + "Unreached Website \n";
  }
  if (student.validateImage(student.image) == false) {
    flag = 1;
    str4 = str4 + "Image is required\n";
  }
  if (student.validateGender(student.gender()) == false) {
    flag = 1;
    str5 = str5 + "Gender is required\n";
  }
  if (student.validateskills(student.skills()) == false) {
    flag = 1;
    str6 = str6 + "Skill is required\n";
  }
  if (flag == 0) {
    student.addinfo(allinfo, imagePath);
  } else {
    // alert(str);
    document.getElementById("invalid-name").innerHTML = str1;
    document.getElementById("invalid-email").innerHTML = str2;
    document.getElementById("invalid-website").innerHTML = str3;
    document.getElementById("invalid-imglink").innerHTML = str4;
    document.getElementById("invalid-gender").innerHTML = str5;
    document.getElementById("invalid-skills").innerHTML = str6;
  }
}
// function for validation
function validationFields() {
  if (document.getElementById("firstname").value != "")
    document.getElementById("invalid-name").style.display = "none";
  if (document.getElementById("email").value != "")
    document.getElementById("invalid-email").style.display = "none";
  if (document.getElementById("Website").value != "")
    document.getElementById("invalid-website").style.display = "none";
  if (document.getElementById("image-link").value != "")
    document.getElementById("invalid-imglink").style.display = "none";
  if (
    document.getElementById("gender1").checked ||
    document.getElementById("gender2").checked
  )
    document.getElementById("invalid-gender").style.display = "none";
  if (
    document.getElementById("skill1").checked ||
    document.getElementById("skill2").checked ||
    document.getElementById("skill3").checked
  )
    document.getElementById("invalid-skills").style.display = "none";
}
