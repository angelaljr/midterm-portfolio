

//scroll position
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var doc = $(document).height();
    var win = $(window).height();

    var value = (scroll/(doc-win)) * 80;
    $('ul .line').css('height', value + ('%'));
  });
});



//skill circle
function skill() {
  $('.skill-box').find('b').each(function (i) {
    return $(this).prop('Counter', 0).animate({
      Counter: $(this).parent().data('percent')
    }, {
      duration: 2000,
      easing: 'swing',
      step(now) {
        return $(this).text(Math.ceil(now) + '%');
      }
    });
  });

  return $('.skill-box .skills-circle li').each(function (i) {
    const _right = $(this).find('.bar-circle-right');
    const _left = $(this).find('.bar-circle-left');
    const _percent = $(this).attr('data-percent');
    let deg = 3.6 * _percent;
    if (_percent <= 50) {
      return _right.animate({
        circle_rotate: deg
      }, {
        step(deg) {
          $(this).css('transform', `rotate(${deg}deg)`);
        },
        duration: 1000
      });
    } else {
      const full_deg = 180;
      deg -= full_deg;
      let run_duration = 1000 * (50 / _percent);
      return _right.animate({
        circle_rotate: full_deg
      }, {
        step(full_deg) {
          $(this).css('transform', `rotate(${full_deg}deg)`);
        },
        duration: run_duration,
        easing: 'linear',
        complete() {
          run_duration -= 1000;
          _left.css({
            'clip': 'rect(0, 150px, 150px, 75px)',
            'background': '#B0DAB9'
          });
          return _left.animate({
            circle_rotate: deg
          }, {
            step(deg) {
              $(this).css('transform', `rotate(${deg}deg)`);
            },
            duration: Math.abs(run_duration),
            easing: 'linear'
          });
        }
      });
    }
  });
};



//delay animation api
const section = document.querySelector('.skill-box');

const options = {
  root: null,//viewport
  rootMargin: '0px',
  threshold: 1.0,
}

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry =>{
    // console.log(entry);
  if(entry.isIntersecting == true) {
    skill();
  }
  })
}, options);

observer.observe(section)




