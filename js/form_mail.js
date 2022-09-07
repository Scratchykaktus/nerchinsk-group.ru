$("#send_mail").on("click", function()
{

    var phone = $("#phone").val().trim();
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();

    if(email == "")
    {
        alert('Введите ваш email');
        return false;
    } 
    else if(phone == "")
    {
        alert('Введите ваш номер телефона');
        return false;
    }
    else if(name == "")
    {
        alert('Введите ваши Ф.И.О');
        return false;
    }

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name,
                'email': email,
                'phone': phone 
        },
        dataType: 'html',
        beforeSend: function(){
            $("#send_mail").prop("disabled", true);
        },
        success: function(data){
            if(!data){
                alert("Произошла ошибка, сообщение не отправленно");
            }else{
                $("#mailForm").trigger("reset");
            }
            $("#send_mail").prop("disabled", false);
        }
    })
});