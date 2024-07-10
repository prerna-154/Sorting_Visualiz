async function selection() {
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_idx=i;
        ele[i].style.background='blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            ele[j].style.background='#22ac18';
            await waitforme(delay);
            if(parseInt(ele[min_idx].style.height) > parseInt(ele[j].style.height)){
                console.log('In if condition');
                    if(min_idx!=i){
                        ele[min_idx].style.background='rgb(92, 10, 88)';
                    }
                    min_idx=j;

            }
            else{
                ele[j].style.background='rgb(92, 10, 88)';
            }
          
        }
        await waitforme(delay);
        swap(ele[min_idx],ele[i]);
        ele[min_idx].style.background = 'rgb(92, 10, 88)';
        // change the sorted elements color to green
        ele[i].style.background = 'rgb(138, 19, 132)';
    }
   
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});