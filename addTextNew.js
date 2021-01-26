        require(['jquery', 'jquery/ui'], function ($) {
            let addText = $("tr:nth-child(2)").find("td.data");
            $(document).ready(function () {
                console.log(addText);
                addText.text("China, Quality Control in the United States of America");
            })
        })
