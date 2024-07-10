async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background='rgb(138, 19, 132)';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let temp= ele[i].style.height;
        ele[i].style.background = '#22ac18';
        let j = i-1 ;
        await waitforme(delay);
        for(  ; j >=0; j--){
            console.log('In jth loop');
            if(parseInt(ele[j].style.height) > parseInt(temp)){
                console.log('In if condition');
                 ele[j].style.background='#22ac18';
                ele[j+1].style.height =ele[j].style.height;
                await waitforme(delay);
            }
            else break; 
            for(let k = i; k >= 0; k--){
                console.log('in k loop')
                ele[k].style.background = 'rgb(138, 19, 132)';
            }
        }

        ele[j+1].style.height=temp;
        ele[i].style.background = 'rgb(138, 19, 132)';
    }
   
}


const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
