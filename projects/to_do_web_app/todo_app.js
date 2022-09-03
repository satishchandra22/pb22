let cc=0;//card counter
function add_card(){
    cc++;
    const name=document.getElementsByClassName('t1c2')[0].value;
    const e1=document.getElementsByClassName('s2')
    let e2=document.createElement('div');
    e2.className='s2c';
    e2.id='div'+cc;
    e2.innerHTML=`  
    <div class="add2"><div class="s2c1g1">${name}</div></div>
    <div class="s2d2" id=${'card'+cc}>
        <div class="add_del">
            <div class="add_item_div">
                <button class="add_item" id=${'a'+cc} onclick="plus_item()"></button>
            </div>
            <div class="del_div">
                <button class="del" id=${'d'+cc} onclick="del_card()"></button>
            </div>
        </div>
    </div>`
    e1[0].appendChild(e2);
    let e3=document.getElementsByClassName('t');
    e3[0].style.filter='blur(0px)';
    let e4=document.getElementsByClassName('t1');
    e4[0].style.display='none';
}
let s;
function plus_item(){
    let e3=document.getElementsByClassName('t');
    e3[0].style.filter='blur(6px)';
    let e4=document.getElementsByClassName('t1');
    e4[1].style.display='block';
    s=event.target.id;
}
let ic=0;// item counter
function add_Item(){
    ic++;
    const name=document.getElementsByClassName('t1c2')[1].value;
    const card=document.getElementById('card'+s.slice(1))
    const item=document.createElement('div');
    item.className='task_div'
    item.innerHTML=`<div class="task">
    <span class="s2c1g3" id=${'n'+ic}>${name}</span>
</div>
<div class="done_b">
    <button class="done" id=${'s'+ic} onclick="done()">Done</button>
</div>`
card.appendChild(item);

let e3=document.getElementsByClassName('t');
e3[0].style.filter='blur(0px)';
let e4=document.getElementsByClassName('t1');
e4[1].style.display='none';

}

function done(){
    const te=event.target.id;
    let be=document.getElementById(te);
    let delItem=document.getElementById('n'+te.slice(1));
    be.style.display='none';
    delItem.className='s2c1g2';
}

function del_card(){
    const de=event.target.id;
    let re=document.getElementById('div'+de.slice(1));
    re.style.display='none';
}

function plus(){
    let e3=document.getElementsByClassName('t');
    e3[0].style.filter='blur(6px)';
    let e4=document.getElementsByClassName('t1');
    e4[0].style.display='block';
}


