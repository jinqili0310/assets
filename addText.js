$j(function () {
            let addText = $j("tr.even").eq(0).find("td.data");
            $j(document).ready(function () {
                console.log($j("tr.even").eq(0).get());
                console.log(addText);
                addText.text("China, Quality Control in the United States of America");
            })
        })
