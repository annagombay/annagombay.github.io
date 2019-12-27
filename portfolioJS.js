// VANILLA JS VERSION-- NO SLIDING ANIMATION

// function overview() {
//     var x = document.getElementById("displayRoles");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function problem() {
//     var x = document.getElementById("displayProblem");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function inspire() {
//     var x = document.getElementById("inspirationPhase");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function ideate() {
//     var x = document.getElementById("ideatePhase");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function product() {
//     var x = document.getElementById("finalProduct");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }



  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panelProject").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flipProblem").click(function(){
      $("#panelProblem").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flipInspire").click(function(){
      $("#panelInspire").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flipIdeate").click(function(){
      $("#panelIdeate").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flipProduct").click(function(){
      $("#panelProduct").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flipDiary").click(function(){
      $("#panelDiary").slideToggle("slow");
    });
  });





//   // CONFUCKINGFETTI
//   class Progress {
//     constructor(param = {}) {
//       this.timestamp        = null;
//       this.duration         = param.duration || Progress.CONST.DURATION;
//       this.progress         = 0;
//       this.delta            = 0;
//       this.progress         = 0;
//       this.isLoop           = !!param.isLoop;
  
//       this.reset();
//     }
  
//     static get CONST() {
//       return {
//         DURATION : 1000
//       };
//     }
  
//     reset() {
//       this.timestamp = null;
//     }
  
//     start(now) {
//       this.timestamp = now;
//     }
  
//     tick(now) {
//       if (this.timestamp) {
//         this.delta    = now - this.timestamp;
//         this.progress = Math.min(this.delta / this.duration, 1);
  
//         if (this.progress >= 1 && this.isLoop) {
//           this.start(now);
//         }
  
//         return this.progress;
//       } else {
//         return 0;
//       }
//     }
//   }
  
//   class Confetti {
//     constructor(param) {
//       this.parent         = param.elm || document.body;
//       this.canvas         = document.createElement("canvas");
//       this.ctx            = this.canvas.getContext("2d");
//       this.width          = param.width  || this.parent.offsetWidth;
//       this.height         = param.height || this.parent.offsetHeight;
//       this.length         = param.length || Confetti.CONST.PAPER_LENGTH;
//       this.yRange         = param.yRange || this.height * 2;
//       this.progress       = new Progress({
//         duration : param.duration,
//         isLoop   : true
//       });
//       this.rotationRange  = typeof param.rotationLength === "number" ? param.rotationRange
//                                                                      : 10;
//       this.speedRange     = typeof param.speedRange     === "number" ? param.speedRange
//                                                                      : 10;
//       this.sprites        = [];
  
//       this.canvas.style.cssText = [
//         "display: block",
//         "position: absolute",
//         "top: 0",
//         "left: 0",
//         "pointer-events: none"
//       ].join(";");
  
//       this.render = this.render.bind(this);
  
//       this.build();
  
//       this.parent.appendChild(this.canvas);
//       this.progress.start(performance.now());
  
//       requestAnimationFrame(this.render);
//     }
  
//     static get CONST() {
//       return {
//           SPRITE_WIDTH  : 9,
//           SPRITE_HEIGHT : 16,
//           PAPER_LENGTH  : 100,
//           DURATION      : 8000,
//           ROTATION_RATE : 50,
//           COLORS        : [
//             "#EF5350",
//             "#EC407A",
//             "#AB47BC",
//             "#7E57C2",
//             "#5C6BC0",
//             "#42A5F5",
//             "#29B6F6",
//             "#26C6DA",
//             "#26A69A",
//             "#66BB6A",
//             "#9CCC65",
//             "#D4E157",
//             "#FFEE58",
//             "#FFCA28",
//             "#FFA726",
//             "#FF7043",
//             "#8D6E63",
//             "#BDBDBD",
//             "#78909C"
//           ]
//       };
//     }
  
//     build() {
//       for (let i = 0; i < this.length; ++i) {
//         let canvas = document.createElement("canvas"),
//             ctx    = canvas.getContext("2d");
  
//         canvas.width  = Confetti.CONST.SPRITE_WIDTH;
//         canvas.height = Confetti.CONST.SPRITE_HEIGHT;
  
//         canvas.position = {
//           initX : Math.random() * this.width,
//           initY : -canvas.height - Math.random() * this.yRange
//         };
  
//         canvas.rotation = (this.rotationRange / 2) - Math.random() * this.rotationRange;
//         canvas.speed    = (this.speedRange / 2) + Math.random() * (this.speedRange / 2);
  
//         ctx.save();
//           ctx.fillStyle = Confetti.CONST.COLORS[(Math.random() * Confetti.CONST.COLORS.length) | 0];
//           ctx.fillRect(0, 0, canvas.width, canvas.height);
//         ctx.restore();
  
//         this.sprites.push(canvas);
//       }
//     }
  
//     render(now) {
//       let progress = this.progress.tick(now);
  
//       this.canvas.width  = this.width;
//       this.canvas.height = this.height;
  
//       for (let i = 0; i < this.length; ++i) {
//         this.ctx.save();
//           this.ctx.translate(
//             this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
//             this.sprites[i].position.initY + progress * (this.height + this.yRange)
//           );
//           this.ctx.rotate(this.sprites[i].rotation);
//           this.ctx.drawImage(
//             this.sprites[i],
//             -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2,
//             -Confetti.CONST.SPRITE_HEIGHT / 2,
//             Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
//             Confetti.CONST.SPRITE_HEIGHT
//           );
//         this.ctx.restore();
//       }
  
