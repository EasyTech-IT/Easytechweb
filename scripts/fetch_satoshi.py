"""Download Satoshi for this website; do not redistribute the files in the repository.

Fontshare license: https://www.fontshare.com/licenses/itf-ffl
Run `python scripts/fetch_satoshi.py` before serving or deploying the site.
"""

import hashlib
import sys
from pathlib import Path
from urllib.error import URLError
from urllib.request import urlopen

FONTS = {
    "400": (
        "https://cdn.fontshare.com/wf/TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2",
        "50dca57f0b77918e0fb7dac998c3f5ef6b0c2a29657da97658a04f98ac532fc5",
    ),
    "500": (
        "https://cdn.fontshare.com/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
        "af02a72246f53ad49c44a591921edbd39ec8258a03d8cc2e0532aa1e497e85b4",
    ),
    "700": (
        "https://cdn.fontshare.com/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
        "353a7fbfb4475f0c31470a7449226006cb64211c71055ca9db860a8acdaa9f68",
    ),
}


def main():
    downloads = {}
    for weight, (url, expected_hash) in FONTS.items():
        with urlopen(url, timeout=30) as response:
            data = response.read()
        if not data.startswith(b"wOF2") or hashlib.sha256(data).hexdigest() != expected_hash:
            raise ValueError(f"Satoshi {weight}: unexpected file or checksum")
        downloads[weight] = data

    directory = Path(__file__).resolve().parent.parent / "assets" / "fonts"
    directory.mkdir(parents=True, exist_ok=True)
    for weight, data in downloads.items():
        (directory / f"satoshi-{weight}.woff2").write_bytes(data)
    print("Satoshi webfonts downloaded and verified.")


if __name__ == "__main__":
    try:
        main()
    except (OSError, URLError, ValueError) as error:
        print(f"Could not prepare Satoshi webfonts: {error}", file=sys.stderr)
        sys.exit(1)
