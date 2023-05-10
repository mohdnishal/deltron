function sendMail()
{
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        //subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    const ServiceID="service_9m4dprq";
    const TemplateID="template_to6o9sc";
    emailjs.send(ServiceID,TemplateID,params).then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        //document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message successfully sent");
    }).catch((err)=>console.log(err));
}