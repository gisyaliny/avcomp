"""Export Citation Excel -> src/data/marketDatabase.json.

Preserves existing askPriceHistory / askPriceHistoryFooter per listing id when re-importing."""
import json
from datetime import datetime
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "doc" / "Citation Excel_XLS_XLS+ Market Summary_10.27.22.xlsx"
OUT = ROOT / "src" / "data" / "marketDatabase.json"


def serialize(v):
    if isinstance(v, datetime):
        return v.isoformat()
    if v is None:
        return None
    if isinstance(v, str):
        return v.strip().replace("\xa0", " ").strip()
    return v


def main():
    old_by_id = {}
    if OUT.exists():
        try:
            prev = json.loads(OUT.read_text(encoding="utf-8"))
            for x in prev.get("listings", []):
                old_by_id[x["id"]] = x
        except json.JSONDecodeError:
            pass

    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb["Current Market XLS+ 02.03.26"]
    rows = list(ws.iter_rows(values_only=True))

    records = []
    current_variant = "XLS"
    for row in rows[3:]:
        vals = [serialize(c) for c in row]
        if len(vals) < 18:
            continue
        variant_cell = vals[1]
        if variant_cell in ("XLS", "XLS+"):
            current_variant = variant_cell
        sn = vals[2]
        if sn is None:
            continue
        try:
            sn_int = int(sn)
        except (TypeError, ValueError):
            continue

        ask = vals[6]
        ask_norm = ask
        if isinstance(ask, str) and ask.upper().strip() in ("M/O", "MO", "MAKE OFFER"):
            ask_norm = None

        rec = {
            "id": f"citation-{sn_int}",
            "programModel": "Citation Excel / XLS / XLS+",
            "variant": current_variant,
            "sn": sn_int,
            "yod": vals[3],
            "reg": vals[4],
            "location": vals[5],
            "askTakeRaw": ask,
            "askTakeUsd": ask_norm if isinstance(ask_norm, (int, float)) else None,
            "dom": vals[7],
            "tsn": vals[8],
            "csn": vals[9],
            "apuTsn": vals[10],
            "engineProg": vals[11],
            "partsProg": vals[12],
            "apuProg": vals[13],
            "inspection48mo": vals[14],
            "paintYear": vals[15],
            "interiorYear": vals[16],
            "pax": vals[17],
        }

        prev = old_by_id.get(rec["id"])
        if prev:
            if prev.get("askPriceHistory"):
                rec["askPriceHistory"] = prev["askPriceHistory"]
            if prev.get("askPriceHistoryFooter"):
                rec["askPriceHistoryFooter"] = prev["askPriceHistoryFooter"]

        records.append(rec)

    meta = {
        "sourceSheet": "Current Market XLS+ 02.03.26",
        "sourceFile": XLSX.name,
        "exportedRecordCount": len(records),
        "databaseKind": "unified",
        "note": "Single source for admin sheet + public marketplace; askPriceHistory preserved on re-import when listing id matches.",
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {"meta": meta, "listings": records}
    OUT.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Wrote {len(records)} records to {OUT}")


if __name__ == "__main__":
    main()
