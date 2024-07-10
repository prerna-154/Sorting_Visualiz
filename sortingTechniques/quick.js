/*async function partition(ele, s, e){
    console.log('In partition()');
    let i = s ;
    let pivot= ele[s+1];
    // color pivot element
    ele[s].style.background = 'red';
    for(let j = s+1; j <= e ; j++){
        console.log('In partition for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[s].style.height)){
            console.log('In partition for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[s]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[s].style.background = 'pink';
    ele[i].style.background = 'rgb(138, 19, 132)';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'rgb(138, 19, 132)')
            ele[k].style.background = 'rgb(92, 10, 88)';
    }

    return i;
}

async function quickSort(ele, s, e){
    console.log('In quickSort()', `s=${s} e=${e}`, typeof(s), typeof(e));
    if(s < e){
        let pivot_index = await partition(ele, s, e);
        await quickSort(ele, s, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, e);
    }
    else{
        if(s >= 0 && e >= 0 && s <ele.length && e <ele.length){
            ele[e].style.background = 'rgb(138, 19, 132)';
            ele[s].style.background = 'rgb(138, 19, 132)';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let s = 0;
    let e = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, s, e);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

*/
async function partition(ele, l, r){
    console.log('In partition()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partition for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partition for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'rgb(138, 19, 132)';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'rgb(138, 19, 132)')
            ele[k].style.background = 'rgb(92, 10, 88)';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'rgb(138, 19, 132)';
            ele[l].style.background = 'rgb(138, 19, 132)';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});