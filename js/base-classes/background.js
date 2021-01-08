class Background extends LevelStructure {

    constructor(images, width, height, positionx, positiony) {
        super(images, width, height, positionx, positiony);

        $("#game").append("<img id='back" + this.id + "' class='background-img'></img>");
        $("#back" + this.id).attr('src', "image/background/" + images);
        $("#back" + this.id).css({
            "left": positionx,
            "bottom": positiony,
            "width": width,
            "height": height
        });
    }

    static backgroundsMovement() {
        $(".background-img").each((i) => {
            var position = parseInt($(".background-img")[i].style.left);
            if (position < - (window.outerWidth - 36)) {
                position = window.outerWidth;
            }

            $(".background-img")[i].style.left = position - 20 + "px";
        })
    }
}