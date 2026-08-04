import React, { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "早餐少吃",
    detail: "面包+两片肉 或 30g燕麦+两个鸡蛋羹",
    xp: 10
  },
  {
    id: 2,
    title: "午餐正常吃",
    detail: "八分饱",
    xp: 10
  },
  {
    id: 3,
    title: "晚上少吃",
    detail: "不吃主食，一碗摄入量",
    xp: 10
  },
  {
    id: 4,
    title: "洗头",
    xp: 5
  },
  {
    id: 5,
    title: "该吃药吃药",
    xp: 5
  },
  {
    id: 6,
    title: "喝一/两杯水",
    xp: 5
  },
  {
    id: 7,
    title: "清洁马桶",
    xp: 5
  },
  {
    id: 8,
    title: "吸地",
    xp: 5
  }
];


export default function App(){

const [done,setDone]=useState([]);

const [xp,setXp]=useState(0);


function complete(task){

if(done.includes(task.id)) return;

setDone([
...done,
task.id
]);

setXp(
xp+task.xp
);

}


return (

<div
style={{
padding:"30px",
fontFamily:"Arial",
background:"#f5f7fb",
minHeight:"100vh"
}}
>


<h1>
🌌 DreamGrowth
</h1>


<h2>
🌱 成长等级
</h2>


<p>
经验值：{xp} XP
</p>


<div
style={{
fontSize:"70px",
textAlign:"center"
}}
>
{
xp<100
?"🌱"
:
xp<500
?"🌿"
:
"🌳"
}
</div>


<h2>
今日任务
</h2>


{
tasks.map(task=>(

<div
key={task.id}
style={{
background:"white",
padding:"15px",
margin:"10px 0",
borderRadius:"15px"
}}
>


<h3>
{
done.includes(task.id)
?
"✅"
:
"⭕"
}

{task.title}

</h3>


<p>
{task.detail}
</p>


<button

disabled={
done.includes(task.id)
}

onClick={()=>
complete(task)
}

>

{
done.includes(task.id)
?
"已完成"
:
`完成 +${task.xp} XP`
}

</button>


</div>

))

}


</div>

)

}
