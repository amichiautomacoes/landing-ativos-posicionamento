$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'common.ps1')
$landingContext = Get-LandingContext
Stop-LandingOwnedProcess -Context $landingContext
Write-Output 'O processo registrado da landing foi encerrado.'
