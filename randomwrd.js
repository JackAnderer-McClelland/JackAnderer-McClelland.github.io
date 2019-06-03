let rWordlIST = ['eat', 'going', 'post', 'grin', 'food', 'turkey', 'cat', 'alert', 'concerned', 'nostalgic', 'rot', 'quick', 'amused', 'resolute', 'deceive', 'moon', 'chew', 'zebra','😯']

let button, input, iButton;

function setup() {
    createCanvas(400, 400);

    button = createButton('Click here!');
    button.position(5, 55)
    button.mousePressed(play)

    input = createInput();
    input.position(5, 425);

    iButton = createButton('Enter');
    iButton.position(input.x + input.width + 5, 425)
    iButton.mousePressed(added)

    play();
}


function play() {
    for(let i = 0; i < 1;i++) {
        let rWord = random(rWordlIST);

        background(220);

        fill(random(255), random(255), random(255));
        textSize(50);
        text(rWord, 100, 200);

        fill(0);
        textSize(20);
        text('Add words to list here!', 5, 365)


    }
}
function added() {
    const word = input.value();
    input.value('')

    rWordlIST.push(word);

}

