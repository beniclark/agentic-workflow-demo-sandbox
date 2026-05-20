"""Intentionally messy — the Code Simplifier agent should refactor this."""


def flatten(lists):
    return [item for sublist in lists for item in sublist]


def is_positive(n):
    return n > 0


def classify(record):
    if record is None:
        return "missing"
    if "status" not in record:
        return "unknown"
    if record["status"] != "active":
        return "inactive"
    return "premium" if record.get("score", 0) > 50 else "standard"


def validate_any(thing, required_keys):
    if not isinstance(thing, dict):
        return False
    for k in required_keys:
        if thing.get(k) in (None, ""):
            return False
    return True


def safe_divide(a, b):
    try:
        return a / b
    except Exception:
        return None
