function makeTable(){
    //표 만드는 스크립트
    for(let i in Dungeon){
        if(Dungeon[i][6] == 1){
            document.write(
            "<tr>",
                "<td>" + Dungeon[i][1] + "</td>",
                "<td>",
                    '<input type="checkbox" name="'+ Dungeon[i][0] +'Monster" value="'+ Dungeon[i][2] +'" checked> 몬스터',
                "</td>",
                "<td>",
                    '<input type="checkbox" name="'+ Dungeon[i][0] +'Quest" value="'+ Dungeon[i][3] +'" checked> 퀘스트',
                "</td>",
                "<td>",
                '횟수 <input type="number" name="'+ Dungeon[i][0] +'run" min="0" max="9999" style="width: 70px;" value ="' + Dungeon[i][4] + '" >',
                "</td>",
                "<td>",
                     Dungeon[i][2],
                "</td>",
                "<td>",
                    Dungeon[i][5],
                "</td>",
            "</tr>"
        );
        }
        else if(Dungeon[i][6] == 10){   //라이티티아 전용
            document.write(
            "<tr>",
                "<td bgcolor='#00AAFF'>" + Dungeon[i][1] + "</td>",
                "<td bgcolor='#00AAFF'>",
                    '<input type="checkbox" name="'+ Dungeon[i][0] +'Monster" value="'+ Dungeon[i][2] +'"> 몬스터',
                "</td>",
                "<td bgcolor='#00AAFF'>",
                    '<input type="checkbox" name="'+ Dungeon[i][0] +'Quest" value="'+ Dungeon[i][3] +'" disabled> 퀘스트',
                "</td>",
                "<td bgcolor='#00AAFF'>",
                '잡은 수 <input type="number" name="'+ Dungeon[i][0] +'run" min="0" max="9999" style="width: 70px;" value ="' + Dungeon[i][4] + '" >',
                "</td>",
                "<td bgcolor='#00AAFF'>",
                     Dungeon[i][2],
                "</td>",
                "<td bgcolor='#00AAFF'>",
                "</td>",
            "</tr>"
        );
        }
        else{
            document.write(
        "<tr>",
            "<td>" + Dungeon[i][1] + "</td>",
            "<td>",
                '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Monster" value="'+ Dungeon[i][2] +'"> 몬스터',
            "</td>",
            "<td>",
                '<input type="checkbox" id = ' + Dungeon[i][7] + '" name="'+ Dungeon[i][0] +'Quest" value="'+ Dungeon[i][3] +'"> 퀘스트',
            "</td>",
            "<td>",
            '횟수 <input type="number" name="'+ Dungeon[i][0] +'run" min="0" max="9999" style="width: 70px;" value ="' + Dungeon[i][4] + '" >',
            "</td>",
            "<td>",
                Dungeon[i][2],
            "</td>",
            "<td>",
            Dungeon[i][5],
            "</td>",
        "</tr>"
        );
        }                    
    }
}

//각성레벨 계산하는 함수
function awakeningUp(num){
    var level = document.getElementsByName("level");                //내 각성 레벨
    var levelPercent = document.getElementsByName("levelPercent");  //내 가성 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");              //파티여부

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소
    var levelUp = 0;    //레벨업 저장소

    //몬스터
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked);
    //퀘스트
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
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
function ULevelUp(num){ 
    var ULevel = document.getElementsByName("ULevel");                //내 초월 레벨
    var ULevelPercent = document.getElementsByName("ULevelPercent");  //내 초월 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소
    var levelUp = 0;    //레벨업 저장소

    //잡몹
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked);
    //중보
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치

    var nextExp = (40000000000 + 100000000 * (ULevel[0].value - 1 + 1) - (40000000000 + 100000000 * (ULevel[0].value - 1 + 1)) * ULevelPercent[0].value / 100)   //현재 다음렙가기위해 필요한 경험치
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
        
        for(i = ULevel[0].value - 1 + 2; i < 9999; i++){ //한번 레벨 올라갔으므로 +1 된 상태임 이유는 모르겠는데 저렇게 안하면 제대로 표기가 안됨
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
    
    var resultLevel = ULevel[0].value - (levelUp * -1);
    if(resultLevel == 9999){    //여기서부턴 의미 없어보이므로 남은 경험치는 표기 X
        resultLevelPercent = 0;
    }
    else{
        var resultLevelPercent = (40000000000 + 100000000 * (resultLevel - 1 + 1) - nextExp) / (40000000000 + 100000000 * (resultLevel - 1 + 1)) * 100;
    }
    if(num == 0){
        alert("Lv." + resultLevel + ", " + resultLevelPercent + "%");
    }
    else if(num == 1){
        ULevel[0].value = resultLevel;
        ULevelPercent[0].value = resultLevelPercent;
    }

}

