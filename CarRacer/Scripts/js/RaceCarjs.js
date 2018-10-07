var anim_id;
var a = 0;
//saving dom objects to variables
var container = $('.container');
var car_racer2 = $('#car_racer1');
var car_racer1 = $('#car_racer2');
var car_1 = $('#car_1');
var car_2 = $('#car_2');
var car_3 = $('#car_3');
var car_4 = $('#car_4');
var line_1 = $('#line_1');
var line_2 = $('#line_2');
var line_3 = $('#line_3');
var restart_div = $('#restart_div');
var restart_btn = $('#restart')
var score = $('#score');

var still_collision1 = false;
var still_collision2 = false;

var police_heli1 = $('#police_1');
var police_heli2 = $('#police_2');
var police_2 = $('#police_2');
var policemp3 = $('#police');

//saving some inital setup
var container_left = parseInt(container.css('left'));
var container_width = parseInt(container.width());
var container_height = parseInt(container.height());
var car_width = parseInt(car_racer1.width());
var car_height = parseInt(car_racer1.height());
var car2_width = parseInt(car_racer2.width());
var car2_height = parseInt(car_racer2.height());

//other variables
var racer1_life = 5;
var racer2_life = 5;
var racer1_game_over = false;
var racer2_game_over = false;

var game_over = false;
var score_counter = 1;
var speed = 2;
var line_speed = 5;

var move_right = false;
var move_left = false;
var move_up = false;
var move_down = false;

var move1_right = false;
var move1_left = false;
var move1_up = false;
var move1_down = false;

var moveup_heli = true;

var call_police = false;
var call_heli = false;


$(document).on('keydown', function(e) {
    if (game_over === false) {
        var key = e.keyCode;
        switch (key) {
            case 37:
                keydown37();
                break;
            case 65:
                keydown65();
                break;
            case 39:
                keydown39();
                break;
            case 68:
                keydown68();
                break;
            case 38:
                keydown38();
                break;
            case 87:
                keydown87();
                break;
            case 40:
                keydown40();
                break;
            case 83:
                keydown83();
                break;
            default:
        }

        function keydown37() {
            if (move_left === false && racer1_game_over === false) {
                move_left = requestAnimationFrame(left);
            }
        }

        function keydown65() {
            if (move1_left === false && racer2_game_over === false) {
                move1_left = requestAnimationFrame(left_racer2);
            }
        }

        function keydown39() {
            if (move_right === false && racer1_game_over === false) {
                move_right = requestAnimationFrame(right);
            }
        }

        function keydown68() {
            if (move1_right === false && racer2_game_over === false) {
                move1_right = requestAnimationFrame(right_racer2);
            }
        }

        function keydown38() {
            if (move_up === false && racer1_game_over === false) {
                move_up = requestAnimationFrame(up);
            }
        }

        function keydown87() {
            if (move1_up === false && racer2_game_over === false) {
                move1_up = requestAnimationFrame(up_racer2);
            }
        }

        function keydown40() {
            if (move_down === false && racer1_game_over === false) {
                move_down = requestAnimationFrame(down);
            }
        }

        function keydown83() {
            if (move1_down === false && racer2_game_over === false) {
                move1_down = requestAnimationFrame(down_racer2);
            }
        }

    }
});

$(document).on('keyup', function(e) {
    if (game_over === false) {
        var key = e.keyCode;
        switch (key) {
            case 37:
                keyup37();
                break;
            case 65:
                keyup65();
                break;
            case 39:
                keyup39();
                break;
            case 68:
                keyup68();
                break;
            case 38:
                keyup38();
                break;
            case 87:
                keyup87();
                break;
            case 40:
                keyup40();
                break;
            case 83:
                keyup83();
                break;

            default:
                break;
        }

        function keyup37() {
            cancelAnimationFrame(move_left);
            move_left = false;
        }

        function keyup65() {
            cancelAnimationFrame(move1_left);
            move1_left = false;
        }

        function keyup39() {
            cancelAnimationFrame(move_right);
            move_right = false;
        }

        function keyup68() {
            cancelAnimationFrame(move1_right);
            move1_right = false;
        }

        function keyup38() {
            cancelAnimationFrame(move_up);
            move_up = false;
        }

        function keyup87() {
            cancelAnimationFrame(move1_up);
            move1_up = false;
        }

        function keyup40(params) {
            cancelAnimationFrame(move_down);
            move_down = false;
        }

        function keyup83() {
            cancelAnimationFrame(move1_down);
            move1_down = false;
        }

    }
});
//car racer 2
function left_racer2() {
    if (game_over === false && parseInt(car_racer2.css('left')) > 0) {
        car_racer2.css('left', parseInt(car_racer2.css('left')) - 5);
        move1_left = requestAnimationFrame(left_racer2);
        a = 10;
    }
}

