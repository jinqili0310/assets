$(function () {
            let addText = $("tr.even").eq(0).find("td.data");
            $(document).ready(function () {
                console.log($("tr.even").eq(0).get());
                console.log(addText);
                addText.text("China, Quality Control in the United States of America");
            })
})
