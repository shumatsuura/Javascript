let x=110,y=110,z=57;
console.log(x);
console.log(y);
console.log(z);


function get_achievement(x,y,z){
  let sum = x + y + z;

  switch(true){
    case sum>=250:
      return "A";
      break;

    case sum>=200:
      return "B";
      break;

    case sum>=100:
      return "C";
      break;

    default:
      return "D";
  }
}

console.log(get_achievement(x,y,z));

function get_pass_or_failure(x,y,z){
  if (x>=60 && y>=60 && z>=60){
    return "合格";
  } else {
    return "不合格";
  }
}

function judgement(x,y,z){
  let score = get_achievement(x,y,z);
  let result = get_pass_or_failure(x,y,z);

  console.log(`あなたの成績は${score}です。${result}です!`);
}

judgement(x,y,z);
