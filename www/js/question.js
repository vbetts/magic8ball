function registerSubmitHandler() {
    $("form#8Ball a#submitQuestion").click(function () {
        $("form#8Ball").find("textarea, input").each(function () {
            var id = $(this).attr("id");
            var value = $(this).val();

            $("#answer #" + id).text(value);
        });

    });
};

function getAnswer() {
    $("form#8Ball a#submitQuestion").click(function () {
        var answerList = ['It is certain',
                          'It is decidedly so',
                          'Without a doubt',
                          'Yes definitely',
                          'You may rely on it',
                          'As I see it, yes',
                          'Most likely',
                          'Outlook good',
                          'Yes',
                          'Signs point to yes',
                          'Reply hazy try again',
                          'Ask again later',
                          'Better not tell you now',
                          'Cannot predict now',
                          'Concentrate and ask again',
                          'Don\'t count on it',
                          'My reply is no',
                          'My sources say no',
                          'Outlook not so good',
                          'Very doubtful']
        var randomAns = Math.floor(Math.random()*answerList.length);
        var answer = answerList[randomAns];
        $("#answer #answerOutput").text(answer);
    });
};

function askAgain() {
    $("a#askAgain").click(function (){
        $("form#8Ball").find("textarea").each(function () {
        var id = $(this).attr("id");
            $("#8Ball #" + id).val('');
        });
    });
};