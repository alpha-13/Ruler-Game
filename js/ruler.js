function ruler(X, Y, Width, Height, Left, Right, locX, R, speedX, speedY) {
    this.rect = { x: X, y: Y, width: Width, height: Height, left: Left, right: Right };
    this.LocX = locX;
    this.r = R;
    this.speedx = speedX;
    this.speedy = speedY;

    this.Draw_Ruler = function (context, canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "blue";
        context.beginPath();
        context.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }

    this.speed = function () {
        for (n = 1; n < 6; n++) {
            if ((n < 5) && ((this.LocX - this.r <= this.rect.x + n * (this.rect.width / 9)) || (this.LocX - this.r >= this.rect.x + (this.rect.width - n * (this.rect.width / 9))))) {
                this.speedy = 8 - (n - 1) * 1;
                if (((this.speedx < 0) && (this.LocX - this.r <= this.rect.x + this.rect.right)) || ((this.speedx > 0) && (this.LocX - this.r <= this.rect.x + this.rect.left))) {
                    this.speedx = -(6 - (n - 1) * 1);
                }
                else if ((this.speedx > 0) || ((this.speedx < 0) && (this.LocX - this.r >= this.rect.x + this.rect.right))) {
                    this.speedx = 6 - (n - 1) * 1;
                }
                //alert(n+"\t"+n+"\t"+this.speedx+"\t"+this.speedy);
                return { x: this.speedx, y: this.speedy };
                break;

            }
            else if ((n >= 5) && ((this.LocX - this.r <= this.rect.x + n * (this.rect.width / 9)) || (this.LocX - r >= this.rect.x + (this.rect.width - n * (this.rect.width / 9))))) {
                this.speedy = 6;
                if (this.speedx < 0) {
                    this.speedx = -3;
                }
                else {
                    this.speedx = 3;
                }
                //alert(n+"\t"+n+"\t"+this.speedx+"\t"+this.speedy);
                return { x: this.speedx, y: this.speedy };
                break;
            }
        }
    }
}