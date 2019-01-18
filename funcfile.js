window.onload=multilication;
function multilication() {

        for (var row=1 ;row<=9;row++){
            for(var col=2;col<=9;col++){
                document.getElementById('mytable').rows[row-1].cells[col-2].innerHTML=col+ "*" +row+"="+col*row;
            }
        }

}