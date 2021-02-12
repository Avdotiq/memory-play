function random(n) {
  return Math.floor(Math.random() * Math.floor(n));
}

function shuffle (arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = random(arr.length);
    var k = random(arr.length);
    var t = arr[j];
    arr[j] = arr[k];
    arr[k] = t;
  }
  return arr;
}

var flipImg = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png", "1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"];
flipImg = shuffle(flipImg);

window.onload = function() {

	Arr = document.querySelectorAll(".card-back");
	Cont = document.querySelectorAll(".scene");
	for (i=0; i<Arr.length; i++) {
		var img = Arr[i].appendChild(document.createElement("img"));
		img.src = "img/"+flipImg[i];
		Cont[i].id = flipImg[i];
	}
}

var clicksCount = 0;

document.addEventListener( "DOMContentLoaded", function() {
	init();
	var elementsScene = document.getElementsByClassName("scene");
	for (i=0; i < elementsScene.length; i++) { 
	  elementsScene[i].addEventListener("click", vs);
	};
})

function vs() {
	stopTimer();
	el = event.currentTarget;
	var newclass = el.firstElementChild;
	newclass.classList.add("move");
	var display = document.querySelectorAll(".move");
	var znach = display[0].parentElement;
	clicksCount++;
	document.getElementById('clickCount').innerHTML = clicksCount;
	
	if (display.length === 2) {
		var sec = display[1].parentElement;
		var aId = znach.id;
		var bId = sec.id;
		var a = parseInt(aId.match(/\d+/));
		var b = parseInt(bId.match(/\d+/));
		if (a === b) {
			setTimeout(() => {
				znach.classList.add("compare");
				znach.classList.remove("scene");
				sec.classList.add("compare");
				sec.classList.remove("scene");
				display[0].classList.remove("move");
				display[1].classList.remove("move");
			}, 700);
			 }
			 else {
				 setTimeout(() => {
					display[0].classList.remove("move");
					display[1].classList.remove("move");
					newclass.classList.remove("move");
				 }, 700 );
				
			 }
		}
}

function stopTimer() {
	var compareCart = document.getElementsByClassName('compare');
	console.log(compareCart.length);
	if (compareCart.length === 14) {
		clearInterval(intervalId);
		console.log('clear');
	};
}

//Секундомер
//изначальные переменные
min = 0;
hour = 0;
//Оставляем вашу функцию
function init() {
    sec = 0;
	intervalId = setInterval(tick, 1000);
}

//Основная функция tick()
function tick() {
    sec++;
    if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) { //Визуальное оформление
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}