function awakening2Up(num){
    var level2 = document.getElementsByName("level2");                //내 각성 레벨
    var level2Percent = document.getElementsByName("level2Percent");  //내 가성 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");              //파티여부

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소
    var level2Up = 0;    //레벨업 저장소

    //몬스터
    expMonster = Math.floor(ExpAdd("Monster", 2, "run", party2[0].checked)/1000000);
    //퀘스트
    expQuest = Math.floor(ExpAdd("Quest", 3, "run", party2[0].checked)/1000000);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nextExp = Level2[level2[0].value - 1][1] - (Level2[level2[0].value - 1][1] * (level2Percent[0].value / 100));   //현재 다음렙가기위해 필요한 경험치
    if(nextExp > exp_all){  //이걸로 레벨이 1도 올라가지 않을 경우
        nextExp -= exp_all;
        exp_all = 0;
    }
    else if(nextExp == exp_all){    //이걸로 레벨이 정확히 1 올라가는 경우 -의미가 있나 싶긴한데...
        nextExp += exp_all
        exp_all = 0;
        nextExp = 0;
        level2Up++;
    }
    else{   //이걸로 레벨이 1 이상 올라가는 경우
        exp_all = exp_all - nextExp;
        level2Up++;
        
        for(i = level2[0].value; i < Level2.length; i++){ //한번 레벨 올라갔으므로 +1 된 상태임
            if(exp_all < Level2[i][1]){
                nextExp = Level2[i][1] - exp_all;
                break;
            }
            else{
                exp_all = exp_all - Level2[i][1];
                level2Up++;
            }
        }
    }
    var resultLevel2 = level2[0].value - (level2Up * -1);
    
    if(resultLevel2 >= Level2.length){
        resultLevel2Percent = 0;
        resultLevel2 = Level2.length;
    }
    else{
        var resultLevel2Percent = (Level2[resultLevel2 - 1][1] - nextExp) / Level2[resultLevel2 - 1][1] * 100;
    }
    if(num == 0){   //0이라면 바로 알리는 곳
        alert("Lv." + resultLevel2 + ", " + resultLevel2Percent + "%");
    }
    else if(num == 1)   //1이라면 반복하는곳
    {
        level2[0].value = resultLevel2;
        level2Percent[0].value = resultLevel2Percent
    }

}

function SLevelUp(num){ 
    var SLevel = document.getElementsByName("SLevel");                //내 초월 레벨
    var SLevelPercent = document.getElementsByName("SLevelPercent");  //내 초월 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소
    var levelUp = 0;    //레벨업 저장소

    //잡몹
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked);
    //중보
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nextExp = (20000000000000 + 300000000000 * (SLevel[0].value * 0.01) - (20000000000000 + 300000000000 * (SLevel[0].value * 0.01)) * SLevelPercent[0].value / 100)   //현재 다음렙가기위해 필요한 경험치
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
        
        for(i = SLevel[0].value - 1 + 2; i < 10000; i++){ //한번 레벨 올라갔으므로 +1 된 상태임 이유는 모르겠는데 저렇게 안하면 제대로 표기가 안됨
            if(exp_all < (20000000000000 + 300000000000 * i * 0.01)){
                nextExp = (20000000000000 + 300000000000 * i * 0.01) - exp_all;
                break;
            }
            else{
                exp_all = exp_all - (20000000000000 + 300000000000 * i * 0.01);
                levelUp++;
            }
        }
    }
    
    var resultLevel = SLevel[0].value - (levelUp * -1);
    if(resultLevel == 10000){    //여기서부턴 의미 없어보이므로 남은 경험치는 표기 X
        resultLevelPercent = 0;
    }
    else{
        var resultLevelPercent = (20000000000000 + 300000000000 * 0.01 * (resultLevel - 1 + 1) - nextExp) / (20000000000000 + 300000000000 * 0.01 * (resultLevel - 1 + 1)) * 100;
    }
    if(num == 0){
        alert("Lv." + resultLevel / 100 + ", " + resultLevelPercent + "%");
    }
    else if(num == 1){
        SLevel[0].value = resultLevel;
        SLevelPercent[0].value = resultLevelPercent;
    }

}

