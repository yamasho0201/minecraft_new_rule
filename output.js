
document.write("<script type='text/javascript' src='variable.js'></script>");

var flag = true;

function jump(){
  window.location.reload();
}

function randomIndex(n){
    var i, j, tmp, a = new Array(n);
    a[0] = 0;
    for(i = n - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i+1));
        tmp = a[i] || i;
        a[i] = a[j] || j;
        a[j] = tmp;
    };
    return a;
}

function makeTable(data, tableId){
    // 表の作成開始
    var rows=[];
    var table = document.createElement("table");

    // 表に2次元配列の要素を格納
    for(i = 0; i < data.length; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell=rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));
            // 背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#bbb"; // ヘッダ行
            }else{
                cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
            }
        }
    }
    // 指定したdiv要素に表を加える
    document.getElementById(tableId).appendChild(table);
}

function makeTableImg(data, tableId){
    // 表の作成開始
    var rows=[];
    var table = document.createElement("table");
    var n_choice = n_c.n_choice.value;

    // 表に2次元配列の要素を格納
    for(i = 0; i <= n_choice; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell=rows[i].insertCell(-1);
            if(i > 0 && j==1){
              var img = document.createElement("img");
              img.src = data[i][j];
              img.alt = "";
              img.name = "myFormImg";
              img.width = 35;
              img.height = 35;
              cell.appendChild(img)
            }else{
              cell.appendChild(document.createTextNode(data[i][j]));
            }
            // 背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#bbb"; // ヘッダ行
            }else{
                cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
            }
        }
    }
    // 指定したdiv要素に表を加える
    document.getElementById(tableId).appendChild(table);
}


function clearTbody(){
    var tbodies = document.getElementsByTagName("tbody");
    for (var i = 0; i < tbodies.length; i++) {
        while (tbodies[i].rows.length > 0) {
            tbodies[i].deleteRow(0);
        }
    }
}


function tablemake(){
  //丸石 3
  //原木 11,299-303
  //鉄鉱石 9
  var logs = [11, 299, 300, 301, 302, 303]

  ID = randomIndex(item_id.length)

  log_ID = randomIndex(logs.length)

  var n_dif = document.difficulty.level.selectedIndex;
  var dif = document.difficulty.level.options[n_dif].value;

  if(dif == 'v_easy'){
    ID[0] = logs[log_ID[0]];
    ID[1] = 3;
    ID[2] = 9;
  }else if (dif == 'easy') {
    ID[0] = logs[log_ID[0]];
    ID[1] = 3;
  }else if (dif == 'normal') {
    ID[0] = logs[log_ID[0]];
  }

  var data = [["","アイコン","アイテム名","ID(一例)","備考"],
  [1, item_icon[ID[0]], item_name[ID[0]],item_id[ID[0]],bikou[ID[0]]],
  [2, item_icon[ID[1]], item_name[ID[1]],item_id[ID[1]],bikou[ID[1]]],
  [3, item_icon[ID[2]], item_name[ID[2]],item_id[ID[2]],bikou[ID[2]]],
  [4, item_icon[ID[3]], item_name[ID[3]],item_id[ID[3]],bikou[ID[3]]],
  [5, item_icon[ID[4]], item_name[ID[4]],item_id[ID[4]],bikou[ID[4]]],
  [6, item_icon[ID[5]], item_name[ID[5]],item_id[ID[5]],bikou[ID[5]]],
  [7, item_icon[ID[6]], item_name[ID[6]],item_id[ID[6]],bikou[ID[6]]],
  [8, item_icon[ID[7]], item_name[ID[7]],item_id[ID[7]],bikou[ID[7]]],
  [9, item_icon[ID[8]], item_name[ID[8]],item_id[ID[8]],bikou[ID[8]]],
  [10, item_icon[ID[9]], item_name[ID[9]],item_id[ID[9]],bikou[ID[9]]],
  [11, item_icon[ID[10]], item_name[ID[10]],item_id[ID[10]],bikou[ID[10]]],
  [12, item_icon[ID[11]], item_name[ID[11]],item_id[ID[11]],bikou[ID[11]]],
  [13, item_icon[ID[12]], item_name[ID[12]],item_id[ID[12]],bikou[ID[12]]],
  [14, item_icon[ID[13]], item_name[ID[13]],item_id[ID[13]],bikou[ID[13]]],
  [15, item_icon[ID[14]], item_name[ID[14]],item_id[ID[14]],bikou[ID[14]]],
  [16, item_icon[ID[15]], item_name[ID[15]],item_id[ID[15]],bikou[ID[15]]],
  [17, item_icon[ID[16]], item_name[ID[16]],item_id[ID[16]],bikou[ID[16]]],
  [18, item_icon[ID[17]], item_name[ID[17]],item_id[ID[17]],bikou[ID[17]]],
  [19, item_icon[ID[18]], item_name[ID[18]],item_id[ID[18]],bikou[ID[18]]],
  [20, item_icon[ID[19]], item_name[ID[19]],item_id[ID[19]],bikou[ID[19]]],
  [21, item_icon[ID[20]], item_name[ID[20]],item_id[ID[20]],bikou[ID[20]]],
  [22, item_icon[ID[21]], item_name[ID[21]],item_id[ID[21]],bikou[ID[21]]],
  [23, item_icon[ID[22]], item_name[ID[22]],item_id[ID[22]],bikou[ID[22]]],
  [24, item_icon[ID[23]], item_name[ID[23]],item_id[ID[23]],bikou[ID[23]]],
  [25, item_icon[ID[24]], item_name[ID[24]],item_id[ID[24]],bikou[ID[24]]],
  [26, item_icon[ID[25]], item_name[ID[25]],item_id[ID[25]],bikou[ID[25]]],
  [27, item_icon[ID[26]], item_name[ID[26]],item_id[ID[26]],bikou[ID[26]]],
  [28, item_icon[ID[27]], item_name[ID[27]],item_id[ID[27]],bikou[ID[27]]],
  [29, item_icon[ID[28]], item_name[ID[28]],item_id[ID[28]],bikou[ID[28]]],
  [30, item_icon[ID[29]], item_name[ID[29]],item_id[ID[29]],bikou[ID[29]]]];
  //if(flag){
  clearTbody();
  makeTableImg(data, "table");
  //}
  flag = false;
}
