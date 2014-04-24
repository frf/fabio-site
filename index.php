<!DOCTYPE html>
<html lang="pt" ng-app="example359" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="author" content="Script Tutorials" />
    <title>Fabio Rocha - Analista Desenvolvedor PHP</title>
    <meta name="description" content="Fabio Rocha de Farias - Site Angular, Slim Framework, PHP 5">

    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

    <!-- add styles -->
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/default-theme.css" rel="stylesheet" type="text/css" />
    <link href="css/newcss.css" rel="stylesheet" type="text/css" />
    <link href="css/animate.css" rel="stylesheet" type="text/css" />
    <link href="css/style-responsive.css" rel="stylesheet" type="text/css" />
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="css/fontello.css" rel="stylesheet" type="text/css" />

    <!-- add javascripts -->
    <script src="js/jquery-2.0.3.min.js"></script>
    <script src="js/jquery.appear.js"></script> 
    <script src="js/jquery.scrollUp.js"></script>
    <script src="js/jquery.easing.js"></script>
    <script src="js/jquery.easypiechart.js"></script>
    
    <script src="js/jquery.isotope.js"></script>
    <script src="js/jquery.smooth-scroll.js"></script>
    <script src="js/jquery.themepunch.revolution.js"></script>
    <script src="js/superfish.js"></script>
    <script src="js/waypoints.js"></script>
    <script src="js/waypoints-sticky.js"></script>
    
    <script src="js/scripts.js"></script>
    <script src="js/bootstrap.min.js"></script>
    
    <script src="js/angular.min.js"></script>
    <script src="js/ui-bootstrap-tpls-0.10.0.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    
</head>
<body  class="royal_loader">
    <div class="navigation clearfix">
        <div class="container">
         
        <div class="row">
            <div class="col-md-12">
                <div style="margin-top: 44px;position: absolute;" class="hidden-xs"> 
                            <a class="sticky-logo" href="/" >
                                <a href="#"><img class="logo" src="images/fabio.jpg" /></a>
                            </a>
                        
                </div>
                <div class="navbar navbar-static-top">
                    <div>
                        <div class="navbar-header" >
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                Menu Principal 
                                <span class="fa fa-bars"></span>
                            </button>
                        
                        </div>
                    
                        <div class="navbar-collapse collapse ddsmoothmenu" id="smoothmenu1">
                            <ul class="nav navbar-nav pull-right top-nav sf-menu">
                                <img class="{{isViewLoading}}" src="img/loader.gif" style="float: left" />
                                <li><a href="/">Home</a></li>
                                <li><a href="#about" ng-class="{activeSmall:part == 'about'}">Sobre</a></li>
                                <li><a href="#skill" ng-class="{activeSmall:part == 'skill'}">Habilidades</a></li>
                                <li><a href="#experience" ng-class="{activeSmall:part == 'experience'}">Experiências</a></li>
                                <li><a href="#education" ng-class="{activeSmall:part == 'education'}">Educação</a></li>
                                <li style="display: none"><a href="#project" ng-class="{activeSmall:part == 'project'}">Projetos</a></li>
                                 <!--<li><a href="#blog" ng-class="{activeSmall:part == 'blog'}">Blog</a></li>-->
                                <li><a href="#contact" ng-class="{activeSmall:part == 'contact'}">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
    <!-- main content -->
    <div style="position:relative">     
        
        <div style="width:100%" ng-view>                       
        </div>
    </div>
    <br>
    <br>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="wow slideInLeft">
                        <img src="img/footer-logo.png" alt="">
                        
                        <div class="f-address">
                            <p>
                                <span>Email</span> : fabio@fabiofarias.com.br
                                
                            </p>
                            <p>
                                <span>Phone</span> : +55 21 99222 0009
                            </p>
                            <p>
                                <span>Website</span> : <a href="#">www.fabiofarias.com.br</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="wow slideInLeft">
                       <div class="f-address">
                           
                           <p>
                                &nbsp;                           
                            </p>
                            <p>
                                <img src="images/AngularJS-large.png" alt="Desenvolvido">
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    &copy; 2014 fabiorocha. All Rights Reserved. Designed & powered by <a href="#">fabiorocha.com.br</a>
                </div>
            </div>
        </div>
    </div>
<!--skill section end -->
<script src="js/skill-start.js"></script>
</body>
</html>