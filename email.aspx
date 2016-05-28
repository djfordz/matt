<!DOCTYPE html>
<%@ Page Language="C#" CodeFile="Email.aspx.cs" Inherits="Email" %>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta content="text/html; charset=utf-8" http-equiv="Content-Type">        
		<title>Contact Form</title>
        <link rel="stylesheet" href="css/styles.css" />
        <script type="text/javascript" src="js/scripts.js" defer></script>
    </head>
    <body id="home">
        <header class="site-header">
            <div class="wrapper">
                <nav id="primary-nav" class="site-nav">
                    <a  href="index.html"><button class="btn-default">M</button></a>
                    <a href="ambition.html"><button class="btn-default">A</button></a>
                    <a href="team.html"><button class="btn-default">T</button></a>
                    <a href="tables.html"><button class="btn-default">T</button></a>
                    <a href="hobby.html"><button class="btn-default">H</button></a>
                    <a href="email.html"><button class="active btn-default">E</button></a>
                    <a href="winner.html"><button class="btn-default">W</button></a>
                </nav>
            </div>
        </header>
        <section class="container page-content">
            <div class="container">
                <div class="col-1">
                    <p>Matt has been notified you would like to speak with him.</p>
                    <a href="email.html"><button class="btn-default active" value="button">Back</button></a>
                </div>
            </div>
        </section>
    </body>
</html>
