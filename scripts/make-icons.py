"""Generate favicons and the social share (Open Graph) image.

Usage:  python3 scripts/make-icons.py
Needs:  Pillow (pip install pillow), macOS system font "Avenir Next".
Writes: src/images/brand/*  (copied to dist/images/brand by the build)
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src/images/gambarStatis"
OUT = ROOT / "src/images/brand"
OUT.mkdir(parents=True, exist_ok=True)

FONT = "/System/Library/Fonts/Avenir Next.ttc"
BOLD, DEMI, MEDIUM, HEAVY = 0, 2, 5, 8
font = lambda size, face: ImageFont.truetype(FONT, size, index=face)

NAVY = (10, 26, 51)
BLUE = (22, 119, 224)
GREEN = (36, 176, 36)
WHITE = (255, 255, 255)

logo = Image.open(SRC / "logoptmbibg.png").convert("RGBA")  # 332x331, round seal on white square

def circle_masked(img):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).ellipse((0, 0, img.size[0] - 1, img.size[1] - 1), fill=255)
    out = img.copy()
    out.putalpha(mask)
    return out

# ---------------------------------------------------------------- favicons
# Small sizes: the green crown emblem from the centre of the seal (the full
# seal's lettering is unreadable at 16–48 px).
emblem = logo.crop((95, 85, 241, 249))  # green square: x 101–234, y 91–242
ew, eh = emblem.size
side = max(ew, eh)
sq = Image.new("RGBA", (side, side), WHITE + (255,))
sq.paste(emblem, ((side - ew) // 2, (side - eh) // 2), emblem)

def rounded(img, radius_ratio=0.22):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, *img.size), radius=int(img.size[0] * radius_ratio), fill=255)
    out = img.copy()
    out.putalpha(mask)
    return out

for s in (16, 32, 48):
    rounded(sq.resize((s, s), Image.LANCZOS), 0.18).save(OUT / f"favicon-{s}.png")

# favicon.ico with 16/32/48 frames
rounded(sq.resize((48, 48), Image.LANCZOS), 0.18).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# Large sizes: the full seal on white with breathing room.
def full_icon(size, pad_ratio=0.08, bg=WHITE):
    canvas = Image.new("RGBA", (size, size), bg + (255,))
    inner = int(size * (1 - 2 * pad_ratio))
    seal = logo.resize((inner, inner), Image.LANCZOS)
    off = (size - inner) // 2
    canvas.paste(seal, (off, off), seal)
    return canvas

full_icon(180).convert("RGB").save(OUT / "apple-touch-icon.png")  # iOS adds its own rounding
full_icon(192).save(OUT / "icon-192.png")
full_icon(512).save(OUT / "icon-512.png")
full_icon(512, pad_ratio=0.16).save(OUT / "icon-maskable-512.png")  # safe zone for Android masks

# ---------------------------------------------------------------- OG image 1200x630
W, H = 1200, 630
bg = Image.open(SRC / "carousel.jpg").convert("RGB")
scale = max(W / bg.width, H / bg.height)
bg = bg.resize((int(bg.width * scale), int(bg.height * scale)), Image.LANCZOS)
bg = bg.crop(((bg.width - W) // 2, (bg.height - H) // 2, (bg.width - W) // 2 + W, (bg.height - H) // 2 + H))
bg = bg.filter(ImageFilter.GaussianBlur(1.5))

# left-to-right navy gradient overlay
overlay = Image.new("RGBA", (W, H))
od = ImageDraw.Draw(overlay)
for x in range(W):
    t = x / W
    a = int(250 - 120 * t)  # strong on the left where text sits
    r = int(NAVY[0] + (BLUE[0] - NAVY[0]) * t * 0.6)
    g = int(NAVY[1] + (BLUE[1] - NAVY[1]) * t * 0.6)
    b = int(NAVY[2] + (BLUE[2] - NAVY[2]) * t * 0.6)
    od.line([(x, 0), (x, H)], fill=(r, g, b, a))
img = Image.alpha_composite(bg.convert("RGBA"), overlay)

# soft green glow bottom-right
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse((820, 360, 1400, 900), fill=GREEN + (110,))
img = Image.alpha_composite(img, glow.filter(ImageFilter.GaussianBlur(90)))

d = ImageDraw.Draw(img)
X = 72

# logo in a white circle
disc = 132
circle = Image.new("RGBA", (disc, disc), (0, 0, 0, 0))
ImageDraw.Draw(circle).ellipse((0, 0, disc - 1, disc - 1), fill=WHITE + (255,))
seal = circle_masked(logo.resize((disc - 12, disc - 12), Image.LANCZOS))
circle.paste(seal, (6, 6), seal)
img.paste(circle, (X, 64), circle)

# eyebrow pill next to the logo
pill_font = font(22, DEMI)
label = "HARCO GLODOK · JAKARTA BARAT"
tw = d.textlength(label, font=pill_font)
px, py = X + disc + 28, 64 + disc // 2 - 22
pill = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(pill).rounded_rectangle((px, py, px + tw + 36, py + 44), radius=22, fill=(255, 255, 255, 34), outline=(255, 255, 255, 80), width=2)
img = Image.alpha_composite(img, pill)
d = ImageDraw.Draw(img)
d.text((px + 18, py + 9), label, font=pill_font, fill=(220, 232, 245))

# headline
y = 250
d.text((X, y), "PT. Mahkota Baru Isolasi", font=font(70, HEAVY), fill=WHITE)
y += 92
d.text((X, y), "Isolasi, Insulasi &", font=font(46, BOLD), fill=(124, 196, 255))
y += 58
d.text((X, y), "Layanan Profesional", font=font(46, BOLD), fill=(123, 226, 123))

# services line
y += 84
d.text((X, y), "Jasa · Asuransi · Konsultan · Manajemen · Konsuler · Terjemahan",
       font=font(24, MEDIUM), fill=(203, 213, 225))

# bottom bar: domain
d.rectangle((0, H - 10, W, H), fill=GREEN)
d.text((W - X, H - 52), "mahkotabaruisolasi.co.id", font=font(24, DEMI), fill=WHITE, anchor="rs")

img.convert("RGB").save(OUT / "og-image.jpg", quality=88, optimize=True, progressive=True)
print("Wrote", sorted(p.name for p in OUT.iterdir()))