//소환수 레벨 계산하는 함수
function SummonUp(num){
    var level = document.getElementsByName("SummonLevel");                //내 소환수 레벨
    var levelPercent = document.getElementsByName("SummonLevelPercent");  //내 소환수 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("SummonexpUp");          //소환수 경획
    var expMonster=0;    //몬스터 경험치 저장소
    var levelUp = 0;    //레벨업 저장소

    //몬스터
    expMonster = (ExpAdd("Monster", 2, "run", false))*(3/10);

    var exp_all = ((expMonster) * (1 + expUp[0].value / 100)) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nextExp = SummonLevel[level[0].value - 1][1] - (SummonLevel[level[0].value - 1][1] * (levelPercent[0].value / 100));   //현재 다음렙가기위해 필요한 경험치
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
        
        for(i = level[0].value; i < SummonLevel.length; i++){ //한번 레벨 올라갔으므로 +1 된 상태임
            if(exp_all < SummonLevel[i][1]){
                nextExp = SummonLevel[i][1] - exp_all;
                break;
            }
            else{
                exp_all = exp_all - SummonLevel[i][1];
                levelUp++;
            }
        }
    }
    var resultLevel = level[0].value - (levelUp * -1);
    if(resultLevel >= SummonLevel.length){
        resultLevelPercent = 0;
        resultLevel = SummonLevel.length;
    }
    else{
        var resultLevelPercent = (SummonLevel[resultLevel - 1][1] - nextExp) / SummonLevel[resultLevel - 1][1] * 100;
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

//전체 각성레벨 계산하는 함수
function awakeningAll(){
    var level = document.getElementsByName("level");                //내 각성 레벨
    var levelPercent = document.getElementsByName("levelPercent");  //내 가성 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소

    //잡몹
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked);
    //중보
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
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
    

    alert('각성 120까지 도달한 정도 = ' + result + '%');
}

//전체 초월레벨 계산하는 함수
function ULevelAll(){
    var ULevel = document.getElementsByName("ULevel");                //내 초월 레벨
    var ULevelPercent = document.getElementsByName("ULevelPercent");  //내 초월 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소

    //잡몹
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked);
    //중보
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nowExp = 0; //현재 경험치
    var allExp = 0; //1~9999까지의 경험치량
    var result = 0; //도달한 초월렙의 결과

    //1~9999까지의 경험치량
    for(i = 1; i < 9999; i++){ //레벨 오르는 횟수는 1부터 9999까지 
        allExp += 40000000000 + i * 100000000;
    }

    //지금까지 얻은 경험치량
    if(i > 1)
    {
        for(i = 1; i <= ULevel[0].value; i++){   //내 레벨이 1일때를 생각해보자 -1 없으면 이 계산기 결과로는 1레벨에서 얻은 경험치는 400억이 되버림
        nowExp += 40000000000 + i * 100000000;
        }
    }


    nowExp += ULevelPercent[0].value / 100 * (40000000000 + 100000000 * ULevel[0].value);   //초월렙 %까지 추가한 곳 레벨1의 50%를 생각할것
    nowExp += exp_all;  //퀘스트 종료 후에 얻은 곳 까지 포함한것
    result = nowExp/allExp*100;
    if(result >= 100){
        result = 100;
    }
    

    alert('초월 9999까지 도달한 정도 = ' + result + '%');
}

