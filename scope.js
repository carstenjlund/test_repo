
let bla = function () {
    var myGlobal = "a global variable"


    function withScope() {
        let withinScope = "this is a scoped variable"

        console.log(withinScope);
        console.log(myGlobal);


    }



    if ("2" == 2) {
        let blockScope = "2 is a number"
        //console.log(isHorseANumber)
        console.log(myGlobal);
    } else {
        let isHorseANumber = "Horse is not a number"
        console.log(blockScope)
    }

    return {
        fnyf: myGlobal,
        bar: withScope
    }

}();
