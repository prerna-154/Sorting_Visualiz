async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i; j++){
            console.log('In jth loop');
            ele[j].style.background = '#22ac18';
            ele[j+1].style.background = '#22ac18';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background ='rgb(92, 10, 88)';
            ele[j+1].style.background = 'rgb(92, 10, 88)';
        }
        ele[ele.length-i].style.background = 'rgb(138, 19, 132)';
    }
    ele[0].style.background = 'rgb(138, 19, 132)';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});