//전체 각성2레벨 계산하는 함수
function awakening2All(){
    var level2 = document.getElementsByName("level2");                //내 각성 레벨
    var level2Percent = document.getElementsByName("level2Percent");  //내 가성 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소

    //잡몹
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked)/1000000;
    //중보
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked)/1000000;

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nowExp = 0; //현재 경험치
    var allExp = 0; //1~100까지의 경험치량
    var result = 0; //도달한 각성렙의 결과

    //1~100까지의 경험치량
    for(i = 0; i < Level2.length - 1; i++){ //Level2[i][1]에서 Level2[99][1]의 경험치는 100에서 다음으로 가기 위한 경험치량을 임의표기한것임 99가 들어가면 안됨
        allExp += Level2[i][1];
    }

    //지금까지 얻은 경험치량 - 현재 % 제외
    for(i = 0; i < level2[0].value - 1; i++){   //내 레벨이 3일때를 생각해보자 -1 없으면 2가 포함되는건데 Level2[2][1]은 3레벨 모든 경험치를 얻게된것임
        nowExp += Level2[i][1];
    }

    nowExp += level2Percent[0].value / 100 * (Level2[level2[0].value - 1][1]);   //입력값을 3으로 가정하고 생각해볼것
    nowExp += exp_all;  //퀘스트 종료 후에 얻은 곳 까지 포함한것
    result = nowExp/allExp*100;
    if(result >= 100){
        result = 100;
    }
    

    alert('각성2 100까지 도달한 정도 = ' + result + '%');
}

function SLevelAll(){
    var SLevel = document.getElementsByName("SLevel");                //내 초월 레벨
    var SLevelPercent = document.getElementsByName("SLevelPercent");  //내 초월 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("expUp");
    var questUp = document.getElementsByName("questUp");            //퀘보업
    var party2 = document.getElementsByName("party2");

    var expMonster=0;    //몬스터 경험치 저장소
    var expQuest=0;    //퀘스트 경험치 저장소

    //잡몹
    expMonster = ExpAdd("Monster", 2, "run", party2[0].checked);
    //중보
    expQuest = ExpAdd("Quest", 3, "run", party2[0].checked);

    var exp_all = (((expMonster) * (1 + expUp[0].value / 100)) + ((expQuest) * (1 + questUp[0].value/100))) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nowExp = 0; //현재 경험치
    var allExp = 0; //1~9999까지의 경험치량
    var result = 0; //도달한 초월렙의 결과

    //1~9999까지의 경험치량
    for(i = 0; i < 10000; i++){ //레벨 오르는 횟수는 1부터 9999까지 
        allExp += 20000000000000 + i * 300000000000 * 0.01;
    }
    //지금까지 얻은 경험치량
    if(i>0)
    {
        for(i = 0; i <= SLevel[0].value; i++){   //내 레벨이 1일때를 생각해보자 -1 없으면 이 계산기 결과로는 1레벨에서 얻은 경험치는 400억이 되버림
        nowExp += 20000000000000 + i * 300000000000 * 0.01;
        }
    }
    nowExp += SLevelPercent[0].value / 100 * (20000000000000 + 300000000000 * SLevel[0].value);   //초월렙 %까지 추가한 곳 레벨1의 50%를 생각할것
    nowExp += exp_all;  //퀘스트 종료 후에 얻은 곳 까지 포함한것
    result = nowExp/allExp*100;
    if(result >= 100){
        result = 100;
    }
    

    alert('초월2 100.00까지 도달한 정도 = ' + result + '%');
}

