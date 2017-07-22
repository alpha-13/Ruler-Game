function Levels(ID, images, AllImages, rects) {
    this.ID = ID;
    this.images = images;
    this.AllImages = AllImages;
    this.rects = rects;

    this.level1 = function (context) {
        var e = 0;
        for (p = 0; p < num; p++) {
            if (!this.ID[p]) {
                this.AllImages[p] = new Image();
                this.AllImages[p].src = this.images[0];
                this.rects[p] = { x: rects[0].x + e, y: rects[0].y };
                context.drawImage(AllImages[p], rects[p].x, rects[p].y);
            }
            e += 100;
        }
    }
    ///////////////////////////////////////////////////////////////

    this.level2 = function (context) {

        var e1 = 0, e2 = 0;
        var l = 0, r = 0;
        for (p = 0; p < num; p++) {
            if ((!this.ID[p])) {
                this.AllImages[p] = new Image();
                this.AllImages[p].src = this.images[1];
                if (p == 0) {
                    context.drawImage(AllImages[p], rects[0].x, rects[0].y);
                }
                else if (p <= 5) {
                    this.rects[p] = { x: rects[0].x + l, y: rects[0].y + e1 };
                    context.drawImage(AllImages[p], rects[p].x, rects[p].y);
                }

                else if (p > 5) {
                    this.rects[p] = { x: rects[0].x + r, y: rects[0].y + e2 };
                    context.drawImage(AllImages[p], rects[p].x, rects[p].y);
                }
            }
            if (p == 5) {
                r = 0;
                e2 = 0;
            }
            l -= 80;
            e1 += 30;
            r += 80;
            e2 += 30;
        }

    }
    ///////////////////////////////////////////////////////////////

    this.level3 = function (context) {
        var x = 0, y = 0, n = 0;

        for (i = 0; i < 6; i++) {
            for (j = 0; j < 11 - (2 * i); j++) {
                if ((!this.ID[n])) {
                    this.AllImages[n] = new Image();
                    this.AllImages[n].src = this.images[2];
                    this.rects[n] = { x: rects[0].x + x, y: rects[0].y + y };
                    context.drawImage(AllImages[n], rects[n].x, rects[n].y);
                }
                n++;
                x += 90;
            }
            x = (i + 1) * 90;
            y -= 30;
        }
    }
    ///////////////////////////////////////////////////////////////

    this.level4 = function (context) {
        var x = 0, y = 0, n = 0;

        for (i = 0; i < 6; i++) {
            for (j = 0; j < 6; j++) {
                if ((!this.ID[n])) {
                    this.AllImages[n] = new Image();
                    this.AllImages[n].src = this.images[3];
                    this.rects[n] = { x: rects[0].x + x, y: rects[0].y + y };
                    context.drawImage(AllImages[n], rects[n].x, rects[n].y);
                }
                n++;
                x += 100;
            }
            x = 0;
            y += 40;
        }
    }
}