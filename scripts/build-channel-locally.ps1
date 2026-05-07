# Builds the channel locally.
# You can then add the output path as a channel in the sc4pac CLI or GUI to test the new items.

$repoRoot = Split-Path -Parent $PSScriptRoot
$output = Join-Path $repoRoot "dist\channel\json\"
$source = Join-Path $repoRoot "src\yaml\"

sc4pac channel build --output $output $source
