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
                '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Normal" value="'+ Dungeon[i][2] +'" checked> 잡몹',
            "</th>",
            "<th>",
                '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Middle" value="'+ Dungeon[i][3] +'" checked> 중보',
            "</th>",
            "<th>",
                '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Boss" value="'+ Dungeon[i][4] +'" checked> 보스',
            "</th>",
            "<th>",
                '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Dayq" value="'+ Dungeon[i][5] +'"> 일퀘',
            "</th>",
            "<th>",
            '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Infinityq" value="'+ Dungeon[i][5] +'"> 반복퀘',
            "</th>",
        "</tr>"
            );
        }                    
    }
}

//각성레벨 계산하는 함수
function awakeningUp(num){
    var level = document.getElementsByName("level");                //내 각성 레벨
    var levelPercent = document.getElementsByName("levelPercent");  //내 가성 레벨 %
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

    if(nextExp > exp_all){  //이걸로 레벨이 1도 올라가지 않을 경우
        nextExp -= exp_all;
        exp_all = 0;
    }
    else if(nextExp == exp_all){    //이걸로 레벨이 정확히 1 올라가는 경우 -의미가 있나 싶긴한데...
        nextExp += exp_all
        exp_all = 0;
        nextExp = 0;
        levelUp++;
    }
    else{   //이걸로 레벨이 1 이상 올라가는 경우
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
    
    if(resultLevel >= Level.length){
        resultLevelPercent = 0;
        resultLevel = Level.length;
    }
    else{
        var resultLevelPercent = (Level[resultLevel - 1][1] - nextExp) / Level[resultLevel - 1][1] * 100;
    }
    if(num == 0){   //0이라면 바로 알리는 곳
        alert("Lv." + resultLevel + ", " + resultLevelPercent + "%");
    }
    else if(num == 1)   //1이라면 반복하는곳
    {
        level[0].value = resultLevel;
        levelPercent[0].value = resultLevelPercent
    }

}

//초월레벨 계산하는 함수
function transcendenceUp(num){ 
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

    var nextExp = (40000000000 + 100000000 * (transcendenceLevel[0].value - 1 + 1) - (40000000000 + 100000000 * (transcendenceLevel[0].value - 1 + 1)) * transcendenceLevelPercent[0].value / 100)   //현재 다음렙가기위해 필요한 경험치
    //이유는 모르겠는데 저거 -1 +1 안하면 값이 제대로 표기가 안됨
    if(nextExp > exp_all){  //이걸로 레벨이 1도 올라가지 않을 경우
        nextExp -= exp_all;
        exp_all = 0;
    }
    else if(nextExp == exp_all){    //이걸로 레벨이 정확히 1 올라가는 경우 -의미가 있나 싶긴한데...
        nextExp += exp_all
        exp_all = 0;
        nextExp = 0;
        levelUp++;
    }
    else{   //이걸로 레벨이 1 이상 올라가는 경우
        exp_all = exp_all - nextExp;
        levelUp++;
        
        for(i = transcendenceLevel[0].value - 1 + 2; i < 9999; i++){ //한번 레벨 올라갔으므로 +1 된 상태임 이유는 모르겠는데 저렇게 안하면 제대로 표기가 안됨
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
    if(resultLevel == 9999){    //여기서부턴 의미 없어보이므로 남은 경험치는 표기 X
        resultLevelPercent = 0;
    }
    else{
        var resultLevelPercent = (40000000000 + 100000000 * (resultLevel - 1) - nextExp) / (40000000000 + 100000000 * (resultLevel - 1)) * 100;
    }
    if(num == 0){
        alert("Lv." + resultLevel + ", " + resultLevelPercent + "%");
    }
    else if(num == 1){
        transcendenceLevel[0].value = resultLevel;
        transcendenceLevelPercent[0].value = resultLevelPercent;

        var questLevel = document.getElementsByName("questLevel");                //선택된 초월 레벨
        questLevel[0].value = resultLevel;
    }

}

//전체 각성레벨 계산하는 함수
function awakeningAll(){
    var level = document.getElementsByName("level");                //내 레벨
    var levelPercent = document.getElementsByName("levelPercent");  //내 레벨 %
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var questUp = document.getElementsByName("questUp");            //퀘보업

    var expNormal=0;    //잡몹 경험치 저장소
    var expMiddle=0;    //중보 경험치 저장소
    var expBoss=0;      //보스 경험치 저장소      
    var expDayq=0;      //일퀘 경험치 저장소
    var expInfinityq=0; //반복퀘 경험치 저장소


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
    var nowExp = 0; //현재 경험치
    var allExp = 0; //1~100까지의 경험치량
    var result = 0; //도달한 각성렙의 결과

    //1~105까지의 경험치량
    for(i = 0; i < Level.length - 1; i++){ //Level[i][1]에서 Level[99][1]의 경험치는 100에서 다음으로 가기 위한 경험치량을 임의표기한것임 99가 들어가면 안됨
        allExp += Level[i][1];
    }

    //지금까지 얻은 경험치량 - 현재 % 제외
    for(i = 0; i < level[0].value - 1; i++){   //내 레벨이 3일때를 생각해보자 -1 없으면 2가 포함되는건데 Level[2][1]은 3레벨 모든 경험치를 얻게된것임
        nowExp += Level[i][1];
    }

    nowExp += levelPercent[0].value / 100 * (Level[level[0].value - 1][1]);   //입력값을 3으로 가정하고 생각해볼것
    nowExp += exp_all;  //퀘스트 종료 후에 얻은 곳 까지 포함한것
    result = nowExp/allExp*100;
    if(result >= 100){
        result = 100;
    }
    

    alert('각성 105까지 도달한 정도 = ' + result + '%');
}

//전체 초월레벨 계산하는 함수
function transcendenceAll(){
    var transcendenceLevel = document.getElementsByName("transcendenceLevel");                //내 초월 레벨
    var transcendenceLevelPercent = document.getElementsByName("transcendenceLevelPercent");  //내 초월 레벨 %
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var questUp = document.getElementsByName("questUp");            //퀘보업

    var expNormal=0;    //잡몹 경험치 저장소
    var expMiddle=0;    //중보 경험치 저장소
    var expBoss=0;      //보스 경험치 저장소      
    var expDayq=0;      //일퀘 경험치 저장소
    var expInfinityq=0; //반복퀘 경험치 저장소


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
    var nowExp = 0; //현재 경험치
    var allExp = 0; //1~9999까지의 경험치량
    var result = 0; //도달한 초월렙의 결과

    //1~9999까지의 경험치량
    for(i = 1; i < 9999; i++){ //레벨 오르는 횟수는 1부터 9999까지 
        allExp += 40000000000 + i * 100000000;
    }

    //지금까지 얻은 경험치량
    for(i = 1; i < transcendenceLevel[0].value; i++){   //내 레벨이 1일때를 생각해보자 -1 없으면 이 계산기 결과로는 1레벨에서 얻은 경험치는 400억이 되버림
        nowExp += 40000000000 + i * 100000000;
    }

    nowExp += transcendenceLevelPercent[0].value / 100 * (40000000000 + 100000000 * transcendenceLevel[0].value);   //초월렙 %까지 추가한 곳 레벨1의 50%를 생각할것
    nowExp += exp_all;  //퀘스트 종료 후에 얻은 곳 까지 포함한것
    result = nowExp/allExp*100;
    if(result >= 100){
        result = 100;
    }
    

    alert('초월 9999까지 도달한 정도 = ' + result + '%');
}

//해당 체크박스 초기화 하는 함수
function reset(name) {
    for(let i in Dungeon){
        document.getElementsByName(Dungeon[i][0]+name)[0].checked = false;
    }
}

//해당 체크박스 선택하는 함수 - 언젠가 실력 길러서 수정해주자
function wantSelect(name, num){
    if (num == 9999){ //표 안의 전체선택 시
        for(let i in Dungeon){
            document.getElementsByName(Dungeon[i][0]+name)[0].checked = true;      
        }
    }
    else if(num == 0){//우측 레벨별 선택시

        var questLevel = document.getElementsByName("questLevel");                //선택된 초월 레벨

        if(questLevel >= 9999)
        {
            questLevel = 9999;
        }
        if(name == "Dayq" || name =="InfinityqDayq"){
            if(name == "InfinityqDayq"){
                name = "Infinityq";
            }
            reset(name);        //여기 있어야 반복퀘(일퀘용) 오류 해결됨
            t = 0;  //일퀘 최대횟수 카운팅용
            for(let i in Dungeon){
                if(Dungeon[i][7] <= questLevel[0].value){
                    document.getElementsByName(Dungeon[i][0]+name)[0].checked = true;
                    t++;
                    if(t == 10)
                    break;
                }
            }
        }
        else{
            reset(name);        //여기 있어야 반복퀘(일퀘용) 오류 해결됨
            for(let i in Dungeon){
                if(Dungeon[i][7] <= questLevel[0].value){
                    document.getElementsByName(Dungeon[i][0]+name)[0].checked = true;
                }
            }
        }
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
function SelectMadenDungeon(num){
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

//목표지점까지 자동으로 기입하는 함수 - 각성
function howManyPlayAwakening(){    
    repeat = 0; //반복 횟수

    var level = document.getElementsByName("level");                        //내 레벨
    var wantlevel = document.getElementsByName("wantAwakeningLevel");       //원하는 각성 레벨

    while(wantlevel[0].value > level[0].value){
        wantSelect("Normal", 0);
        wantSelect("Middle", 0);
        wantSelect("Boss", 0);
        wantSelect("Dayq", 0);
        awakeningUp(1)
        repeat++;
    }

}

//원하는 곳까지 자동으로 계산해주는 함수(초월)
function howManyPlayTranscendence(num){  
    //일단 한번은 초기화 해줘야 일퀘 / 부캐런 안꼬임
    reset("Normal");
    reset("Middle");
    reset("Boss");
    reset("Dayq");
    reset("Infinityq");

    repeat = 0; //반복 횟수

    var transcendenceLevel = document.getElementsByName("transcendenceLevel");                          //내 레벨
    var transcendenceLevelPercent = document.getElementsByName("transcendenceLevelPercent");            //내 초월 레벨 %
    var wanttranscendenceLevel = document.getElementsByName("wantTranscendenceLevel");                  //원하는 초월 레벨
    var questLevel = document.getElementsByName("questLevel");      //원하는 던전 선택
    var playtime = document.getElementsByName("playtime");          //도는 횟수

    var saveTranscendenceLevel = transcendenceLevel[0].value;   //초월렙 세이브용
    var saveTranscendenceLevelPercent = transcendenceLevelPercent[0].value;   //초월렙% 세이브용

    if(wanttranscendenceLevel[0].value > 9999){
        wanttranscendenceLevel[0].value = 9999;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음

    questLevel[0].value = transcendenceLevel[0].value;  //원하는 던전의 레벨은 초월렙을 따르므로

    while(wanttranscendenceLevel[0].value + 1 - 1 > transcendenceLevel[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...

        if(num == 0){   //0을 넣으면 부캐런 기준으로
            wantSelect("Normal", 0);
            wantSelect("Middle", 0);
            wantSelect("Boss", 0);
            wantSelect("Dayq", 0);
            transcendenceUp(1);
            repeat++;
        }
        else if(num == 1){  //1을 넣으면 일퀘런 기준으로
            wantSelect("InfinityqDayq", 0);
            wantSelect("Dayq", 0);
            transcendenceUp(1);
            repeat++;
        }

    }

    //처음에 쓴 값 되돌리는 곳
    transcendenceLevel[0].value = saveTranscendenceLevel;
    transcendenceLevelPercent[0].value = saveTranscendenceLevelPercent;

    if(num == 0)    //부캐런이라서 2회당 1캐릭임
        alert("초월 " + wanttranscendenceLevel[0].value + "까지 부캐런 " +repeat + "회 (" + repeat/2 + "캐릭)");
    else if(num == 1)   //일퀘런이라서 캐릭 수는 필요 없음
        alert("초월 " + wanttranscendenceLevel[0].value + "까지 일퀘런 " +repeat + "회");
}

//원하는 곳까지 자동으로 계산해주는 함수(각성)
function howManyPlayAwakening(num){  
    //일단 한번은 초기화 해줘야 일퀘 / 부캐런 안꼬임
    reset("Normal");
    reset("Middle");
    reset("Boss");
    reset("Dayq");
    reset("Infinityq");

    repeat = 0; //반복 횟수

    //각성 1인데 초월 4000인 사람 있고 1500인 사람 있고 이래서 어찌됐건 얘도 있어야됨 
    var transcendenceLevel = document.getElementsByName("transcendenceLevel");                      //내 초월 레벨
    var transcendenceLevelPercent = document.getElementsByName("transcendenceLevelPercent");        //내 초월 레벨 %
    var awakeningLevel = document.getElementsByName("level");                                       //내 각성 레벨
    var awakeningLevelPercent = document.getElementsByName("levelPercent");                         //내 각성 레벨 %
    var wantAwakeningLevel = document.getElementsByName("wantAwakeningLevel");                  //원하는 각성 레벨
    var questLevel = document.getElementsByName("questLevel");      //원하는 던전 선택
    var playtime = document.getElementsByName("playtime");          //도는 횟수

    var saveTranscendenceLevel = transcendenceLevel[0].value;   //초월렙 세이브용
    var saveTranscendenceLevelPercent = transcendenceLevelPercent[0].value;   //초월렙 세이브용
    var saveAwakeningLevel = awakeningLevel[0].value;                   //각성렙 세이브용
    var saveAwakeningLevelPercent = awakeningLevelPercent[0].value;     //각성렙 세이브용

    if(wantAwakeningLevel[0].value > Level.length){
        wantAwakeningLevel[0].value = Level.length;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음

    questLevel[0].value = transcendenceLevel[0].value;      //원하는 던전의 레벨은 초월렙을 따르므로

    while(wantAwakeningLevel[0].value + 1 - 1 > awakeningLevel[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...
        if(num == 0){   //0을 넣으면 부캐런 기준으로
            wantSelect("Normal", 0);
            wantSelect("Middle", 0);
            wantSelect("Boss", 0);
            wantSelect("Dayq", 0);
            transcendenceUp(1);
            awakeningUp(1);
            repeat++;
        }
        else if(num == 1){  //1을 넣으면 일퀘런 기준으로
            wantSelect("InfinityqDayq", 0);
            wantSelect("Dayq", 0);
            transcendenceUp(1);
            awakeningUp(1);
            repeat++;
        }

    }


    //처음에 쓴 값 되돌리는 곳
    transcendenceLevel[0].value = saveTranscendenceLevel;
    transcendenceLevelPercent[0].value = saveTranscendenceLevelPercent;
    awakeningLevel[0].value = saveAwakeningLevel;
    awakeningLevelPercent[0].value = saveAwakeningLevelPercent;

    if(num == 0)    //부캐런이라서 2회당 1캐릭임
        alert("각성 " + wantAwakeningLevel[0].value + "까지 부캐런 " + repeat + "회 (" + repeat/2 + "캐릭)");
    else if(num == 1)   //일퀘런이라서 캐릭 수는 필요 없음
        alert("각성 " + wantAwakeningLevel[0].value + "까지 일퀘런 " + repeat + "회");
}
