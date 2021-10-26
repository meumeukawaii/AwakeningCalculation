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
        "</tr>"
            );
        }                    
    }

    //숫자 세는 스크립트 https://ungdoli0916.tistory.com/448
    //document.write("<br>" + level[0].value);

}

function calculate(){
    var level = document.getElementsByName("level");                //내 레벨
    var levelPercent = document.getElementsByName("levelPercent");  //내 레벨 %
    var playtime = document.getElementsByName("playtime");          //도는 횟수
    var questUp = document.getElementsByName("questUp");            //퀘보업

    /*document.write("<br>" + level[0].value);
    document.write("<br>" + levelPercent[0].value);
    document.write("<br>" + playtime[0].value + "<br>");
    document.write("<br>" + questUp[0].value / 100 + "<br>");*/
    
    var expNormal=0;
    var expMiddle=0;
    var expBoss=0;
    var expDayq=0;
    var levelUp = 0;
    //잡몹
    
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+"Normal")[0].checked == true) {
            expNormal+=Dungeon[i][2]
        }
    }
    //document.write("<br><br>" + expNormal + "<br><br>");
    //중보
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+"Middle")[0].checked == true) {
            expMiddle+=Dungeon[i][3]
        }
    }
    //document.write("<br><br>" + expMiddle + "<br><br>");
    //보스
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+"Boss")[0].checked == true) {
            expBoss += Dungeon[i][4];
        }
    }
    //document.write("<br><br>" + expBoss + "<br><br>");
    //일퀘
    for(let i in Dungeon){
        if (document.getElementsByName(Dungeon[i][0]+"Dayq")[0].checked == true) {
            expDayq += Dungeon[i][5];
        }
    }

    var exp_all = (expNormal + expMiddle + expBoss + expDayq) * (1 + questUp[0].value / 100) * playtime[0].value;   //퀘스트 종료 후 얻는 경험치

    nextExp = Level[level[0].value - 1][1] - (Level[level[0].value - 1][1] * (levelPercent[0].value / 100));   //현재 다음렙가기위해 필요한 경험치

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
