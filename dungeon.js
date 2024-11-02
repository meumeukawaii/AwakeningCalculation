//던전 영어명, 한국어명, 잡몹, 중보, 보스, 일퀘, 반복퀘, 던전 레벨
//던전 영어명, 한국어명, 바퀴당경험치, 반복퀘, 최대 횟수, 던전레벨
var Dungeon=new Array(
    ['skycastle', '천공성', 91278055115, 10250000000 * 2, 4, 1],                             //91,278,055,115.35
    ['mysterioustemple', '신비의 전당', 204529227769, 20500000000 * 3, 2, 1],                //204,529,227,769.9
    ['auroragarden', '오로라의 정원', 235652267607, 20500000000 * 3, 2, 1],                  //235,652,267,607.75
    ['priringgarden','프리링 정원', 280914375687, 20500000000, 2, 1],                    //280,914,375,687.63
    ['liberacityhall', '리베라 시청', 318933979374, 15375000000 * 4, 2,  1],                  //318,933,979,374.07
    ['chocogarden', '초코 가든', 329432109324, 20500000000 * 3, 2, 1],                       //329,432,109,324.59
    ['wrenchworldtree', '뒤틀린 세계수', 314322228705, 20500000000 * 3, 2, 1],               //20954815246.636772
    ['Itshighnoon', '석양의 숲', 377410126211, 20500000000 * 3, 2, 1],                       //377,410,126,211.62
    ['chunsiklandmemorial', '춘식랜드 기념관', 406827880269, 20500000000 * 3, 2, 1],         //406,827,880,269.45
    ['shadowbook', '그림자의 책', 386338381257, 20500000000 * 3, 2, 1],                       //386,338,381,257.82
    ['coralsong', '산호의 노래', 389429130875, 20500000000 * 3, 2, 1],                       //389,429,130,875.82
    ['icecreamgarden', '아이스크림 정원', 450363940908, 20500000000 * 3, 2, 1],               //450,363,940,908.2
    ['lacastle', '라의 성곽', 532733785065, 20500000000 * 3, 2, 1],                          //532,733,785,065.9
    ['warriorshelter', '전사들의 쉼터', 652046914002, 8241000000, 2, 1],                //652,046,914,002.98
    ['magictrainingcenter', '마법 수련관', 190201600890, 10147000000, 2, 0],              //12680106726.4574
    ['laetitia', '라이티티아', 1197520394, 0, 5000, 10],                           //1,197,520,394.31066
    ['iciclejail', '고드름 감옥', 928423904832, 23500000000 * 3, 2, 2],             //928,423,904,832.3188
    ['echofountain', '메아리의 샘', 3177272489061, 40000000000*4, 1, 2],            //3,177,272,489,061.059
    ['heartmemory', '심장의 기억', 935129111045, 40000000000 * 3, 1, 2],            //935,129,111,045.1946
    ['acrocoffin', '아크로의 관', 2382954489955, 40000000000 * 3, 1, 2],            //2,382,954,489,955.359
    ['Vanitas', '바니타스', 1812824034526, 40000000000 * 3, 1, 2],                  //1,812,824,034,526.937
    ['purgatoryazrael', '연옥 아즈라엘', 2614028863374, 40000000000 * 4, 1, 2],      //2,614,028,863,374.285
    ['kronostime', '크로노스의 시간', 1910689432512, 42500000000 * 3, 1, 2],         //1,910,689,432,512.686
    ['kairostime', '카이로스의 시간', 1789375818043, 42500000000 * 3, 1, 2],         //1,789,375,818,043.225
    ['abyssmirror', '심연의 거울', 1597169455389, 42500000000 * 3, 1, 2],            //1,597,169,455,389.588
    ['eugamontheater', '에우가몬 극장', 3261746220250, 42500000000 * 4, 1, 2],       //3,261,746,220,250.314
    ['lifeentelechy', '생명의 엔텔레케', 2368863835121, 42500000000 * 3, 1, 2],      //2,368,863,835,121.05
    ['spiritstub', '정령의 그루터기', 2180580763227, 42500000000 * 3, 1, 2],         //2,180,580,763,227.5
    ['disappearedstarsong', '사라진 별의 노래', 2211450107505, 42500000000 * 3, 1, 2], //2,211,450,107,505.452
    ['duskcathedral', '황혼의 성당', 4321464292011, 42500000000 * 5, 1, 2],             //4,321,464,292,011.564
    ['darkmoontest', '검은 달의 시련', 1457318825080, 42500000000 * 3, 1, 2],        //1,457,318,825,080.032
    ['earthtest', '대지의 시련', 2073346347666, 42500000000 * 3, 1, 2],              //2,073,346,347,666.936
    ['aegirruins', '에기르 유적', 2365269868649, 42500000000 * 3, 1, 2],             //2,365,269,868,649.96
    ['atlas', '아틀라스 정원', 4388140896920, 42500000000 * 4, 1, 3],                //4,388,140,896,920.368
    ['niflheimr', '니플헤임 스테이션', 2744358648426, 42500000000 * 3, 1, 3],         //2,744,358,648,426.802
    ['muspelheim', '무스펠스 터널', 3068415758693, 42500000000 * 3, 1, 3],           //3,068,415,758,693.3
    ['moksha', '모크샤', 2748748477017, 42500000000 * 3, 1, 3],                     //2,748,748,477,017.016
    ['nornir', '노르니르의 눈물', 5760201429107, 42500000000 * 5, 1, 3],             //5,760,201,429,107.43
    ['mushroomtree', '버섯나무 늪지', 3344005824951, 42500000000 * 3, 1, 3],           //3,344,005,824,951.035
    ['lysithea', '리시테아의 문', 2143768210268, 42500000000 * 3, 1, 3],               //2,143,768,210,268.111
    ['lack', '결핍의 경계', 2217315247164, 42500000000 * 3, 1, 3],                     // 2,217,315,247,164.38
    ['pleroma', '플레로마', 6280443881263, 42500000000 * 4, 1, 3],                     // 6,280,443,881,263.877
    ['erodedmagic', '침식된 마법청사', 2474259197601, 42500000000 * 3, 1, 3],            //2,474,259,197,601.765
    ['pseudaria', '프세우다리아', 2812775182780, 42500000000 * 3, 1, 3]                //2,812,775,182,780.024
)