//전체 소환수레벨 계산하는 함수
function SummonAll(){
    var level = document.getElementsByName("SummonLevel");                //내 소환수 레벨
    var levelPercent = document.getElementsByName("SummonLevelPercent");  //내 소환수 레벨 %
    var playtime = document.getElementsByName("playtime");          //전체 횟수(캐릭터)
    var expUp = document.getElementsByName("SummonexpUp");          //소환수 경획
    var expMonster=0;    //몬스터 경험치 저장소
    var levelUp = 0;    //레벨업 저장소

    //몬스터
    expMonster = (ExpAdd("Monster", 2, "run", false))*(3/10);

    var exp_all = ((expMonster) * (1 + expUp[0].value / 100)) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치
    var nowExp = 0; //현재 경험치
    var allExp = 0; //1~100까지의 경험치량
    var result = 0; //도달한 각성렙의 결과

    //1~105까지의 경험치량
    for(i = 0; i < SummonLevel.length - 1; i++){ //SummonLevel[i][1]에서 Level[99][1]의 경험치는 100에서 다음으로 가기 위한 경험치량을 임의표기한것임 99가 들어가면 안됨
        allExp += SummonLevel[i][1];
    }

    //지금까지 얻은 경험치량 - 현재 % 제외
    for(i = 0; i < level[0].value - 1; i++){   //내 레벨이 3일때를 생각해보자 -1 없으면 2가 포함되는건데 SummonLevel[2][1]은 3레벨 모든 경험치를 얻게된것임
        nowExp += SummonLevel[i][1];
    }

    nowExp += levelPercent[0].value / 100 * (SummonLevel[level[0].value - 1][1]);   //입력값을 3으로 가정하고 생각해볼것
    nowExp += exp_all;  //퀘스트 종료 후에 얻은 곳 까지 포함한것
    result = nowExp/allExp*100;
    if(result >= 100){
        result = 100;
    }
    

    alert('소환수 100까지 도달한 정도 = ' + result + '%');
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
function ExpAdd(name, num, run, party){
    if(party == true)
        partypenalty = 0.9;
    else
        partypenalty = 1;

    exp = 0;
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+name)[0].checked == true) {
            var rundungeon = document.getElementsByName(Dungeon[i][0]+run)[0].value;
            if(name == "Monster")
                exp += (Dungeon[i][num] * rundungeon * partypenalty)
            else
                exp += (Dungeon[i][num] * rundungeon);
        }
    }
    return exp;
}

//특정 던전 선택하는 곳
function SelectMadenDungeon(num){
    reset("Monster");
    reset("Quest");

    if(num == 0)
    {
        for (let i in Dungeon)
        {
            if(Dungeon[i][6] == 1)
            {
                document.getElementsByName(Dungeon[i][0]+"Monster")[0].checked = true;
                document.getElementsByName(Dungeon[i][0]+"Quest")[0].checked = true;
            }
        }
    }

    if(num == 1)    //프정 거르기
    {
        for (let i in Dungeon)
    {
        if(Dungeon[i][6] == 1)
        {
            if(Dungeon[i][0] == 'priringgarden')
            {
                continue;
            }
            document.getElementsByName(Dungeon[i][0]+"Monster")[0].checked = true;
            document.getElementsByName(Dungeon[i][0]+"Quest")[0].checked = true;
        }
    }
    }

    if(num == 2)
        {
            for (let i in Dungeon)
            {
                if(Dungeon[i][6] == 2)
                {
                    document.getElementsByName(Dungeon[i][0]+"Monster")[0].checked = true;
                    document.getElementsByName(Dungeon[i][0]+"Quest")[0].checked = true;
                }
            }
        }
}

