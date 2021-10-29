function makeTable(){
    //표 만드는 스크립트
    for(let i in Dungeon){
        if(i < 10){
            document.write(
            "<tr>",
            "<th>" + Dungeon[i][1] + "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Normal" value="'+ Dungeon[i][2] +'" checked> 잡몹',
            "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Middle" value="'+ Dungeon[i][3] +'" checked> 중보',
            "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Boss" value="'+ Dungeon[i][4] +'" checked> 보스',
            "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Dayq" value="'+ Dungeon[i][5] +'" checked> 일퀘',
            "</th>",
            "<th>",
            '<input type="checkbox" name="'+ Dungeon[i][0] +'Infinityq" value="'+ Dungeon[i][5] +'"> 반복퀘',
            "</th>",
        "</tr>"
        );
        }
        else{
            document.write(
            "<tr>",
            "<th>" + Dungeon[i][1] + "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Normal" value="'+ Dungeon[i][2] +'" checked> 잡몹',
            "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Middle" value="'+ Dungeon[i][3] +'" checked> 중보',
            "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Boss" value="'+ Dungeon[i][4] +'" checked> 보스',
            "</th>",
            "<th>",
                '<input type="checkbox" name="'+ Dungeon[i][0] +'Dayq" value="'+ Dungeon[i][5] +'"> 일퀘',
            "</th>",
            "<th>",
            '<input type="checkbox" name="'+ Dungeon[i][0] +'Infinityq" value="'+ Dungeon[i][5] +'"> 반복퀘',
            "</th>",
        "</tr>"
            );
        }                    
    }
}

//계산 함수
function calculate(){
    var level = document.getElementsByName("level");                //내 레벨
    var levelPercent = document.getElementsByName("levelPercent");  //내 레벨 %
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var questUp = document.getElementsByName("questUp");            //퀘보업

    var expNormal=0;    //잡몹 경험치 저장소
    var expMiddle=0;    //중보 경험치 저장소
    var expBoss=0;      //보스 경험치 저장소      
    var expDayq=0;      //일퀘 경험치 저장소
    var expInfinityq=0; //반복퀘 경험치 저장소
    var levelUp = 0;    //레벨업 저장소


    //잡몹
    expNormal = ExpAdd("Normal", 2);
    //중보
    expMiddle = ExpAdd("Middle", 3);
    //보스
    expBoss = ExpAdd("Boss", 4);
    //일퀘
    expDayq = ExpAdd("Dayq", 5);
    //반복퀘
    expInfinityq = ExpAdd("Infinityq", 6);

    var exp_all = (expNormal + expMiddle + expBoss + expDayq + expInfinityq) * (1 + questUp[0].value / 100) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치

    var nextExp = Level[level[0].value - 1][1] - (Level[level[0].value - 1][1] * (levelPercent[0].value / 100));   //현재 다음렙가기위해 필요한 경험치

    if(nextExp > exp_all){
        nextExp -= exp_all;
        exp_all = 0;
    }
    else if(nextExp == exp_all){
        nextExp += exp_all
        exp_all = 0;
        nextExp = 0;
        levelUp++;
    }
    else{
        exp_all = exp_all - nextExp;
        levelUp++;
        
        for(i = level[0].value; i < Level.length; i++){ //한번 레벨 올라갔으므로 +1 된 상태임
            if(exp_all < Level[i][1]){
                nextExp = Level[i][1] - exp_all;
                break;
            }
            else{
                exp_all = exp_all - Level[i][1];
                levelUp++;
            }
        }
    }
    var resultLevel = level[0].value - (levelUp * -1);
    var resultLevelPercent = (Level[resultLevel - 1][1] - nextExp) / Level[resultLevel - 1][1] * 100;
    alert("Lv." + resultLevel + ", " + resultLevelPercent + "%");
}

