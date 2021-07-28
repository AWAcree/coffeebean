<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" rel="stylesheet">
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBsiq42tfo7KeAIsYs-rgL7kN-jXsZIaY&callback=initMap&libraries=&v=weekly"
    >
</script>
    <title>The Coffee Bean: Cafe & Roastery</title>
</head>
<body class="body" id="body">
    <!--Navbar-->
<header>
    
    <div class="navbar">
        <div class="container flex"></div>
            <a href="index.html" class="noHover logo"><img src="img/coffeebeanlogot.png" alt="The Coffee Bean"></a>
            <nav>
                <button class="hamburger" id="hamburger">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-ul">
                    <li class="home"><a href="index.html">Home</a></li>
                    <li class="hours"><a href="hourslocation.html">Hours & Location</a></li>
                    <li class="menu"><a href="menu.html">Menu</a></li>
                    <li class="about"><a href="about.html">About Us</a></li>
                    <li class="contact"><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>

        </div>
    </div>
</header>    
   
    

    <!-- Showcase -->
    <main>
        <h2 class= "slogan1">If it's good to ya, it's gotta be good for ya!</h2>
    <section class="showcase">
        <div class="container grid showcase-inner">
            <div class="showcase-text">
                <h1>Our beans are so freshhhh!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet lacus nec sollicitudin fringilla.</p>
                <a href="features.html" class="btn">Read More</a>
            </div>
            <div>
                <img src="img/overheadshot.jpg" alt="People in the Coffee Shop">
            </div>

            <div>
                <img src="img/drinkmuffin.jpg" alt="A hot latte and a tasty muffin next to a plant">
            </div>

            <div>
                <img src="img/beans.jpg" alt="Glasses full of coffee beans in a row">
            </div>

            <div class="contact-us">
                <h2>Get in on the down low</h2>
                <p>Stay up to date on all the latest news and happenings on our goods and services</p>
                <img src="img/sideshot.jpg" alt="More People in the Coffee Shop">
                <form>
                    <div class="form-control">
                        <input type="text" name="firstname" placeholder="First Name" required>
                        <div class="error-hint hidden">Your first name is required</div>
                    </div>
                    <div class="form-control">
                        <input type="text" name="lastname" placeholder="Last Name" required>
                        <div class="error-hint hidden">Your last name is required</div>
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" placeholder="Email" required>
                        <div class="error-hint hidden">Your email is required</div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div class="thank-you hidden">Thank you for wanting to hear more!</div>
            </div>
        </div>
    </section>
</main>
<footer>
    <div class="main-footer">
        <div id="map"></div>


            
               
        
        <em>Copyright &copy; 2021, The Coffee Bean Cafe and Roastery. All Rights Reserved</em>
        <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">Join Our Team</a></li>
            <li><a href="#">Contact Us</a></li>

        </ul>
        <div class="socialmedia">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-twitter"></a>
        </div>
    </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>