function right_racer2() {
    if (game_over === false && container.width() / 2 - car_racer2.width() > parseInt(car_racer2.css('left'))) {
        car_racer2.css('left', parseInt(car_racer2.css('left')) + 5);
        move1_right = requestAnimationFrame(right_racer2);
    }
}

function up_racer2() {
    if (game_over === false && parseInt(car_racer2.css('top')) > 0) {
        car_racer2.css('top', parseInt(car_racer2.css('top')) - 3);
        move1_up = requestAnimationFrame(up_racer2);
    }
}

function down_racer2() {
    if (game_over === false && parseInt(car_racer2.css('top')) < container_height - car_height) {
        car_racer2.css('top', parseInt(car_racer2.css('top')) + 3);
        move1_down = requestAnimationFrame(down_racer2);
    }
}
// car racer 2 end


function left() {
    if (parseInt(car_racer1.css('left')) > parseInt(container_width / 2)) {
        car_racer1.css('left', parseInt(car_racer1.css('left')) - 5);
        move_left = requestAnimationFrame(left);
    }
}

function right() {
    if (parseInt(car_racer1.css('left')) < parseInt(container_width) - parseInt(car_racer1.width())) //(game_over === false && parseInt(car_racer1.css('left')) < container.width() / 2 - car_racer1.width()) 
    {
        car_racer1.css('left', parseInt(car_racer1.css('left')) + 5);
        move_right = requestAnimationFrame(right);
    }
}

function up() {
    if (game_over === false && parseInt(car_racer1.css('top')) > 0) {
        car_racer1.css('top', parseInt(car_racer1.css('top')) - 3);
        move_up = requestAnimationFrame(up);
    }
}

function down() {
    if (game_over === false && parseInt(car_racer1.css('top')) < container_height - car_height) {
        car_racer1.css('top', parseInt(car_racer1.css('top')) + 3);
        move_down = requestAnimationFrame(down);
    }
}

anim_id = requestAnimationFrame(repeat);

function repeat() {
    if (racer1_life <= 0 && racer2_life <= 0)
        stop_the_game();

    if (racer1_life === 0) {
        car_racer2.css('top', '90%');
        car_racer2.css('left', '0%');
        racer2_game_over = true;
        $('#p2').addClass('animated bounceInLeft winner');
        $('.result_div').addClass('result');
        $('.result_div').removeClass('result_div');

        // $('#yourElement').addClass('animated bounceOutLeft');
    }
    if (racer2_life === 0) {
        car_racer1.css('top', '90%');
        car_racer1.css('left', '95%');
        racer1_game_over = true;

    }
    if (game_over === false) {
        if (collision(car_racer1, car_1) || collision(car_racer1, car_2) ||
            collision(car_racer1, car_3) || collision(car_racer1, car_4)) {

            if (still_collision1 === false) {
                $('#life2' + racer2_life).hide();
                racer2_life--;
                still_collision1 = true;
            }

        } else if (still_collision1 === true) {
            still_collision1 = false;
        }
        if (collision(car_racer2, car_1) || collision(car_racer2, car_2) ||
            collision(car_racer2, car_3) || collision(car_racer2, car_4)) {

            if (still_collision2 === false) {
                $('#life1' + racer1_life).hide();
                racer1_life--;
                still_collision2 = true;
            }
        } else if (still_collision2 === true) {
            still_collision2 = false;

        }
        score_counter++;

        if (score_counter % 50 == 0) {
            score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 500 == 0) {
            speed++;
            line_speed++;
            speed = speed % 10;
            if (speed === 0) {
                speed = 1;
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                $("body").css("background-color", '#' + randomColor);
            }
        }
        car_down(car_1);
        car_down(car_2);
        car_down(car_3);
        //heli_down();

        if (call_police == true) {
            play_music();
            police_car_down(car_4);
        }
        line_down(line_1);
        line_down(line_2);
        line_down(line_3);

        anim_id = requestAnimationFrame(repeat);
    }
}

