var store_init = [0 , 1 , 3 , 2 , 2 , 1 , 3 , 3 , 2 , 1]
function click_center(){
    document.getElementById("frame_t1").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t1").value = 3
    document.getElementById("frame_t2").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t2").value = 3
    document.getElementById("frame_t3").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t3").value = 3
    document.getElementById("frame_t4").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t4").value = 3
    document.getElementById("frame_t5").style.backgroundImage="url(./img/stone.png)"
    document.getElementById("frame_t5").value = 2
    document.getElementById("frame_t6").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t6").value = 3
    document.getElementById("frame_t7").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t7").value = 3
    document.getElementById("frame_t8").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t8").value = 3
    document.getElementById("frame_t9").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t9").value = 3
}
function click_leftup(){
    document.getElementById("frame_t1").style.backgroundImage="url(./img/stone.png)"
    document.getElementById("frame_t1").value = 2
    document.getElementById("frame_t2").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t2").value = 3
    document.getElementById("frame_t3").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t3").value = 3
    document.getElementById("frame_t4").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t4").value = 3
    document.getElementById("frame_t5").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t5").value = 3
    document.getElementById("frame_t6").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t6").value = 3
    document.getElementById("frame_t7").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t7").value = 3
    document.getElementById("frame_t8").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t8").value = 3
    document.getElementById("frame_t9").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t9").value = 3
}
function click_edgemiddle(){
    document.getElementById("frame_t1").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t1").value = 3
    document.getElementById("frame_t2").style.backgroundImage="url(./img/stone.png)"
    document.getElementById("frame_t2").value = 2
    document.getElementById("frame_t3").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t3").value = 3
    document.getElementById("frame_t4").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t4").value = 3
    document.getElementById("frame_t5").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t5").value = 3
    document.getElementById("frame_t6").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t6").value = 3
    document.getElementById("frame_t7").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t7").value = 3
    document.getElementById("frame_t8").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t8").value = 3
    document.getElementById("frame_t9").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t9").value = 3
}
function click_random(){
    var x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t1").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t1").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t1").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t1").value = 2
    }
    else {
        document.getElementById("frame_t1").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t1").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t2").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t2").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t2").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t2").value = 2
    }
    else {
        document.getElementById("frame_t2").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t2").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t3").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t3").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t3").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t3").value = 2
    }
    else {
        document.getElementById("frame_t3").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t3").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t4").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t4").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t4").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t4").value = 2
    }
    else {
        document.getElementById("frame_t4").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t4").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t5").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t5").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t5").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t5").value = 2
    }
    else {
        document.getElementById("frame_t5").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t5").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t6").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t6").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t6").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t6").value = 2
    }
    else {
        document.getElementById("frame_t6").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t6").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t7").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t7").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t7").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t7").value = 2
    }
    else {
        document.getElementById("frame_t7").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t7").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t8").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t8").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t8").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t8").value = 2
    }
    else {
        document.getElementById("frame_t8").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t8").value = 1
    }
    x = Math.random()
    if(x > 0.66){
        document.getElementById("frame_t9").style.backgroundImage="url(./img/paper.png)"
        document.getElementById("frame_t9").value = 3
    }
    else if(x > 0.33){
        document.getElementById("frame_t9").style.backgroundImage="url(./img/stone.png)"
        document.getElementById("frame_t9").value = 2
    }
    else {
        document.getElementById("frame_t9").style.backgroundImage="url(./img/scissors.png)"
        document.getElementById("frame_t9").value = 1
    }
}
function click_start(){
    store_init[0] = 1
    store_init[1] = document.getElementById("frame_t1").value
    store_init[2] = document.getElementById("frame_t2").value
    store_init[3] = document.getElementById("frame_t3").value
    store_init[4] = document.getElementById("frame_t4").value
    store_init[5] = document.getElementById("frame_t5").value
    store_init[6] = document.getElementById("frame_t6").value
    store_init[7] = document.getElementById("frame_t7").value
    store_init[8] = document.getElementById("frame_t8").value
    store_init[9] = document.getElementById("frame_t9").value
    console.log(store_init)
}
function click_return(){
    if(store_init[0] == 1){
        var x = document.getElementById("frame_t1")
        x.value = store_init[1]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t2")
        x.value = store_init[2]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t3")
        x.value = store_init[3]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t4")
        x.value = store_init[4]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t5")
        x.value = store_init[5]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t6")
        x.value = store_init[6]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t7")
        x.value = store_init[7]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t8")
        x.value = store_init[8]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        x = document.getElementById("frame_t9")
        x.value = store_init[9]
        if (x.value == 1){
            x.style.backgroundImage="url(./img/scissors.png)"
        }
        else if(x.value == 2){
            x.style.backgroundImage="url(./img/stone.png)"
        }
        else {
            x.style.backgroundImage="url(./img/paper.png)"
        }
        document.getElementById("score_now").value = "  0"
    }
}
function click_rule(){
    document.getElementById("rule").style.display = ""
}
function closewindow(){
    document.getElementById("rule").style.display = "none"
}
function playagain(){
    if(parseInt(document.getElementById("score_now").value) < parseInt(document.getElementById("score_best").value)){
        document.getElementById("score_best").value = document.getElementById("score_now").value
    }
    else if(parseInt(document.getElementById("score_best").value) == 0){
        document.getElementById("score_best").value = document.getElementById("score_now").value
    }
    document.getElementById("win").style.display = "none"
    document.getElementById("score_fin").style.display = "none"
    document.getElementById("playagain").style.display = "none"
    document.getElementById("newgame").style.display = "none"
    click_return()
}
function startnewgame(){
    document.getElementById("score_best").value = "  0"
    document.getElementById("score_now").value = "  0"
    document.getElementById("frame_t1").style.backgroundImage="url(./img/scissors.png)"
    document.getElementById("frame_t1").value = 1
    document.getElementById("frame_t2").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t2").value = 3
    document.getElementById("frame_t3").style.backgroundImage="url(./img/stone.png)"
    document.getElementById("frame_t3").value = 2
    document.getElementById("frame_t4").style.backgroundImage="url(./img/stone.png)"
    document.getElementById("frame_t4").value = 2
    document.getElementById("frame_t5").style.backgroundImage="url(./img/scissors.png)"
    document.getElementById("frame_t5").value = 1
    document.getElementById("frame_t6").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t6").value = 3
    document.getElementById("frame_t7").style.backgroundImage="url(./img/paper.png)"
    document.getElementById("frame_t7").value = 3
    document.getElementById("frame_t8").style.backgroundImage="url(./img/stone.png)"
    document.getElementById("frame_t8").value = 2
    document.getElementById("frame_t9").style.backgroundImage="url(./img/scissors.png)"
    document.getElementById("frame_t9").value = 1
    document.getElementById("win").style.display = "none"
    document.getElementById("score_fin").style.display = "none"
    document.getElementById("playagain").style.display = "none"
    document.getElementById("newgame").style.display = "none"
    store_init = [0 , 1 , 3 , 2 , 2 , 1 , 3 , 3 , 2 , 1]
}
function clickturtle(x){
    if(store_init[0] == 1){
        y = document.getElementById("score_now")
        y.value += "+1"
        try{
            y.value = eval(y.value);
        }
        catch(e){
            y.value = "error";
        }
        if (y.value < 10){
            y.value = "  " + y.value
        }
        else if (y.value < 100){
            y.value = " " + y.value
        }
    }
    if(x == 1){
        t1_change()
        t2_change()
        t4_change()
    }
    else if(x == 2){
        t1_change()
        t2_change()
        t3_change()
        t5_change()
    }
    else if(x == 3){
        t2_change()
        t3_change()
        t6_change()
    }
    else if(x == 4){
        t1_change()
        t4_change()
        t5_change()
        t7_change()
    }
    else if(x == 5){
        t2_change()
        t4_change()
        t5_change()
        t6_change()
        t8_change()
    }
    else if(x == 6){
        t3_change()
        t5_change()
        t6_change()
        t9_change()
    }
    else if(x == 7){
        t4_change()
        t7_change()
        t8_change()
    }
    else if(x == 8){
        t5_change()
        t7_change()
        t8_change()
        t9_change()
    }
    else if(x == 9){
        t6_change()
        t8_change()
        t9_change()
    }

    if(store_init[0] == 1){
        if(document.getElementById("frame_t1").value == 3 &&
        document.getElementById("frame_t2").value == 3 &&
        document.getElementById("frame_t3").value == 3 &&
        document.getElementById("frame_t4").value == 3 &&
        document.getElementById("frame_t5").value == 3 &&
        document.getElementById("frame_t6").value == 3 &&
        document.getElementById("frame_t7").value == 3 &&
        document.getElementById("frame_t8").value == 3 &&
        document.getElementById("frame_t9").value == 3){
            document.getElementById("score_fin").value = document.getElementById("score_now").value
            document.getElementById("win").style.display = ""
            document.getElementById("score_fin").style.display = ""
            document.getElementById("playagain").style.display = ""
            document.getElementById("newgame").style.display = ""
        }
    }
}
function t1_change(){
    var x = document.getElementById("frame_t1")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t2_change(){
    var x = document.getElementById("frame_t2")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t3_change(){
    var x = document.getElementById("frame_t3")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t4_change(){
    var x = document.getElementById("frame_t4")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t5_change(){
    var x = document.getElementById("frame_t5")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t6_change(){
    var x = document.getElementById("frame_t6")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t7_change(){
    var x = document.getElementById("frame_t7")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t8_change(){
    var x = document.getElementById("frame_t8")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}
function t9_change(){
    var x = document.getElementById("frame_t9")
    if (x.value == 1){
        x.value = 2
        x.style.backgroundImage="url(./img/stone.png)"
    }
    else if(x.value == 2){
        x.value = 3
        x.style.backgroundImage="url(./img/paper.png)"
    }
    else{
        x.value = 1
        x.style.backgroundImage="url(./img/scissors.png)"
    }
}