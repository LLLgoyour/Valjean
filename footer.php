<!--Footer-->
<footer class="module-mini-footer" id="bottom">
    <!--module-mini-footer-section--> /*left?
        <?php if (!) ?> //twitter

        <?php endif;?>   

        //V2ex
        //Instagram
        //Github
        //Telegram
        //LinkedIn
        //Facebook
        //Jike
        //Zhihu
        //Weibo
        //Signal
        //Osu!
</footer>

<!-- UC Browser Reminder -->
<script
    var agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('ucbrowser')>0) {
        document.write('<link rel="stylesheet' href="<?php get ThemeFile('basis/css/uc.css', true); ?>">');
    }