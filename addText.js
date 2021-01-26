$j(function () {
            let addText = $j(".even").eq(0).find(".data");
            $j(document).ready(function () {
                console.log(addText);
                addText.text("China, QC in the USA");
            })
})
console.log($j(".even").eq(0).get());