//       requestAnimationFrame(this.render);
//     }
//   }
  
//   (() => {
//     const DURATION = 8000,
//           LENGTH   = 120;
  
//     new Confetti({
//       width    : window.innerWidth,
//       height   : window.innerHeight,
//       length   : LENGTH,
//       duration : DURATION
//     });
  
//     setTimeout(() => {
//       new Confetti({
//         width    : window.innerWidth,
//         height   : window.innerHeight,
//         length   : LENGTH,
//         duration : DURATION
//       });
//     }, DURATION / 2);
//   })();


//   // Increments the delay on each item.
// $('.rolldown-list li').each(function () {
//     var delay = ($(this).index() / 4) + 's';
//     $(this).css({
//       webkitAnimationDelay: delay,
//       mozAnimationDelay: delay,
//       animationDelay: delay
//     });
//   });
  
//   $('#btnReload').click(function () {
//     $('#myList').removeClass('rolldown-list');
//     setTimeout(function () {
//       $('#myList').addClass('rolldown-list');
//     }, 1);
//   });



var parallaxElements = $('.parallax'),
    parallaxQuantity = parallaxElements.length;

$(window).on('scroll', function () {

  window.requestAnimationFrame(function () {

    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement =  parallaxElements.eq(i);
      var scrolled = $(window).scrollTop();
          
        currentElement.css({
          'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
        });

    }
  });

});



function mouseOver() {
    document.getElementById("demo").style.background = "aliceblue";
    document.getElementById("demo").style.height = "30vw";
    document.getElementById("demo").style.width = "30vw";
    document.getElementById("demo").style.borderRadius = "50%";
    document.getElementById("demo").style.marginTop= "-30vw";
    document.getElementById("demo").style.marginRight= "5vw";



  }
  
  function mouseOut() {
    document.getElementById("demo").style.height = "0vw";
    
  }


  $("div").scroll(function(){
    $("span").text(x += 1);
  });
  

function crossOut() {
  onscroll.consoleLog('hi');
  document.getElementById('lineThrough').style.textDecoration = 'line-through';
}

crossOut();  


function turnPink1 () {
  document.getElementById('col1').style.backgroundColor = "#ef537b";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> Many of our participants voiced a predilection for applications that compute music suggestions based on existing libraries. Such a feature could save time for users wanting to access familiar music without mental exertion. Companies thus may benefit from strengthening the scope and validity of their suggestive algorithms.';
  }


function turnPink2 () {
  document.getElementById('col2').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> Popular streaming services such as Spotify and Apple Music make accessing music a breeze; with a simple click, users can add an unlimited number of songs and playlists to their device. The trouble comes, however, when music-goers attempt to access their libraries offline. Many of our participants expressed displeasure with the amount of data required to download and stream music, which is understandable given that access to streaming services alone comes at a price. Moreover, users commented that even after downloading songs, they became unavailable once outside of internet range. Given that we live in a digital era, companies might consider making their libraries’ accessibility more reliable. ';

  
}

function turnPink3 () {
  document.getElementById('col3').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> A simple finding-- there was a relatively equal division of time spent listening to music in the morning and at night. 44.4% of our participants reported being morning listeners, while 55.6% listened to music at night time. Interestingly, not one participant chose the third option we provided--listening in the afternoon. Under the assumption that our users follow relatively conventional lifestyles (i.e. they face obligations from approximately 9:00 am - 5:00 pm), this finding might be reflective of a tendency for users to listen to music when they have alone time.  ';
}

function turnPink4 () {
  document.getElementById('col4').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col5').style.backgroundColor = "transparent";

  document.getElementById('paragraph').innerHTML = '<br> When asked whether our users’ preferred music streaming features affected their mood, 88.9% of respondents answered “yes”. Of this cohort, 77.8% of users reported improvements in mood, while the remaining 11.1% said that their mood had changed for the worse. It’s difficult to know whether the participant whose mood declined was affected by the music itself, or some sort of technical failure on part of their preferred feature. One thing that is clear, however, is that music streaming applications generally serve as a mood booster.   ';
}

function turnPink5 () {
  document.getElementById('col5').style.backgroundColor = "#ef537b";
  document.getElementById('col1').style.backgroundColor = "transparent";
  document.getElementById('col2').style.backgroundColor = "transparent";
  document.getElementById('col3').style.backgroundColor = "transparent";
  document.getElementById('col4').style.backgroundColor = "transparent";
  
  document.getElementById('paragraph').innerHTML = '<br> Users want a feature that quickly recognizes music in their surroundings. <br><br>While applications with this technology surely exist, the feature itself is not typically integrated into popular music streaming services. Perhaps it is not every day that a pleasant song captures our attention, but when the time comes, the ability to quickly access its title and artist appears to be a user need. Imagine if your favourite streaming application was able to accurately decipher, locate and download an outside music source in seconds!<br><br>Users want access to lyrics<br><br>Whether it is to settle a dispute about a line in a song, to sing along, or simply to appreciate the writing of talented artists, some of our users desired access to lyrics as they used their music streaming services. In a generation where rapid access to information has become the norm, it is not surprising to receive such feedback . Music streaming platforms might even benefit from gamifying the process by turning lyrics into an opportunity for mobile karaoke! ';
}



// function lineThrough() {
//   document.getElementById('lineThrough').style.textDecoration = "line-through";
// }