//레벨, 경험치
var Level=new Array(
    [1, 1000000000000],
    [2, 1200000000000],
    [3, 1300000000000],
    [4, 150000000000],
    [5, 1600000000000],
    [6, 180000000000],
    [7, 1900000000000],
    [8, 2100000000000],
    [9, 240000000000],
    [10, 2600000000000],
    [11, 2900000000000],
    [12, 3200000000000],
    [13, 3500000000000],
    [14, 3800000000000],
    [15, 4000000000000],
    [16, 4200000000000],
    [17, 4400000000000],
    [18, 4700000000000],
    [19, 4900000000000],
    [20, 5100000000000],
    [21, 5400000000000],
    [22, 5700000000000],
    [23, 6000000000000],
    [24, 6300000000000],
    [25, 6600000000000],
    [26, 6900000000000],
    [27, 7300000000000],
    [28, 7700000000000],
    [29, 8100000000000],
    [30, 8500000000000],
    [31, 8900000000000],
    [32, 9400000000000],
    [33, 9800000000000],
    [34, 10300000000000],
    [35, 10900000000000],
    [36, 11400000000000],
    [37, 12000000000000],
    [38, 12600000000000],
    [39, 13200000000000],
    [40, 13900000000000],
    [41, 14600000000000],
    [42, 15400000000000],
    [43, 16200000000000],
    [44, 17000000000000],
    [45, 17900000000000],
    [46, 18800000000000],
    [47, 19700000000000],
    [48, 20700000000000],
    [49, 21800000000000],
    [50, 22900000000000],
    [51, 24100000000000],
    [52, 25300000000000],
    [53, 26600000000000],
    [54, 27900000000000],
    [55, 29400000000000],
    [56, 30900000000000],
    [57, 32400000000000],
    [58, 34100000000000],
    [59, 35800000000000],
    [60, 37600000000000],
    [61, 39600000000000],
    [62, 41600000000000],
    [63, 43700000000000],
    [64, 45900000000000],
    [65, 48300000000000],
    [66, 50700000000000],
    [67, 53300000000000],
    [68, 56000000000000],
    [69, 58900000000000],
    [70, 61900000000000],
    [71, 65100000000000],
    [72, 68400000000000],
    [73, 71900000000000],
    [74, 75500000000000],
    [75, 79400000000000],
    [76, 83400000000000],
    [77, 87700000000000],
    [78, 92200000000000],
    [79, 96900000000000],
    [80, 101800000000000],
    [81, 107000000000000],
    [82, 112500000000000],
    [83, 118200000000000],
    [84, 124200000000000],
    [85, 130600000000000],
    [86, 137200000000000],
    [87, 144200000000000],
    [88, 151600000000000],
    [89, 159300000000000],
    [90, 167400000000000],
    [91, 176000000000000],
    [92, 184900000000000],
    [93, 194400000000000],
    [94, 204300000000000],
    [95, 214300000000000],
    [96, 225700000000000],
    [97, 237200000000000],
    [98, 249300000000000],
    [99, 262000000000000],
    [100, 523900000000000],
    [101, 550100000000000],
    [102, 576300000000000],
    [103, 602500000000000],
    [104, 628700000000000],
    [105, 654900000000000],
    [106, 681100000000000],
    [107, 707300000000000],
    [108, 733500000000000],
    [109, 759700000000000],
    [110, 785900000000000],
    [111, 812100000000000],
    [112, 838300000000000],
    [113, 864500000000000],
    [114, 890700000000000],
    [115, 916900000000000],
    [116, 943100000000000],
    [117, 969300000000000],
    [118, 995500000000000],
    [119, 999900000000000],
    [120, 9999999999999999999]  //자리 넘어가면 고장나는 오류 임시 해결책
)
var SummonLevel=new Array(
    [1, 315000000000],
    [2, 330000000000],
    [3, 345000000000],
    [4, 360000000000],
    [5, 375000000000],
    [6, 390000000000],
    [7, 405000000000],
    [8, 420000000000],
    [9, 435000000000],
    [10, 495000000000],
    [11, 525000000000],
    [12, 555000000000],
    [13, 600000000000],
    [14, 630000000000],
    [15, 660000000000],
    [16, 690000000000],
    [17, 720000000000],
    [18, 765000000000],
    [19, 795000000000],
    [20, 900000000000],
    [21, 960000000000],
    [22, 1005000000000],
    [23, 1065000000000],
    [24, 1110000000000],
    [25, 1170000000000],
    [26, 1230000000000],
    [27, 1275000000000],
    [28, 1335000000000],
    [29, 1380000000000],
    [30, 1560000000000],
    [31, 1635000000000],
    [32, 1710000000000],
    [33, 1800000000000],
    [34, 1875000000000],
    [35, 1950000000000],
    [36, 2025000000000],
    [37, 2100000000000],
    [38, 2190000000000],
    [39, 2265000000000],
    [40, 2520000000000],
    [41, 2625000000000],
    [42, 2730000000000],
    [43, 2835000000000],
    [44, 2940000000000],
    [45, 3045000000000],
    [46, 3150000000000],
    [47, 3255000000000],
    [48, 3360000000000],
    [49, 3465000000000],
    [50, 3825000000000],
    [51, 3960000000000],
    [52, 4095000000000],
    [53, 4230000000000],
    [54, 4365000000000],
    [55, 4500000000000],
    [56, 4635000000000],
    [57, 4770000000000],
    [58, 4905000000000],
    [59, 5040000000000],
    [60, 5700000000000],
    [61, 5865000000000],
    [62, 6045000000000],
    [63, 6210000000000],
    [64, 6390000000000],
    [65, 6555000000000],
    [66, 6735000000000],
    [67, 6900000000000],
    [68, 7080000000000],
    [69, 7245000000000],
    [70, 8100000000000],
    [71, 8310000000000],
    [72, 8535000000000],
    [73, 8745000000000],
    [74, 8970000000000],
    [75, 9180000000000],
    [76, 9390000000000],
    [77, 9615000000000],
    [78, 9825000000000],
    [79, 10050000000000],
    [80, 11115000000000],
    [81, 11385000000000],
    [82, 11640000000000],
    [83, 11910000000000],
    [84, 12165000000000],
    [85, 12435000000000],
    [86, 12690000000000],
    [87, 12960000000000],
    [88, 13215000000000],
    [89, 13485000000000],
    [90, 14805000000000],
    [91, 15120000000000],
    [92, 15435000000000],
    [93, 15750000000000],
    [94, 16065000000000],
    [95, 16380000000000],
    [96, 16695000000000],
    [97, 17010000000000],
    [98, 17325000000000],
    [99, 17640000000000],
    [100, 9999999999999999999]  //자리 넘어가면 고장나는 오류 임시 해결책
)
