let i = 10;
let j = 20;

function add(i,j){
  return i + j;
}

function result(i,j,calFunc){
  let sum = add(i,j);

  if(sum < 50){
    console.log("50より小さい");
  } else {
    console.log("50以上です");
  }
}

result(i,j,add);
