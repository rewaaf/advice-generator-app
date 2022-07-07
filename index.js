function getAdvice(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.adviceslip.com/advice', true);

    request.onload = function () {
        var data = JSON.parse(this.response);
        const title = document.getElementById('advice-title');
        title.textContent = data.slip.id;

        const body = document.getElementById('advice');
        body.textContent = data.slip.advice;
    }
    
    request.send();
}