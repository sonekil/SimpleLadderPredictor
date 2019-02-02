var teams, weeks, week1, week2, week3, week4, week5, week6, week7, week8, week9, week10,week11,week12,week13,week14,week15,week16,week17,week18,week19,week20,week21,week22,week23,week24,week25, finals1, finals2, finals3, finals4;

var team = function(name, played, win, draw, loss, bye, ptsScored, ptsAgainst, diff, pts, finWin, playedN, winN, drawN, lossN, byeN, ptsScoredN, ptsAgainstN, diffN, ptsN) {
    this.name = name;
    this.played =played;
    this.win = win;
    this.draw = draw;
    this.loss = loss;
    this.bye = bye; 
    this.ptsScored = ptsScored;
    this.ptsAgainst = ptsAgainst;
    this.diff = diff;
    this.pts = pts;
    this.finWin = finWin;
    this.playedN =playedN;
    this.winN = winN;
    this.drawN = drawN;
    this.lossN = lossN;
    this.byeN = byeN; 
    this.ptsScoredN = ptsScoredN;
    this.ptsAgainstN = ptsAgainstN;
    this.diffN = diffN;
    this.ptsN = ptsN;
};

var BRI = new team('BRI', [],[],[],[],[],[],[],[], [], [], 0, 0, 0, 0, 0, 0, 0, 0, 0);
var CAN = new team('CAN', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var CBY = new team('CBY', [],[],[],[],[],[],[],[], [], [], 0, 0, 0, 0, 0, 0, 0, 0, 0);
var CRO = new team('CRO', [],[],[],[],[],[],[],[], [],[], 0, 0, 0, 0, 0, 0, 0, 0, 0);
var GCT = new team('GCT', [],[],[],[],[],[],[],[], [],[], 0, 0, 0, 0, 0, 0, 0, 0, 0);
var MAN = new team('MAN', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var MEL = new team('MEL', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var NEW = new team('NEW', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var NZL = new team('NZL', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var NQL = new team('NQL', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var PAR = new team('PAR', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var PEN = new team('PEN', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var SOU = new team('SOU', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var SGI = new team('SGI', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);
var SYD = new team('SYD', [],[],[],[],[],[],[],[], [],[], 0, 0, 0, 0, 0, 0, 0, 0, 0);
var WTI = new team('WTI', [],[],[],[],[],[],[],[], [], [],0, 0, 0, 0, 0, 0, 0, 0, 0);

teams = [
    BRI,
    CAN,
    CBY,
    CRO,
    GCT,
    MAN,
    MEL,
    NEW,
    NZL,
    NQL,
    PAR,
    PEN,
    SOU,
    SGI,
    SYD,
    WTI
];


week1 = [
    MEL, BRI, NEW, CRO, SYD, SOU, 
    NZL, CBY, WTI, MAN, NQL, SGI,
    PEN, PAR, GCT, CAN 
];

week2 = [
    SGI, SOU, CAN, MEL, BRI, NQL,
    CRO, GCT, NEW, PEN, MAN, SYD,
    CBY, PAR, WTI, NZL
];

week3 = [
    BRI, SGI, CAN, NEW, PAR, SYD,
    MAN, NZL, NQL, CRO, PEN, MEL,
    WTI, CBY, SOU, GCT
];

week4 = [
    SYD, BRI, NZL, GCT, PEN, WTI,
    MAN, SOU, NQL, CAN, PAR, CRO,
    MEL, CBY, NEW, SGI
];

week5 = [
    BRI, WTI, GCT, PEN, NQL, MEL,
    SOU, NZL, NEW, MAN, CRO, SYD,
    SGI, CBY, CAN, PAR 
];

week6 = [
    CRO, PEN, CBY, SOU, MEL, SYD, 
    NZL, NQL, SGI, MAN, GCT, NEW,
    CAN, BRI, PAR, WTI
];

week7 = [
    SYD, SGI, MEL, NZL, CBY, NQL,
    PEN, SOU, WTI, GCT, BRI, CRO,
    MAN, CAN, NEW, PAR
];

week8 = [
    SOU, BRI, NQL, GCT, CRO, MEL,
    CAN, PEN, MAN, CBY, SYD, WTI,
    NZL, NEW, PAR, SGI
];

week9 = [
    GCT, CRO, WTI, PEN, MAN, BRI, 
    CBY, NEW, NZL, SGI, MEL, PAR,
    SYD, CAN, SOU, NQL
];

week10 = [
    MEL, WTI, PEN, NZL, BRI, SYD,
    GCT, CBY, NQL, PAR, CAN, SOU,
    SGI, NEW, CRO, MAN
];

week11 = [
    PAR, PEN, MAN, GCT, NEW, SYD,
    CAN, NQL, NZL, BRI, SOU, WTI,
    CBY, MEL, SGI, CRO
];

week12 = [
    PEN, MAN, PAR, SOU, CBY, CAN,
    GCT, NQL
];

week13 = [
    SOU, NEW, WTI, CAN, NZL, MEL,
    CRO, PAR, NQL, MAN, BRI, GCT,
    PEN, SYD, CBY, SGI
];

week14 = [
    CAN, CRO, GCT, NZL, NQL, WTI,
    MEL, NEW, SOU, PEN, PAR, BRI,
    MAN, SGI, SYD, CBY
];

week15 = [
    WTI, SOU, SGI, NQL, SYD, MEL,
    GCT, MAN, NEW, BRI, PAR, CAN,
    NZL, PEN, CBY, CRO
];

week16 = [
    SGI, MEL, WTI, SYD, NEW, NZL,
    CRO, BRI
];

week17 = [
    PEN, GCT, NEW, CBY, SOU, MAN,
    BRI, NZL, MEL, CRO, SYD, NQL,
    WTI, PAR, SGI, CAN
];

week18 = [
    BRI, CBY, NZL, CRO, PEN, SGI,
    SYD, NEW, CAN, WTI, NQL, SOU,
    GCT, MEL, MAN, PAR
];

week19 = [
    CRO, NQL, NEW, WTI, SOU, SGI,
    PAR, NZL, GCT, BRI, MEL, MAN,
    CBY, SYD, PEN, CAN
];

week20 = [
    WTI, NQL, NZL, CAN, BRI, MEL,
    MAN, NEW, CBY, PEN, CRO, SOU,
    SYD, GCT, SGI, PAR
];

week21 = [
    NQL, BRI, NZL, MAN, PEN, CRO,
    SGI, GCT, PAR, NEW, CBY, WTI,
    CAN, SYD, SOU, MEL 
];

week22 = [
    MAN, WTI, GCT, PAR, BRI, PEN, 
    NEW, NQL, MEL, CAN, SOU, CBY,
    SYD, NZL, CRO, SGI
];

week23 = [
    PAR, CBY, NQL, PEN, BRI, SOU,
    CRO, NZL, WTI, NEW, SGI, SYD,
    MEL, GCT, CAN, MAN
];

week24 = [
    NQL, CBY, NZL, SOU, BRI, PAR,
    NEW, GCT, MAN, MEL, SYD, PEN,
    CRO, CAN, SGI, WTI
];

week25 = [
    SOU, SYD, PAR, MAN, MEL, NQL,
    CAN, NZL, CBY, BRI, GCT, SGI,
    WTI, CRO, PEN, NEW
];

finals1 = [];

finals2 = [];

finals3 = [];
//To do finals and updating



weeks = [week1,week2,week3,week4,week5,week6,week7,week8,week9,week10,week11,week12,week13,week14,week15,week16,week17,week18,week19,week20,week21,week22,week23,week24,week25, finals1, finals2];



// var wscore  = [12,21,18,29] 
var week1a = week1
var week2a = week2
var week3a = week3
var week4a = week4
var week5a = week5
var week6a = week6
var week7a = week7
var week8a = week8
var week9a = week9
var week10a = week10
var week11a = week11
var week12a = week12
var week13a = week13
var week14a = week14
var week15a = week15
var week16a = week16
var week17a = week17
var week18a = week18
var week19a = week19
var week20a = week20
var week21a = week21
var week22a = week22
var week23a = week23
var week24a = week24
var week25a = week25

newWeeks = [week1a,week2a,week3a,week4a,week5a,week6a,week7a,week8a,week9a,week10a,week11a,week12a,week13a,week14a,week15a,week16a,week17a,week18a,week19a,week20a,week21a,week22a,week23a,week24a,week25a];

//compare team scores






// Logic
var logicController = (function() {
    var team = function(name, played, win, draw, loss, bye, ptsScored, ptsAgainst, diff, pts, finWin, playedN, winN, drawN, lossN, byeN, ptsScoredN, ptsAgainstN, diffN, ptsN) {
        this.name = name;
        this.played =played;
        this.win = win;
        this.draw = draw;
        this.loss = loss;
        this.bye = bye; 
        this.ptsScored = ptsScored;
        this.ptsAgainst = ptsAgainst;
        this.diff = diff;
        this.pts = pts;
        this.finWin = finWin;
        this.playedN =playedN;
        this.winN = winN;
        this.drawN = drawN;
        this.lossN = lossN;
        this.byeN = byeN; 
        this.ptsScoredN = ptsScoredN;
        this.ptsAgainstN = ptsAgainstN;
        this.diffN = diffN;
        this.ptsN = ptsN;
    };

    return {
        sumAr: function(arr) {
            var n = 0
            for (var i =0; i< arr.length; i++) {
                n = n+ arr[i];     
            }return n;
        },
        getsN: function() {
            for (var i = 0; i < teams.length; i++) {
                teams[i].playedN = logicController.sumAr(teams[i].played);
                teams[i].winN = logicController.sumAr(teams[i].win);
                teams[i].drawN = logicController.sumAr(teams[i].draw);
                teams[i].lossN = logicController.sumAr(teams[i].loss);
                teams[i].byeN = logicController.sumAr(teams[i].bye);
                teams[i].ptsScoredN = logicController.sumAr(teams[i].ptsScored);
                teams[i].ptsAgainstN = logicController.sumAr(teams[i].ptsAgainst);
                teams[i].diffN = logicController.sumAr(teams[i].diff);
                teams[i].ptsN = logicController.sumAr(teams[i].pts);
            }
        },

        reverseBubSort: function(arr) {
            var len = arr.length;
            for (var i=len -1; i>=0; i--) {
                for (var j =1; j<=i; j++) {
                    if (arr[j-1] > arr[j]) {
                        var temp = arr[j-1];
                        arr[j-1] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
        },

        sorter: function() {
            for (var i= 15; i>=0; i--) {
                for (var j=1; j<=i; j++) {
                    if (newWeeks[0][j-1].ptsN > newWeeks[0][j].ptsN) {
                        var temp = newWeeks[0][j-1];
                        newWeeks[0][j-1] = newWeeks[0][j];
                        newWeeks[0][j] = temp;
                    }
                }
            }
            for (var i= 15; i>=0; i--) {
                for (var j=1; j<=i; j++) {
                    if ((newWeeks[0][j-1].ptsN === newWeeks[0][j].ptsN) && (newWeeks[0][j-1].diffN > newWeeks[0][j].diffN)) {
                        var temp = newWeeks[0][j-1];
                        newWeeks[0][j-1] = newWeeks[0][j];
                        newWeeks[0][j] = temp;
                    }
                }
            }            
            for (var i= 15; i>=0; i--) {
                for (var j=1; j<=i; j++) {
                    if ((newWeeks[0][j-1].ptsN === newWeeks[0][j].ptsN) && (newWeeks[0][j-1].diffN === newWeeks[0][j].diffN) && (newWeeks[0][j-1].ptsScoredN > newWeeks[0][j].ptsScoredN) ) {
                        var temp = newWeeks[0][j-1];
                        newWeeks[0][j-1] = newWeeks[0][j];
                        newWeeks[0][j] = temp;
                    }
                }
            }
            newWeeks[0] = newWeeks[0].reverse()
            console.log(newWeeks[0])
        },

        // finalsCalc: function() {
        //     for (var i = 0; i<8; i++) {
        //         finals1.push(weeks[0][i]);
        //     }
        // },
    
    }
})();


//UI
var UIController = (function() {
    var DOMstrings = {
        weekStr: '.week',
        scoreStr: '.sc',
        teamStr: '.team',
        nextStr: '.next',
        prevStr: '.prev',
        ladStr: '.lad',
        plaStr: '.pla',
		winStr: '.win',
	    draStr: '.dra',
		losStr: '.los',
		byeStr: '.bye',
		forStr: '.for',
		agaStr: '.aga',
        difStr: '.dif',
        ptsStr: '.pts',
    };

    return {
        getWins: function() {
            for (var i = 0; i < 24; i++) {
                if ((i===11) || (i===15) || (i===24)) { continue;}
                if (document.querySelector('.week').innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< (weeks[i]).length; j++) {
                        if (weeks[i][j].diff[i] > 0) {
                            weeks[i][j].win.push(Number(1));
                            weeks[i][j].played.push(Number(1));
                            weeks[i][j].pts.push(Number(2));
                            weeks[i][j].bye.push(Number(0));
                            weeks[i][j].draw.push(Number(0));
                            weeks[i][j].loss.push(Number(0));
                        } else if (weeks[i][j].diff[i] < 0) {
                            weeks[i][j].loss.push(Number(1));
                            weeks[i][j].played.push(Number(1));
                            weeks[i][j].pts.push(Number(0));
                            weeks[i][j].bye.push(Number(0));
                            weeks[i][j].draw.push(Number(0));
                            weeks[i][j].draw.push(Number(0));
                        } else {
                            weeks[i][j].draw.push(Number(1));
                            weeks[i][j].played.push(Number(1));
                            weeks[i][j].pts.push(Number(1));
                            weeks[i][j].bye.push(Number(0));
                            weeks[i][j].win.push(Number(0));
                            weeks[i][j].loss.push(Number(0));
                        }
                    }
                    break;
                }
                else if ((document.querySelector('.week').innerHTML === 'Week 12')) {
                    for(var j =0; j< (weeks[11]).length; j++) {
                        if (weeks[11][j].diff[11] > 0) {
                            weeks[11][j].draw.push(Number(0));
                            weeks[11][j].played.push(Number(1));
                            weeks[11][j].pts.push(Number(2));
                            weeks[11][j].bye.push(Number(0));
                            weeks[11][j].win.push(Number(1));
                            weeks[11][j].loss.push(Number(0));
                        } else if (weeks[11][j].diff[11] < 0) {
                            weeks[11][j].draw.push(Number(0));
                            weeks[11][j].played.push(Number(1));
                            weeks[11][j].pts.push(Number(0));
                            weeks[11][j].bye.push(Number(0));
                            weeks[11][j].win.push(Number(0));
                            weeks[11][j].loss.push(Number(1));
                        } else if ((document.querySelector('.week').innerHTML === 'Week 12') &&(weeks[11][j].diff[11] === 0)) {
                            weeks[11][j].draw.push(Number(1));
                            weeks[11][j].played.push(Number(1));
                            weeks[11][j].pts.push(Number(1));
                            weeks[11][j].bye.push(Number(0));
                            weeks[11][j].win.push(Number(0));
                            weeks[11][j].loss.push(Number(0));
                        }
                    } break;
                } 
                else if ((document.querySelector('.week').innerHTML === 'Week 16')) {
                    for(var j =0; j< (weeks[15]).length; j++) {
                        if (weeks[15][j].diff[15] > 0) {
                            weeks[15][j].draw.push(Number(0));
                            weeks[15][j].played.push(Number(1));
                            weeks[15][j].pts.push(Number(2));
                            weeks[15][j].bye.push(Number(0));
                            weeks[15][j].win.push(Number(1));
                            weeks[15][j].loss.push(Number(0));
                        } else if (weeks[15][j].diff[15] < 0) {
                            weeks[15][j].draw.push(Number(0));
                            weeks[15][j].played.push(Number(1));
                            weeks[15][j].pts.push(Number(0));
                            weeks[15][j].bye.push(Number(0));
                            weeks[15][j].win.push(Number(0));
                            weeks[15][j].loss.push(Number(1));
                        } else if (weeks[15][j].diff[15] === 0) {
                            weeks[15][j].draw.push(Number(1));
                            weeks[15][j].played.push(Number(1));
                            weeks[15][j].pts.push(Number(1));
                            weeks[15][j].bye.push(Number(0));
                            weeks[15][j].win.push(Number(0));
                            weeks[15][j].loss.push(Number(0));
                        }
                    } break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 25') {
                    for (var j =0; j< (weeks[24]).length; j++) {
                        if (weeks[24][j].diff[24] > 0) {
                            weeks[24][j].win.push(Number(1));
                            weeks[24][j].played.push(Number(1));
                            weeks[24][j].pts.push(Number(2));
                            weeks[24][j].bye.push(Number(0));
                            weeks[24][j].draw.push(Number(0));
                            weeks[24][j].loss.push(Number(0));
                        } else if (weeks[24][j].diff[24] < 0) {
                            weeks[24][j].loss.push(Number(1));
                            weeks[24][j].played.push(Number(1));
                            weeks[24][j].pts.push(Number(0));
                            weeks[24][j].bye.push(Number(0));
                            weeks[24][j].draw.push(Number(0));
                            weeks[24][j].draw.push(Number(0));
                        } else {
                            weeks[24][j].draw.push(Number(1));
                            weeks[24][j].played.push(Number(1));
                            weeks[24][j].pts.push(Number(1));
                            weeks[24][j].bye.push(Number(0));
                            weeks[24][j].win.push(Number(0));
                            weeks[24][j].loss.push(Number(0));
                        }
                    }
                    break;
                }
                // else if (document.querySelector('.week').innerHTML === 'Finals Week 1') {
                //     for (var j =0; j< (weeks[25]).length; j++) {
                //         if (weeks[25][j].diff[25] > 0) {
                //             weeks[25][j].finWin.push(Number(1));
                //         } else if (weeks[i][j].diff[i] < 0) {
                //             weeks[25][j].finWin.push(Number(0));
                //         }
                //     }
                //     if (document.querySelector('.week') === 'Finals Week 1') {
                //         for (var i = 0; i< 4; i++) {
                //             if (finals1[i].finWin[0] === 0) {
                //                 finals2.push(finals1[i]);
                //             }
                //         }
                //         for (var j = 4; j< 8; j++) {
                //             if (finals1[j].finWin[0] === 1) {
                //                 finals2.push(finals1[j]);
                //             }
                //         }
                //         console.log(finals2);
                //     }
                //     break;
                // }
            }
        },

        getFor: function() {
            for (var i = 0; i < (weeks.length -2); i++) {
                if (document.querySelector('.week').innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< (weeks[i]).length; j++) {
                        weeks[i][j].ptsScored.push(Number(document.querySelector('.sc' + (j+1)).value));
                    };
                    break;
                }
            }
        },

        getByeFor: function() {
            for (var i = 0; i < 25; i++) {
                if( (i=== 11) || (i === 15) || (i === 24)) { continue; }
                if (document.querySelector('.week').innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< (weeks[i]).length; j++) {
                        weeks[i][j].ptsScored.push(Number(document.querySelector('.sc' + (j+1)).value));
                    };
                    break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 12')  {
                    for (var j =0; j< (weeks[11]).length; j++) {
                        weeks[11][j].ptsScored.push(Number(document.querySelector('.sc' + (j+1)).value));
                    };
                    teams[0].ptsScored.push(Number(0));
                    teams[13].ptsScored.push(Number(0));
                    teams[7].ptsScored.push(Number(0));
                    teams[14].ptsScored.push(Number(0));
                    teams[3].ptsScored.push(Number(0));
                    teams[6].ptsScored.push(Number(0));
                    teams[15].ptsScored.push(Number(0));
                    teams[8].ptsScored.push(Number(0));
                    break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 16')  {
                    for (var j =0; j< (weeks[15]).length; j++) {
                        weeks[15][j].ptsScored.push(Number(document.querySelector('.sc' + (j+1)).value));
                    }
                    teams[2].ptsScored.push(Number(0));
                    teams[9].ptsScored.push(Number(0));
                    teams[10].ptsScored.push(Number(0));
                    teams[11].ptsScored.push(Number(0));
                    teams[12].ptsScored.push(Number(0));
                    teams[1].ptsScored.push(Number(0));
                    teams[5].ptsScored.push(Number(0));
                    teams[4].ptsScored.push(Number(0));
                    break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 25') {
                    for (var j =0; j< weeks[24].length; j++) {
                        weeks[24][j].ptsScored.push(Number(document.querySelector('.sc' + (j+1)).value));
                    }
                    break;
                }
                // else if (document.querySelector('.week').innerHTML === 'Finals Week 1') {
                //     for (var j=0; j < 7; j++) {
                //         weeks[25][j].ptsScored.push(Number(document.querySelector('.sc' + (j+1)).value));
                //     }
                //     break;
                // }
            } 
        },

        getAgainst: function() {
            for (var i=0; i < weeks.length -1; i++ ) {
                if (document.querySelector('.week').innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< (weeks[i]).length; j+=2) {
                        weeks[i][j].ptsAgainst.push(Number(document.querySelector('.sc' + (j+2)).value));
                    }
                    for (var k = 1; k < (weeks[i]).length; k+=2) {
                        weeks[i][k].ptsAgainst.push(Number(document.querySelector('.sc' + (k)).value));
                    }
                    break;
                }
            }
        },

        getByeAgainst: function() {
            for (var i=0; i < 25; i++ ) {
                if( (i=== 11) || (i === 15) || (i ===24)) { continue; }
                if (document.querySelector('.week').innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< (weeks[i]).length; j+=2) {
                        weeks[i][j].ptsAgainst.push(Number(document.querySelector('.sc' + (j+2)).value));
                    }
                    for (var k = 1; k < (weeks[i]).length; k+=2) {
                        weeks[i][k].ptsAgainst.push(Number(document.querySelector('.sc' + (k)).value));
                    }
                    break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 12') {
                    for (var j =0; j< (weeks[11]).length; j+=2) {
                        weeks[11][j].ptsAgainst.push(Number(document.querySelector('.sc' + (j+2)).value));
                    }
                    for (var k = 1; k < (weeks[11]).length; k+=2) {
                        weeks[11][k].ptsAgainst.push(Number(document.querySelector('.sc' + (k)).value));
                    }
                    teams[0].ptsAgainst.push(Number(0));
                    teams[13].ptsAgainst.push(Number(0));
                    teams[7].ptsAgainst.push(Number(0));
                    teams[14].ptsAgainst.push(Number(0));
                    teams[3].ptsAgainst.push(Number(0));
                    teams[6].ptsAgainst.push(Number(0));
                    teams[15].ptsAgainst.push(Number(0));
                    teams[8].ptsAgainst.push(Number(0));
                    break;
                }
                
                else if (document.querySelector('.week').innerHTML === 'Week 16') {
                    for (var j =0; j< (weeks[15]).length; j+=2) {
                        weeks[15][j].ptsAgainst.push(Number(document.querySelector('.sc' + (j+2)).value));
                    }
                    for (var k = 1; k < (weeks[15]).length; k+=2) {
                        weeks[15][k].ptsAgainst.push(Number(document.querySelector('.sc' + (k)).value));
                    }
                    teams[2].ptsAgainst.push(Number(0));
                    teams[9].ptsAgainst.push(Number(0));
                    teams[10].ptsAgainst.push(Number(0));
                    teams[11].ptsAgainst.push(Number(0));
                    teams[12].ptsAgainst.push(Number(0));
                    teams[1].ptsAgainst.push(Number(0));
                    teams[5].ptsAgainst.push(Number(0));
                    teams[4].ptsAgainst.push(Number(0));
                    break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 25') {
                    for (var j =0; j< (weeks[24]).length; j+=2) {
                        weeks[24][j].ptsAgainst.push(Number(document.querySelector('.sc' + (j+2)).value));
                    }
                    for (var k = 1; k < (weeks[24]).length; k+=2) {
                        weeks[24][k].ptsAgainst.push(Number(document.querySelector('.sc' + (k)).value));
                    }
                    break;
                }
                // else if (document.querySelector('.week').innerHTML === 'Finals Week 1') {
                //     weeks[25][0].ptsAgainst.push(Number(document.querySelector('.sc2').value));
                //     weeks[25][3].ptsAgainst.push(Number(document.querySelector('.sc1').value));
                //     weeks[25][1].ptsAgainst.push(Number(document.querySelector('.sc4').value));
                //     weeks[25][2].ptsAgainst.push(Number(document.querySelector('.sc3').value));
                //     weeks[25][4].ptsAgainst.push(Number(document.querySelector('.sc6').value));
                //     weeks[25][7].ptsAgainst.push(Number(document.querySelector('.sc5').value));
                //     weeks[25][5].ptsAgainst.push(Number(document.querySelector('.sc8').value));
                //     weeks[25][6].ptsAgainst.push(Number(document.querySelector('.sc7').value));
                // }
            }
        },

        getDiff: function() {
            for (var i = 0; i < 24; i++) {
                if ((i === 11) || (i===15) || (i===24)) { continue; }
                if (document.querySelector('.week').innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< (weeks[i]).length; j++) {
                        weeks[i][j].diff.push(Number(weeks[i][j].ptsScored[i] - weeks[i][j].ptsAgainst[i]));
                    }
                    break;
                }
                if (document.querySelector('.week').innerHTML === 'Week 12') {
                    for (var j =0; j< (weeks[11]).length; j++) {
                        weeks[11][j].diff.push(Number(weeks[11][j].ptsScored[11] - weeks[11][j].ptsAgainst[11]));
                    }
                    teams[0].diff.push(Number(0));
                    teams[0].draw.push(Number(0));
                    teams[0].win.push(Number(0));
                    teams[0].loss.push(Number(0));
                    teams[0].played.push(Number(0));
                    teams[0].bye.push(Number(1));
                    teams[0].pts.push(Number(2));
                    teams[13].diff.push(Number(0));
                    teams[13].win.push(Number(0));
                    teams[13].draw.push(Number(0));
                    teams[13].loss.push(Number(0));
                    teams[13].played.push(Number(0));
                    teams[13].bye.push(Number(1));
                    teams[13].pts.push(Number(2));
                    teams[7].diff.push(Number(0));
                    teams[7].win.push(Number(0));
                    teams[7].draw.push(Number(0));
                    teams[7].loss.push(Number(0));
                    teams[7].played.push(Number(0));
                    teams[7].bye.push(Number(1));
                    teams[7].pts.push(Number(2));
                    teams[14].diff.push(Number(0));
                    teams[14].win.push(Number(0));
                    teams[14].draw.push(Number(0));
                    teams[14].loss.push(Number(0));
                    teams[14].played.push(Number(0));
                    teams[14].bye.push(Number(1));
                    teams[14].pts.push(Number(2));
                    teams[3].diff.push(Number(0));
                    teams[3].win.push(Number(0));
                    teams[3].draw.push(Number(0));
                    teams[3].loss.push(Number(0));
                    teams[3].played.push(Number(0));
                    teams[3].bye.push(Number(1));
                    teams[3].pts.push(Number(2));
                    teams[6].diff.push(Number(0));
                    teams[6].win.push(Number(0));
                    teams[6].draw.push(Number(0));
                    teams[6].loss.push(Number(0));
                    teams[6].played.push(Number(0));
                    teams[6].bye.push(Number(1));
                    teams[6].pts.push(Number(2));
                    teams[15].diff.push(Number(0));
                    teams[15].win.push(Number(0));
                    teams[15].draw.push(Number(0));
                    teams[15].loss.push(Number(0));
                    teams[15].played.push(Number(0));
                    teams[15].bye.push(Number(1));
                    teams[15].pts.push(Number(2));
                    teams[8].diff.push(Number(0));
                    teams[8].win.push(Number(0));
                    teams[8].draw.push(Number(0));
                    teams[8].loss.push(Number(0));
                    teams[8].played.push(Number(0));
                    teams[8].bye.push(Number(1));
                    teams[8].pts.push(Number(2));
                    break;
                }
                if (document.querySelector('.week').innerHTML === 'Week 16') {
                    for (var j =0; j< (weeks[15]).length; j++) {
                        weeks[15][j].diff.push(Number(weeks[15][j].ptsScored[15] - weeks[15][j].ptsAgainst[15]));
                    }
                    teams[2].diff.push(Number(0));
                    teams[2].win.push(Number(0));
                    teams[2].draw.push(Number(0));
                    teams[2].loss.push(Number(0));
                    teams[2].played.push(Number(0));
                    teams[2].bye.push(Number(1));
                    teams[2].pts.push(Number(2));
                    teams[9].diff.push(Number(0));
                    teams[9].win.push(Number(0));
                    teams[9].draw.push(Number(0));
                    teams[9].loss.push(Number(0));
                    teams[9].played.push(Number(0));
                    teams[9].bye.push(Number(1));
                    teams[9].pts.push(Number(2));
                    teams[10].diff.push(Number(0));
                    teams[10].win.push(Number(0));
                    teams[10].draw.push(Number(0));
                    teams[10].loss.push(Number(0));
                    teams[10].played.push(Number(0));
                    teams[10].bye.push(Number(1));
                    teams[10].pts.push(Number(2));
                    teams[11].diff.push(Number(0));
                    teams[11].win.push(Number(0));
                    teams[11].draw.push(Number(0));
                    teams[11].loss.push(Number(0));
                    teams[11].played.push(Number(0));
                    teams[11].bye.push(Number(1));
                    teams[11].pts.push(Number(2));
                    teams[12].diff.push(Number(0));
                    teams[12].win.push(Number(0));
                    teams[12].draw.push(Number(0));
                    teams[12].loss.push(Number(0));
                    teams[12].played.push(Number(0));
                    teams[12].bye.push(Number(1));
                    teams[12].pts.push(Number(2));
                    teams[1].diff.push(Number(0));
                    teams[1].win.push(Number(0));
                    teams[1].draw.push(Number(0));
                    teams[1].loss.push(Number(0));
                    teams[1].played.push(Number(0));
                    teams[1].bye.push(Number(1));
                    teams[1].pts.push(Number(2));
                    teams[5].diff.push(Number(0));
                    teams[5].win.push(Number(0));
                    teams[5].draw.push(Number(0));
                    teams[5].loss.push(Number(0));
                    teams[5].played.push(Number(0));
                    teams[5].bye.push(Number(1));
                    teams[5].pts.push(Number(2));
                    teams[4].diff.push(Number(0));
                    teams[4].win.push(Number(0));
                    teams[4].draw.push(Number(0));
                    teams[4].loss.push(Number(0));
                    teams[4].played.push(Number(0));
                    teams[4].bye.push(Number(1));
                    teams[4].pts.push(Number(2));
                    break;
                }
                else if (document.querySelector('.week').innerHTML === 'Week 25') {
                    for (var j =0; j< (weeks[24]).length; j++) {
                        weeks[24][j].diff.push(Number(weeks[24][j].ptsScored[24] - weeks[24][j].ptsAgainst[24]));
                    }
                    break;
                }
                // else if (document.querySelector('.week').innerHTML === 'Finals Week 1') {
                //     for (var j =0; j< (weeks[25]).length; j++) {
                //         weeks[25][j].diff.push(Number(weeks[25][j].ptsScored[25] - weeks[25][j].ptsAgainst[25]));
                //     }
                //     break;
                // }
            }
        },

        nextMatchUI: function() {
            for (var i = 0; i < 24 ; i++) {
                if( (i=== 10) || (i === 14)) { continue; }
                if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week ' + (i+1)) {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week ' + (i+2);
                    for (var j =0; j< (weeks[i]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[i+1][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 11') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 12';
                    for (var j =0; j< (weeks[11]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[11][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    };
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.teamStr + k ).innerHTML = 'BYE';
                        document.querySelector(DOMstrings.scoreStr + k).value = '';
                        document.querySelector(DOMstrings.scoreStr + k).disabled = true;
                    }
                    break;   
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 12') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 13';
                    for (var j =0; j< (weeks[12]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[12][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    }
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.scoreStr + k).disabled = false;
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 15') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 16';
                    for (var j =0; j< (weeks[15]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[15][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    };
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.teamStr + k ).innerHTML = 'BYE';
                        document.querySelector(DOMstrings.scoreStr + k).value = '';
                        document.querySelector(DOMstrings.scoreStr + k).disabled = true;
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 16') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 17';
                    for (var j =0; j< (weeks[16]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[16][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    }
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.scoreStr + k).disabled = false;
                    }
                    break;
                }
                // else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 25') {
                //     document.querySelector(DOMstrings.weekStr).innerHTML = 'Finals Week 1';
                //     logicController.finalsCalc();
                //     document.querySelector(DOMstrings.teamStr + 1).innerHTML = finals1[0].name;
                //     document.querySelector(DOMstrings.teamStr + 2).innerHTML = finals1[3].name;
                //     document.querySelector(DOMstrings.teamStr + 3).innerHTML = finals1[1].name;
                //     document.querySelector(DOMstrings.teamStr + 4).innerHTML = finals1[2].name;
                //     document.querySelector(DOMstrings.teamStr + 5).innerHTML = finals1[4].name;
                //     document.querySelector(DOMstrings.teamStr + 6).innerHTML = finals1[7].name;
                //     document.querySelector(DOMstrings.teamStr + 7).innerHTML = finals1[5].name;
                //     document.querySelector(DOMstrings.teamStr + 8).innerHTML = finals1[6].name;
                //     for (var j =0; j <7; j++) {
                //         document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                //     }
                //     for (var k=9; k <17; k++) {
                //         document.querySelector(DOMstrings.teamStr + k ).innerHTML = 'ElIMINATED';
                //         document.querySelector(DOMstrings.scoreStr + k).value = '';
                //         document.querySelector(DOMstrings.scoreStr + k).disabled = true;
                //     }
                //     break;
                // }
                // else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Finals Week 1') {
                //     logicController.finalsCalc();
                // }
            }
            

        },

        prevMatchUI: function() {
            for (var i = 0; i < weeks.length; i++) {
                if ((i === 0) || (i === 11) || (i === 15)) { continue;}
                if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 2') {
                    controller.init();
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week ' + (i+2)) {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week ' + (i+1);
                    for (var j =0; j< (weeks[i]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[i][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 13') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 12';
                    for (var j =0; j< (weeks[11]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[11][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    };
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.teamStr + k ).innerHTML = 'BYE';
                        document.querySelector(DOMstrings.scoreStr + k).disabled = true;
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 12') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 11';
                    for (var j =0; j< (weeks[10]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[10][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    }
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.scoreStr + k).disabled = false;
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 17') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 16';
                    for (var j =0; j< (weeks[15]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[15][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    };
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.teamStr + k ).innerHTML = 'BYE';
                        document.querySelector(DOMstrings.scoreStr + k).disabled = true;
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 16') {
                    document.querySelector(DOMstrings.weekStr).innerHTML = 'Week 15';
                    for (var j =0; j< (weeks[14]).length; j++) {
                        document.querySelector(DOMstrings.teamStr + (j + 1)).innerHTML = weeks[14][j].name;
                        document.querySelector(DOMstrings.scoreStr +(j+1)).value = '';
                    }
                    for (var k=9; k <17; k++) {
                        document.querySelector(DOMstrings.scoreStr + k).disabled = false;
                    }
                    break;
                }
            }
        },

        prevWeekUndo: function() {
            for (var i = 0; i < weeks.length -2; i++) {
                if ((i===11) || (i === 15)) { continue;}
                if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week ' + (i+2)) {
                    for (var j =0; j< (weeks[i]).length; j++) {
                        weeks[i][j].played.pop();
                        weeks[i][j].win.pop();
                        weeks[i][j].draw.pop();
                        weeks[i][j].loss.pop();
                        weeks[i][j].ptsScored.pop();
                        weeks[i][j].ptsAgainst.pop();
                        weeks[i][j].diff.pop();
                        weeks[i][j].pts.pop();
                        weeks[i][j].bye.pop();
                    }
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 13') {
                    for (var j =0; j< (weeks[11]).length; j++) {
                        weeks[11][j].played.pop();
                        weeks[11][j].win.pop();
                        weeks[11][j].draw.pop();
                        weeks[11][j].loss.pop();
                        weeks[11][j].ptsScored.pop();
                        weeks[11][j].ptsAgainst.pop();
                        weeks[11][j].diff.pop();
                        weeks[11][j].pts.pop();
                        weeks[11][j].bye.pop();
                    }
                    teams[0].played.pop();
                    teams[0].win.pop();
                    teams[0].draw.pop();
                    teams[0].loss.pop();
                    teams[0].ptsScored.pop();
                    teams[0].ptsAgainst.pop();
                    teams[0].diff.pop();
                    teams[0].pts.pop();
                    teams[0].bye.pop();
                    teams[13].played.pop();
                    teams[13].win.pop();
                    teams[13].draw.pop();
                    teams[13].loss.pop();
                    teams[13].ptsScored.pop();
                    teams[13].ptsAgainst.pop();
                    teams[13].diff.pop();
                    teams[13].pts.pop();
                    teams[13].bye.pop();
                    teams[7].played.pop();
                    teams[7].win.pop();
                    teams[7].draw.pop();
                    teams[7].loss.pop();
                    teams[7].ptsScored.pop();
                    teams[7].ptsAgainst.pop();
                    teams[7].diff.pop();
                    teams[7].pts.pop();
                    teams[7].bye.pop();
                    teams[14].played.pop();
                    teams[14].win.pop();
                    teams[14].draw.pop();
                    teams[14].loss.pop();
                    teams[14].ptsScored.pop();
                    teams[14].ptsAgainst.pop();
                    teams[14].diff.pop();
                    teams[14].pts.pop();
                    teams[14].bye.pop();
                    teams[3].played.pop();
                    teams[3].win.pop();
                    teams[3].draw.pop();
                    teams[3].loss.pop();
                    teams[3].ptsScored.pop();
                    teams[3].ptsAgainst.pop();
                    teams[3].diff.pop();
                    teams[3].pts.pop();
                    teams[3].bye.pop();
                    teams[6].played.pop();
                    teams[6].win.pop();
                    teams[6].draw.pop();
                    teams[6].loss.pop();
                    teams[6].ptsScored.pop();
                    teams[6].ptsAgainst.pop();
                    teams[6].diff.pop();
                    teams[6].pts.pop();
                    teams[6].bye.pop();
                    teams[15].played.pop();
                    teams[15].win.pop();
                    teams[15].draw.pop();
                    teams[15].loss.pop();
                    teams[15].ptsScored.pop();
                    teams[15].ptsAgainst.pop();
                    teams[15].diff.pop();
                    teams[15].pts.pop();
                    teams[15].bye.pop();
                    teams[8].played.pop();
                    teams[8].win.pop();
                    teams[8].draw.pop();
                    teams[8].loss.pop();
                    teams[8].ptsScored.pop();
                    teams[8].ptsAgainst.pop();
                    teams[8].diff.pop();
                    teams[8].pts.pop();
                    teams[8].bye.pop();
                    break;
                }
                else if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week 17') {
                    for (var j =0; j< (weeks[15]).length; j++) {
                        weeks[15][j].played.pop();
                        weeks[15][j].win.pop();
                        weeks[15][j].draw.pop();
                        weeks[15][j].loss.pop();
                        weeks[15][j].ptsScored.pop();
                        weeks[15][j].ptsAgainst.pop();
                        weeks[15][j].diff.pop();
                        weeks[15][j].pts.pop();
                        weeks[15][j].bye.pop();
                    }
                    teams[2].played.pop();
                    teams[2].win.pop();
                    teams[2].draw.pop();
                    teams[2].loss.pop();
                    teams[2].ptsScored.pop();
                    teams[2].ptsAgainst.pop();
                    teams[2].diff.pop();
                    teams[2].pts.pop();
                    teams[2].bye.pop();
                    teams[9].played.pop();
                    teams[9].win.pop();
                    teams[9].draw.pop();
                    teams[9].loss.pop();
                    teams[9].ptsScored.pop();
                    teams[9].ptsAgainst.pop();
                    teams[9].diff.pop();
                    teams[9].pts.pop();
                    teams[9].bye.pop();
                    teams[10].played.pop();
                    teams[10].win.pop();
                    teams[10].draw.pop();
                    teams[10].loss.pop();
                    teams[10].ptsScored.pop();
                    teams[10].ptsAgainst.pop();
                    teams[10].diff.pop();
                    teams[10].pts.pop();
                    teams[10].bye.pop();
                    teams[11].played.pop();
                    teams[11].win.pop();
                    teams[11].draw.pop();
                    teams[11].loss.pop();
                    teams[11].ptsScored.pop();
                    teams[11].ptsAgainst.pop();
                    teams[11].diff.pop();
                    teams[11].pts.pop();
                    teams[11].bye.pop();
                    teams[1].played.pop();
                    teams[1].win.pop();
                    teams[1].draw.pop();
                    teams[1].loss.pop();
                    teams[1].ptsScored.pop();
                    teams[1].ptsAgainst.pop();
                    teams[1].diff.pop();
                    teams[1].pts.pop();
                    teams[1].bye.pop();
                    teams[12].played.pop();
                    teams[12].win.pop();
                    teams[12].draw.pop();
                    teams[12].loss.pop();
                    teams[12].ptsScored.pop();
                    teams[12].ptsAgainst.pop();
                    teams[12].diff.pop();
                    teams[12].pts.pop();
                    teams[12].bye.pop();
                    teams[5].played.pop();
                    teams[5].win.pop();
                    teams[5].draw.pop();
                    teams[5].loss.pop();
                    teams[5].ptsScored.pop();
                    teams[5].ptsAgainst.pop();
                    teams[5].diff.pop();
                    teams[5].pts.pop();
                    teams[5].bye.pop();
                    teams[4].played.pop();
                    teams[4].win.pop();
                    teams[4].draw.pop();
                    teams[4].loss.pop();
                    teams[4].ptsScored.pop();
                    teams[4].ptsAgainst.pop();
                    teams[4].diff.pop();
                    teams[4].pts.pop();
                    teams[4].bye.pop();
                    break;
                }
            }
        },

        updateTable: function() {
            for (var i = 0; i < 25; i++) {
                if (document.querySelector(DOMstrings.weekStr).innerHTML === 'Week ' + (i+1)) {
                    for (var j =0; j< 16; j++) {
                        document.querySelector(DOMstrings.ladStr + (j + 1)).innerHTML = weeks[0][j].name;
                        document.querySelector(DOMstrings.plaStr + (j + 1)).innerHTML = weeks[0][j].playedN;
                        document.querySelector(DOMstrings.winStr + (j + 1)).innerHTML = weeks[0][j].winN;
                        document.querySelector(DOMstrings.draStr + (j + 1)).innerHTML = weeks[0][j].drawN;
                        document.querySelector(DOMstrings.losStr + (j + 1)).innerHTML = weeks[0][j].lossN;
                        document.querySelector(DOMstrings.byeStr + (j + 1)).innerHTML = weeks[0][j].byeN;
                        document.querySelector(DOMstrings.forStr + (j + 1)).innerHTML = weeks[0][j].ptsScoredN;
                        document.querySelector(DOMstrings.agaStr + (j + 1)).innerHTML = weeks[0][j].ptsAgainstN;
                        document.querySelector(DOMstrings.difStr + (j + 1)).innerHTML = weeks[0][j].diffN;
                        document.querySelector(DOMstrings.ptsStr + (j + 1)).innerHTML = weeks[0][j].ptsN;
                    };
                    break;
                }
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
})();









// Global
controller = (function(logicCtrl, UICtrl) {
    DOM = UIController.getDOMstrings();
    var setupEventListeners = function() {
        //change week on click
        document.querySelector(DOM.nextStr).addEventListener('click',nextWeek);
        document.querySelector(DOM.prevStr).addEventListener('click',prevWeek);
    };

    var nextWeek = function() {
        UIController.getByeFor();
        UIController.getByeAgainst();
        UIController.getDiff();
        UIController.getWins();
        logicController.getsN();
        logicController.sorter();
        UIController.updateTable();
        UIController.nextMatchUI();
    };

    var prevWeek = function() {
        // Undo scores of current week
        UIController.prevWeekUndo();
        // do logic for ranking 
        logicController.getsN();
        logicController.sorter();
        //update matchup UI
        UIController.prevMatchUI();
        // update table UI
        UIController.updateTable();
    };


    return {
        init: function() {
            document.querySelector('.week').innerHTML = 'Week 1';
            for (var i =0; i< week1.length; i++) {
            document.querySelector('.team' + (i + 1)).innerHTML = week1[i].name;
            }
            for (var i =0; i< teams.length; i++) {
                document.querySelector(DOM.ladStr + (i+1)).innerHTML = teams[i].name;
            }
        setupEventListeners()
        }
    }
})(logicController, UIController);

controller.init();





