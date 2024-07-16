function startTypingAnimation() {
    var text = "Thodoris Kouvelas";
    var text2 = "Email: thodoriskouvelas@gmail.com | Phone: 306907195744 | Discord: Theo_k.";
    var header = document.querySelector('header h1');
    var header2 = document.querySelector('header p'); 
    var index = 0;
    var index2 = 0;

    function type() {
        if (index < text.length) {
            header.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 60);
        }
    }

    function type2(){
        if (index2 < text2.length) {
            header2.innerHTML += text2.charAt(index2);
            index2++;
            setTimeout(type2, 25);

    }
}
    type();  type2();
   
}
document.addEventListener('DOMContentLoaded', startTypingAnimation);

