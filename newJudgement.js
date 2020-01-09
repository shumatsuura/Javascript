let points=[60,100,80,80,70,50];
let number=points.length;


function get_achievement(points){
  let sum = 0;
  for(let i = 0; i < points.length; i++){
    sum = sum + points[i];
  }
  console.log(sum);

  switch(true){
    case sum >= points.length * 80:
      return "A";
      break;

    case sum >= points.length * 60:
      return "B";
      break;

    case sum >= points.length * 40:
      return "C";
      break;

    default:
      return "D";
  }
}

console.log(get_achievement(points));

function get_pass_or_failure(points){
  let judge = "合格";
  for(let i=0; i < points.length; i++){
    if(points[i] < 60){
      judge = "不合格";
      break;
    }
  }
  return judge;
}

function judgement(points){
  let score = get_achievement(points);
  let result = get_pass_or_failure(points);

  console.log(`あなたの成績は${score}です。${result}です!`);
}

judgement(points);
