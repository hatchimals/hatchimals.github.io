// Google Analytics
if (window.location.host === 'hatchimals.se') {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-86030611-1', 'auto');
    ga('send', 'pageview');
    // /Google analytics
}

// Typekit
(function (d) {
    var config = {
            kitId: 'vjp4hcu',
            scriptTimeout: 3000,
            async: true
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config)
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s)
})(document);
// /Typekit

$(function() {
    $('#menu-close').on('click', function() {
        $('#menu').removeClass('open');
    });
    $('#menu-open').on('click', function() {
        $('#menu').addClass('open');
    });
});







//
//$(function() {
//    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
//
//    NUM_CONFETTI = 350;
//    COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
//    PI_2 = 2 * Math.PI;
//    canvas = document.getElementById("world");
//    context = canvas.getContext("2d");
//    window.w = 0;
//    window.h = 0;
//
//    resizeWindow = function() {
//      window.w = canvas.width = window.innerWidth;
//      return window.h = canvas.height = window.innerHeight;
//    };
//
//    window.addEventListener('resize', resizeWindow, false);
//
//    window.onload = function() {
//      return setTimeout(resizeWindow, 0);
//    };
//
//    range = function(a, b) {
//      return (b - a) * Math.random() + a;
//    };
//
//    drawCircle = function(x, y, r, style) {
//      context.beginPath();
//      context.arc(x, y, r, 0, PI_2, false);
//      context.fillStyle = style;
//      return context.fill();
//    };
//
//    xpos = 0.5;
//
////    document.onmousemove = function(e) {
////      return xpos = e.pageX / w;
////    };
//
//    window.requestAnimationFrame = (function() {
//      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
//        return window.setTimeout(callback, 1000 / 60);
//      };
//    })();
//
//    Confetti = (function() {
//      function Confetti() {
//        this.style = COLORS[~~range(0, 5)];
//        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
//        this.r = ~~range(2, 6);
//        this.r2 = 2 * this.r;
//        this.replace();
//      }
//
//      Confetti.prototype.replace = function() {
//        this.opacity = 0;
//        this.dop = 0.03 * range(1, 4);
//        this.x = range(-this.r2, w - this.r2);
//        this.y = range(-20, h - this.r2);
//        this.xmax = w - this.r;
//        this.ymax = h - this.r;
//        this.vx = range(0, 2) + 8 * xpos - 5;
//        return this.vy = 0.7 * this.r + range(-1, 1);
//      };
//
//      Confetti.prototype.draw = function() {
//        var ref;
//        this.x += this.vx;
//        this.y += this.vy;
//        this.opacity += this.dop;
//        if (this.opacity > 1) {
//          this.opacity = 1;
//          this.dop *= -1;
//        }
//        if (this.opacity < 0 || this.y > this.ymax) {
//          this.replace();
//        }
//        if (!((0 < (ref = this.x) && ref < this.xmax))) {
//          this.x = (this.x + this.xmax) % this.xmax;
//        }
//        return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
//      };
//
//      return Confetti;
//
//    })();
//
//    confetti = (function() {
//      var j, ref, results;
//      results = [];
//      for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
//        results.push(new Confetti);
//      }
//      return results;
//    })();
//
//    window.step = function() {
//      var c, j, len, results;
//      requestAnimationFrame(step);
//      context.clearRect(0, 0, w, h);
//      results = [];
//      for (j = 0, len = confetti.length; j < len; j++) {
//        c = confetti[j];
//        results.push(c.draw());
//      }
//      return results;
//    };
//
//    step();
//});
