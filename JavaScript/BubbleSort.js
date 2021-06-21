const Data = [54,78,12,2,89,25,78,29,69,35];

function main() {
  createTable();
  createBubbles();
  BubbleSort();
}

function createTable(){
  const makeTable = document.createElement('table'); 
  document.body.appendChild(makeTable);
}

function createBubbles(){
  for(let count=0; count<Data.length; count++) {
    const td = document.createElement('td');
    td.id = 'bubble'+count;
    const table = document.querySelector('table'); 
    table.appendChild(td);  
    const bubble = document.getElementById('bubble'+count);
    let wordOpacity = Number(Data[count]/100)+0.1;
    console.log(wordOpacity);
    bubble.innerText = Data[count];
    bubble.style.border ='solid';
    bubble.style.opacity = wordOpacity; 

  }
}

function BubbleSort(){
  let i = Data.length-2;
  console.log('i='+i);
  let j = 0;
  let tmp = 0;
  const next = document.addEventListener('click', ()=>{
    for(let count = 0; count<Data.length;count++){
      const bubble = document.getElementById('bubble'+count);
      bubble.innerText = Data[count];
      let wordOpacity = Number(Data[count]/100)+0.1;
      bubble.style.opacity = wordOpacity; 
    }
    if(Data[j]>Data[j+1]){
      tmp = Data[j];
      Data[j] = Data[j+1];
      Data[j+1] = tmp;
    }else{
      console.log('移動はありません。');
    }
    j++;
    if(j>i){
      j = 0;
      i--;
      console.log(Data);
    }
    if(i === 0){
      console.log('ソート終了です。');      
    }
  });
}

main();

// 使わなかったtimer機能
// JavaScriptって、並列に関数が処理されてく感じなん？
// function sleep(ms, func) {
//   setTimeout(func, ms);
// }

// function timer(settime) {
//   console.log('start');
//   for(let time=0;time<settime;time++){
//     sleep(1*1000, function() {
//       console.log(time);
//     });
//   }
// };