function transcendenceUp(){
    var transcendenceLevel = document.getElementsByName("transcendenceLevel");                //내 초월 레벨
    var transcendenceLevelPercent = document.getElementsByName("transcendenceLevelPercent");  //내 초월 레벨 %
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var questUp = document.getElementsByName("questUp");            //퀘보업

    var expNormal=0;    //잡몹 경험치 저장소
    var expMiddle=0;    //중보 경험치 저장소
    var expBoss=0;      //보스 경험치 저장소      
    var expDayq=0;      //일퀘 경험치 저장소
    var expInfinityq=0; //반복퀘 경험치 저장소
    var levelUp = 0;    //레벨업 저장소


    //잡몹
    expNormal = ExpAdd("Normal", 2);
    //중보
    expMiddle = ExpAdd("Middle", 3);
    //보스
    expBoss = ExpAdd("Boss", 4);
    //일퀘
    expDayq = ExpAdd("Dayq", 5);
    //반복퀘
    expInfinityq = ExpAdd("Infinityq", 6);

    var exp_all = (expNormal + expMiddle + expBoss + expDayq + expInfinityq) * (1 + questUp[0].value / 100) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치

    var nextExp = (40000000000 + 100000000 * (transcendenceLevel[0].value - 1) - (40000000000 + 100000000 * (transcendenceLevel[0].value - 1)) * transcendenceLevelPercent[0].value / 100)   //현재 다음렙가기위해 필요한 경험치

    if(nextExp > exp_all){
        nextExp -= exp_all;
        exp_all = 0;
    }
    else if(nextExp == exp_all){
        nextExp += exp_all
        exp_all = 0;
        nextExp = 0;
        levelUp++;
    }
    else{
        exp_all = exp_all - nextExp;
        levelUp++;
        
        for(i = transcendenceLevel[0].value; i < 9999; i++){ //한번 레벨 올라갔으므로 +1 된 상태임
            if(exp_all < (40000000000 + 100000000 * i)){
                nextExp = (40000000000 + 100000000 * i) - exp_all;
                break;
            }
            else{
                exp_all = exp_all - (40000000000 + 100000000 * i);
                levelUp++;
            }
        }
    }
    var resultLevel = transcendenceLevel[0].value - (levelUp * -1);
    var resultLevelPercent = (40000000000 + 100000000 * (resultLevel - 1) - nextExp) / (40000000000 + 100000000 * (resultLevel - 1)) * 100;
    alert("Lv." + resultLevel + ", " + resultLevelPercent + "%");
}


//해당 체크박스 초기화 하는 함수
function reset(name) {
    for(let i in Dungeon){
        document.getElementsByName(Dungeon[i][0]+name)[0].checked = false;
    }
}

//해당 체크박스 모두 선택하는 함수
function allSelect(name){
    for(let i in Dungeon){
        document.getElementsByName(Dungeon[i][0]+name)[0].checked = true;
    }
}

//해당 던전 경험치를 더하는 함수
function ExpAdd(name, num){
    exp = 0;
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+name)[0].checked == true) {
            exp+=Dungeon[i][num]
        }
    }

    return exp;
}

//특정 던전 선택하는 곳
function SelectDungeon(num){
    reset("Normal");
    reset("Middle");
    reset("Boss");
    reset("Dayq");
    reset("Infinityq")

    if(num == 10){   //일퀘런이므로 반복퀘만 선택
        for(i=0; i < num; i++){
        document.getElementsByName(Dungeon[i][0]+"Infinityq")[0].checked = true;
        }
    }
    else if(num == Dungeon.length){ //부캐런이므로 잡,줍퀘 선택
        for(i=0; i < num; i++){
            document.getElementsByName(Dungeon[i][0]+"Normal")[0].checked = true;
            document.getElementsByName(Dungeon[i][0]+"Middle")[0].checked = true;
            document.getElementsByName(Dungeon[i][0]+"Boss")[0].checked = true;
        }
    }

    for(i = 0; i < 10; i++){    //일퀘는 10개 공통
        document.getElementsByName(Dungeon[i][0]+"Dayq")[0].checked = true;
    }
}
