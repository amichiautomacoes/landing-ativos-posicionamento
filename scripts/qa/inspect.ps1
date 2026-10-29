param(
    [string]$OutputDirectory = 'reports/qa/inspect',
    [string]$Widths = '1440,768,390'
)

$ErrorActionPreference = 'Stop'
$landingRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$landingOutput = [IO.Path]::GetFullPath((Join-Path $landingRoot $OutputDirectory))
if (-not $landingOutput.StartsWith($landingRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'O diretorio de saida precisa estar dentro deste projeto.'
}
& (Join-Path $landingRoot 'scripts/dev/start.ps1') -NoBrowser
. (Join-Path $landingRoot 'scripts/dev/common.ps1')
$landingContext = Get-LandingContext
Push-Location -LiteralPath $landingRoot
try {
    $landingInspectionArguments = @(
        '--import', './tests/browser/support/browser-env.mjs',
        '.agents/skills/design-taste-frontend/scripts/inspect.mjs',
        $landingContext.Url, '--out', $landingOutput, '--widths', $Widths
    )
    & node @landingInspectionArguments
    $landingInspectionExit = $LASTEXITCODE
} finally {
    Pop-Location
}
exit $landingInspectionExit
