using System;
using System.Net;
using System.Web;
using System.Net.Mail;
using System.Web.UI.WebControls;
using System.Text;

public partial class Email : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
	{

		string msg = "First Name: " + Request.Form["fname"] + "\n" + "Last Name: " + Request.Form["lname"] + "\n" + "Email: " + Request.Form["email"] + "\n" + "Message: " + Request.Form["msg"] + "\n";

		MailMessage message = new MailMessage();
		message.From = new MailAddress("matthomework1@gmail.com");
		message.To.Add( new MailAddress("matthew.a.ford1@gmail.com"));
		message.Subject = "Someone is trying to contact you!";
		message.Body = msg;

		// Command line argument must the the SMTP host.
		SmtpClient client = new SmtpClient();
		client.Host = "smtp.gmail.com";
		client.Port = 587;
		client.DeliveryMethod = SmtpDeliveryMethod.Network;
        client.Timeout = 10000;
		client.EnableSsl = true;
		client.Credentials = new NetworkCredential("matthomework1@gmail.com","Yankee1234");
		client.Send(message);
    }
}