function heli_down() {
    if (call_heli == true) {
        var heli_current_top = parseInt(police_heli1.css('top'));

        if (heli_current_top > 65 && heli_current_top < 510 & moveup_heli == true) {
            police_heli1.css('top', heli_current_top - speed / 2);
            police_heli2.css('top', heli_current_top - speed / 2);
        }
        if (heli_current_top <= 65) {
            moveup_heli = false
        } else if (heli_current_top >= 510) {
            moveup_heli = true;
        }
        if (moveup_heli == false) {
            police_heli1.css('top', heli_current_top + speed / 2);
            police_heli2.css('top', heli_current_top + speed / 2);
        }
        if (heli_current_top >= 510 && moveup_heli == true) {
            police_heli1.css('top', heli_current_top - speed / 2);
            police_heli2.css('top', heli_current_top - speed / 2);
        }

    }
}

function car_down(car_racer1) {
    var car_current_top = parseInt(car_racer1.css('top'));
    if (car_current_top > container_height) {
        car_current_top = -200;
        var car_left = parseInt(Math.random() * (container_width - car_width));
        car_racer1.css('left', car_left);
    }
    car_racer1.css('top', car_current_top + speed + parseInt(Math.random() * 4));
}

function police_car_down(car_racer1) {
    var car_current_top = parseInt(car_racer1.css('top'));
    if (car_current_top > container_height) {
        car_current_top = -100;
        var car_left = parseInt(Math.random() * (container_width - car_width));
        car_racer1.css('left', car_left);
    }
    car_racer1.css('top', car_current_top + speed - 2);
}

function line_down(line) {
    var line_current_top = parseInt(line.css('top'));
    if (line_current_top > container_height) {
        line_current_top = -300;
    }
    line.css('top', line_current_top + speed);
}
restart_btn.click(function() {
    location.reload();
});

function stop_the_game() {
    stop_music();
    game_over = true;
    cancelAnimationFrame(anim_id);
    cancelAnimationFrame(move_right);
    cancelAnimationFrame(move_left);
    cancelAnimationFrame(move_up);
    cancelAnimationFrame(move_down);
    restart_div.slideDown();
    restart_btn.focus();
}

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

//$("#down").click(function () {
//    go_down();
//});
//$("#down").click(function () {
//    go_down();
//});
//$("#up").click(function () {
//    go_up();
//});

function go_down() {
    if (game_over === false && parseInt(car.css('top')) < container_height - car_height)
        car.css('top', parseInt(car.css('top')) + 15);
}

function go_up() {
    if (move_up === false && parseInt(car.css('top')) > 0)
        car.css('top', parseInt(car.css('top')) - 15);
}

function callPolice() {
    call_police = true;
}

function callHeli() {
    police_heli1.css("display", "block");
    police_heli2.css("display", "block");
    call_heli = true;
}
setTimeout(callPolice, 10000);
// setTimeout(callHeli, 20000);

// var randomColor = Math.floor(Math.random() * 16777215).toString(16);
// $("#background").css("background-color", '#' + randomColor);

function play_music() {
    policemp3.get(0).play();
}

function stop_music() {
    policemp3.get(0).pause();
}
// $('body').RainSnow({
//     effect_name: 'snow',
//     drop_appear_speed: 100,
//     drop_falling_speed: 7000,
//     wind_direction: 3,
//     drop_rotate_angle: '-10deg',
//     drop_count_width_height: [
//         [2, 2],
//         [3, 3],
//         [4, 4],
//         [5, 5],
//         [6, 6]
//     ],
//     drop_left_to_right: false
// });
$('.container').RainSnow({
    effect_name: 'snow',
    drop_appear_speed: 100,
    drop_falling_speed: 7000,
    wind_direction: 3,
    drop_rotate_angle: '-10deg',
    drop_count_width_height: [
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6]
    ],
    drop_left_to_right: true
});