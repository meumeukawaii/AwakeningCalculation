//던전 영어명, 한국어명, 잡몹, 중보, 보스, 일퀘, 반복퀘
var Dungeon=new Array(
    ['azrael', '연옥 아즈라엘', 15854800000 * 14, 18294000000, 24392000000, 20643100000 * 2, 17074400000],
    ['banitas', '바니타스', 15785900000 * 8, 0, 24286000000, 20643100000 * 2, 17000200000],
    ['acro', '아크로의 관', 15785900000 * 9, 0, 24286000000, 20643100000 * 2, 17074400000],
    ['heart', '심장의 기억', 15785900000 * 6, 0, 24286000000, 20643100000 * 2, 17074400000],
    ['echo', '메아리의 샘', 15854800000 * 12, 18294000000, 24392000000, 20733200000 * 2, 24392000000],
    ['icicle', '고드름 감옥', 15785900000 * 6, 0, 24286000000, 20643100000 * 2, 24286000000],
    ['pledge', '맹약의 성소', 15717000000 * 9, 0, 24180000000, 20553000000 * 2, 16851800000],
    ['hille', '힐레', 15648100000 * 7, 0, 24074000000, 20462900000 * 2, 16777600000],
    ['rozen', '로젠가르텐', 15096900000 * 11, 17419500000, 23226000000, 20372800000 * 2, 16777600000],
    ['cradle', '환의 요람', 15022800000 * 6, 0, 23112000000, 20282700000 * 2, 16703400000],
    ['lethe', '망각의 호숫가', 14940900000 * 11, 0, 22986000000, 20282700000 * 2, 16703400000],
    ['star', '허무의 별', 14849900000 * 6, 0, 22846000000, 20192600000 * 2, 16629200000],
    ['oneiro', '꿈꾸는 오네이로', 14749800000 * 11, 17019000000, 22692000000, 20102500000 * 2, 16555000000],
    ['shelter', '마력 방공호', 14636700000 * 6, 0, 22518000000, 19922300000 * 2, 16406600000],
    ['main', '마법학원 본관', 15096900000 * 9, 0, 23226000000, 19645200000 * 2, 16178400000],
    ['rapier', '신의 나무 라피어', 15022800000 * 10, 17334000000, 23112000000, 19419100000 * 2, 15992200000],
    ['brook', '용의 계곡', 15022800000 * 7, 0, 23112000000, 19419100000 * 2, 15992200000],
    ['valley', '괴물나무 산 골짜기', 14198600000 * 8, 0, 21844000000, 19140300000 * 2, 15762600000],
    ['abysm', '나락의 방', 14849900000 * 8, 17134500000, 22846000000, 18973700000 * 2, 15625400000],
    ['superhuman', '초인기념관', 14849900000 * 7, 0, 22846000000, 18973700000 * 2, 15625400000],
    ['rest', '안식의 홀', 13513500000 * 7, 0, 20790000000, 13513500000 * 2, 10395000000],
    ['freeze', '얼어붙은 세계', 14509300000 * 9, 16741500000, 22322000000, 13513500000 * 2, 14509300000],
    ['chaos', '혼돈의 협곡', 14509300000 * 7, 0, 22322000000, 13513500000 * 2, 14509300000],
    ['twin', '트윙 키브', 13513500000 * 8, 0, 20790000000, 10395000000 * 2, 10395000000],
    ['bog', '환영의 독안개 늪지', 13513500000 * 9, 15592500000, 20790000000, 13513500000 * 2, 13513500000 * 2],
    ['floating', '부유섬', 13513500000 * 8, 0, 20790000000, 13513500000 * 2, 13513500000],
)

//레벨, 경험치
var Level=new Array(
    [1, 1000000000000],
    [2, 1150000000000],
    [3, 1300000000000],
    [4, 1450000000000],
    [5, 1600000000000],
    [6, 1750000000000],
    [7, 1900000000000],
    [8, 2100000000000],
    [9, 2350000000000],
    [10, 2600000000000],
    [11, 2900000000000],
    [12, 3200000000000],
    [13, 3500000000000],
    [14, 3817000000000],
    [15, 4012000000000],
    [16, 4217000000000],
    [17, 4432000000000],
    [18, 4658000000000],
    [19, 4896000000000],
    [20, 5146000000000],
    [21, 5408000000000],
    [22, 5684000000000],
    [23, 5974000000000],
    [24, 6279000000000],
    [25, 6599000000000],
    [26, 6936000000000],
    [27, 7290000000000],
    [28, 7662000000000],
    [29, 8053000000000],
    [30, 8464000000000],
    [31, 8896000000000],
    [32, 9350000000000],
    [33, 9827000000000],
    [34, 10328000000000],
    [35, 10855000000000],
    [36, 11409000000000],
    [37, 11991000000000],
    [38, 12603000000000],
    [39, 13246000000000],
    [40, 13922000000000],
    [41, 14632000000000],
    [42, 15378000000000],
    [43, 16162000000000],
    [44, 16986000000000],
    [45, 17852000000000],
    [46, 18762000000000],
    [47, 19719000000000],
    [48, 20725000000000],
    [49, 21782000000000],
    [50, 22893000000000],
    [51, 24061000000000],
    [52, 25288000000000],
    [53, 26578000000000],
    [54, 27933000000000],
    [55, 29358000000000],
    [56, 30855000000000],
    [57, 32429000000000],
    [58, 34083000000000],
    [59, 35821000000000],
    [60, 37648000000000],
    [61, 39568000000000],
    [62, 41586000000000],
    [63, 43707000000000],
    [64, 45936000000000],
    [65, 48279000000000],
    [66, 50741000000000],
    [67, 53329000000000],
    [68, 56049000000000],
    [69, 58907000000000],
    [70, 61911000000000],
    [71, 65068000000000],
    [72, 68386000000000],
    [73, 71874000000000],
    [74, 75540000000000],
    [75, 79393000000000],
    [76, 83442000000000],
    [77, 87698000000000],
    [78, 92171000000000],
    [79, 96872000000000],
    [80, 101812000000000],
    [81, 107004000000000],
    [82, 112461000000000],
    [83, 118197000000000],
    [84, 124225000000000],
    [85, 130560000000000],
    [86, 137219000000000],
    [87, 144217000000000],
    [88, 151572000000000],
    [89, 159302000000000],
    [90, 167426000000000],
    [91, 175965000000000],
    [92, 184939000000000],
    [93, 194371000000000],
    [94, 204284000000000],
    [95, 214702000000000],
    [96, 225652000000000],
    [97, 237160000000000],
    [98, 249255000000000],
    [99, 261967000000000],
    [100, 9999999999999999999]  //자리 넘어가면 고장나는 오류 임시 해결책
)
