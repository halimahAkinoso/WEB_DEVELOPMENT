from pathlib import Path

workspace = Path("workspace_files")
workspace.mkdir(exist_ok=True)
file_path = workspace / "notes.txt"
file_path