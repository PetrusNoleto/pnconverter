const conversorPxToRem = () => {
    let $PxToRemfontSize = document.querySelector(".conversorPxToRemGetFontSize").value;
    let $PxToRemPxvalue = document.querySelector(".conversorPxToRemGetPixels").value;
    let $getClassForResult = document.querySelector(".mainConversorResult").classList;
    let $getResultLocation = document.querySelector(".conversorPxToRemResult");
    let $getcopybuttonText = document.querySelector(".mainConversorResultValueCopy");
    const calcRem = Number($PxToRemPxvalue/$PxToRemfontSize);
    $getClassForResult.remove("hidden");
    $getcopybuttonText.classList.remove("mainConversorResultValueSuccess");
    $getcopybuttonText.textContent = "copiar";
    console.log($getResultLocation.textContent = (`${calcRem}rem`));
};
const conversorPxToRemCopyResultValue = () => {
    let $getResultContent = document.querySelector(".conversorPxToRemResult").textContent;
    let $getcopybuttonText = document.querySelector(".mainConversorResultValueCopy");
    try{
        navigator.clipboard.writeText($getResultContent);
    }catch{
        alert("não foi pessivel copiar");
    };
    $getcopybuttonText.textContent = "copiado";
    $getcopybuttonText.classList.add("mainConversorResultValueSuccess");
};