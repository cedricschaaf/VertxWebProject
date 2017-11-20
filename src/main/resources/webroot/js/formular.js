$(document).ready(function () {
    
    $.ajax({url:"../session", data:
                {
                    typ:"anfrage"
                },
                success: function (data) {
                    if (data.typ=="angemeldet"){
                        if (data.angemeldet=="ja"){
                            $("body").html("Du bist schon angemeldet");
                        } else {
                            $("body").html("Du musst dich noch anmelden");
                        }
                    }
                }
            });
    
    $("#eingabeKnopf").click(function () {
        $.ajax({url:"../anfrage", data:
                {
                    name: $("#eingabeName").val(),
                    pass: $("#eingabePass").val()
                },
                success: function (data) {
                    $("body").append("<div>Daten: " + data.text+"</div>");
                }
            });
    });
});