 
document.write(' <link rel="stylesheet" type="text/css" href="css/head.css" /> ');
document.write(' <div class="container">');
       document.write('<div class="masthead" >'); 
        document.write(' <div class="row">');
           document.write(' <div class="span2"><a href="index.html"><img src="image/flowerstore.png" alt=""  /></a></div>');
           document.write('<div class="span7"></div>');
           document.write('<a href="index.html"><div class="span1"><img src="image/iconhome.png"  />Home</div></a>');
           document.write('<a href="#"><div class="span1"><img src="image/iconshoppingcart.png"  />Cart</div></a>');
           document.write('<a href="signin.html" ><div class="span1"> <img src="image/iconuser.png"  />Sign in </div></a>');
          document.write('</div>');
         document.write('<div class="navbar">'); 
           document.write('<div class="navbar-inner">');
             document.write('<div class="containernav">');
               document.write('<ul class="nav "> ');   
                  document.write('<li class="active"><a href="#">Home</a></li>');
                  document.write('<li class="dropdown">');
                      document.write('<a class="dropdown-toggle" id="dlabel" role="button" data-toggle="dropdown" data-target="flowers.html" href="flowers.html" >Flowers <b class="caret"></b></a>');
                        <!-- Link or button to toggle dropdown -->
                          document.write('<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">');
                             document.write('<li><a tabindex="-1" href="flowers.html">New Arrival</a></li>');
                             document.write('<li class="disabled"><a tabindex="-1" href="#">Rose</a></li>');
                             document.write('<li><a tabindex="-1" href="flowers.html">For Desk</a></li>');
                             document.write('<li class="divider"></li>');
                             document.write('<li><a tabindex="-1" href="flowers.html">For Wedding</a></li>');
                          document.write('</ul>');
                    document.write('</li>');
                    document.write('<li class="dropdown">');
                       document.write('<a class="dropdown-toggle" id="dlable" role="button" data-toggle="dropdown" data-target="#" href="#">Cakes <b class="caret"></b></a>');
                          document.write('<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">');
                             document.write('<li><a tabindex="-1" href="#">Chocolate</a></li>');
                             document.write('<li class="disabled"><a tabindex="-1" href="#">Mousse</a></li>');
                             document.write('<li><a tabindex="-1" href="#">Cream</a></li>');
                             document.write('<li class="divider"></li>');
                             document.write('<li><a tabindex="-1" href="#">Fruit</a></li>');
                          document.write('</ul>');
                   document.write('</li>');
                   document.write('<li><a href="#">Presents</a></li>');
                   document.write('<li><a href="#">About</a></li>');
                   document.write('<li><a href="#">Blog</a></li>');
                 document.write('</ul>');
              document.write('</div>');
            document.write('</div>');
          document.write('</div>');<!-- /.navbar -->
        document.write('</div>'); <!-- /.masthead -->
      document.write('</div>');<!-- /.container -->
