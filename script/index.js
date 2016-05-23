jQuery(function($) {

    $('#issue-group-creator').click(function() {
        var rawString = $('#issue-group').val();

        $('#issue-output').text(issueConcat(rawString));
    });

    $('#label-group-creator').click(function() {
        var rawString = $('#label-group').val();

        $('#label-output').text(labelConcat(rawString));
    });

    function issueConcat(str) {
        var strArray = str.split(/, \s*/g);
        var output = '';

        for (var i = 0 ; i < strArray.length ; i++) {
            if (i == strArray.length-1) {
                output += strArray[i];
            } else {
                output += strArray[i] + ' OR ';
            }
        }

        return output;
    }

    function labelConcat(str) {
        var strArray = str.split(/, \s*/g);
        var output = '';

        for (var i = 0 ; i < strArray.length ; i++) {
            output += 'label:' + strArray[i] + ' ';
        }

        return output;
    }

});
