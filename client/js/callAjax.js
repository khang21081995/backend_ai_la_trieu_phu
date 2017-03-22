/**
 * Created by khang on 3/15/2017.
 */

$(document).ready(function () {
    var temp = "";
    console.log(temp);
    $('body').on('click', '.btnSubmit',
        function () {
            // var username = document.getElementById("txtUsername").value;
            // var password = document.getElementById("txtPass").value;
            var question = document.getElementById("txtQuestion").value;
            var A = document.getElementById("txtA").value;
            var B = document.getElementById("txtB").value;
            var C = document.getElementById("txtC").value;
            var D = document.getElementById("txtD").value;
            var answer = document.getElementById("txtAnswer").value;
            // var level = document.getElementById("txtLevel").value;
            var data = JSON.stringify({
                "description": question,
                "answers": {
                    "a": A,
                    "b": B,
                    "c": C,
                    "d": D
                },
                "choice": answer,
                "level": 1
            });
            console.log(data);
            var msgElement = document.getElementById("message");
            $.ajax({
                url: "/api/question/addQuestion",
                method: "POST",
                contentType: "application/json",
                data: data
            }).done(function (response) {
                console.log(response);
                if (response.status) {
                    msgElement.innerHTML = response.message;
                    question.innerHTML = "";
                    A.innerHTML = "";
                    B.innerHTML = "";
                    C.innerHTML = "";
                    D.innerHTML = "";
                    answer.innerHTML = "";

                } else {
                    msgElement.innerHTML = response.message;
                }
            });
        });
});