//원하는 곳까지 자동으로 계산해주는 함수(초월)
function howManyPlayULevel(){  
    repeat = 0; //반복 횟수

    var ULevel = document.getElementsByName("ULevel");                          //내 레벨
    var ULevelPercent = document.getElementsByName("ULevelPercent");            //내 초월 레벨 %
    var wantULevel = document.getElementsByName("wantULevel");                  //원하는 초월 레벨
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var party2 = document.getElementsByName("party2");

    var saveULevel = ULevel[0].value;   //초월렙 세이브용
    var saveULevelPercent = ULevelPercent[0].value;   //초월렙% 세이브용

    if(wantULevel[0].value > 9999){
        wantULevel[0].value = 9999;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음

    if(ExpAdd("Monster", 2, "run", party2[0].checked) <= 0 && ExpAdd("Quest", 3, "run", party2[0].checked) <= 0)//아무것도 체크 안했을 때 튕김 방지
    {
        alert("몬스터 또는 퀘스트에 하나라도 체크해주세요");
        return; 
    }
    while(wantULevel[0].value + 1 - 1 > ULevel[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...
        ULevelUp(1);
        repeat++;
    }

    //처음에 쓴 값 되돌리는 곳
    ULevel[0].value = saveULevel;
    ULevelPercent[0].value = saveULevelPercent;

    alert("초월 " + wantULevel[0].value + "까지 경던 " +repeat + "회");
}

function howManyPlaySLevel(){  
    repeat = 0; //반복 횟수

    var SLevel = document.getElementsByName("SLevel");                          //내 레벨
    var SLevelPercent = document.getElementsByName("SLevelPercent");            //내 초월 레벨 %
    var wantSLevel = document.getElementsByName("wantSLevel");                  //원하는 초월 레벨
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var party2 = document.getElementsByName("party2");

    var saveSLevel = SLevel[0].value;   //초월렙 세이브용
    var saveSLevelPercent = SLevelPercent[0].value;   //초월렙% 세이브용

    if(wantSLevel[0].value > 10000){
        wantSLevel[0].value = 10000;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음

    if(ExpAdd("Monster", 2, "run", party2[0].checked) <= 0 && ExpAdd("Quest", 3, "run", party2[0].checked) <= 0)//아무것도 체크 안했을 때 튕김 방지
    {
        alert("몬스터 또는 퀘스트에 하나라도 체크해주세요");
        return; 
    }
    while(wantSLevel[0].value + 1 - 1 > SLevel[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...
        SLevelUp(1);
        repeat++;
    }

    //처음에 쓴 값 되돌리는 곳
    SLevel[0].value = saveSLevel;
    SLevelPercent[0].value = saveSLevelPercent;

    alert("초월2 " + wantSLevel[0].value / 100 + "까지 경던 " +repeat + "회");
}


//원하는 곳까지 자동으로 계산해주는 함수(각성)
function howManyPlayAwakening(num){  
    repeat = 0; //반복 횟수

    //각성 1인데 초월 4000인 사람 있고 1500인 사람 있고 이래서 어찌됐건 얘도 있어야됨 
    var ULevel = document.getElementsByName("ULevel");                      //내 초월 레벨
    var ULevelPercent = document.getElementsByName("ULevelPercent");        //내 초월 레벨 %
    var awakeningLevel = document.getElementsByName("level");                                       //내 각성 레벨
    var awakeningLevelPercent = document.getElementsByName("levelPercent");                         //내 각성 레벨 %
    var wantAwakeningLevel = document.getElementsByName("wantAwakeningLevel");                  //원하는 각성 레벨
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var party2 = document.getElementsByName("party2");

    var saveULevel = ULevel[0].value;   //초월렙 세이브용
    var saveULevelPercent = ULevelPercent[0].value;   //초월렙 세이브용
    var saveAwakeningLevel = awakeningLevel[0].value;                   //각성렙 세이브용
    var saveAwakeningLevelPercent = awakeningLevelPercent[0].value;     //각성렙 세이브용

    if(wantAwakeningLevel[0].value > Level.length){
        wantAwakeningLevel[0].value = Level.length;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음

    if(ExpAdd("Monster", 2, "run", party2[0].checked) <= 0 && ExpAdd("Quest", 3, "run", party2[0].checked) <= 0)//아무것도 체크 안했을 때 튕김 방지
    {
        alert("몬스터 또는 퀘스트에 하나라도 체크해주세요");
        return; 
    }
    while(wantAwakeningLevel[0].value + 1 - 1 > awakeningLevel[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...
            ULevelUp(1);
            awakeningUp(1);
            repeat++;
    }


    //처음에 쓴 값 되돌리는 곳
    ULevel[0].value = saveULevel;
    ULevelPercent[0].value = saveULevelPercent;
    awakeningLevel[0].value = saveAwakeningLevel;
    awakeningLevelPercent[0].value = saveAwakeningLevelPercent;

    alert("각성 " + wantAwakeningLevel[0].value + "까지 경던 " + repeat + "회");
    
}

//각2 원하는 곳 확인
function howManyPlayAwakening2(num){  
    repeat = 0; //반복 횟수

    //각성 1인데 초월 4000인 사람 있고 1500인 사람 있고 이래서 어찌됐건 얘도 있어야됨 
    var ULevel = document.getElementsByName("ULevel");                      //내 초월 레벨
    var ULevelPercent = document.getElementsByName("ULevelPercent");        //내 초월 레벨 %
    var awakeningLevel2 = document.getElementsByName("level2");                                       //내 각성 레벨
    var awakeningLevel2Percent = document.getElementsByName("level2Percent");                         //내 각성 레벨 %
    var wantAwakeningLevel2 = document.getElementsByName("wantAwakeningLevel2");                  //원하는 각성 레벨
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var party2 = document.getElementsByName("party2");

    var saveULevel = ULevel[0].value;   //초월렙 세이브용
    var saveULevelPercent = ULevelPercent[0].value;   //초월렙 세이브용
    var saveAwakeningLevel2 = awakeningLevel2[0].value;                   //각성렙 세이브용
    var saveAwakeningLevel2Percent = awakeningLevel2Percent[0].value;     //각성렙 세이브용

    if(wantAwakeningLevel2[0].value > Level2.length){
        wantAwakeningLevel2[0].value = Level2.length;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음

    if(ExpAdd("Monster", 2, "run", party2[0].checked) <= 0 && ExpAdd("Quest", 3, "run", party2[0].checked) <= 0)//아무것도 체크 안했을 때 튕김 방지
    {
        alert("몬스터 또는 퀘스트에 하나라도 체크해주세요");
        return; 
    }
    while(wantAwakeningLevel2[0].value + 1 - 1 > awakeningLevel2[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...
            ULevelUp(1);
            awakening2Up(1);
            repeat++;
    }


    //처음에 쓴 값 되돌리는 곳
    ULevel[0].value = saveULevel;
    ULevelPercent[0].value = saveULevelPercent;
    awakeningLevel2[0].value = saveAwakeningLevel2;
    awakeningLevel2Percent[0].value = saveAwakeningLevel2Percent;

    alert("각성2 " + wantAwakeningLevel2[0].value + "까지 경던 " + repeat + "회");
    
}


//원하는 곳까지 자동으로 계산해주는 함수(소환수)
function howManyPlaySummon(num){  
    repeat = 0; //반복 횟수

    var level = document.getElementsByName("SummonLevel");                                       //내 소환수 레벨
    var levelPercent = document.getElementsByName("SummonLevelPercent");                         //내 소환수 레벨 %
    var wantSummonLevel = document.getElementsByName("wantSummonLevel");                  //원하는 소환수 레벨
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var saveSummonLevel = level[0].value;                   //소환수렙 세이브용
    var saveSummonLevelPercent = levelPercent[0].value;     //소환수렙 세이브용

    if(wantSummonLevel[0].value > SummonLevel.length){
        wantSummonLevel[0].value = SummonLevel.length;
        alert("그러다 사이트 팅겨요...")
    }

    playtime[0].value = 1;  //무조건 1 고정해야 횟수가 나올 수 있음
    if(ExpAdd("Monster", 2, "run", false) <= 0)//아무것도 체크 안했을 때 튕김 방지
    {
        alert("몬스터에 하나라도 체크해주세요");
        return; 
    }
    while(wantSummonLevel[0].value + 1 - 1 > level[0].value + 1 - 1){   //이유는 모르겠는데 +1 -1로 안하면 숫자로 감지를 안하는듯...
        SummonUp(1);
        repeat++;
    }
    //처음에 쓴 값 되돌리는 곳
    level[0].value = saveSummonLevel;
    levelPercent[0].value = saveSummonLevelPercent;

    alert("소환수 " + wantSummonLevel[0].value + "까지 경던 " + repeat + "회");
}

function CountMonster()
{
    var count = 0;
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+"Monster")[0].checked == true) {
            var rundungeon = document.getElementsByName(Dungeon[i][0]+"run")[0].value;
            count += (Dungeon[i][5] * rundungeon)
        }
    }
    alert("잡은 수 예상: " + count * 0.9 + "~"+ count);
}