//reviews
const reviews = [
  {
    id: 1,
    name: "Lorem ipsum",
    job: "web developer",
    img:
      "https://images.iphonephotographyschool.com/24755/1120/portrait-photography.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
  },
  {
    id: 2,
    name: "Lorem ipsum",
    job: "web designer",
    img:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
  },
  {
    id: 3,
    name: "Lorem ipsum",
    job: "intern",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9ZKrUaUP8ILo82p51pAEMdIkGJNTklbsdA&usqp=CAU",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.",
  },
  {
    id: 4,
    name: "Lorem ipsum",
    job: "the boss",
    img:
      "https://cdn.fstoppers.com/styles/full/s3/media/2015/10/soft-light-natural-beauty-portrait.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});




//change image
var imgE = new Array(0);
imgE[0] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639128616/few%20midterm/Screen_Shot_2021-12-10_at_4.30.13_AM_pmwwuz.png";

var imgD = new Array(4);
imgD[0] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639128423/few%20midterm/jeico-01_m2wotj.jpg";
imgD[1] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639127034/few%20midterm/Screen_Shot_2021-12-10_at_4.03.51_AM_ovqjqs.png";
imgD[2] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639127062/few%20midterm/Screen_Shot_2021-12-10_at_4.04.19_AM_zm54ft.png";
imgD[3] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023955/few%20midterm/%E8%A1%A3%E6%9C%8D_front_c9t8ep.jpg";
imgD[4] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023953/few%20midterm/Yazzi_logo_pdyfzu.jpg";

var imgC = new Array(8);
imgC[0] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023935/few%20midterm/%E4%B9%A6final_swccv1.jpg";
imgC[1] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023936/few%20midterm/bag_logo_h94ri7.jpg";
imgC[2] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023935/few%20midterm/name_card_4_sdrxoe.jpg";
imgC[3] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023935/few%20midterm/bag_logo_5_ho1dkv.jpg";
imgC[4] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023935/few%20midterm/notepad_eusobr.jpg";
imgC[5] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023935/few%20midterm/bag_logo_9_wk4wdj.jpg";
imgC[6] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639127005/few%20midterm/Screen_Shot_2021-12-10_at_4.03.21_AM_dsgx4d.png";
imgC[7] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639127111/few%20midterm/Screen_Shot_2021-12-10_at_4.05.08_AM_rgc34m.png";
imgC[8] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126967/few%20midterm/Screen_Shot_2021-12-10_at_4.02.44_AM_wfliuw.png";

var imgB = new Array(6);
imgB[0] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126884/few%20midterm/Screen_Shot_2021-12-10_at_4.01.22_AM_ce555b.png"; 
imgB[1] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126871/few%20midterm/Screen_Shot_2021-12-10_at_4.01.09_AM_hcloqx.png"; 
imgB[2] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126903/few%20midterm/Screen_Shot_2021-12-10_at_4.01.41_AM_lcvlgu.png"; 
imgB[3] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126815/few%20midterm/Screen_Shot_2021-12-10_at_4.00.13_AM_gjnapj.png"; 
imgB[4] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126838/few%20midterm/Screen_Shot_2021-12-10_at_4.00.36_AM_sbqtnd.png"; 
imgB[5] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126856/few%20midterm/Screen_Shot_2021-12-10_at_4.00.54_AM_gs6wfm.png";
imgB[6] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126930/few%20midterm/Screen_Shot_2021-12-10_at_4.02.07_AM_qqs2dq.png";

var imgA = new Array(7); 
imgA[0] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639041728/few%20midterm/Screen_Shot_2021-12-09_at_4.21.05_AM_d8kvby.png";
imgA[1] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639041729/few%20midterm/Screen_Shot_2021-12-09_at_4.21.14_AM_nsumwn.png";
imgA[3] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639041730/few%20midterm/Screen_Shot_2021-12-09_at_4.21.23_AM_irho2o.png";
imgA[2] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639041729/few%20midterm/Screen_Shot_2021-12-09_at_4.21.38_AM_hbwizr.png";
imgA[4] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126681/few%20midterm/Screen_Shot_2021-12-10_at_3.57.58_AM_lmptiv.png";
imgA[5] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639126704/few%20midterm/Screen_Shot_2021-12-10_at_3.58.17_AM_zej1hh.png";
imgA[6] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023911/few%20midterm/decoration_yivja3.jpg";
imgA[7] = "https://res.cloudinary.com/dggnjafo3/image/upload/v1639023912/few%20midterm/%E5%86%B0%E5%B1%B1_gzjgji.jpg";

// var NumberOfImages = 8;
var imgNumber = 0;
let currentArray = imgC;

// currentArray.style.overflow = "hidden"; 

function NextImage() {
  if (imgNumber < currentArray.length) {
    imgNumber++;
    document.images["SwitchingImage"].src = currentArray[imgNumber];
  }else if (imgNumber == currentArray.length) {
    document.images["SwitchingImage"].src = currentArray[0];
  }
}
 
function PreviousImage() {
  if (imgNumber != 0) {
    imgNumber--;
    document.images["SwitchingImage"].src = currentArray[imgNumber];
  }else if (imgNumber == 0) {
    document.images["SwitchingImage"].src = currentArray[currentArray.length - 1];
  }
}

function changeset() {
            if (clicked1 == true) {
                document.images["SwitchingImage"].src = imgA[0];
                currentArray = imgA;
                clicked1 = false;
            }else if(clicked2 == true) {
                document.images["SwitchingImage"].src = imgB[0];
                currentArray = imgB;
                clicked2 = false;
            }else if(clicked3 == true) {
                document.images["SwitchingImage"].src = imgC[0];
                currentArray = imgC;
                clicked3 = false;
            }else if(clicked4 == true) {
                document.images["SwitchingImage"].src = imgD[0];
                currentArray = imgD;
                clicked4 = false;
            }else if(clicked5 == true) {
                document.images["SwitchingImage"].src = imgE[0];
                currentArray = imgE;
                clicked5 = false;
            }
        }

var clicked1 = false
document.getElementById('1').addEventListener("click", function() {
   clicked1 = true;
   changeset();
});

var clicked2 = false
document.getElementById('2').addEventListener("click", function() {
   clicked2 = true;
   changeset();
});

var clicked3 = false
document.getElementById('3').addEventListener("click", function() {
   clicked3 = true;
   changeset();
});

var clicked4 = false
document.getElementById('4').addEventListener("click", function() {
   clicked4 = true;
   changeset();
});

var clicked5 = false
document.getElementById('5').addEventListener("click", function() {
   clicked5 = true;
   changeset();
});






//submit
function submitcheck(){
  var value = document.getElementsByClassName("mySeach").value;
  let spinner = document.getElementById("loader");
  let thank = document.getElementById("thank");
  const email = document.getElementById("email");
  const submit = document.getElementById("submit");

  if(value !== '' && checkemail(document.getElementById("email").value) === true){
    submit.style.display="none";
        spinner.style.visibility = "visible";
        setTimeout(removespinner, 2000);  
  }else if(value === ''){
    alert("Please fill in the blanks");
  }else if(checkemail(document.getElementById("email").value) !== true){
    alert("invalid email address");
  }else{
    alert("the form is empty");
  }
}

function checkemail(email){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function removespinner() {
  let spinner = document.getElementById("loader");
    spinner.style.display = 'none';
    thank.style.visibility = "visible";
}




//sheetDB
const app = {

  apiUrl: 'https://sheetdb.io/api/v1/o8auwn4k8mgb1',

  initialize: () => {
    app.getTheData();
    app.attachListeners();
  },

  attachListeners: () => {
    $('#submit').click(e => {
      app.addSomeone();
    })
  },

  addSomeone: () => {
    const data = {
      name: $('.name').val(),
      email: $('.email').val(),
      description: $('.description').val(),
    };

    const requestBody = {data: [data]};

    fetch(app.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(response => {
      app.getTheData();
    })
  },

  getTheData: function () {
    fetch(app.apiUrl)
    .then(response => response.json())
    .then (response => {
      response.forEach(entry => {
        $('.container').append(
          `<div class="entry">${entry.name} ${entry.email}, ${entry.description}</div>` 
        )
      })
    });
  }

}

