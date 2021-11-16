<template>
  <section id="header" class="clearfix">
    <!--header-inner starts-->
    <div id="header-inner" class="container">
      <div class="row">
        <!--logo starts-->
        <div class="span4 logo">
          <router-link to="/" class="selected"
            ><img
              src="img/logo/logo-blanco-50-1.png"
              width="128"
              height="28"
              alt="logo"
          /></router-link>
        </div>
        <!--logo ends-->

        <!--menu starts-->
        <div class="span8">
          <div id="smoothmenu" class="ddsmoothmenu">
            <ul id="nav">
              <li><router-link to="/" class="selected">Home</router-link></li>
              <li><router-link to="/about">NOSOTROS</router-link></li>
              <li>
                <router-link to="/success-story">CASOS DE ÉXITO</router-link>
              </li>
              <li><router-link to="/contact">CONTÁCTANOS</router-link></li>
            </ul>
          </div>
        </div>
        <!--menu ends-->
      </div>
    </div>
    <!--header-inner ends-->

    <!--header-btm starts-->
    <div id="header-btm">
      <div class="container">
        <div class="row">
          <div class="span12">
            <img src="img/icons/icon-phone.png" alt="icon" />
            <p>Call for support / 123 456 789</p>
            <ul>
              <li>
                <img src="img/icons/icon-facebook.png" alt="icon" />
                <p><a href="#">Facebook</a></p>
              </li>
              <li>
                <img src="img/icons/icon-user.png" alt="icon" />
                <p>
                  <a href="#myModal" role="button" data-toggle="modal">Login</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--header-btm ends-->
  </section>
</template>

<script>
export default {};
</script>

<style></style>
