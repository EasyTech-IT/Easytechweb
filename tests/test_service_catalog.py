import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


class ServiceCatalogTests(unittest.TestCase):
    def test_all_services_have_a_matching_static_price_fallback(self):
        catalog = (ROOT / "assets" / "ServiceCatalog.js").read_text(encoding="utf-8")
        fallback = (ROOT / "preise" / "index.html").read_text(encoding="utf-8")
        names = re.findall(r'name: "(Easy\w+)"', catalog)
        self.assertEqual(len(names), 12)
        self.assertEqual(len(set(names)), 12)
        for name in names:
            with self.subTest(service=name):
                self.assertIn(name, fallback)
        self.assertEqual(catalog.count('price: "Ab 500 € netto pro Projekt"'), 1)
        self.assertIn("595 € inkl. 19 % MwSt.", catalog)
        self.assertIn("Preis auf Anfrage", fallback)

    def test_mirrored_modules_are_identical(self):
        for name in ("HomeServiceLinks.js", "HomePage-B18857aB2.js", "index-CBKwgmPr.js"):
            with self.subTest(file=name):
                self.assertEqual((ROOT / "assets" / name).read_bytes(), (ROOT / "js" / name).read_bytes())


if __name__ == "__main__":
    unittest.main()
