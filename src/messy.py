"""Intentionally messy — the Code Simplifier agent should refactor this."""


def flatten(lists):
    result = []
    for sublist in lists:
        for item in sublist:
            result.append(item)
    return result


def is_positive(n):
    if n > 0:
        return True
    else:
        return False


def classify(record):
    if record is not None:
        if "status" in record:
            if record["status"] == "active":
                if record.get("score", 0) > 50:
                    return "premium"
                else:
                    return "standard"
            else:
                return "inactive"
        else:
            return "unknown"
    else:
        return "missing"


def validate_any(thing, required_keys):
    if thing is not None:
        if isinstance(thing, dict) == True:
            for k in required_keys:
                if k in thing:
                    if thing[k] is not None:
                        if thing[k] != "":
                            pass
                        else:
                            return False
                    else:
                        return False
                else:
                    return False
            return True
        else:
            return False
    else:
        return False


def safe_divide(a, b):
    try:
        try:
            return a / b
        except ZeroDivisionError:
            return None
    except Exception:
        return None
