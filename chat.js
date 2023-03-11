function talk() {
    var know = {
        "A": "Your next salary is due on 1st of July ",
        "a": "Your next salary is due on 1st of July   ",
        "B": "According to your bank statement currently you can spend $3250 ",
        "b": "According to your bank statement currently you can spend $3250 ",
        "C": "Simple, just log in to our website and click on the option for pay bills",
        "c": "Simple, just log in to our website and click on the option for pay bills",
        "D": "Vouchers that are currently available are Birthday, Anniversary, Eid and New Year",
        "d": "Vouchers that are currently available are Birthday, Anniversary, Eid and New Year",
        "E": "You may visit our partners website to get exclusive deals and offers when paying with Liberty credit card   ",
        "e": "You may visit our partners website to get exclusive deals and offers when paying with Liberty credit card ",
        "Your followers":
            "I have my family of 200000 members, i don't have follower ,have supportive Famiy ",//?
        ok: "Thank You So Much ",
        Bye: "Bye, Thank you for chatting!",
        bye: "Bye, Thank you for chatting!",

    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

