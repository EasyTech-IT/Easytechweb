import html
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ITPriceFallbackTests(unittest.TestCase):
    def test_static_page_contains_published_business_and_example_prices(self):
        source = (ROOT / "assets" / "ITPrices.js").read_text(encoding="utf-8")
        fallback = html.unescape((ROOT / "preise" / "index.html").read_text(encoding="utf-8"))
        for array in ("business", "examples"):
            block = re.search(rf"const {array} = \[(.*?)\n\];", source, re.S)
            self.assertIsNotNone(block)
            rows = re.findall(r'\["([^"]+)", "([^"]+)"', block.group(1))
            self.assertGreater(len(rows), 0)
            for label, amount in rows:
                with self.subTest(label=label):
                    self.assertIn(f"{label}: {amount}", fallback)

    def test_minimum_charges_and_tax_are_explicit_in_both_versions(self):
        source = (ROOT / "assets" / "ITPrices.js").read_text(encoding="utf-8")
        fallback = html.unescape((ROOT / "preise" / "index.html").read_text(encoding="utf-8"))
        for amount in ("60 €", "37,50 €", "180 €", "75 €", "30 €"):
            with self.subTest(amount=amount):
                self.assertIn(amount, source)
                self.assertIn(amount, fallback)
        self.assertIn("netto zzgl. 19 % MwSt.", source)
        self.assertIn("netto zzgl. 19 % MwSt.", fallback)
        self.assertIn("inklusive MwSt.", source)
        self.assertIn("inklusive MwSt.", fallback)


if __name__ == "__main__":
    unittest.main()
